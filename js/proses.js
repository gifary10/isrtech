// ==================== PROSES MODULE ====================

/**
 * Render process section content
 */
function renderProcessContent() {
  const processSection = document.getElementById('process');
  if (!processSection) return;

  // Set background color for process section
  processSection.style.backgroundColor = '#061120';

  // Find the content container
  const contentContainer = processSection.querySelector('.max-w-7xl.mx-auto');
  if (!contentContainer) return;

  // Clear existing content and rebuild
  contentContainer.innerHTML = `
    <div class="text-center mb-16 reveal">
      <div class="inline-flex items-center gap-2 bg-secondary/30 border border-secondary/40 rounded-full px-4 py-2 text-blue-300 text-sm font-semibold mb-6">
        <i class="fa-solid fa-route"></i>
        Cara Kerja
      </div>
      <h2 class="text-3xl md:text-4xl lg:text-5xl font-extrabold text-light mb-4">Alur Pembuatan <span class="text-accent">Aplikasi</span></h2>
      <p class="text-gray-400 text-lg max-w-xl mx-auto">8 langkah mudah dari konsultasi hingga aplikasi Anda siap digunakan</p>
    </div>

    <div class="flex justify-center reveal">
      <img src="assets/proses.png" alt="Proses ISR Tech - 8 Langkah Mudah" class="max-w-full h-auto" style="max-height: 400px;" loading="lazy">
    </div>

    <div class="text-center mt-12 reveal">
      <div class="inline-flex items-center gap-6 card-solid rounded-2xl px-8 py-5 flex-wrap justify-center">
        <div class="text-center">
          <div class="text-accent font-black text-xl">2 sampai 8</div>
          <div class="text-gray-400 text-xs">Minggu delivery</div>
        </div>
        <div class="w-px h-10 bg-white/10 hidden sm:block"></div>
        <div class="text-center">
          <div class="text-accent font-black text-xl">100%</div>
          <div class="text-gray-400 text-xs">Transparan</div>
        </div>
        <div class="w-px h-10 bg-white/10 hidden sm:block"></div>
        <div class="text-center">
          <div class="text-accent font-black text-xl">∞</div>
          <div class="text-gray-400 text-xs">Revisi terbatas</div>
        </div>
        <div class="w-px h-10 bg-white/10 hidden sm:block"></div>
        <div class="text-center">
          <div class="text-accent font-black text-xl">30 hr</div>
          <div class="text-gray-400 text-xs">Free support</div>
        </div>
      </div>
    </div>
  `;

  // Re-attach reveal observers for newly added elements
  if (window.revealObserver) {
    document.querySelectorAll('#process .reveal').forEach(el => {
      window.revealObserver.observe(el);
    });
  }
}

/**
 * Initialize process section animations and interactions
 */
export function initProses() {
  renderProcessContent();

  // Add intersection observer for process image animation
  setTimeout(() => {
    const processImage = document.querySelector('#process img');
    if (processImage) {
      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            processImage.style.transform = 'scale(1)';
            processImage.style.opacity = '1';
            processImage.style.transition = 'transform 0.6s ease, opacity 0.6s ease';
          }
        });
      }, { threshold: 0.3 });

      processImage.style.transform = 'scale(0.95)';
      processImage.style.opacity = '0.8';
      observer.observe(processImage);
    }
  }, 100);

  // Animate stats badges on hover
  // Using event delegation for dynamically added elements
  document.querySelector('#process').addEventListener('mouseenter', (e) => {
    const stat = e.target.closest('.card-solid .text-center');
    if (stat) {
      const numberEl = stat.querySelector('.text-accent');
      if (numberEl) {
        numberEl.style.transform = 'scale(1.2)';
        numberEl.style.transition = 'transform 0.3s ease';
      }
    }
  }, true);

  document.querySelector('#process').addEventListener('mouseleave', (e) => {
    const stat = e.target.closest('.card-solid .text-center');
    if (stat) {
      const numberEl = stat.querySelector('.text-accent');
      if (numberEl) {
        numberEl.style.transform = 'scale(1)';
      }
    }
  }, true);

  // Add pulse animation to stats container
  const statsContainer = document.querySelector('#process .card-solid');
  if (statsContainer) {
    statsContainer.addEventListener('mouseenter', () => {
      statsContainer.style.boxShadow = '0 0 30px rgba(255, 87, 34, 0.15)';
      statsContainer.style.transition = 'box-shadow 0.3s ease';
    });

    statsContainer.addEventListener('mouseleave', () => {
      statsContainer.style.boxShadow = '';
    });
  }
}