interface Env {
	MAILGUN_API_KEY: string;
	MAILGUN_DOMAIN: string;
	MAILGUN_FROM: string;
	MAILGUN_TO: string;
	/**
	 * Static assets binding created by Wrangler from `assets.directory`.
	 * This will be present at runtime without needing to define it in `worker-configuration.d.ts`.
	 */
	ASSETS: Fetcher;
}

const ALLOWED_ORIGINS = [
	'https://pet-life.co',
	'https://www.pet-life.co',
	'http://localhost:8787',
	'http://localhost:4173',
];

function getCorsOrigin(request: Request): string {
	const origin = request.headers.get('Origin');
	if (origin && ALLOWED_ORIGINS.includes(origin)) return origin;
	// Fallback – safe default (your production site)
	return 'https://pet-life.co';
}

function buildCorsHeaders(request: Request, extra: Record<string, string> = {}): Headers {
	const origin = getCorsOrigin(request);
	return new Headers({
		'Access-Control-Allow-Origin': origin,
		'Access-Control-Allow-Methods': 'POST, OPTIONS',
		'Access-Control-Allow-Headers': 'Content-Type',
		'Access-Control-Max-Age': '86400',
		...extra,
	});
}

async function handlePreflight(request: Request): Promise<Response> {
	return new Response(null, {
		status: 204,
		headers: buildCorsHeaders(request),
	});
}

async function handleContact(request: Request, env: Env): Promise<Response> {
	if (request.method !== 'POST') {
		return new Response(
			JSON.stringify({ error: 'Method not allowed' }),
			{ status: 405, headers: buildCorsHeaders(request, { 'Content-Type': 'application/json' }) },
		);
	}

	let payload: any;
	try {
		payload = await request.json();
	} catch {
		return new Response(
			JSON.stringify({ error: 'Invalid JSON body' }),
			{ status: 400, headers: buildCorsHeaders(request, { 'Content-Type': 'application/json' }) },
		);
	}

	// Simple spam protection: ignore submissions that fill the hidden honeypot field.
	const honeypot = (payload.company ?? '').toString().trim();
	if (honeypot) {
		console.warn('Contact form honeypot field was filled; treating as spam.');
		return new Response(
			JSON.stringify({ success: true, emailSent: false }),
			{ status: 200, headers: buildCorsHeaders(request, { 'Content-Type': 'application/json' }) },
		);
	}

	const name = (payload.name ?? '').toString().trim();
	const email = (payload.email ?? '').toString().trim();
	const mobile = (payload.mobile ?? '').toString().trim();
	const message = (payload.message ?? '').toString().trim();

	if (!name || !email || !message) {
		return new Response(
			JSON.stringify({ error: 'Missing required fields' }),
			{ status: 400, headers: buildCorsHeaders(request, { 'Content-Type': 'application/json' }) },
		);
	}

	const textLines = [
		'New contact form submission from pet-life.co',
		'',
		`Name   : ${name}`,
		`Email  : ${email}`,
		mobile ? `Mobile : ${mobile}` : '',
		'',
		'Message:',
		message,
	].filter(Boolean);

	const body = new URLSearchParams({
		from: env.MAILGUN_FROM,
		to: env.MAILGUN_TO,
		subject: `Pet Life website contact from ${name}`,
		text: textLines.join('\n'),
		reply_to: email,
	});

	// If Mailgun is not configured yet, accept the message but do not attempt delivery.
	if (!env.MAILGUN_API_KEY || env.MAILGUN_DOMAIN === 'YOUR_DOMAIN_HERE') {
		console.warn('Mailgun not configured; accepting contact message without sending email.');
		return new Response(
			JSON.stringify({ success: true, emailSent: false }),
			{ status: 200, headers: buildCorsHeaders(request, { 'Content-Type': 'application/json' }) },
		);
	}

	try {
		const authHeader = 'Basic ' + btoa(`api:${env.MAILGUN_API_KEY}`);
		const mailgunUrl = `https://api.mailgun.net/v3/${env.MAILGUN_DOMAIN}/messages`;

		const mgResponse = await fetch(mailgunUrl, {
			method: 'POST',
			headers: {
				Authorization: authHeader,
				'Content-Type': 'application/x-www-form-urlencoded',
			},
			body,
		});

		if (!mgResponse.ok) {
			console.error('Mailgun responded with non-2xx status', mgResponse.status);
			// Return 200 so the UI does not surface a hard error, but indicate failure in the body.
			return new Response(
				JSON.stringify({ success: false, error: 'Failed to send message' }),
				{ status: 200, headers: buildCorsHeaders(request, { 'Content-Type': 'application/json' }) },
			);
		}

		return new Response(
			JSON.stringify({ success: true, emailSent: true }),
			{ status: 200, headers: buildCorsHeaders(request, { 'Content-Type': 'application/json' }) },
		);
	} catch (err) {
		console.error('Error while calling Mailgun', err);
		return new Response(
			JSON.stringify({ success: false, error: 'Unexpected error while sending message' }),
			{ status: 200, headers: buildCorsHeaders(request, { 'Content-Type': 'application/json' }) },
		);
	}
}

export default {
	async fetch(request, env): Promise<Response> {
		const url = new URL(request.url);

		if (url.pathname === '/api/contact') {
			if (request.method === 'OPTIONS') {
				return handlePreflight(request);
			}
			return handleContact(request, env as Env);
		}

		// Fallback to static assets for everything else
		return (env as Env).ASSETS.fetch(request);
	},
} satisfies ExportedHandler<Env>;
