// ==================== LAYANAN CAROUSEL MODULE ====================

let currentSlide = 0;
const totalSlides = 4;
let autoPlayInterval = null;

const carouselData = [
  {
    badge: 'Digital Catalog App',
    icon: 'fa-book-open',
    title: 'Aplikasi <span class="text-accent">Katalog Digital</span>',
    description: 'Solusi katalog & menu digital interaktif untuk menampilkan produk atau layanan secara modern. Mudah dikelola, dapat diperbarui realtime, dan terintegrasi dengan Google Sheets sebagai database.',
    tags: ['Catalog System', 'Realtime Update', 'Multi User'],
    image: 'assets/gambar1.jpeg',
    alt: 'Aplikasi Katalog Digital',
    waMessage: 'Halo%20ISR%20Tech,%20saya%20ingin%20konsultasi%20aplikasi%20katalog%20digital'
  },
  {
    badge: 'Clinic Dashboard',
    icon: 'fa-notes-medical',
    title: 'Dashboard <span class="text-accent">In-House Clinic</span>',
    description: 'Dashboard monitoring klinik internal untuk memantau kunjungan pasien, rekam aktivitas layanan, stok obat, serta KPI kesehatan karyawan secara real-time. Terintegrasi dengan Google Sheets dan dapat diakses dari HP maupun PC.',
    tags: ['Patient Tracking', 'Medical KPI', 'Realtime Monitoring'],
    image: 'assets/gambar2.jpeg',
    alt: 'Dashboard In-House Clinic',
    waMessage: 'Halo%20ISR%20Tech,%20saya%20ingin%20konsultasi%20dashboard%20in-house%20clinic'
  },
  {
    badge: 'CRUD System',
    icon: 'fa-database',
    title: 'Aplikasi <span class="text-accent">CRUD System</span>',
    description: 'Aplikasi manajemen data terintegrasi untuk mencatat, mengelola, dan memproses informasi secara efisien — mulai dari tambah, lihat, ubah hingga hapus data. Terhubung dengan Google Sheets sebagai database, mendukung multi-user dan update realtime.',
    tags: ['Data Management', 'Google Sheets', 'Realtime System'],
    image: 'assets/gambar3.jpeg',
    alt: 'Aplikasi CRUD System',
    waMessage: 'Halo%20ISR%20Tech,%20saya%20ingin%20konsultasi%20aplikasi%20CRUD%20system'
  },
  {
    badge: 'Wedding Invitation App',
    icon: 'fa-heart',
    title: 'Aplikasi <span class="text-accent">Wedding Invitation</span>',
    description: 'Undangan pernikahan digital yang elegan dan interaktif. Dilengkapi dengan galeri foto, cerita pasangan, RSVP online, peta lokasi, serta musik latar untuk memberikan pengalaman undangan yang berkesan.',
    tags: ['Digital Invitation', 'RSVP Online', 'Custom Design'],
    image: 'assets/gambar4.jpeg',
    alt: 'Aplikasi Wedding Invitation',
    waMessage: 'Halo%20ISR%20Tech,%20saya%20ingin%20konsultasi%20aplikasi%20wedding%20invitation'
  }
];

/**
 * Render carousel slides and thumbnails
 */
function renderCarousel() {
  const track = document.getElementById('carousel-track');
  const dotsContainer = document.querySelector('.carousel-container .absolute.bottom-4');
  const thumbsContainer = document.querySelector('.carousel-container + div');
  
  if (!track) return;

  // Clear existing content
  track.innerHTML = '';
  
  // Render slides
  carouselData.forEach((slide, index) => {
    const slideDiv = document.createElement('div');
    slideDiv.className = 'carousel-slide w-full flex-shrink-0';
    slideDiv.innerHTML = `
      <div class="flex flex-col md:flex-row items-center">
        <div class="p-8 md:p-12 flex-1">
          <div class="inline-flex items-center gap-2 px-3 py-1 bg-accent/15 border border-accent/25 rounded-full text-accent text-xs font-semibold mb-4">
            <i class="fa-solid ${slide.icon} text-[10px]"></i> ${slide.badge}
          </div>
          <h3 class="text-light font-bold text-2xl md:text-3xl mb-4">${slide.title}</h3>
          <p class="text-gray-400 text-sm leading-relaxed mb-6">${slide.description}</p>
          <div class="flex flex-wrap gap-2 mb-6">
            ${slide.tags.map(tag => `
              <span class="text-xs bg-secondary/30 text-blue-300 px-3 py-1 rounded-full">${tag}</span>
            `).join('')}
          </div>
          <a href="https://wa.me/6283829058640?text=${slide.waMessage}" target="_blank"
             class="btn-accent px-5 py-3 rounded-xl text-sm font-bold relative z-10 inline-flex items-center gap-2">
            <i class="fa-brands fa-whatsapp"></i> Konsultasi
          </a>
        </div>
        <div class="p-4 md:p-8 flex-1 flex justify-center">
          <img src="${slide.image}" alt="${slide.alt}" class="max-w-full h-auto rounded-2xl shadow-2xl" style="max-height: 350px; object-fit: contain;" loading="lazy">
        </div>
      </div>
    `;
    track.appendChild(slideDiv);
  });

  // Render dots
  if (dotsContainer) {
    dotsContainer.innerHTML = '';
    carouselData.forEach((_, index) => {
      const dot = document.createElement('button');
      dot.className = `carousel-dot w-2.5 h-2.5 rounded-full transition-all duration-300`;
      dot.style.backgroundColor = index === 0 ? '#FF5722' : 'rgba(255,255,255,0.3)';
      dot.style.width = index === 0 ? '20px' : '10px';
      dot.setAttribute('data-index', index);
      dot.setAttribute('aria-label', `Slide ${index + 1}`);
      dotsContainer.appendChild(dot);
    });
  }

  // Render thumbnails
  if (thumbsContainer) {
    thumbsContainer.innerHTML = '';
    carouselData.forEach((slide, index) => {
      const thumb = document.createElement('div');
      thumb.className = `w-12 h-8 rounded-lg overflow-hidden cursor-pointer opacity-50 hover:opacity-100 transition-opacity border-2 ${index === 0 ? 'border-accent thumb-active opacity-100' : 'border-transparent'}`;
      thumb.setAttribute('data-index', index);
      thumb.style.background = '#1a2230';
      thumb.innerHTML = `<img src="${slide.image}" alt="Thumb ${index + 1}" class="w-full h-full object-cover" loading="lazy">`;
      thumbsContainer.appendChild(thumb);
    });
  }

  // Update navigation buttons
  updateNavButtons();
}

/**
 * Update carousel position and UI state
 */
function updateCarousel() {
  const track = document.getElementById('carousel-track');
  if (!track) return;

  track.style.transform = `translateX(-${currentSlide * 100}%)`;

  // Update dots
  document.querySelectorAll('.carousel-dot').forEach((dot, i) => {
    dot.style.backgroundColor = i === currentSlide ? '#FF5722' : 'rgba(255,255,255,0.3)';
    dot.style.width = i === currentSlide ? '20px' : '10px';
  });

  // Update thumbnails
  document.querySelectorAll('[data-index].w-12').forEach((thumb, i) => {
    if (i === currentSlide) {
      thumb.classList.add('opacity-100', 'border-2', 'border-accent', 'thumb-active');
      thumb.classList.remove('opacity-50', 'border-transparent');
    } else {
      thumb.classList.add('opacity-50', 'border-transparent');
      thumb.classList.remove('opacity-100', 'border-2', 'border-accent', 'thumb-active');
    }
  });

  updateNavButtons();
}

/**
 * Update navigation button states
 */
function updateNavButtons() {
  const prevBtn = document.getElementById('prev-btn');
  const nextBtn = document.getElementById('next-btn');
  if (prevBtn) prevBtn.style.opacity = currentSlide === 0 ? '0.3' : '1';
  if (nextBtn) nextBtn.style.opacity = currentSlide === totalSlides - 1 ? '0.3' : '1';
}

/**
 * Navigate to next slide
 */
function nextSlide() {
  if (currentSlide < totalSlides - 1) {
    currentSlide++;
    updateCarousel();
    resetAutoPlay();
  }
}

/**
 * Navigate to previous slide
 */
function prevSlide() {
  if (currentSlide > 0) {
    currentSlide--;
    updateCarousel();
    resetAutoPlay();
  }
}

/**
 * Navigate to specific slide
 */
function goToSlide(index) {
  currentSlide = index;
  updateCarousel();
  resetAutoPlay();
}

/**
 * Reset auto-play interval
 */
function resetAutoPlay() {
  clearInterval(autoPlayInterval);
  autoPlayInterval = setInterval(() => {
    if (currentSlide < totalSlides - 1) {
      currentSlide++;
    } else {
      currentSlide = 0;
    }
    updateCarousel();
  }, 5000);
}

/**
 * Initialize carousel
 */
export function initCarousel() {
  renderCarousel();

  // Expose navigation functions to window
  window.nextSlide = nextSlide;
  window.prevSlide = prevSlide;
  window.goToSlide = goToSlide;

  // Button handlers
  const prevBtn = document.getElementById('prev-btn');
  const nextBtn = document.getElementById('next-btn');
  if (prevBtn) prevBtn.addEventListener('click', prevSlide);
  if (nextBtn) nextBtn.addEventListener('click', nextSlide);

  // Dot click handlers
  document.querySelectorAll('.carousel-dot').forEach((dot, i) => {
    dot.addEventListener('click', () => goToSlide(i));
  });

  // Thumbnail click handlers
  document.querySelectorAll('[data-index]').forEach(thumb => {
    thumb.addEventListener('click', () => {
      const index = parseInt(thumb.dataset.index);
      goToSlide(index);
    });
  });

  // Keyboard navigation
  document.addEventListener('keydown', (e) => {
    const carouselSection = document.getElementById('carousel');
    if (!carouselSection) return;
    
    const rect = carouselSection.getBoundingClientRect();
    const isVisible = rect.top < window.innerHeight && rect.bottom > 0;
    
    if (isVisible) {
      if (e.key === 'ArrowRight') nextSlide();
      if (e.key === 'ArrowLeft') prevSlide();
    }
  });

  // Touch/swipe support
  let touchStartX = 0;
  let touchEndX = 0;

  const carouselContainer = document.querySelector('.carousel-container');
  if (carouselContainer) {
    carouselContainer.addEventListener('touchstart', (e) => {
      touchStartX = e.changedTouches[0].screenX;
    }, { passive: true });

    carouselContainer.addEventListener('touchend', (e) => {
      touchEndX = e.changedTouches[0].screenX;
      const swipeThreshold = 50;
      if (touchEndX < touchStartX - swipeThreshold) nextSlide();
      if (touchEndX > touchStartX + swipeThreshold) prevSlide();
    }, { passive: true });
  }

  // Initialize
  updateCarousel();
  resetAutoPlay();
}