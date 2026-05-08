// ==================== SOLUSI MODULE ====================
// Handles the Problem & Solution section interactions and rendering

/**
 * Render problem & solution section HTML content
 */
function renderSolusiSection() {
  const problemSection = document.getElementById('problem');
  if (!problemSection) return;

  problemSection.innerHTML = `
    <div class="max-w-7xl mx-auto">
      <div class="text-center mb-16 reveal">
        <div class="inline-flex items-center gap-2 bg-red-500/10 border border-red-500/20 rounded-full px-4 py-2 text-red-400 text-sm font-semibold mb-6">
          <i class="fa-solid fa-triangle-exclamation"></i>
          Masalah yang Sering Terjadi
        </div>
        <h2 class="text-3xl md:text-4xl lg:text-5xl font-extrabold text-light mb-4">Bisnis Anda Masih <span class="text-accent">Manual?</span></h2>
        <p class="text-gray-400 text-lg max-w-2xl mx-auto">Banyak bisnis kehilangan potensi besar karena terhambat sistem yang tidak terintegrasi</p>
      </div>

      <div class="grid md:grid-cols-2 gap-8 items-start">
        <!-- Pain Points -->
        <div class="space-y-4 reveal">
          <h3 class="text-lg font-bold text-gray-300 mb-6 flex items-center gap-2">
            <span class="w-8 h-8 rounded-lg bg-red-500/20 flex items-center justify-center text-red-400 text-xs"><i class="fa-solid fa-xmark"></i></span>
            Masalah Umum Bisnis Anda
          </h3>
          <div class="card-solid rounded-2xl p-5 flex items-start gap-4 border-l-4 border-red-500/50">
            <div class="w-10 h-10 rounded-xl bg-red-500/15 flex items-center justify-center text-red-400 shrink-0">
              <i class="fa-solid fa-file-excel"></i>
            </div>
            <div>
              <div class="text-light font-semibold mb-1">Data Masih di Excel & Spreadsheet</div>
              <div class="text-gray-400 text-sm leading-relaxed">Data tersebar di banyak file, susah dicari, mudah hilang, dan tidak bisa diakses bersama-sama secara real-time.</div>
            </div>
          </div>
          <div class="card-solid rounded-2xl p-5 flex items-start gap-4 border-l-4 border-red-500/50">
            <div class="w-10 h-10 rounded-xl bg-red-500/15 flex items-center justify-center text-red-400 shrink-0">
              <i class="fa-solid fa-link-slash"></i>
            </div>
            <div>
              <div class="text-light font-semibold mb-1">Sistem Tidak Terintegrasi</div>
              <div class="text-gray-400 text-sm leading-relaxed">Setiap divisi pakai sistem berbeda, data duplikat, proses sering double input, dan tidak ada satu sumber kebenaran.</div>
            </div>
          </div>
          <div class="card-solid rounded-2xl p-5 flex items-start gap-4 border-l-4 border-red-500/50">
            <div class="w-10 h-10 rounded-xl bg-red-500/15 flex items-center justify-center text-red-400 shrink-0">
              <i class="fa-solid fa-clock-rotate-left"></i>
            </div>
            <div>
              <div class="text-light font-semibold mb-1">Laporan Manual Memakan Waktu</div>
              <div class="text-gray-400 text-sm leading-relaxed">Butuh berjam-jam untuk buat laporan. Data tidak real-time. Keputusan bisnis jadi terlambat dan tidak akurat.</div>
            </div>
          </div>
          <div class="card-solid rounded-2xl p-5 flex items-start gap-4 border-l-4 border-red-500/50">
            <div class="w-10 h-10 rounded-xl bg-red-500/15 flex items-center justify-center text-red-400 shrink-0">
              <i class="fa-solid fa-mobile-screen-button"></i>
            </div>
            <div>
              <div class="text-light font-semibold mb-1">Tidak Ada Akses Mobile</div>
              <div class="text-gray-400 text-sm leading-relaxed">Tim di lapangan tidak bisa akses data. Semua harus ke kantor dulu atau kirim chat yang kacau.</div>
            </div>
          </div>
        </div>

        <!-- Solutions -->
        <div class="space-y-4 reveal">
          <h3 class="text-lg font-bold text-gray-300 mb-6 flex items-center gap-2">
            <span class="w-8 h-8 rounded-lg bg-green-500/20 flex items-center justify-center text-green-400 text-xs"><i class="fa-solid fa-check"></i></span>
            Solusi ISR Tech
          </h3>
          <div class="card-solid rounded-2xl p-5 flex items-start gap-4 border-l-4 border-accent/60 glow-accent">
            <div class="w-10 h-10 rounded-xl gradient-accent flex items-center justify-center text-white shrink-0">
              <i class="fa-solid fa-database"></i>
            </div>
            <div>
              <div class="text-light font-semibold mb-1">Sistem Database Terpusat</div>
              <div class="text-gray-400 text-sm leading-relaxed">Semua data tersimpan rapi, terstruktur, dan bisa diakses kapan saja, di mana saja, secara real-time dengan aman.</div>
            </div>
          </div>
          <div class="card-solid rounded-2xl p-5 flex items-start gap-4 border-l-4 border-accent/60">
            <div class="w-10 h-10 rounded-xl gradient-accent flex items-center justify-center text-white shrink-0">
              <i class="fa-solid fa-plug"></i>
            </div>
            <div>
              <div class="text-light font-semibold mb-1">Integrasi Antar Sistem</div>
              <div class="text-gray-400 text-sm leading-relaxed">Semua sistem bisnis terhubung. Tidak ada lagi double input. Data mengalir otomatis antar divisi dan aplikasi.</div>
            </div>
          </div>
          <div class="card-solid rounded-2xl p-5 flex items-start gap-4 border-l-4 border-accent/60">
            <div class="w-10 h-10 rounded-xl gradient-accent flex items-center justify-center text-white shrink-0">
              <i class="fa-solid fa-chart-pie"></i>
            </div>
            <div>
              <div class="text-light font-semibold mb-1">Dashboard & Laporan Otomatis</div>
              <div class="text-gray-400 text-sm leading-relaxed">Data divisualisasikan secara real-time. Laporan dibuat otomatis. Keputusan bisnis jadi lebih cepat dan tepat.</div>
            </div>
          </div>
          <div class="card-solid rounded-2xl p-5 flex items-start gap-4 border-l-4 border-accent/60">
            <div class="w-10 h-10 rounded-xl gradient-accent flex items-center justify-center text-white shrink-0">
              <i class="fa-solid fa-mobile-alt"></i>
            </div>
            <div>
              <div class="text-light font-semibold mb-1">Akses di Semua Device</div>
              <div class="text-gray-400 text-sm leading-relaxed">Aplikasi web responsive yang bisa diakses di HP, tablet, dan PC. Tim lapangan bisa input & lihat data langsung.</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  `;

  // Re-attach reveal observers for newly added elements
  if (window.revealObserver) {
    document.querySelectorAll('#problem .reveal').forEach(el => {
      window.revealObserver.observe(el);
    });
  }
}

/**
 * Initialize solution section interactive elements
 */
export function initSolusi() {
  // Render section content first
  renderSolusiSection();

  // Wait for DOM update, then initialize interactions
  setTimeout(() => {
    // Add hover effects for problem cards
    document.querySelectorAll('#problem .card-solid').forEach(card => {
      card.addEventListener('mouseenter', () => {
        card.style.transform = 'translateX(4px)';
        card.style.transition = 'transform 0.3s ease';
      });
      
      card.addEventListener('mouseleave', () => {
        card.style.transform = 'translateX(0)';
      });
    });

    // Add pulse effect to solution cards with glow-accent class
    document.querySelectorAll('#problem .glow-accent').forEach(card => {
      card.addEventListener('mouseenter', () => {
        card.style.boxShadow = '0 0 60px rgba(255, 87, 34, 0.35)';
        card.style.transition = 'box-shadow 0.3s ease';
      });
      
      card.addEventListener('mouseleave', () => {
        card.style.boxShadow = '0 0 40px rgba(255, 87, 34, 0.22)';
      });
    });

    // Initialize icon animations for solution cards
    const solutionIcons = document.querySelectorAll('#problem .gradient-accent');
    solutionIcons.forEach(icon => {
      icon.addEventListener('mouseenter', () => {
        icon.style.transform = 'rotate(-5deg) scale(1.1)';
        icon.style.transition = 'transform 0.3s ease';
      });
      
      icon.addEventListener('mouseleave', () => {
        icon.style.transform = 'rotate(0deg) scale(1)';
      });
    });
  }, 0);
}