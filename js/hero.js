// ==================== HERO MODULE ====================

/**
 * Render hero section HTML content
 */
function renderHeroSection() {
  const heroSection = document.getElementById('hero');
  if (!heroSection) return;

  heroSection.innerHTML = `
    <!-- Decorative blobs -->
    <div class="pointer-events-none absolute inset-0 overflow-hidden">
      <div class="absolute -top-32 -right-32 w-[520px] h-[520px] rounded-full" style="background:radial-gradient(circle,rgba(255,87,34,0.12) 0%,transparent 70%);filter:blur(70px)"></div>
      <div class="absolute bottom-0 -left-32 w-[420px] h-[420px] rounded-full" style="background:radial-gradient(circle,rgba(45,64,89,0.5) 0%,transparent 70%);filter:blur(60px)"></div>
    </div>

    <div class="max-w-7xl mx-auto w-full grid lg:grid-cols-2 gap-12 items-center relative z-10">
      <!-- Left Content -->
      <div class="space-y-8 reveal">
        <div class="inline-flex items-center gap-2 bg-accent/10 border border-accent/30 rounded-full px-4 py-2 text-accent text-sm font-semibold">
          <span class="w-2 h-2 rounded-full bg-accent animate-pulse"></span>
          Tersedia untuk project baru — 2026
        </div>

        <h1 class="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight tracking-tight">
          <span class="text-light">Aplikasi Digital</span><br/>
          <span class="shimmer-text">Khusus Bisnis</span><br/>
          <span class="text-light">Anda.</span>
        </h1>

        <p class="text-gray-400 text-lg md:text-xl leading-relaxed max-w-lg">
          ISR Tech membangun <strong class="text-light">aplikasi CRUD, dashboard monitoring, dan sistem digitalisasi</strong> berbasis Google Sheets & LocalStorage — tanpa server mahal, transparan, dan langsung pakai.
        </p>

        <!-- Stats row -->
        <div class="flex gap-6 flex-wrap">
          <div class="text-center">
            <div class="text-3xl font-black text-accent counter-num" data-target="50">0</div>
            <div class="text-xs text-gray-500 mt-1 font-medium">Project Selesai</div>
          </div>
          <div class="w-px bg-white/10 self-stretch"></div>
          <div class="text-center">
            <div class="text-3xl font-black text-accent counter-num" data-target="30">0</div>
            <div class="text-xs text-gray-500 mt-1 font-medium">Klien Puas</div>
          </div>
          <div class="w-px bg-white/10 self-stretch"></div>
          <div class="text-center">
            <div class="text-3xl font-black text-accent counter-num" data-target="3">0</div>
            <div class="text-xs text-gray-500 mt-1 font-medium">Tahun Pengalaman</div>
          </div>
        </div>

        <!-- CTA Buttons -->
        <div class="flex flex-col sm:flex-row gap-4">
          <a href="https://wa.me/6283829058640?text=Halo%20ISR%20Tech,%20saya%20ingin%20konsultasi%20gratis" target="_blank"
             class="btn-accent px-7 py-4 rounded-2xl font-bold text-base flex items-center justify-center gap-3 relative z-10">
            <i class="fa-brands fa-whatsapp text-xl"></i>
            Konsultasi Gratis
          </a>
          <a href="#order" class="btn-outline px-7 py-4 rounded-2xl font-bold text-base flex items-center justify-center gap-3">
            <i class="fa-solid fa-arrow-right"></i>
            Mulai Project
          </a>
        </div>

        <p class="text-gray-500 text-sm flex items-center gap-2">
          <i class="fa-solid fa-shield-halved text-accent/60"></i>
          Free konsultasi · Estimasi transparan · Garansi revisi
        </p>
      </div>

      <!-- Right — Video -->
      <div class="relative float-anim hidden lg:block reveal-right">
        <div class="dashboard-mockup pulse-glow" style="overflow: hidden;">
          <div class="mockup-bar">
            <span class="mockup-dot" style="background:#FF5F57"></span>
            <span class="mockup-dot" style="background:#FFBD2E"></span>
            <span class="mockup-dot" style="background:#28CA41"></span>
            <span class="flex-1 mx-4 bg-gray-800 rounded h-5 text-gray-500 text-xs flex items-center px-3">dashboard.isrtech.id</span>
          </div>
          <div class="p-0" style="background:#0a0e15;">
            <video 
              src="assets/kanan.webm" 
              autoplay 
              loop 
              muted 
              playsinline
              style="width: 100%; height: auto; display: block;"
              class="rounded-b-2xl"
            >
              Your browser does not support the video tag.
            </video>
          </div>
        </div>

        <!-- Floating badges -->
        <div class="absolute -top-4 -left-6 card-glass rounded-2xl px-4 py-3 flex items-center gap-3 shadow-xl float-delay">
          <div class="w-9 h-9 rounded-full bg-green-500/20 flex items-center justify-center text-green-400">
            <i class="fa-solid fa-check text-sm"></i>
          </div>
          <div>
            <div class="text-light text-xs font-bold">Project Launched!</div>
            <div class="text-gray-400 text-[11px]">2 jam yang lalu</div>
          </div>
        </div>
        <div class="absolute -bottom-4 -right-4 card-glass rounded-2xl px-4 py-3 flex items-center gap-3 shadow-xl float-anim">
          <div class="w-9 h-9 rounded-full bg-accent/20 flex items-center justify-center text-accent">
            <i class="fa-solid fa-chart-line text-sm"></i>
          </div>
          <div>
            <div class="text-light text-xs font-bold">+68% Efisiensi</div>
            <div class="text-gray-400 text-[11px]">Setelah digitalisasi</div>
          </div>
        </div>
      </div>
    </div>
  `;

  // Re-attach reveal observers for newly added elements
  if (window.revealObserver) {
    document.querySelectorAll('#hero .reveal, #hero .reveal-left, #hero .reveal-right').forEach(el => {
      window.revealObserver.observe(el);
    });
  }
}

/**
 * Initialize hero section interactive elements
 */
export function initHero() {
  // Render section content first
  renderHeroSection();

  // Wait for DOM update, then initialize interactions
  setTimeout(() => {
    // Counter animation for stats
    const counterElements = document.querySelectorAll('#hero .counter-num');
    
    if (counterElements.length > 0) {
      const counterObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            animateCounter(entry.target);
            counterObserver.unobserve(entry.target);
          }
        });
      }, { threshold: 0.5 });

      counterElements.forEach(el => counterObserver.observe(el));
    }

    function animateCounter(el) {
      const target = parseInt(el.dataset.target);
      let current = 0;
      const step = target / 55;
      const timer = setInterval(() => {
        current = Math.min(current + step, target);
        el.textContent = Math.floor(current) + (target > 10 ? '+' : '');
        if (current >= target) clearInterval(timer);
      }, 18);
    }

    // Add hover effects for CTA buttons
    const ctaButtons = document.querySelectorAll('#hero .btn-accent, #hero .btn-outline');
    ctaButtons.forEach(btn => {
      btn.addEventListener('mouseenter', () => {
        btn.style.transform = 'translateY(-3px)';
        btn.style.transition = 'transform 0.3s ease, box-shadow 0.3s ease';
      });
      
      btn.addEventListener('mouseleave', () => {
        btn.style.transform = 'translateY(0)';
      });
    });

    // Add interactive hover for dashboard mockup cards
    document.querySelectorAll('#hero .card-solid').forEach(card => {
      card.addEventListener('mouseenter', function() {
        this.style.borderColor = 'rgba(255, 87, 34, 0.4)';
        this.style.transform = 'translateY(-2px)';
        this.style.transition = 'all 0.3s ease';
        this.style.boxShadow = '0 8px 25px rgba(0, 0, 0, 0.3)';
      });
      
      card.addEventListener('mouseleave', function() {
        this.style.borderColor = '';
        this.style.transform = '';
        this.style.boxShadow = '';
      });
    });

    // Animate floating badges on scroll
    const floatingBadges = document.querySelectorAll('#hero .float-anim, #hero .float-delay');
    
    const badgeObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.style.animationPlayState = 'running';
        } else {
          entry.target.style.animationPlayState = 'paused';
        }
      });
    }, { threshold: 0.1 });

    floatingBadges.forEach(badge => badgeObserver.observe(badge));

    // Add parallax effect for decorative blobs
    const heroSection = document.getElementById('hero');
    if (heroSection) {
      heroSection.addEventListener('mousemove', (e) => {
        const blobs = heroSection.querySelectorAll('.pointer-events-none > div');
        const rect = heroSection.getBoundingClientRect();
        const x = (e.clientX - rect.left) / rect.width;
        const y = (e.clientY - rect.top) / rect.height;
        
        if (blobs.length >= 2) {
          blobs[0].style.transform = `translate(${(x - 0.5) * 30}px, ${(y - 0.5) * 30}px)`;
          blobs[1].style.transform = `translate(${(0.5 - x) * 20}px, ${(0.5 - y) * 20}px)`;
        }
      });
    }

    console.log('🎯 Hero section initialized');
  }, 0);
}