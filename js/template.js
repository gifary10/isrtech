// ==================== TEMPLATE MODULE ====================

/**
 * Render template/product section HTML content
 */
function renderTemplateSection() {
  const templateSection = document.getElementById('templates');
  if (!templateSection) return;

  templateSection.innerHTML = `
    <div class="max-w-7xl mx-auto">
      <div class="text-center mb-16 reveal">
        <div class="inline-flex items-center gap-2 bg-secondary/30 border border-secondary/40 rounded-full px-4 py-2 text-blue-300 text-sm font-semibold mb-6">
          <i class="fa-solid fa-bolt"></i>
          Produk Siap Pakai
        </div>
        <h2 class="text-3xl md:text-4xl lg:text-5xl font-extrabold text-light mb-4">Template <span class="text-accent">Langsung Pakai</span></h2>
        <p class="text-gray-400 text-lg max-w-xl mx-auto">Solusi siap deploy dengan waktu lebih cepat dan harga lebih terjangkau</p>
      </div>

      <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-7 reveal">
        <!-- Template 1 -->
        <div class="card-solid rounded-2xl overflow-hidden hover:border-accent/30 transition-all group">
          <div class="h-44 relative overflow-hidden" style="background: linear-gradient(135deg, #1a2230, #0f1520);">
            <div class="absolute inset-3 rounded-xl overflow-hidden" style="background:#0d1117; border: 1px solid #222">
              <div class="h-6 flex items-center gap-1.5 px-3" style="background:#111">
                <span class="w-2 h-2 rounded-full bg-red-500"></span>
                <span class="w-2 h-2 rounded-full bg-yellow-500"></span>
                <span class="w-2 h-2 rounded-full bg-green-500"></span>
              </div>
              <div class="p-2 grid grid-cols-3 gap-1.5">
                <div class="rounded p-2 text-center" style="background:#161b22">
                  <div class="text-[8px] text-gray-400">Revenue</div>
                  <div class="text-[10px] font-bold text-accent">12.5M</div>
                </div>
                <div class="rounded p-2 text-center" style="background:#161b22">
                  <div class="text-[8px] text-gray-400">Orders</div>
                  <div class="text-[10px] font-bold text-green-400">348</div>
                </div>
                <div class="rounded p-2 text-center" style="background:#161b22">
                  <div class="text-[8px] text-gray-400">Users</div>
                  <div class="text-[10px] font-bold text-blue-400">1.2K</div>
                </div>
              </div>
              <div class="mx-2 rounded" style="background:#161b22; height:40px; display:flex; align-items:flex-end; padding:4px; gap:3px;">
                <div style="width:12%;height:60%;background:#FF5722;border-radius:2px 2px 0 0;"></div>
                <div style="width:12%;height:80%;background:#FF5722;border-radius:2px 2px 0 0;"></div>
                <div style="width:12%;height:50%;background:#FF5722;border-radius:2px 2px 0 0;"></div>
                <div style="width:12%;height:90%;background:#FF5722;border-radius:2px 2px 0 0;"></div>
                <div style="width:12%;height:70%;background:#FF5722;border-radius:2px 2px 0 0;"></div>
                <div style="width:12%;height:100%;background:#FF7043;border-radius:2px 2px 0 0;"></div>
              </div>
            </div>
            <div class="absolute top-3 right-3 bg-accent text-white text-[10px] font-bold px-2 py-1 rounded-full">POPULER</div>
          </div>
          <div class="p-5">
            <h3 class="text-light font-bold text-base mb-2">Business Dashboard Pro</h3>
            <p class="text-gray-400 text-xs leading-relaxed mb-4">Dashboard bisnis lengkap dengan laporan penjualan, manajemen produk, dan analitik real-time.</p>
            <div class="flex flex-wrap gap-1.5 mb-4">
              <span class="text-[11px] bg-secondary/30 text-gray-300 px-2 py-1 rounded-lg">Multi User</span>
              <span class="text-[11px] bg-secondary/30 text-gray-300 px-2 py-1 rounded-lg">Export Excel</span>
              <span class="text-[11px] bg-secondary/30 text-gray-300 px-2 py-1 rounded-lg">Mobile Ready</span>
            </div>
            <div class="flex items-center justify-between">
              <div>
                <span class="text-gray-500 text-xs">Mulai dari</span>
                <div class="text-accent font-bold">Rp 3.500.000</div>
              </div>
              <div class="flex gap-2">
                <button class="btn-outline px-3 py-2 rounded-xl text-xs font-semibold">Demo</button>
                <button class="btn-accent px-4 py-2 rounded-xl text-xs font-semibold relative z-10">Gunakan</button>
              </div>
            </div>
          </div>
        </div>

        <!-- Template 2 -->
        <div class="card-solid rounded-2xl overflow-hidden hover:border-accent/30 transition-all">
          <div class="h-44 relative overflow-hidden" style="background: linear-gradient(135deg, #1a2230, #0f1520);">
            <div class="absolute inset-3 rounded-xl overflow-hidden" style="background:#0d1117; border: 1px solid #222; padding: 10px;">
              <div class="text-[9px] text-gray-400 mb-2">Inventory System</div>
              <div class="space-y-1.5">
                <div class="flex justify-between items-center">
                  <div class="h-2 rounded bg-secondary/50" style="width:55%"></div>
                  <div class="text-[9px] text-green-400">Stok: 120</div>
                </div>
                <div class="flex justify-between items-center">
                  <div class="h-2 rounded bg-secondary/50" style="width:70%"></div>
                  <div class="text-[9px] text-yellow-400">Stok: 15</div>
                </div>
                <div class="flex justify-between items-center">
                  <div class="h-2 rounded bg-secondary/50" style="width:40%"></div>
                  <div class="text-[9px] text-red-400">Stok: 0</div>
                </div>
                <div class="flex justify-between items-center">
                  <div class="h-2 rounded bg-secondary/50" style="width:85%"></div>
                  <div class="text-[9px] text-green-400">Stok: 340</div>
                </div>
              </div>
            </div>
          </div>
          <div class="p-5">
            <h3 class="text-light font-bold text-base mb-2">Inventory Management</h3>
            <p class="text-gray-400 text-xs leading-relaxed mb-4">Sistem manajemen stok & gudang dengan notifikasi otomatis saat stok menipis.</p>
            <div class="flex flex-wrap gap-1.5 mb-4">
              <span class="text-[11px] bg-secondary/30 text-gray-300 px-2 py-1 rounded-lg">Barcode Scan</span>
              <span class="text-[11px] bg-secondary/30 text-gray-300 px-2 py-1 rounded-lg">Alert Otomatis</span>
              <span class="text-[11px] bg-secondary/30 text-gray-300 px-2 py-1 rounded-lg">Multi Gudang</span>
            </div>
            <div class="flex items-center justify-between">
              <div>
                <span class="text-gray-500 text-xs">Mulai dari</span>
                <div class="text-accent font-bold">Rp 2.800.000</div>
              </div>
              <div class="flex gap-2">
                <button class="btn-outline px-3 py-2 rounded-xl text-xs font-semibold">Demo</button>
                <button class="btn-accent px-4 py-2 rounded-xl text-xs font-semibold relative z-10">Gunakan</button>
              </div>
            </div>
          </div>
        </div>

        <!-- Template 3 -->
        <div class="card-solid rounded-2xl overflow-hidden hover:border-accent/30 transition-all">
          <div class="h-44 relative overflow-hidden" style="background: linear-gradient(135deg, #1a2230, #0f1520);">
            <div class="absolute inset-3 rounded-xl overflow-hidden" style="background:#0d1117; border: 1px solid #222; padding: 10px;">
              <div class="text-[9px] text-gray-400 mb-2">HR & Attendance</div>
              <div class="grid grid-cols-7 gap-1 mb-2">
                <div class="text-[8px] text-gray-500 text-center">S</div>
                <div class="text-[8px] text-gray-500 text-center">M</div>
                <div class="text-[8px] text-gray-500 text-center">T</div>
                <div class="text-[8px] text-gray-500 text-center">W</div>
                <div class="text-[8px] text-gray-500 text-center">T</div>
                <div class="text-[8px] text-gray-500 text-center">F</div>
                <div class="text-[8px] text-gray-500 text-center">S</div>
              </div>
              <div class="grid grid-cols-7 gap-1">
                <div class="w-5 h-5 rounded bg-green-500/50 text-[8px] text-center leading-5 text-white">1</div>
                <div class="w-5 h-5 rounded bg-green-500/50 text-[8px] text-center leading-5 text-white">2</div>
                <div class="w-5 h-5 rounded bg-green-500/50 text-[8px] text-center leading-5 text-white">3</div>
                <div class="w-5 h-5 rounded bg-red-500/50 text-[8px] text-center leading-5 text-white">4</div>
                <div class="w-5 h-5 rounded bg-green-500/50 text-[8px] text-center leading-5 text-white">5</div>
                <div class="w-5 h-5 rounded bg-gray-700/50 text-[8px] text-center leading-5 text-white">6</div>
                <div class="w-5 h-5 rounded bg-gray-700/50 text-[8px] text-center leading-5 text-white">7</div>
              </div>
            </div>
          </div>
          <div class="p-5">
            <h3 class="text-light font-bold text-base mb-2">HR & Absensi Digital</h3>
            <p class="text-gray-400 text-xs leading-relaxed mb-4">Sistem absensi online, manajemen karyawan, slip gaji otomatis, dan laporan kehadiran.</p>
            <div class="flex flex-wrap gap-1.5 mb-4">
              <span class="text-[11px] bg-secondary/30 text-gray-300 px-2 py-1 rounded-lg">GPS Tracking</span>
              <span class="text-[11px] bg-secondary/30 text-gray-300 px-2 py-1 rounded-lg">Slip Gaji Auto</span>
              <span class="text-[11px] bg-secondary/30 text-gray-300 px-2 py-1 rounded-lg">Cuti Online</span>
            </div>
            <div class="flex items-center justify-between">
              <div>
                <span class="text-gray-500 text-xs">Mulai dari</span>
                <div class="text-accent font-bold">Rp 4.200.000</div>
              </div>
              <div class="flex gap-2">
                <button class="btn-outline px-3 py-2 rounded-xl text-xs font-semibold">Demo</button>
                <button class="btn-accent px-4 py-2 rounded-xl text-xs font-semibold relative z-10">Gunakan</button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="text-center mt-10 reveal">
        <a href="https://wa.me/6283829058640?text=Halo,%20saya%20ingin%20lihat%20template%20lengkap" target="_blank"
           class="btn-outline inline-flex items-center gap-2 px-7 py-4 rounded-2xl font-semibold">
          <i class="fa-solid fa-grid-2"></i>Lihat Semua Template
        </a>
      </div>
    </div>
  `;

  // Re-attach reveal observers for newly added elements
  if (window.revealObserver) {
    document.querySelectorAll('#templates .reveal').forEach(el => {
      window.revealObserver.observe(el);
    });
  }
}

/**
 * Initialize template/product section interactive elements
 */
export function initTemplate() {
  // Render section content first
  renderTemplateSection();

  // Wait for DOM update, then initialize interactions
  setTimeout(() => {
    // Add click handlers for template "Demo" and "Gunakan" buttons
    document.querySelectorAll('#templates .btn-outline').forEach(btn => {
      if (btn.textContent.trim() === 'Demo') {
        btn.addEventListener('click', () => {
          const card = btn.closest('.card-solid');
          const title = card?.querySelector('h3')?.textContent || 'Template';
          const msg = `Halo ISR Tech, saya tertarik untuk mencoba demo "${title}". Bisa tolong tunjukkan cara kerjanya?`;
          window.open('https://wa.me/6283829058640?text=' + encodeURIComponent(msg), '_blank');
        });
      }
    });

    document.querySelectorAll('#templates .btn-accent').forEach(btn => {
      if (btn.textContent.trim() === 'Gunakan') {
        btn.addEventListener('click', () => {
          const card = btn.closest('.card-solid');
          const title = card?.querySelector('h3')?.textContent || 'Template';
          const price = card?.querySelector('.text-accent.font-bold')?.textContent || '';
          const msg = `Halo ISR Tech, saya ingin menggunakan template "${title}" (${price}). Bisa dibantu proses ordernya?`;
          window.open('https://wa.me/6283829058640?text=' + encodeURIComponent(msg), '_blank');
        });
      }
    });

    // Add hover animations for template cards
    document.querySelectorAll('#templates .card-solid').forEach(card => {
      card.addEventListener('mouseenter', function() {
        this.style.borderColor = 'rgba(255, 87, 34, 0.3)';
        this.style.transform = 'translateY(-4px)';
        this.style.transition = 'all 0.3s ease';
        this.style.boxShadow = '0 20px 40px rgba(0, 0, 0, 0.2)';
      });
      
      card.addEventListener('mouseleave', function() {
        this.style.borderColor = '';
        this.style.transform = '';
        this.style.boxShadow = '';
      });
    });
  }, 0);
}