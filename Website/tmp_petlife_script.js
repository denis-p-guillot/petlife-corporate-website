
    (function () {
      var LANG_KEY = 'petlife_lang';
      var strings = {
        en: {
          nav_about: 'About Us',
          nav_mission: 'Mission & Vision',
          nav_services: 'Services',
          btn_my_pet_life: 'My Pet Life',
          open_letter_title: 'An Open Letter to Our Pets',
          read_more: 'Read More',
          section_about: 'About Us',
          section_mission_vision: 'Mission & Vision',
          section_services: 'Services',
          contact_title: 'Get in Touch with Us',
          contact_name: 'Name',
          contact_name_placeholder: 'Your Name',
          contact_email: 'Email Address',
          contact_email_placeholder: 'Your Email Address',
          contact_mobile: 'Mobile Number',
          contact_mobile_placeholder: 'Your Mobile Number',
          contact_message: 'Your Message',
          contact_message_placeholder: 'Your Message',
          contact_submit: 'Submit',
          footer_company: 'Company',
          footer_contact: 'Contact Us',
          footer_terms: 'Terms & Conditions Policy'
        },
        id: {
          nav_about: 'Tentang Kami',
          nav_mission: 'Misi & Visi',
          nav_services: 'Layanan',
          btn_my_pet_life: 'My Pet Life',
          open_letter_title: 'Surat Terbuka untuk Hewan Peliharaan Kita',
          read_more: 'Baca Selengkapnya',
          section_about: 'Tentang Kami',
          section_mission_vision: 'Misi & Visi',
          section_services: 'Layanan',
          contact_title: 'Hubungi Kami',
          contact_name: 'Nama',
          contact_name_placeholder: 'Nama Anda',
          contact_email: 'Alamat Email',
          contact_email_placeholder: 'Alamat Email Anda',
          contact_mobile: 'Nomor Ponsel',
          contact_mobile_placeholder: 'Nomor Ponsel Anda',
          contact_message: 'Pesan Anda',
          contact_message_placeholder: 'Pesan Anda',
          contact_submit: 'Kirim',
          footer_company: 'Perusahaan',
          footer_contact: 'Hubungi Kami',
          footer_terms: 'Syarat & Ketentuan'
        }
      };

      function applyLang(lang) {
        if (!strings[lang]) lang = 'en';
        document.documentElement.lang = lang;
        try { localStorage.setItem(LANG_KEY, lang); } catch (e) {}

        document.querySelectorAll('[data-i18n]').forEach(function (el) {
          var key = el.getAttribute('data-i18n');
          if (strings[lang][key]) el.textContent = strings[lang][key];
        });
        document.querySelectorAll('[data-i18n-placeholder]').forEach(function (el) {
          var key = el.getAttribute('data-i18n-placeholder');
          if (strings[lang][key]) el.placeholder = strings[lang][key];
        });

        var letterBody = document.querySelector('.letter-body');
        if (letterBody) {
          if (lang === 'id') {
            letterBody.innerHTML = `
        <p><strong>Hewan kesayangan kami,</strong></p>
        <p>Mungkin kamu belum mengetahuinya, tetapi kamulah alasan kami membangun Pet Life.</p>
        <p>Kamulah jalan pagi yang menyegarkan, sambutan penuh semangat di depan pintu, penghiburan yang tenang di hari-hari yang berat, dan pengingat tanpa henti untuk bermain. Kamu tidak meminta banyak — hanya cinta, perhatian, dan sedikit waktu. Kami percaya kamu pantas mendapatkan lebih dari itu. Kamu pantas mendapatkan yang terbaik.</p>
        <p>Itulah mengapa kami menciptakan cara yang lebih cerdas, lebih aman, dan lebih terhubung untuk merawatmu — dimulai dengan sesuatu yang layak dimiliki setiap hewan peliharaan: identitas yang sesungguhnya.</p>
        <p>Di jantung Pet Life terdapat ID digital yang dibuat khusus untukmu. Sebuah identitas yang membantu menjagamu tetap terlindungi, mempertemukanmu kembali lebih cepat jika kamu tersesat, dan menyimpan riwayat medis dengan aman ke mana pun hidup membawamu. Dari kunjungan ke dokter hewan dan vaksinasi hingga perawatan harian, informasi pentingmu tetap bersamamu — tidak tersebar di berbagai map, klinik, atau hanya dalam ingatan.</p>
        <p>Namun Pet Life bukan hanya tentang data dan alat. Ini tentang koneksi. Ini tentang membantu manusia yang menyayangimu merasa lebih percaya diri, didukung, dan mendapatkan informasi yang tepat. Ini tentang menyatukan para orang tua hewan peliharaan dalam sebuah komunitas tempat mereka bisa berbagi, belajar, dan mengingat untuk melambat serta bermain.</p>
        <p>Kami membangun platform ini dengan kamu dalam pikiran kami — untuk memberikan identitas yang kamu pantas dapatkan, mendukung tahun-tahun yang lebih sehat, petualangan yang lebih aman, dan lebih banyak waktu melakukan hal-hal yang paling kamu cintai.</p>
        <p>Terima kasih telah mempercayakan hati, rumah, dan hidupmu kepada kami.<br/>Kami berjanji akan terus membangun sesuatu yang layak untukmu.</p>
        <p>Dengan cinta,<br/>Pet Life</p>
            `;
          } else {
            letterBody.innerHTML = `
        <p><strong>Dear Pets,</strong></p>
        <p>We built Pet Life because of you—your morning walks, the way you greet us at the door, the comfort you bring, the play, the love, the care, and the attention you give every day. You deserved a smarter, safer, and more connected way to be cared for.</p>
        <p>That’s why we’re giving you something every pet should have: a true identity. A digital ID that protects you, helps reunite you with your family if you’re ever lost, and carries your story—vet visits, vaccinations, wellness—in one place, so nothing is scattered or forgotten.</p>
        <p>We’re also here for the humans who love you. We want them to feel confident, supported, and informed so they can give you the best life possible. And we want to bring pet parents together, because the people who care for you deserve a community that understands.</p>
        <p>Thank you for being part of our lives. This is for you.</p>
            `;
          }
        }

        var about = document.querySelector('.about-text');
        if (about) {
          if (lang === 'id') {
            about.innerHTML = `
      <h2 class="section-title" style="text-align:left;" data-i18n="section_about">Tentang Kami</h2>
      <p>Di Pet Life, kami percaya setiap anabul berhak mendapatkan perawatan terbaik dan setiap pemilik berhak merasa tenang. Karena itu, kami menyediakan ID digital unik, pelacakan riwayat medis lengkap, serta alat perawatan pintar—semuanya dalam satu tempat. Mulai dari kunjungan ke dokter hewan, jadwal vaksinasi, hingga kesehatan harian, Pet Life membantu Anda tetap terorganisir, terinformasi, dan terhubung dengan hal yang paling penting: kesehatan dan kebahagiaan anabul Anda. Terhubung dengan sesama pemilik anabul dan komunitas untuk saling berbagi dukungan dan pengalaman seru bersama.</p>
            `;
          } else {
            about.innerHTML = `
      <h2 class="section-title" style="text-align:left;" data-i18n="section_about">About Us</h2>
      <p>Pet Life is a company built around one idea: giving every pet a healthier, happier life. We combine expertise in pet care with a deep commitment to quality and transparency.</p>
      <p>From our beginnings to today, we have focused on products and services that meet the real needs of pets and their owners. We work with veterinarians, behaviourists, and caregivers to ensure our offerings are safe, effective, and easy to use.</p>
            `;
          }
        }

        var missionCards = document.querySelectorAll('.mission-vision-card');
        if (missionCards.length >= 1) {
          var missionCard = missionCards[0];
          if (lang === 'id') {
            missionCard.innerHTML = `
          <h3>Misi</h3>
          <p>Pet Life membangun masa depan perawatan hewan peliharaan dengan mengintegrasikan identitas hewan, rekam kesehatan, dan manajemen kesejahteraan dalam satu ekosistem digital terpadu. Misi kami adalah memberdayakan para pemilik hewan, meningkatkan kesinambungan perawatan, serta menciptakan komunitas yang saling terhubung untuk mendukung kesehatan hewan peliharaan yang lebih baik secara luas.</p>
            `;
          } else {
            missionCard.innerHTML = `
          <h3>Mission</h3>
          <p>Pet Life is building the future of pet care by centralizing pet identification, health records, and wellness management into a single digital ecosystem. Our mission is to empower pet parents, improve continuity of care, and create a connected community that supports healthier outcomes for pets at scale.</p>
            `;
          }
        }
        if (missionCards.length >= 2) {
          var visionCard = missionCards[1];
          if (lang === 'id') {
            visionCard.innerHTML = `
          <h3>Visi</h3>
          <p>Kami membayangkan masa depan di mana perawatan hewan peliharaan terasa sederhana, terhubung, dan menyenangkan — di mana teknologi bekerja secara mulus di balik layar sehingga hewan peliharaan dapat hidup lebih sehat dan para pemiliknya dapat fokus pada kasih sayang, kebersamaan, dan momen bermain.</p>
            `;
          } else {
            visionCard.innerHTML = `
          <h3>Vision</h3>
          <p>We imagine a future where pet care feels simple, connected, and joyful — where technology quietly works in the background so pets can live healthier lives and humans can focus on love, play, and companionship.</p>
            `;
          }
        }

        var servicesSlides = document.querySelectorAll('.services-slide');
        if (servicesSlides.length >= 1) {
          var firstSlide = servicesSlides[0];
          var slideTitle = firstSlide.querySelector('.services-slide-title');
          var serviceCards = firstSlide.querySelectorAll('.service-slot-card');
          if (slideTitle && serviceCards.length >= 3) {
            if (lang === 'id') {
              slideTitle.textContent = 'Identitas Digital & Managemen Perawatan';
              serviceCards[0].innerHTML = '<span class="service-pill">Pet ID</span><p>Identitas digital yang aman dan resmi untuk hewan peliharaan Anda.</p>';
              serviceCards[1].innerHTML = '<span class="service-pill">Rekam Medis &amp; Vaksinasi</span><p>Simpan rekam kesehatan dan vaksinasi dengan aman untuk diakses kapan saja dan di mana saja.</p>';
              serviceCards[2].innerHTML = `<span class="service-pill">Berbagi Keluarga</span><p>Undang anggota keluarga atau co-parent untuk tetap terhubung dengan kesehatan, rutinitas, dan pembaruan penting hewan peliharaan Anda.</p>`;
            } else {
              slideTitle.textContent = 'Digital Identity & Care Management';
              serviceCards[0].innerHTML = '<span class="service-pill">Pet ID</span><p>A secure digital identity and official identification for your pets.</p>';
              serviceCards[1].innerHTML = '<span class="service-pill">Medical &amp; Vaccination Record</span><p>Securely store health and vaccination records for viewing anytime, anywhere.</p>';
              serviceCards[2].innerHTML = `<span class="service-pill">Ownership Administration</span><p>Invite family members or co-parent to stay connected to your pet's health, routines, and important updates.</p>`;
            }
          }
        }
        if (servicesSlides.length >= 2) {
          var secondSlide = servicesSlides[1];
          var slide2Title = secondSlide.querySelector('.services-slide-title');
          var slide2Badge = secondSlide.querySelector('.services-slide-badge');
          var slide2Cards = secondSlide.querySelectorAll('.service-slot-card');
          if (slide2Title && slide2Cards.length >= 2) {
            if (lang === 'id') {
              slide2Title.textContent = 'Keamanan, Kesehatan & Dukungan Cerdas';
              if (slide2Badge) slide2Badge.textContent = 'Segera Hadir';
              slide2Cards[0].innerHTML = `<span class="service-pill">Pelacakan Hewan (GPS)</span><p>Pelacakan lokasi secara real-time untuk menjaga hewan peliharaan Anda tetap aman dan mudah ditemukan.</p>`;
              slide2Cards[1].innerHTML = `<span class="service-pill">Chatbot AI Pet</span><p>Asisten cerdas untuk panduan dan dukungan dalam perawatan hewan peliharaan.</p>`;
            } else {
              slide2Title.textContent = 'Safety, Health & Smart Support';
              if (slide2Badge) slide2Badge.textContent = 'Coming Soon';
              slide2Cards[0].innerHTML = `<span class="service-pill">Pet Tracking (GPS)</span><p>Real-time tracking to keep your pets safe and easy to find.</p>`;
              slide2Cards[1].innerHTML = `<span class="service-pill">Pet AI Chatbot</span><p>An intelligent assistant for pet care guidance and support.</p>`;
            }
          }
        }
        if (servicesSlides.length >= 3) {
          var thirdSlide = servicesSlides[2];
          var slide3Title = thirdSlide.querySelector('.services-slide-title');
          var slide3Cards = thirdSlide.querySelectorAll('.service-slot-card');
          if (slide3Title && slide3Cards.length >= 1) {
            if (lang === 'id') {
              slide3Title.textContent = 'Marketplace & Kebutuhan Harian';
              slide3Cards[0].innerHTML = `<span class="service-pill">Pet Essentials</span><p>Marketplace pilihan Anda untuk kebutuhan perawatan hewan sehari-hari. Jelajahi toko tepercaya untuk makanan hewan, mainan, aksesori, pakaian, dan kebutuhan harian lainnya.</p>`;
            } else {
              slide3Title.textContent = 'Marketplace';
              slide3Cards[0].innerHTML = `<span class="service-pill">Pet Essentials</span><p>Your guided marketplace for everyday pet care. Explore trusted stores for pet food, toys, accessories, clothing and daily essentials.</p>`;
            }
          }
        }
        if (servicesSlides.length >= 5) {
          var fifthSlide = servicesSlides[4];
          var slide5Title = fifthSlide.querySelector('.services-slide-title');
          var slide5Cards = fifthSlide.querySelectorAll('.service-slot-card');
          if (slide5Title && slide5Cards.length >= 4) {
            if (lang === 'id') {
              slide5Title.textContent = 'Perawatan & Dukungan Profesional';
              slide5Cards[0].innerHTML = '<span class="service-pill">Direktori Klinik / Dokter Hewan</span><p>Cari dan temukan klinik serta layanan dokter hewan, sehingga lebih mudah mengakses perawatan yang tepercaya.</p>';
              slide5Cards[1].innerHTML = '<span class="service-pill">Grooming</span><p>Panduan layanan grooming profesional untuk menjaga hewan peliharaan Anda tetap bersih dan sehat.</p>';
              slide5Cards[2].innerHTML = '<span class="service-pill">Penitipan & Hotel Hewan</span><p>Panduan tempat menginap yang nyaman untuk hewan peliharaan Anda saat Anda bepergian.</p>';
              slide5Cards[3].innerHTML = '<span class="service-pill">Jasa Jalan Hewan</span><p>Panduan layanan jalan hewan yang tepercaya untuk olahraga dan perawatan harian.</p>';
            } else {
              slide5Title.textContent = 'Care & Professional Support';
              slide5Cards[0].innerHTML = '<span class="service-pill">Pet Clinic / Veterinary Directory</span><p>Search and discover pet clinics and veterinary services, making it easier to access reliable care.</p>';
              slide5Cards[1].innerHTML = '<span class="service-pill">Grooming</span><p>A guide on professional grooming services to keep your pets clean and healthy.</p>';
              slide5Cards[2].innerHTML = '<span class="service-pill">Boarding & Hotel</span><p>A guide on comfortable stays for your pets while you are away.</p>';
              slide5Cards[3].innerHTML = '<span class="service-pill">Pet Walking</span><p>A guide on reliable walking services for daily exercises and care.</p>';
            }
          }
        }

        var toggleEl = document.getElementById('langToggle');
        if (toggleEl) toggleEl.setAttribute('data-lang', lang);
      }


      var langToggle = document.getElementById('langToggle');
      if (langToggle) {
        langToggle.addEventListener('click', function () {
          var current = document.documentElement.lang === 'id' ? 'id' : 'en';
          var next = current === 'en' ? 'id' : 'en';
          applyLang(next);
        });
      }

      var saved = null;
      try { saved = localStorage.getItem(LANG_KEY); } catch (e) {}
      applyLang(saved === 'id' ? 'id' : 'en');

      var header = document.getElementById('header');
      var menuToggle = document.getElementById('menuToggle');
      if (menuToggle) {
        menuToggle.addEventListener('click', function () {
          header.classList.toggle('open');
          menuToggle.classList.toggle('open');
        });
      }
      document.querySelectorAll('.nav a').forEach(function (a) {
        a.addEventListener('click', function () {
          header.classList.remove('open');
          if (menuToggle) menuToggle.classList.remove('open');
        });
      });

      var track = document.getElementById('servicesTrack');
      var nav = document.getElementById('servicesNav');
      var prevBtn = document.getElementById('servicesPrev');
      var nextBtn = document.getElementById('servicesNext');
      if (track && nav) {
        var slides = track.querySelectorAll('.services-slide');
        var n = slides.length;
        function goToSlide(idx) {
          idx = Math.max(0, Math.min(idx, n - 1));
          var el = slides[idx];
          if (el) el.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'start' });
          nav.querySelectorAll('button').forEach(function (b, i) { b.classList.toggle('active', i === idx); });
        }
        function slideWidth() { return track.offsetWidth; }
        for (var i = 0; i < n; i++) {
          var btn = document.createElement('button');
          btn.type = 'button';
          btn.setAttribute('aria-label', 'Go to slide ' + (i + 1));
          if (i === 0) btn.classList.add('active');
          btn.addEventListener('click', function (idx) { goToSlide(idx); }.bind(null, i));
          nav.appendChild(btn);
        }
        track.addEventListener('scroll', function () {
          var slideW = slideWidth();
          if (slideW <= 0) return;
          var idx = Math.round(track.scrollLeft / slideW);
          idx = Math.max(0, Math.min(idx, n - 1));
          nav.querySelectorAll('button').forEach(function (b, i) {
            b.classList.toggle('active', i === idx);
          });
        });
        if (prevBtn) prevBtn.addEventListener('click', function () {
          var slideW = slideWidth();
          var idx = Math.floor(track.scrollLeft / slideW);
          goToSlide(idx - 1);
        });
        if (nextBtn) nextBtn.addEventListener('click', function () {
          var slideW = slideWidth();
          var idx = Math.floor(track.scrollLeft / slideW);
          goToSlide(idx + 1);
        });
      }
    })();
  