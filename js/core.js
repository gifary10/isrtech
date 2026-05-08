// ==================== CORE MODULE ====================
// Utility Functions + Application Data

// ==========================================
// UTILITY FUNCTIONS
// ==========================================

/**
 * Format number to Rupiah currency string
 * @param {number} n - Number to format
 * @returns {string} Formatted Rupiah string
 */
export function formatRp(n) {
  if (!n || n === 0) return 'Rp 0';
  if (n >= 1000000) {
    const juta = n / 1000000;
    return 'Rp ' + (Number.isInteger(juta) ? juta : juta.toFixed(1)) + ' Juta';
  }
  if (n >= 1000) return 'Rp ' + (n / 1000).toFixed(0) + '.000';
  return 'Rp ' + n;
}

/**
 * Format large numbers to short format (K/M)
 * @param {number} n - Number to format
 * @returns {string} Short formatted number
 */
export function formatShortNumber(n) {
  if (n >= 1000000) return (n / 1000000).toFixed(1) + 'M';
  if (n >= 1000) return (n / 1000).toFixed(0) + 'K';
  return n.toString();
}

/**
 * Debounce function to limit execution rate
 * @param {Function} func - Function to debounce
 * @param {number} wait - Wait time in milliseconds
 * @returns {Function} Debounced function
 */
export function debounce(func, wait) {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
}

/**
 * Throttle function to limit execution frequency
 * @param {Function} func - Function to throttle
 * @param {number} limit - Limit time in milliseconds
 * @returns {Function} Throttled function
 */
export function throttle(func, limit) {
  let inThrottle;
  return function(...args) {
    if (!inThrottle) {
      func.apply(this, args);
      inThrottle = true;
      setTimeout(() => inThrottle = false, limit);
    }
  };
}

// ==========================================
// APPLICATION DATA
// ==========================================

const TOTAL_FEATURES = 33;

export const pricingCategories = [
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
    title: 'Wedding Invitation & Event Wesbite',
    subtitle: 'Undangan digital, RSVP, dan wesbite event',
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
      'Wesbite kursus online sederhana',
      'Platform materi belajar',
      'Membership konten edukasi',
      'Wesbite pelatihan internal',
      'Portal pembelajaran UMKM'
    ]
  }
];

/**
 * Data segment pengguna
 */
export const segmentData = [
  {
    id: 0,
    title: 'Personal / UMKM',
    icon: 'fa-store',
    problems: [
      'Pencatatan masih manual di buku / Excel',
      'Tidak tahu stok & untung/rugi real-time',
      'Order & pelanggan susah dipantau',
      'Tidak ada sistem kasir / invoice otomatis'
    ],
    solutions: [
      'Aplikasi POS / Kasir berbasis web',
      'Manajemen stok & laporan otomatis',
      'CRM sederhana untuk data pelanggan',
      'Invoice & nota digital otomatis'
    ],
    examples: [
      'Sistem Kasir Online Toko Retail',
      'App Manajemen Warung Makan',
      'Sistem Order Laundry Digital',
      'Katalog Produk + Keranjang Belanja'
    ]
  },
  {
    id: 1,
    title: 'Perusahaan',
    icon: 'fa-building',
    problems: [
      'Data dari banyak divisi tidak terintegrasi',
      'Laporan ke manajemen lambat & tidak akurat',
      'Proses approval & workflow manual',
      'Tidak ada visibilitas KPI real-time'
    ],
    solutions: [
      'ERP / sistem terpadu antar divisi',
      'Executive dashboard real-time',
      'Sistem approval & workflow digital',
      'Integrasi API ke sistem existing'
    ],
    examples: [
      'HR & Payroll Management System',
      'Procurement & Inventory System',
      'Sales CRM + Pipeline Dashboard',
      'Executive BI Dashboard'
    ]
  },
  {
    id: 2,
    title: 'Instansi',
    icon: 'fa-landmark',
    problems: [
      'Pengolahan data warga / dokumen manual',
      'Layanan publik antrian panjang',
      'Laporan ke atasan / SKPD lambat',
      'Tidak ada sistem monitoring program'
    ],
    solutions: [
      'Sistem informasi desa / kelurahan',
      'Portal layanan publik digital',
      'Dashboard monitoring program kerja',
      'Sistem pelaporan digital terintegrasi'
    ],
    examples: [
      'Sistem Informasi Desa (SID)',
      'Portal Layanan Pengaduan Online',
      'Sistem Absensi & KPI ASN',
      'Dashboard Monev Program Dinas'
    ]
  }
];

/**
 * Data FAQ
 */
export const faqData = [
  { 
    q: 'Berapa biaya minimal untuk membuat aplikasi?', 
    a: 'Dimulai dari Rp 100.000 untuk setup project dasar. Aplikasi CRUD sederhana dengan Google Sheets biasanya berkisar Rp 700K–1.5Jt. Gunakan kalkulator harga di atas untuk estimasi sesuai fitur yang Anda butuhkan.' 
  },
  { 
    q: 'Database apa yang digunakan? Apakah perlu server?', 
    a: 'Tidak perlu server berbayar! Kami menggunakan LocalStorage / IndexedDB untuk penyimpanan lokal di browser, dan Google Sheets sebagai database utama yang gratis. Cocok untuk aplikasi CRUD, monitoring, dan digitalisasi proses kerja.' 
  },
  { 
    q: 'Apa itu Google Sheets sebagai database?', 
    a: 'Google Sheets digunakan sebagai backend/database melalui Google Apps Script API. Data tersimpan di spreadsheet milik Anda sendiri — gratis, mudah diakses, dan bisa diedit langsung. Tidak perlu hosting database khusus.' 
  },
  { 
    q: 'Apakah aplikasi bisa digunakan offline?', 
    a: 'Ya! Dengan fitur IndexedDB + Offline Mode, aplikasi tetap bisa digunakan meski tidak ada koneksi internet. Data akan disinkronkan ke Google Sheets saat koneksi kembali tersedia.' 
  },
  { 
    q: 'Berapa lama waktu pengerjaan?', 
    a: 'Aplikasi sederhana (CRUD + dashboard) biasanya 1–3 minggu. Aplikasi dengan fitur lengkap 3–6 minggu. Kami akan memberikan estimasi waktu yang pasti setelah analisa kebutuhan.' 
  },
  { 
    q: 'Apakah saya mendapatkan source code?', 
    a: 'Ya! Source code HTML/CSS/JS 100% milik Anda. Tidak ada ketergantungan pada framework berbayar atau lisensi khusus. Anda bebas mengembangkan sendiri atau meminta kami untuk melanjutkan.' 
  },
  { 
    q: 'Apakah bisa diinstall seperti aplikasi di HP?', 
    a: 'Bisa! Dengan fitur PWA (Progressive Web App), aplikasi bisa diinstall di HP Android maupun iOS langsung dari browser — tanpa perlu upload ke Play Store atau App Store.' 
  },
  { 
    q: 'Bagaimana dengan keamanan data di Google Sheets?', 
    a: 'Data di Google Sheets dilindungi oleh akun Google Anda. Akses diatur melalui sistem permission Google. Kami juga bisa menambahkan lapisan autentikasi login di sisi aplikasi untuk keamanan tambahan.' 
  },
];

/**
 * Data carousel layanan
 */
export const carouselData = [
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
 * Helper: Mendapatkan judul kategori
 * @returns {string[]} Array judul kategori
 */
export function getCategoryTitles() {
  return pricingCategories.map(cat => cat.title);
}

/**
 * Helper: Mendapatkan fitur berdasarkan judul kategori
 * @param {string} selectedCategory - Judul kategori yang dipilih
 * @returns {Array} Array nama fitur
 */
export function getFeatureNamesByCategory(selectedCategory) {
  if (!selectedCategory) return [];
  
  const category = pricingCategories.find(cat => cat.title === selectedCategory);
  if (category) {
    return category.features.map(feat => feat.name);
  }
  
  return [];
}

/**
 * Helper: Mendapatkan data kategori berdasarkan ID
 * @param {string} categoryId - ID kategori
 * @returns {Object|undefined} Data kategori
 */
export function getCategoryById(categoryId) {
  return pricingCategories.find(cat => cat.id === categoryId);
}

// Export TOTAL_FEATURES untuk digunakan modul lain
export { TOTAL_FEATURES };