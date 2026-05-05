// ==================== PRICING CALCULATOR MODULE ====================

const TOTAL_FEATURES = 33;

// Pricing categories data sesuai ketentuan baru
const pricingCategories = [
  {
    id: 'dashboard',
    title: 'Dashboard & Monitoring',
    subtitle: 'Dashboard KPI, monitoring, dan visualisasi data',
    icon: 'fa-chart-line',
    features: [
      { name: 'Integrasi Google Sheets (read data)', desc: 'Baca data dari Google Sheets', price: 0, core: true },
      { name: 'Grafik KPI sederhana', desc: 'Visualisasi KPI bisnis', price: 0, core: true },
      { name: 'Filter data basic', desc: 'Filter dan sortir data', price: 0, core: true },
      { name: 'Responsive', desc: 'Tampilan di semua device', price: 0, core: true },
      { name: 'Export PDF report', desc: 'Cetak laporan ke PDF', price: 75000 },
      { name: 'Multi dashboard', desc: 'Beberapa halaman dashboard', price: 125000 },
      { name: 'Auto refresh data', desc: 'Update data otomatis', price: 50000 },
      { name: 'Login admin sederhana', desc: 'Akses terbatas admin', price: 100000 },
      { name: 'Custom theme / dark mode', desc: 'Tema sesuai branding', price: 50000 }
    ],
    priceRange: { min: 300000, max: 750000 },
    examples: [
      'Dashboard KPI bisnis UMKM',
      'Monitoring penjualan harian',
      'Dashboard keuangan sederhana',
      'Dashboard operasional klinik',
      'Dashboard tracking proyek'
    ]
  },
  {
    id: 'crud',
    title: 'Aplikasi CRUD',
    subtitle: 'Input, edit, hapus data terintegrasi Google Sheets',
    icon: 'fa-database',
    features: [
      { name: 'CRUD data', desc: 'Create, Read, Update, Delete', price: 0, core: true },
      { name: 'Form input + validasi', desc: 'Form dengan pengecekan data', price: 0, core: true },
      { name: 'Sync Google Sheets', desc: 'Data tersimpan di Sheets', price: 0, core: true },
      { name: 'Table + search', desc: 'Tabel data dengan pencarian', price: 0, core: true },
      { name: 'Multi user (role)', desc: 'Admin, operator, viewer', price: 175000 },
      { name: 'Upload file/gambar', desc: 'Upload dan simpan file', price: 125000 },
      { name: 'Export Excel/CSV', desc: 'Download data ke file', price: 75000 },
      { name: 'Notifikasi basic', desc: 'Alert dan pemberitahuan', price: 125000 },
      { name: 'Activity log', desc: 'Catatan aktivitas user', price: 125000 }
    ],
    priceRange: { min: 400000, max: 1100000 },
    examples: [
      'Data pelanggan (CRM sederhana)',
      'Inventory barang',
      'Data karyawan',
      'Manajemen proyek / task',
      'Sistem pencatatan keuangan sederhana'
    ]
  },
  {
    id: 'wedding',
    title: 'Wedding Invitation & Event Website',
    subtitle: 'Undangan digital, RSVP, dan website event',
    icon: 'fa-heart',
    features: [
      { name: 'Landing page undangan', desc: 'Halaman utama undangan', price: 0, core: true },
      { name: 'Info acara', desc: 'Detail waktu & tempat', price: 0, core: true },
      { name: 'RSVP ke Google Sheets', desc: 'Konfirmasi kehadiran', price: 0, core: true },
      { name: 'Countdown timer', desc: 'Hitung mundur acara', price: 0, core: true },
      { name: 'Buku tamu', desc: 'Pesan dari tamu', price: 50000 },
      { name: 'Musik background', desc: 'Musik latar halaman', price: 25000 },
      { name: 'Galeri foto/video', desc: 'Koleksi momen', price: 75000 },
      { name: 'Custom domain setup', desc: 'Domain sendiri', price: 75000 },
      { name: 'Animasi tambahan', desc: 'Efek visual lebih', price: 75000 }
    ],
    priceRange: { min: 150000, max: 500000 },
    examples: [
      'Wedding invitation digital',
      'Undangan ulang tahun',
      'Undangan seminar / event',
      'RSVP acara keluarga',
      'Buku tamu digital event'
    ]
  },
  {
    id: 'catalog',
    title: 'Katalog Produk / Menu Digital',
    subtitle: 'Tampilkan produk dengan QR code',
    icon: 'fa-book-open',
    features: [
      { name: 'List produk dari Google Sheets', desc: 'Data produk dari Sheets', price: 0, core: true },
      { name: 'Kategori basic', desc: 'Pengelompokan produk', price: 0, core: true },
      { name: 'Detail produk', desc: 'Halaman detail item', price: 0, core: true },
      { name: 'QR code', desc: 'Scan untuk akses', price: 0, core: true },
      { name: 'Search produk', desc: 'Pencarian produk', price: 50000 },
      { name: 'Wishlist sederhana', desc: 'Simpan produk favorit', price: 75000 },
      { name: 'Tampilan grid/list', desc: 'Opsi layout tampilan', price: 50000 },
      { name: 'Tombol order WhatsApp', desc: 'Langsung order via WA', price: 100000 },
      { name: 'Multi kategori dinamis', desc: 'Kategori fleksibel', price: 125000 }
    ],
    priceRange: { min: 250000, max: 700000 },
    examples: [
      'Menu restoran QR code',
      'Katalog produk UMKM',
      'Katalog jasa (agency/freelancer)',
      'Menu cafe / coffee shop',
      'Brosur digital interaktif'
    ]
  },
  {
    id: 'booking',
    title: 'Booking & Reservasi',
    subtitle: 'Sistem pemesanan dan penjadwalan',
    icon: 'fa-calendar-check',
    features: [
      { name: 'Form booking', desc: 'Form pemesanan', price: 0, core: true },
      { name: 'Pilih tanggal', desc: 'Pemilihan jadwal', price: 0, core: true },
      { name: 'Data ke Google Sheets', desc: 'Data booking tersimpan', price: 0, core: true },
      { name: 'Halaman admin basic', desc: 'Panel admin sederhana', price: 0, core: true },
      { name: 'Kalender interaktif', desc: 'Kalender booking', price: 125000 },
      { name: 'Notifikasi WA/email', desc: 'Notifikasi otomatis', price: 175000 },
      { name: 'Status booking', desc: 'Status pesanan', price: 100000 },
      { name: 'Multi layanan', desc: 'Beberapa jenis layanan', price: 75000 },
      { name: 'Reminder sederhana', desc: 'Pengingat jadwal', price: 125000 }
    ],
    priceRange: { min: 400000, max: 900000 },
    examples: [
      'Booking jasa freelancer',
      'Reservasi barbershop / salon',
      'Booking lapangan olahraga',
      'Appointment klinik',
      'Reservasi tempat makan'
    ]
  },
  {
    id: 'form',
    title: 'Form & Survey System',
    subtitle: 'Form input dan survey dengan Google Sheets',
    icon: 'fa-clipboard-list',
    features: [
      { name: 'Form input', desc: 'Formulir input data', price: 0, core: true },
      { name: 'Simpan ke Google Sheets', desc: 'Data ke spreadsheet', price: 0, core: true },
      { name: 'Validasi basic', desc: 'Pengecekan input', price: 0, core: true },
      { name: 'Mobile friendly', desc: 'Responsif di HP', price: 0, core: true },
      { name: 'Multi step form', desc: 'Form bertahap', price: 75000 },
      { name: 'Conditional logic', desc: 'Logika bercabang', price: 125000 },
      { name: 'Dashboard hasil', desc: 'Visualisasi respon', price: 125000 },
      { name: 'Export data', desc: 'Download respon', price: 75000 },
      { name: 'Anti spam', desc: 'Proteksi spam', price: 50000 }
    ],
    priceRange: { min: 150000, max: 500000 },
    examples: [
      'Form feedback pelanggan',
      'Survey kepuasan pelanggan',
      'Form pendaftaran event',
      'Lead generation form',
      'Polling sederhana'
    ]
  },
  {
    id: 'lms',
    title: 'LMS / Edukasi',
    subtitle: 'Platform pembelajaran dan kursus online',
    icon: 'fa-graduation-cap',
    features: [
      { name: 'Halaman course', desc: 'Halaman kursus', price: 0, core: true },
      { name: 'Struktur materi', desc: 'Susunan materi', price: 0, core: true },
      { name: 'Akses konten basic', desc: 'Akses materi dasar', price: 0, core: true },
      { name: 'Data user sederhana', desc: 'Manajemen peserta', price: 0, core: true },
      { name: 'Login user', desc: 'Autentikasi peserta', price: 175000 },
      { name: 'Progress tracking', desc: 'Lacak progress belajar', price: 175000 },
      { name: 'Video embed', desc: 'Embed video materi', price: 50000 },
      { name: 'Quiz', desc: 'Soal dan penilaian', price: 175000 },
      { name: 'Membership basic', desc: 'Sistem keanggotaan', price: 200000 }
    ],
    priceRange: { min: 500000, max: 1200000 },
    examples: [
      'Website kursus online sederhana',
      'Platform materi belajar',
      'Membership konten edukasi',
      'Website pelatihan internal',
      'Portal pembelajaran UMKM'
    ]
  }
];

/**
 * Generate invoice number
 */
function generateInvoiceNumber() {
  const date = new Date();
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');
  const random = Math.floor(Math.random() * 1000).toString().padStart(3, '0');
  return `INV-${year}${month}${day}-${random}`;
}

/**
 * Format date to Indonesian locale
 */
function formatDate(date) {
  const options = { day: 'numeric', month: 'long', year: 'numeric' };
  return date.toLocaleDateString('id-ID', options);
}

/**
 * Print invoice
 */
function printInvoice() {
  if (!window.selectedCategory) {
    alert('Silakan pilih kategori aplikasi terlebih dahulu!');
    return;
  }

  const category = window.selectedCategory;
  const total = calcTotal();
  const invoiceNumber = generateInvoiceNumber();
  const today = new Date();
  const dueDate = new Date(today);
  dueDate.setDate(dueDate.getDate() + 7);

  // Collect all selected features
  const selectedFeatures = [];
  
  // Core features
  category.features.filter(f => f.core).forEach(f => {
    selectedFeatures.push({ name: f.name, price: 0, type: 'core' });
  });

  // Additional features
  document.querySelectorAll('.price-cb:not([disabled])').forEach(cb => {
    if (cb.checked) {
      const item = cb.closest('.price-item');
      if (item?.dataset.name) {
        selectedFeatures.push({ 
          name: item.dataset.name, 
          price: parseInt(item.dataset.price || 0), 
          type: 'additional' 
        });
      }
    }
  });

  // Build invoice HTML
  const invoiceHTML = `
    <!DOCTYPE html>
    <html lang="id">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Invoice - ISR Tech</title>
      <style>
        * { margin: 0; padding: 0; box-sizing: border-box; }
        body {
          font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
          background: #f5f5f5;
          padding: 20px;
          color: #333;
        }
        .invoice-container {
          max-width: 800px;
          margin: 0 auto;
          background: white;
          border-radius: 12px;
          box-shadow: 0 4px 20px rgba(0,0,0,0.1);
          overflow: hidden;
        }
        .invoice-header {
          background: linear-gradient(135deg, #222831, #2D4059);
          color: white;
          padding: 30px;
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
        }
        .invoice-header h1 {
          font-size: 28px;
          font-weight: 800;
          color: #FF5722;
        }
        .invoice-header .company-info {
          text-align: right;
          font-size: 14px;
          line-height: 1.6;
          color: #EEEEEE;
        }
        .invoice-number {
          font-size: 16px;
          font-weight: 700;
          color: #FF7043;
          margin-top: 8px;
        }
        .invoice-body {
          padding: 30px;
        }
        .info-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 20px;
          margin-bottom: 30px;
        }
        .info-box {
          background: #f8f9fa;
          padding: 15px;
          border-radius: 8px;
          border-left: 4px solid #FF5722;
        }
        .info-box h4 {
          font-size: 12px;
          text-transform: uppercase;
          color: #888;
          margin-bottom: 8px;
          letter-spacing: 1px;
        }
        .info-box p {
          font-size: 14px;
          color: #333;
          line-height: 1.5;
        }
        table {
          width: 100%;
          border-collapse: collapse;
          margin-bottom: 30px;
        }
        thead th {
          background: #222831;
          color: white;
          padding: 12px 15px;
          text-align: left;
          font-size: 13px;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 0.5px;
        }
        thead th:first-child { border-radius: 8px 0 0 0; }
        thead th:last-child { border-radius: 0 8px 0 0; }
        tbody td {
          padding: 12px 15px;
          border-bottom: 1px solid #e9ecef;
          font-size: 14px;
        }
        tbody tr:hover { background: #f8f9fa; }
        .text-right { text-align: right; }
        .text-center { text-align: center; }
        .badge {
          display: inline-block;
          padding: 4px 10px;
          border-radius: 20px;
          font-size: 11px;
          font-weight: 600;
        }
        .badge-core {
          background: #e8f5e9;
          color: #2e7d32;
        }
        .badge-additional {
          background: #fff3e0;
          color: #e65100;
        }
        .total-section {
          background: linear-gradient(135deg, #222831, #2D4059);
          color: white;
          padding: 25px 30px;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }
        .total-section .total-label {
          font-size: 14px;
          text-transform: uppercase;
          letter-spacing: 1px;
          color: #ccc;
        }
        .total-section .total-amount {
          font-size: 32px;
          font-weight: 800;
          color: #FF5722;
        }
        .invoice-footer {
          padding: 20px 30px;
          background: #f8f9fa;
          text-align: center;
          font-size: 12px;
          color: #888;
          line-height: 1.6;
          border-top: 1px solid #e9ecef;
        }
        .invoice-footer strong { color: #FF5722; }
        .note-box {
          background: #fff8e1;
          border: 1px solid #ffcc02;
          border-radius: 8px;
          padding: 15px 20px;
          margin: 20px 0;
          font-size: 13px;
          color: #795548;
        }
        .note-box i { color: #ff9800; }
        @media print {
          body { background: white; padding: 0; }
          .invoice-container { box-shadow: none; border-radius: 0; }
        }
      </style>
    </head>
    <body>
      <div class="invoice-container">
        <div class="invoice-header">
          <div>
            <h1>ISR Tech</h1>
            <div class="invoice-number">${invoiceNumber}</div>
          </div>
          <div class="company-info">
            <div>Gifary Setia Rahman</div>
            <div>Bandung, Jawa Barat</div>
            <div>+62 838-2905-8640</div>
            <div>gifarysetia10@gmail.com</div>
          </div>
        </div>

        <div class="invoice-body">
          <div class="info-grid">
            <div class="info-box">
              <h4>Ditagihkan Kepada</h4>
              <p>Nama Pelanggan</p>
              <p style="color:#888;font-size:12px;">(Isi dengan data pelanggan)</p>
            </div>
            <div class="info-box">
              <h4>Detail Invoice</h4>
              <p><strong>Tanggal:</strong> ${formatDate(today)}</p>
              <p><strong>Jatuh Tempo:</strong> ${formatDate(dueDate)}</p>
              <p><strong>Status:</strong> <span style="color:#ff9800;">Menunggu Pembayaran</span></p>
            </div>
          </div>

          <div class="note-box">
            <i>📌</i> <strong>Catatan:</strong> Silakan isi nama pelanggan di kolom "Ditagihkan Kepada". Invoice ini adalah estimasi biaya, harga final setelah konsultasi.
          </div>

          <table>
            <thead>
              <tr>
                <th>Deskripsi</th>
                <th>Jenis</th>
                <th class="text-right">Harga</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>${category.title} - Harga Dasar</strong></td>
                <td><span class="badge badge-core">Paket</span></td>
                <td class="text-right">${window.formatRp(category.priceRange.min)}</td>
              </tr>
              ${selectedFeatures.filter(f => f.type === 'additional').map(f => `
                <tr>
                  <td>${f.name}</td>
                  <td><span class="badge badge-additional">Tambahan</span></td>
                  <td class="text-right">${window.formatRp(f.price)}</td>
                </tr>
              `).join('')}
            </tbody>
          </table>

          <div style="font-size:13px;color:#666;margin-top:15px;">
            <strong>Lingkup Pengerjaan:</strong>
            <ul style="margin-top:8px;padding-left:20px;line-height:1.8;">
              ${selectedFeatures.map(f => `<li>${f.name} ${f.price > 0 ? '(+' + window.formatRp(f.price) + ')' : '(Termasuk)'}</li>`).join('')}
            </ul>
          </div>
        </div>

        <div class="total-section">
          <div class="total-label">Total Estimasi</div>
          <div class="total-amount">${window.formatRp(total)}</div>
        </div>

        <div class="invoice-footer">
          <p>Terima kasih telah mempercayakan project Anda kepada <strong>ISR Tech</strong>.</p>
          <p>📧 gifarysetia10@gmail.com | 📞 +62 838-2905-8640</p>
          <p style="margin-top:8px;">Integrating System & Reporting — Solusi Digital Bisnis Anda</p>
        </div>
      </div>

      <div style="text-align:center;margin-top:20px;">
        <button onclick="window.print()" style="
          background: linear-gradient(135deg, #FF5722, #FF7043);
          color: white;
          border: none;
          padding: 12px 30px;
          border-radius: 8px;
          font-size: 16px;
          font-weight: 700;
          cursor: pointer;
          box-shadow: 0 4px 12px rgba(255,87,34,0.3);
        ">
          🖨️ Cetak Invoice
        </button>
        <button onclick="window.close()" style="
          background: #f5f5f5;
          color: #333;
          border: 1px solid #ddd;
          padding: 12px 30px;
          border-radius: 8px;
          font-size: 16px;
          font-weight: 600;
          cursor: pointer;
          margin-left: 10px;
        ">
          Tutup
        </button>
      </div>
    </body>
    </html>
  `;

  // Open invoice in new window
  const invoiceWindow = window.open('', '_blank', 'width=900,height=800');
  if (invoiceWindow) {
    invoiceWindow.document.write(invoiceHTML);
    invoiceWindow.document.close();
  }
}

/**
 * Render seluruh section pricing
 */
function renderPricingSection() {
  const container = document.getElementById('pricing-content');
  if (!container) return;

  container.innerHTML = `
    <div class="grid lg:grid-cols-3 gap-6">
      <!-- LEFT: Feature Categories -->
      <div class="lg:col-span-2 space-y-4" id="pricing-categories">
        <!-- Category Selector -->
        <div class="card-solid rounded-2xl p-5">
          <div class="text-light text-sm font-bold mb-3 flex items-center gap-2">
            <i class="fa-solid fa-folder-tree text-accent"></i> Pilih Kategori Aplikasi
          </div>
          <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-2" id="category-selector">
            <!-- Category buttons will be injected here -->
          </div>
        </div>
        
        <!-- Feature List for Selected Category -->
        <div id="features-container" class="space-y-4">
          <!-- Features will be injected here -->
        </div>
        
        <!-- Example Applications -->
        <div id="examples-container" class="card-solid rounded-2xl p-5 hidden">
          <div class="text-light text-sm font-bold mb-3 flex items-center gap-2">
            <i class="fa-solid fa-lightbulb text-yellow-400"></i> Contoh Aplikasi
          </div>
          <ul id="examples-list" class="space-y-2">
            <!-- Examples will be injected here -->
          </ul>
        </div>
      </div>

      <!-- RIGHT: Sticky Summary Panel -->
      <div class="lg:col-span-1">
        <div class="sticky top-28 space-y-4">
          <!-- Total Card -->
          <div class="rounded-2xl p-5" style="background:linear-gradient(135deg,rgba(255,87,34,0.14),rgba(45,64,89,0.22));border:1px solid rgba(255,87,34,0.32)">
            <div class="text-gray-400 text-xs font-semibold uppercase tracking-widest mb-1">Estimasi Total</div>
            <div id="total-price" class="text-3xl font-black text-light mb-1">Rp 0</div>
            <div id="price-note" class="text-gray-500 text-xs mb-4">Pilih kategori aplikasi terlebih dahulu</div>
            <!-- Price Range Info -->
            <div id="price-range-info" class="mb-4 hidden">
              <div class="flex justify-between text-xs text-gray-500 mb-1.5">
                <span>Range harga kategori</span>
                <span id="price-range-text"></span>
              </div>
            </div>
            <!-- Progress bar -->
            <div class="mb-4">
              <div class="flex justify-between text-xs text-gray-500 mb-1.5">
                <span>Fitur terpilih</span>
                <span id="feat-count">0 fitur</span>
              </div>
              <div class="h-1.5 rounded-full bg-white/10 overflow-hidden">
                <div id="progress-bar" class="h-full rounded-full transition-all duration-500" style="background:linear-gradient(90deg,#FF5722,#FF7043);width:0%"></div>
              </div>
            </div>
            <button id="invoice-btn" onclick="window.pricingModule?.printInvoice?.()" 
               class="btn-accent w-full py-3.5 rounded-xl font-bold text-sm flex items-center justify-center gap-2">
              <i class="fa-solid fa-file-invoice text-lg"></i> Cetak Invoice
            </button>
            <p class="text-gray-600 text-[10px] text-center mt-3">*Harga final disesuaikan setelah konsultasi</p>
          </div>

          <!-- Selected Features List -->
          <div class="card-solid rounded-2xl p-5">
            <div class="flex items-center justify-between mb-4">
              <div class="text-light text-sm font-bold">Fitur Terpilih</div>
              <button onclick="window.pricingModule?.resetAll?.()" class="text-gray-500 text-xs hover:text-accent transition-colors flex items-center gap-1">
                <i class="fa-solid fa-rotate-left text-[10px]"></i> Reset
              </button>
            </div>
            <div id="selected-list" class="space-y-2 max-h-72 overflow-y-auto pr-1">
              <div id="selected-empty" class="text-gray-600 text-xs text-center py-3">Pilih kategori dan fitur</div>
            </div>
          </div>
        </div>
      </div><!-- /right col -->
    </div><!-- /grid -->
  `;

  // Inject category buttons and features
  injectCategories();
}

/**
 * Inject category selector buttons
 */
function injectCategories() {
  const categorySelector = document.getElementById('category-selector');
  if (!categorySelector) return;

  pricingCategories.forEach((category) => {
    const btn = document.createElement('button');
    btn.className = 'cat-select-btn card-solid border border-card-border rounded-xl px-4 py-3 text-sm font-semibold transition-all hover:border-accent/40';
    btn.setAttribute('data-category', category.id);
    btn.innerHTML = `
      <div class="flex items-center gap-2">
        <i class="fa-solid ${category.icon} text-accent text-xs"></i>
        <span class="text-light">${category.title}</span>
      </div>
      <div class="text-gray-500 text-[11px] mt-1">${window.formatRp(category.priceRange.min)} – ${window.formatRp(category.priceRange.max)}</div>
    `;
    
    btn.addEventListener('click', () => {
      selectCategory(category.id);
    });
    
    categorySelector.appendChild(btn);
  });
}

/**
 * Handle category selection
 */
function selectCategory(categoryId) {
  const category = pricingCategories.find(c => c.id === categoryId);
  if (!category) return;

  // Update category buttons active state
  document.querySelectorAll('.cat-select-btn').forEach(btn => {
    const isActive = btn.getAttribute('data-category') === categoryId;
    if (isActive) {
      btn.style.borderColor = '#FF5722';
      btn.style.background = 'rgba(255, 87, 34, 0.12)';
      btn.style.color = '#FF7043';
    } else {
      btn.style.borderColor = '';
      btn.style.background = '';
      btn.style.color = '';
    }
  });

  // Store selected category
  window.selectedCategory = category;

  // Render features for selected category
  renderFeatures(category);
  
  // Render examples
  renderExamples(category);

  // Update price range info
  updatePriceRangeInfo(category);

  // Update UI
  updatePriceUI();
}

/**
 * Render features for selected category
 */
function renderFeatures(category) {
  const featuresContainer = document.getElementById('features-container');
  if (!featuresContainer) return;

  // Check if core features are already checked
  const coreFeatures = category.features.filter(f => f.core);
  const additionalFeatures = category.features.filter(f => !f.core);

  featuresContainer.innerHTML = `
    <!-- Core Features (Wajib) -->
    <div class="card-solid rounded-2xl overflow-hidden border-accent/30">
      <div class="px-5 py-4" style="background: rgba(255,87,34,0.05); border-bottom: 1px solid rgba(255,87,34,0.15);">
        <div class="flex items-center gap-3">
          <div class="w-8 h-8 rounded-lg gradient-accent flex items-center justify-center text-white text-xs">
            <i class="fa-solid fa-star"></i>
          </div>
          <div>
            <div class="text-light font-bold text-sm">Fitur Utama</div>
            <div class="text-gray-500 text-xs">Termasuk dalam harga dasar</div>
          </div>
          <span class="ml-auto text-accent font-bold text-sm">${window.formatRp(category.priceRange.min)}</span>
        </div>
      </div>
      <div class="px-5 pb-4 pt-3">
        <div class="grid sm:grid-cols-2 gap-2">
          ${coreFeatures.map(feature => `
            <label class="price-item flex items-start gap-3 p-3 rounded-xl transition-all group" data-price="${feature.price}" data-name="${feature.name}" data-core="true">
              <input type="checkbox" class="price-cb mt-0.5 accent-orange-500 w-4 h-4 flex-shrink-0" checked disabled>
              <div class="flex-1">
                <div class="text-light text-xs font-semibold">${feature.name}</div>
                <div class="text-gray-500 text-[11px] mb-0.5">${feature.desc}</div>
                <div class="text-gray-600 font-normal text-xs">Sudah termasuk</div>
              </div>
            </label>
          `).join('')}
        </div>
      </div>
    </div>

    <!-- Additional Features -->
    <div class="card-solid rounded-2xl overflow-hidden">
      <button id="add-feat-toggle" class="w-full flex items-center justify-between px-5 py-4 text-left" aria-expanded="true">
        <div class="flex items-center gap-3">
          <div class="w-8 h-8 rounded-lg bg-secondary/40 flex items-center justify-center text-blue-300 text-xs">
            <i class="fa-solid fa-puzzle-piece"></i>
          </div>
          <div>
            <div class="text-light font-bold text-sm">Fitur Tambahan</div>
            <div class="text-gray-500 text-xs">Pilih sesuai kebutuhan</div>
          </div>
        </div>
        <i class="fa-solid fa-chevron-down cat-chevron text-gray-500 text-xs transition-transform duration-300" style="transform:rotate(180deg)"></i>
      </button>
      <div class="cat-body">
        <div class="px-5 pb-4 grid sm:grid-cols-2 gap-2">
          ${additionalFeatures.map(feature => `
            <label class="price-item flex items-start gap-3 p-3 rounded-xl cursor-pointer hover:bg-white/5 transition-all group" data-price="${feature.price}" data-name="${feature.name}" data-core="false">
              <input type="checkbox" class="price-cb mt-0.5 accent-orange-500 w-4 h-4 flex-shrink-0">
              <div class="flex-1">
                <div class="text-light text-xs font-semibold group-hover:text-accent transition-colors">${feature.name}</div>
                <div class="text-gray-500 text-[11px] mb-0.5">${feature.desc}</div>
                <div class="text-accent font-bold text-xs">+ Rp ${feature.price.toLocaleString('id-ID')}</div>
              </div>
            </label>
          `).join('')}
        </div>
      </div>
    </div>
  `;

  // Toggle additional features
  const toggleBtn = document.getElementById('add-feat-toggle');
  const catBody = document.querySelector('.cat-body');
  if (toggleBtn && catBody) {
    toggleBtn.addEventListener('click', () => {
      const chevron = toggleBtn.querySelector('.cat-chevron');
      const isOpen = !catBody.classList.contains('cat-closed');
      
      catBody.classList.toggle('cat-closed', isOpen);
      catBody.style.maxHeight = isOpen ? '0' : catBody.scrollHeight + 'px';
      catBody.style.overflow = isOpen ? 'hidden' : '';
      
      if (chevron) {
        chevron.style.transform = isOpen ? 'rotate(0deg)' : 'rotate(180deg)';
      }
    });
    
    // Initialize max height
    catBody.style.maxHeight = catBody.scrollHeight + 'px';
    catBody.style.overflow = 'hidden';
    catBody.style.transition = 'max-height 0.4s ease';
  }

  // Attach event listeners to checkboxes
  attachCheckboxListeners();
}

/**
 * Render examples for selected category
 */
function renderExamples(category) {
  const examplesContainer = document.getElementById('examples-container');
  const examplesList = document.getElementById('examples-list');
  
  if (!examplesContainer || !examplesList) return;

  if (category.examples && category.examples.length > 0) {
    examplesContainer.classList.remove('hidden');
    examplesList.innerHTML = category.examples.map(example => `
      <li class="flex items-start gap-2 text-gray-400 text-xs">
        <span class="text-accent text-[10px] mt-0.5">→</span>${example}
      </li>
    `).join('');
  } else {
    examplesContainer.classList.add('hidden');
  }
}

/**
 * Update price range info
 */
function updatePriceRangeInfo(category) {
  const rangeInfo = document.getElementById('price-range-info');
  const rangeText = document.getElementById('price-range-text');
  
  if (!rangeInfo || !rangeText || !category) return;

  rangeInfo.classList.remove('hidden');
  rangeText.textContent = `${window.formatRp(category.priceRange.min)} – ${window.formatRp(category.priceRange.max)}`;
}

/**
 * Attach checkbox listeners
 */
function attachCheckboxListeners() {
  document.querySelectorAll('.price-cb:not([disabled])').forEach(cb => {
    // Remove existing listeners
    const newCb = cb.cloneNode(true);
    cb.parentNode.replaceChild(newCb, cb);
    
    newCb.addEventListener('change', updatePriceUI);
  });

  // Highlight effect
  document.querySelectorAll('.price-item').forEach(item => {
    const cb = item.querySelector('.price-cb');
    if (!cb || cb.disabled) return;
    
    cb.addEventListener('change', () => {
      if (cb.checked) {
        item.style.background = 'rgba(255,87,34,0.08)';
        item.style.borderRadius = '12px';
      } else {
        item.style.background = '';
        item.style.borderRadius = '';
      }
    });
  });
}

/**
 * Calculate total price from selected category + additional features
 */
function calcTotal() {
  if (!window.selectedCategory) return 0;
  
  let total = window.selectedCategory.priceRange.min;
  
  document.querySelectorAll('.price-cb:not([disabled])').forEach(cb => {
    if (cb.checked) {
      const item = cb.closest('.price-item');
      if (item) total += parseInt(item.dataset.price || 0);
    }
  });
  
  return total;
}

/**
 * Get count of selected features (core + additional)
 */
function getCheckedCount() {
  if (!window.selectedCategory) return 0;
  
  let count = window.selectedCategory.features.filter(f => f.core).length;
  
  document.querySelectorAll('.price-cb:not([disabled])').forEach(cb => {
    if (cb.checked) count++;
  });
  
  return count;
}

/**
 * Build the selected features list in summary panel
 */
function buildSelectedList() {
  const container = document.getElementById('selected-list');
  if (!container) return;

  // Remove old rows
  container.querySelectorAll('.sel-row').forEach(r => r.remove());

  if (!window.selectedCategory) {
    document.getElementById('selected-empty')?.classList.remove('hidden');
    return;
  }

  const emptyEl = document.getElementById('selected-empty');
  let hasContent = false;

  // Core features
  const category = window.selectedCategory;
  category.features.filter(f => f.core).forEach(feature => {
    hasContent = true;
    const row = document.createElement('div');
    row.className = 'sel-row flex items-center justify-between text-xs py-1.5';
    row.innerHTML = `
      <span style="color:#d1d5db" class="flex items-center gap-2 flex-1 min-w-0">
        <i class="fa-solid fa-check text-accent flex-shrink-0" style="font-size:9px"></i>
        <span class="truncate">${feature.name}</span>
      </span>
      <span class="text-gray-600 text-xs flex-shrink-0 ml-2">Termasuk</span>
    `;
    container.appendChild(row);
  });

  // Additional features
  document.querySelectorAll('.price-cb:not([disabled])').forEach(cb => {
    if (cb.checked) {
      hasContent = true;
      const item = cb.closest('.price-item');
      if (!item) return;
      
      const name = item.dataset.name || 'Fitur';
      const price = parseInt(item.dataset.price || 0);
      
      const row = document.createElement('div');
      row.className = 'sel-row flex items-center justify-between text-xs py-1.5';
      row.innerHTML = `
        <span style="color:#d1d5db" class="flex items-center gap-2 flex-1 min-w-0">
          <i class="fa-solid fa-plus text-accent flex-shrink-0" style="font-size:9px"></i>
          <span class="truncate">${name}</span>
        </span>
        <span class="text-accent font-semibold flex-shrink-0 ml-2">+${window.formatRp(price)}</span>
      `;
      container.appendChild(row);
    }
  });

  if (emptyEl) emptyEl.classList.toggle('hidden', hasContent);
}

/**
 * Update all UI elements in summary panel
 */
function updatePriceUI() {
  const total = calcTotal();
  const count = getCheckedCount();
  const category = window.selectedCategory;

  // Update total price display
  const priceEl = document.getElementById('total-price');
  if (priceEl) {
    priceEl.textContent = total > 0 ? window.formatRp(total) : 'Rp 0';
  }

  // Update note
  const noteEl = document.getElementById('price-note');
  if (noteEl) {
    if (!category) {
      noteEl.textContent = 'Pilih kategori aplikasi terlebih dahulu';
    } else {
      noteEl.textContent = `Harga dasar ${window.formatRp(category.priceRange.min)} + fitur tambahan`;
    }
  }

  // Update feature count
  const cntEl = document.getElementById('feat-count');
  if (cntEl) {
    cntEl.textContent = count + ' fitur';
  }

  // Update progress bar
  const bar = document.getElementById('progress-bar');
  if (bar) {
    const totalFeaturesInCategory = category ? category.features.length : 0;
    const pct = totalFeaturesInCategory > 0 ? Math.min(Math.round((count / totalFeaturesInCategory) * 100), 100) : 0;
    bar.style.width = Math.max(pct, 0) + '%';
  }

  // Update selected list
  buildSelectedList();

  // Enable/disable invoice button
  const invoiceBtn = document.getElementById('invoice-btn');
  if (invoiceBtn) {
    invoiceBtn.disabled = !category;
    invoiceBtn.style.opacity = category ? '1' : '0.5';
    invoiceBtn.style.cursor = category ? 'pointer' : 'not-allowed';
  }
}

/**
 * Reset all selections
 */
function resetAll() {
  // Reset category buttons
  document.querySelectorAll('.cat-select-btn').forEach(btn => {
    btn.style.borderColor = '';
    btn.style.background = '';
    btn.style.color = '';
  });

  // Clear selected category
  window.selectedCategory = null;

  // Clear features container
  const featuresContainer = document.getElementById('features-container');
  if (featuresContainer) featuresContainer.innerHTML = '';

  // Hide examples
  const examplesContainer = document.getElementById('examples-container');
  if (examplesContainer) examplesContainer.classList.add('hidden');

  // Hide price range
  const rangeInfo = document.getElementById('price-range-info');
  if (rangeInfo) rangeInfo.classList.add('hidden');

  // Update UI
  updatePriceUI();
}

/**
 * Initialize pricing calculator module
 */
export function initPricingCalculator() {
  // Render entire pricing section first
  renderPricingSection();

  // Wait for DOM to update, then initialize
  setTimeout(() => {
    // Set initial state
    window.selectedCategory = null;
    window.pricingModule = {
      resetAll,
      updatePriceUI,
      calcTotal,
      getCheckedCount,
      selectCategory,
      printInvoice
    };

    // Initial UI update
    updatePriceUI();
  }, 0);
}