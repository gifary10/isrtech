// ==================== DEMO DASHBOARD INTERACTIVE MODULE ====================

/**
 * Render demo section HTML content
 */
function renderDemoSection() {
  const demoSection = document.getElementById('demo');
  if (!demoSection) return;

  demoSection.innerHTML = `
    <div class="max-w-7xl mx-auto">
      <div class="text-center mb-12 reveal">
        <div class="inline-flex items-center gap-2 bg-accent/10 border border-accent/30 rounded-full px-4 py-2 text-accent text-sm font-semibold mb-6">
          <i class="fa-solid fa-play"></i>
          Live Preview
        </div>
        <h2 class="text-3xl md:text-4xl font-extrabold text-light mb-4">Coba <span class="text-accent">Demo Langsung</span></h2>
        <p class="text-gray-400 text-lg max-w-xl mx-auto">Lihat seperti apa tampilan dan fitur aplikasi yang kami buat sebelum memutuskan</p>
      </div>

      <div class="reveal">
        <div class="dashboard-mockup mx-auto max-w-4xl">
          <div class="mockup-bar">
            <span class="mockup-dot" style="background:#FF5F57"></span>
            <span class="mockup-dot" style="background:#FFBD2E"></span>
            <span class="mockup-dot" style="background:#28CA41"></span>
            <span class="flex-1 mx-4 bg-gray-800 rounded h-5 text-gray-500 text-xs flex items-center px-3">demo.isrtech.id</span>
            <span class="text-gray-600 text-xs flex items-center gap-1"><i class="fa-solid fa-lock text-[10px]"></i>Secure</span>
          </div>

          <!-- Demo Content -->
          <div class="p-6" style="background:#0f1520; min-height: 400px;">
            <div class="flex gap-6 h-full">
              <!-- Sidebar -->
              <div class="w-48 shrink-0 hidden md:block">
                <div class="space-y-1">
                  <div class="flex items-center gap-3 px-3 py-2.5 rounded-xl text-white text-xs font-medium" style="background:rgba(255,87,34,0.2)">
                    <i class="fa-solid fa-grid-2 text-accent"></i>Dashboard
                  </div>
                  <div class="flex items-center gap-3 px-3 py-2.5 rounded-xl text-gray-500 text-xs">
                    <i class="fa-solid fa-box"></i>Produk
                  </div>
                  <div class="flex items-center gap-3 px-3 py-2.5 rounded-xl text-gray-500 text-xs">
                    <i class="fa-solid fa-file-invoice"></i>Penjualan
                  </div>
                  <div class="flex items-center gap-3 px-3 py-2.5 rounded-xl text-gray-500 text-xs">
                    <i class="fa-solid fa-users"></i>Pelanggan
                  </div>
                  <div class="flex items-center gap-3 px-3 py-2.5 rounded-xl text-gray-500 text-xs">
                    <i class="fa-solid fa-chart-bar"></i>Laporan
                  </div>
                  <div class="flex items-center gap-3 px-3 py-2.5 rounded-xl text-gray-500 text-xs">
                    <i class="fa-solid fa-gear"></i>Pengaturan
                  </div>
                </div>
              </div>

              <!-- Main Content -->
              <div class="flex-1 space-y-4">
                <div class="flex items-center justify-between">
                  <div>
                    <h3 class="text-light font-bold">Selamat datang, Admin 👋</h3>
                    <div class="text-gray-500 text-xs">Senin, 27 April 2026</div>
                  </div>
                  <div class="flex items-center gap-3">
                    <div class="w-8 h-8 rounded-full bg-accent flex items-center justify-center text-white text-xs font-bold">A</div>
                  </div>
                </div>

                <!-- KPI Cards -->
                <div class="grid grid-cols-2 lg:grid-cols-4 gap-3">
                  <div class="rounded-xl p-3" style="background:rgba(255,87,34,0.08); border:1px solid rgba(255,87,34,0.2)">
                    <div class="text-gray-400 text-[10px] mb-1">Revenue Hari Ini</div>
                    <div class="text-light font-bold text-sm">Rp 4.2Jt</div>
                    <div class="text-green-400 text-[10px]">↑ 12%</div>
                  </div>
                  <div class="rounded-xl p-3" style="background:rgba(45,64,89,0.3); border:1px solid rgba(45,64,89,0.4)">
                    <div class="text-gray-400 text-[10px] mb-1">Order Masuk</div>
                    <div class="text-light font-bold text-sm">28</div>
                    <div class="text-green-400 text-[10px]">↑ 5%</div>
                  </div>
                  <div class="rounded-xl p-3" style="background:rgba(45,64,89,0.3); border:1px solid rgba(45,64,89,0.4)">
                    <div class="text-gray-400 text-[10px] mb-1">Pelanggan Baru</div>
                    <div class="text-light font-bold text-sm">7</div>
                    <div class="text-blue-400 text-[10px]">Hari ini</div>
                  </div>
                  <div class="rounded-xl p-3" style="background:rgba(45,64,89,0.3); border:1px solid rgba(45,64,89,0.4)">
                    <div class="text-gray-400 text-[10px] mb-1">Stok Menipis</div>
                    <div class="text-light font-bold text-sm">3</div>
                    <div class="text-red-400 text-[10px]">⚠ Perlu restock</div>
                  </div>
                </div>

                <!-- Chart Area -->
                <div class="rounded-xl p-4" style="background:rgba(45,64,89,0.2); border:1px solid rgba(45,64,89,0.3)">
                  <div class="text-light text-xs font-semibold mb-3">Grafik Penjualan 7 Hari</div>
                  <div class="flex items-end gap-2 h-20">
                    <div class="chart-bar flex-1" style="height:40%"></div>
                    <div class="chart-bar flex-1" style="height:65%"></div>
                    <div class="chart-bar flex-1" style="height:50%"></div>
                    <div class="chart-bar flex-1" style="height:80%"></div>
                    <div class="chart-bar flex-1" style="height:55%"></div>
                    <div class="chart-bar flex-1" style="height:90%"></div>
                    <div class="chart-bar flex-1" style="height:100%"></div>
                  </div>
                  <div class="flex justify-between text-gray-600 text-[9px] mt-1">
                    <span>Sel</span><span>Rab</span><span>Kam</span><span>Jum</span><span>Sab</span><span>Min</span><span>Sen</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="text-center mt-8">
          <a href="https://wa.me/6283829058640?text=Halo,%20saya%20ingin%20request%20demo%20sistem" target="_blank"
             class="btn-accent inline-flex items-center gap-3 px-7 py-4 rounded-2xl font-bold relative z-10">
            <i class="fa-solid fa-play-circle text-xl"></i>
            Request Demo Langsung
          </a>
        </div>
      </div>
    </div>
  `;

  // Re-attach reveal observers for newly added elements
  if (window.revealObserver) {
    document.querySelectorAll('#demo .reveal').forEach(el => {
      window.revealObserver.observe(el);
    });
  }
}

/**
 * Initialize demo dashboard interactive elements
 */
export function initDemo() {
  // Render section content first
  renderDemoSection();

  // Wait for DOM update, then initialize interactions
  setTimeout(() => {
    // Simulate real-time updates for demo dashboard
    const updateDemoMetrics = () => {
      const metrics = {
        revenue: ['Rp 4.2Jt', 'Rp 4.8Jt', 'Rp 5.1Jt', 'Rp 4.5Jt', 'Rp 6.2Jt'],
        orders: ['28', '32', '25', '38', '42'],
        customers: ['7', '12', '9', '15', '11'],
        stock: ['3', '5', '2', '4', '1']
      };
      
      const randomIndex = Math.floor(Math.random() * metrics.revenue.length);
      
      // Update demo dashboard values if elements exist
      const kpiValues = document.querySelectorAll('#demo .text-light.font-bold.text-sm');
      if (kpiValues.length >= 4) {
        kpiValues[0].textContent = metrics.revenue[randomIndex];
        kpiValues[1].textContent = metrics.orders[randomIndex];
        kpiValues[2].textContent = metrics.customers[randomIndex];
        kpiValues[3].textContent = metrics.stock[randomIndex];
      }
    };

    // Update metrics every 5 seconds
    setInterval(updateDemoMetrics, 5000);

    // Sidebar navigation in demo
    document.querySelectorAll('#demo .rounded-xl.cursor-pointer, #demo [class*="rounded-xl"]').forEach(item => {
      if (item.querySelector('i') && item.closest('.w-48')) {
        item.style.cursor = 'pointer';
        item.addEventListener('click', () => {
          // Remove active state from all items
          const sidebarItems = item.parentElement.querySelectorAll('[class*="rounded-xl"]');
          sidebarItems.forEach(i => {
            i.style.background = 'transparent';
            i.style.color = '#6b7280';
          });
          
          // Set active state
          item.style.background = 'rgba(255,87,34,0.2)';
          item.style.color = '#ff5722';
        });
      }
    });

    // Chart bar hover effects in demo
    document.querySelectorAll('.chart-bar').forEach(bar => {
      bar.addEventListener('mouseenter', () => {
        bar.style.opacity = '0.8';
        bar.style.transform = 'scaleY(1.05)';
        bar.style.transition = 'all 0.2s ease';
      });
      
      bar.addEventListener('mouseleave', () => {
        bar.style.opacity = '1';
        bar.style.transform = 'scaleY(1)';
      });
    });

    // Animate KPI cards on hover
    document.querySelectorAll('#demo .rounded-xl.p-3').forEach(card => {
      card.addEventListener('mouseenter', () => {
        card.style.transform = 'translateY(-2px)';
        card.style.transition = 'transform 0.2s ease';
        card.style.boxShadow = '0 4px 12px rgba(0,0,0,0.1)';
      });
      
      card.addEventListener('mouseleave', () => {
        card.style.transform = '';
        card.style.boxShadow = '';
      });
    });
  }, 0);
}