// ==================== PORTFOLIO MODULE ====================

/**
 * Render portfolio section HTML content
 */
function renderPortfolioSection() {
  const portfolioSection = document.getElementById('portfolio');
  if (!portfolioSection) return;

  portfolioSection.innerHTML = `
    <div class="max-w-7xl mx-auto">
      <div class="text-center mb-16 reveal">
        <div class="inline-flex items-center gap-2 bg-accent/10 border border-accent/30 rounded-full px-4 py-2 text-accent text-sm font-semibold mb-6">
          <i class="fa-solid fa-briefcase"></i>
          Portfolio
        </div>
        <h2 class="text-3xl md:text-4xl lg:text-5xl font-extrabold text-light mb-4">Karya Nyata, <span class="text-accent">Hasil Terukur</span></h2>
        <p class="text-gray-400 text-lg max-w-xl mx-auto">Beberapa project yang telah kami selesaikan dan berdampak langsung pada bisnis klien</p>
      </div>

      <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6 reveal">
        <!-- Portfolio 1 -->
        <div class="portfolio-card card-solid rounded-2xl overflow-hidden group cursor-pointer hover:-translate-y-1 transition-all">
          <div class="h-48 relative overflow-hidden" style="background: linear-gradient(135deg, #0a3d62, #1e3799);">
            <div class="absolute inset-0 flex items-center justify-center opacity-30">
              <i class="fa-solid fa-chart-line text-8xl text-white"></i>
            </div>
            <div class="overlay absolute inset-0 bg-accent/90 flex items-center justify-center flex-col gap-3">
              <span class="text-white font-bold">Lihat Detail</span>
              <i class="fa-solid fa-arrow-up-right-from-square text-white text-xl"></i>
            </div>
            <div class="absolute bottom-3 left-3">
              <span class="bg-accent text-white text-[10px] font-bold px-2.5 py-1 rounded-full">Manufaktur</span>
            </div>
          </div>
          <div class="p-5">
            <h3 class="text-light font-bold mb-1">Dashboard Produksi PT. XYZ</h3>
            <p class="text-gray-400 text-xs leading-relaxed mb-3">Sistem monitoring produksi real-time terintegrasi dengan mesin dan ERP. Laporan harian otomatis ke manajemen.</p>
            <div class="flex items-center gap-4 text-xs">
              <span class="text-green-400 flex items-center gap-1"><i class="fa-solid fa-arrow-up text-[10px]"></i>68% Efisiensi</span>
              <span class="text-blue-400 flex items-center gap-1"><i class="fa-solid fa-clock text-[10px]"></i>3 Bulan</span>
            </div>
          </div>
        </div>

        <!-- Portfolio 2 -->
        <div class="portfolio-card card-solid rounded-2xl overflow-hidden group cursor-pointer hover:-translate-y-1 transition-all">
          <div class="h-48 relative overflow-hidden" style="background: linear-gradient(135deg, #1a1a2e, #16213e);">
            <div class="absolute inset-0 flex items-center justify-center opacity-30">
              <i class="fa-solid fa-store text-8xl text-white"></i>
            </div>
            <div class="overlay absolute inset-0 bg-accent/90 flex items-center justify-center flex-col gap-3">
              <span class="text-white font-bold">Lihat Detail</span>
              <i class="fa-solid fa-arrow-up-right-from-square text-white text-xl"></i>
            </div>
            <div class="absolute bottom-3 left-3">
              <span class="bg-blue-500 text-white text-[10px] font-bold px-2.5 py-1 rounded-full">Retail</span>
            </div>
          </div>
          <div class="p-5">
            <h3 class="text-light font-bold mb-1">POS & Inventory Toko Retail</h3>
            <p class="text-gray-400 text-xs leading-relaxed mb-3">Sistem kasir lengkap dengan manajemen 500+ SKU, laporan penjualan, dan notifikasi stok menipis via WhatsApp.</p>
            <div class="flex items-center gap-4 text-xs">
              <span class="text-green-400 flex items-center gap-1"><i class="fa-solid fa-arrow-up text-[10px]"></i>40% Lebih Cepat</span>
              <span class="text-blue-400 flex items-center gap-1"><i class="fa-solid fa-clock text-[10px]"></i>6 Minggu</span>
            </div>
          </div>
        </div>

        <!-- Portfolio 3 -->
        <div class="portfolio-card card-solid rounded-2xl overflow-hidden group cursor-pointer hover:-translate-y-1 transition-all">
          <div class="h-48 relative overflow-hidden" style="background: linear-gradient(135deg, #0f3460, #533483);">
            <div class="absolute inset-0 flex items-center justify-center opacity-30">
              <i class="fa-solid fa-landmark text-8xl text-white"></i>
            </div>
            <div class="overlay absolute inset-0 bg-accent/90 flex items-center justify-center flex-col gap-3">
              <span class="text-white font-bold">Lihat Detail</span>
              <i class="fa-solid fa-arrow-up-right-from-square text-white text-xl"></i>
            </div>
            <div class="absolute bottom-3 left-3">
              <span class="bg-purple-500 text-white text-[10px] font-bold px-2.5 py-1 rounded-full">Pemerintahan</span>
            </div>
          </div>
          <div class="p-5">
            <h3 class="text-light font-bold mb-1">Sistem Informasi Desa — Kec. ABC</h3>
            <p class="text-gray-400 text-xs leading-relaxed mb-3">Portal layanan warga digital, data kependudukan, dan dashboard monev program pembangunan desa.</p>
            <div class="flex items-center gap-4 text-xs">
              <span class="text-green-400 flex items-center gap-1"><i class="fa-solid fa-arrow-up text-[10px]"></i>1200+ Warga Terlayani</span>
              <span class="text-blue-400 flex items-center gap-1"><i class="fa-solid fa-clock text-[10px]"></i>2 Bulan</span>
            </div>
          </div>
        </div>

        <!-- Portfolio 4 -->
        <div class="portfolio-card card-solid rounded-2xl overflow-hidden group cursor-pointer hover:-translate-y-1 transition-all">
          <div class="h-48 relative overflow-hidden" style="background: linear-gradient(135deg, #1b2631, #2e4057);">
            <div class="absolute inset-0 flex items-center justify-center opacity-30">
              <i class="fa-solid fa-users text-8xl text-white"></i>
            </div>
            <div class="overlay absolute inset-0 bg-accent/90 flex items-center justify-center flex-col gap-3">
              <span class="text-white font-bold">Lihat Detail</span>
              <i class="fa-solid fa-arrow-up-right-from-square text-white text-xl"></i>
            </div>
            <div class="absolute bottom-3 left-3">
              <span class="bg-teal-500 text-white text-[10px] font-bold px-2.5 py-1 rounded-full">HRD</span>
            </div>
          </div>
          <div class="p-5">
            <h3 class="text-light font-bold mb-1">HR Attendance & Payroll System</h3>
            <p class="text-gray-400 text-xs leading-relaxed mb-3">Absensi GPS, manajemen 200+ karyawan, perhitungan gaji otomatis, dan laporan bulanan ke direksi.</p>
            <div class="flex items-center gap-4 text-xs">
              <span class="text-green-400 flex items-center gap-1"><i class="fa-solid fa-arrow-up text-[10px]"></i>90% Waktu Hemat</span>
              <span class="text-blue-400 flex items-center gap-1"><i class="fa-solid fa-clock text-[10px]"></i>2.5 Bulan</span>
            </div>
          </div>
        </div>

        <!-- Portfolio 5 -->
        <div class="portfolio-card card-solid rounded-2xl overflow-hidden group cursor-pointer hover:-translate-y-1 transition-all">
          <div class="h-48 relative overflow-hidden" style="background: linear-gradient(135deg, #1c0a00, #3d1c00);">
            <div class="absolute inset-0 flex items-center justify-center opacity-30">
              <i class="fa-solid fa-truck text-8xl text-white"></i>
            </div>
            <div class="overlay absolute inset-0 bg-accent/90 flex items-center justify-center flex-col gap-3">
              <span class="text-white font-bold">Lihat Detail</span>
              <i class="fa-solid fa-arrow-up-right-from-square text-white text-xl"></i>
            </div>
            <div class="absolute bottom-3 left-3">
              <span class="bg-orange-500 text-white text-[10px] font-bold px-2.5 py-1 rounded-full">Logistik</span>
            </div>
          </div>
          <div class="p-5">
            <h3 class="text-light font-bold mb-1">Logistic Tracking & Delivery App</h3>
            <p class="text-gray-400 text-xs leading-relaxed mb-3">Tracking pengiriman real-time, manajemen armada, bukti terima digital, dan laporan pengiriman harian.</p>
            <div class="flex items-center gap-4 text-xs">
              <span class="text-green-400 flex items-center gap-1"><i class="fa-solid fa-arrow-up text-[10px]"></i>35% Biaya Turun</span>
              <span class="text-blue-400 flex items-center gap-1"><i class="fa-solid fa-clock text-[10px]"></i>4 Bulan</span>
            </div>
          </div>
        </div>

        <!-- More CTA -->
        <div class="card-solid rounded-2xl flex items-center justify-center p-8 text-center hover:border-accent/30 transition-all group" style="border: 2px dashed rgba(45,64,89,0.5);">
          <div>
            <div class="w-14 h-14 rounded-2xl bg-accent/10 flex items-center justify-center text-accent text-2xl mx-auto mb-4 group-hover:scale-110 transition-transform">
              <i class="fa-solid fa-plus"></i>
            </div>
            <div class="text-light font-bold mb-2">Lihat 20+ Portfolio</div>
            <div class="text-gray-400 text-sm mb-4">Project dari berbagai industri</div>
            <a href="https://wa.me/6283829058640?text=Halo,%20saya%20ingin%20lihat%20portfolio%20lengkap%20ISR%20Tech" target="_blank"
               class="btn-outline px-4 py-2.5 rounded-xl text-sm font-semibold inline-block">Lihat Semua</a>
          </div>
        </div>
      </div>
    </div>
  `;

  // Re-attach reveal observers for newly added elements
  if (window.revealObserver) {
    document.querySelectorAll('#portfolio .reveal').forEach(el => {
      window.revealObserver.observe(el);
    });
  }
}

/**
 * Initialize portfolio section hover effects and click handlers
 */
export function initPortfolio() {
  // Render section content first
  renderPortfolioSection();

  // Wait for DOM update, then initialize interactions
  setTimeout(() => {
    document.querySelectorAll('.portfolio-card').forEach(card => {
      // Hover effect
      card.addEventListener('mouseenter', () => {
        card.style.transform = 'translateY(-8px)';
        card.style.transition = 'transform 0.3s ease';
      });
      
      card.addEventListener('mouseleave', () => {
        card.style.transform = 'translateY(0)';
        card.style.transition = 'transform 0.3s ease';
      });
      
      // Click handler for portfolio cards
      card.addEventListener('click', () => {
        const projectName = card.querySelector('h3')?.textContent || 'Project';
        const msg = `Halo ISR Tech, saya tertarik dengan project "${projectName}" di portfolio Anda. Bisa ceritakan lebih detail?`;
        window.open('https://wa.me/6283829058640?text=' + encodeURIComponent(msg), '_blank');
      });
    });

    // Add interactive hover for "More Portfolio" card
    const moreCard = document.querySelector('#portfolio .border-dashed');
    if (moreCard) {
      moreCard.addEventListener('mouseenter', () => {
        moreCard.style.borderColor = 'rgba(255, 87, 34, 0.5)';
        moreCard.style.transform = 'scale(1.02)';
        moreCard.style.transition = 'all 0.3s ease';
      });
      
      moreCard.addEventListener('mouseleave', () => {
        moreCard.style.borderColor = 'rgba(45, 64, 89, 0.5)';
        moreCard.style.transform = 'scale(1)';
      });
    }

    // Add overlay effect for portfolio images
    document.querySelectorAll('.portfolio-card .overlay').forEach(overlay => {
      const parent = overlay.parentElement;
      if (parent) {
        parent.addEventListener('mouseenter', () => {
          overlay.style.opacity = '1';
        });
        
        parent.addEventListener('mouseleave', () => {
          overlay.style.opacity = '0';
        });
      }
    });
  }, 0);
}