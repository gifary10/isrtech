// ==================== ORDER FORM MODULE ====================

/**
 * Get category titles from estimasi.js pricing data
 */
function getCategoryTitles() {
  // Access pricingCategories from window if available
  if (window.pricingCategories) {
    return window.pricingCategories.map(cat => cat.title);
  }
  
  // Fallback data if pricingCategories not yet loaded
  return [
    'Dashboard & Monitoring',
    'Aplikasi CRUD',
    'Wedding Invitation & Event Website',
    'Katalog Produk / Menu Digital',
    'Booking & Reservasi',
    'Form & Survey System',
    'LMS / Edukasi'
  ];
}

/**
 * Get feature names filtered by selected category
 * @param {string} selectedCategory - Title of selected category
 * @returns {Array} Array of feature names
 */
function getFeatureNamesByCategory(selectedCategory) {
  if (!selectedCategory) return [];
  
  // Access pricingCategories from window if available
  if (window.pricingCategories) {
    const category = window.pricingCategories.find(cat => cat.title === selectedCategory);
    if (category) {
      return category.features.map(feat => feat.name);
    }
  }
  
  // Fallback mapping with all features data
  const categoryFeaturesMap = {
    'Dashboard & Monitoring': [
      'Integrasi Google Sheets (read data)',
      'Grafik KPI sederhana',
      'Filter data basic',
      'Responsive',
      'Export PDF report',
      'Multi dashboard',
      'Auto refresh data',
      'Login admin sederhana',
      'Custom theme / dark mode'
    ],
    'Aplikasi CRUD': [
      'CRUD data',
      'Form input + validasi',
      'Sync Google Sheets',
      'Table + search',
      'Multi user (role)',
      'Upload file/gambar',
      'Export Excel/CSV',
      'Notifikasi basic',
      'Activity log'
    ],
    'Wedding Invitation & Event Website': [
      'Landing page undangan',
      'Info acara',
      'RSVP ke Google Sheets',
      'Countdown timer',
      'Buku tamu',
      'Musik background',
      'Galeri foto/video',
      'Custom domain setup',
      'Animasi tambahan'
    ],
    'Katalog Produk / Menu Digital': [
      'List produk dari Google Sheets',
      'Kategori basic',
      'Detail produk',
      'QR code',
      'Search produk',
      'Wishlist sederhana',
      'Tampilan grid/list',
      'Tombol order WhatsApp',
      'Multi kategori dinamis'
    ],
    'Booking & Reservasi': [
      'Form booking',
      'Pilih tanggal',
      'Data ke Google Sheets',
      'Halaman admin basic',
      'Kalender interaktif',
      'Notifikasi WA/email',
      'Status booking',
      'Multi layanan',
      'Reminder sederhana'
    ],
    'Form & Survey System': [
      'Form input',
      'Simpan ke Google Sheets',
      'Validasi basic',
      'Mobile friendly',
      'Multi step form',
      'Conditional logic',
      'Dashboard hasil',
      'Export data',
      'Anti spam'
    ],
    'LMS / Edukasi': [
      'Halaman course',
      'Struktur materi',
      'Akses konten basic',
      'Data user sederhana',
      'Login user',
      'Progress tracking',
      'Video embed',
      'Quiz',
      'Membership basic'
    ]
  };
  
  return categoryFeaturesMap[selectedCategory] || [];
}

/**
 * Update features dropdown options based on selected category
 */
function updateFeaturesDropdown() {
  const apptypeSelect = document.getElementById('f-apptype');
  const featuresSelect = document.getElementById('f-features-select');
  
  if (!apptypeSelect || !featuresSelect) return;
  
  const selectedCategory = apptypeSelect.value;
  const features = getFeatureNamesByCategory(selectedCategory);
  
  // Clear existing options except the first one
  while (featuresSelect.options.length > 1) {
    featuresSelect.remove(1);
  }
  
  // Add new options
  features.forEach(feature => {
    const option = document.createElement('option');
    option.value = feature;
    option.textContent = feature;
    option.style.backgroundColor = '#222831';
    featuresSelect.appendChild(option);
  });
  
  // Reset selected value
  featuresSelect.value = '';
  
  // Disable features dropdown if no category selected
  featuresSelect.disabled = !selectedCategory;
  if (!selectedCategory) {
    featuresSelect.style.opacity = '0.5';
    featuresSelect.style.cursor = 'not-allowed';
  } else {
    featuresSelect.style.opacity = '1';
    featuresSelect.style.cursor = 'pointer';
  }
}

/**
 * Render order form HTML
 */
function renderOrderForm() {
  const container = document.getElementById('order-form-container');
  if (!container) return;

  const categoryTitles = getCategoryTitles();

  container.innerHTML = `
    <div class="card-solid rounded-3xl p-7 md:p-10 reveal">
      <div id="order-form" class="space-y-5">
        <div class="grid md:grid-cols-2 gap-5">
          <div>
            <label class="block text-gray-300 text-sm font-semibold mb-2">Nama Lengkap *</label>
            <input type="text" id="f-name" placeholder="Nama Anda"
              class="w-full bg-primary/50 border border-card-border rounded-xl px-4 py-3.5 text-light text-sm placeholder-gray-600 focus:outline-none focus:border-accent/60 transition-colors" />
          </div>
          <div>
            <label class="block text-gray-300 text-sm font-semibold mb-2">Email *</label>
            <input type="email" id="f-email" placeholder="email@bisnis.com"
              class="w-full bg-primary/50 border border-card-border rounded-xl px-4 py-3.5 text-light text-sm placeholder-gray-600 focus:outline-none focus:border-accent/60 transition-colors" />
          </div>
        </div>

        <div>
          <label class="block text-gray-300 text-sm font-semibold mb-2">WhatsApp *</label>
          <div class="flex">
            <span class="flex items-center gap-2 bg-secondary/30 border border-card-border border-r-0 rounded-l-xl px-4 text-gray-400 text-sm">
              <i class="fa-brands fa-whatsapp text-green-400"></i>+62
            </span>
            <input type="tel" id="f-wa" placeholder="812-3456-7890"
              class="flex-1 bg-primary/50 border border-card-border rounded-r-xl px-4 py-3.5 text-light text-sm placeholder-gray-600 focus:outline-none focus:border-accent/60 transition-colors" />
          </div>
        </div>

        <div>
          <label class="block text-gray-300 text-sm font-semibold mb-2">Jenis Aplikasi yang Dibutuhkan *</label>
          <select id="f-apptype"
            class="w-full bg-primary/50 border border-card-border rounded-xl px-4 py-3.5 text-sm focus:outline-none focus:border-accent/60 transition-colors appearance-none" style="color: #d1d5db;">
            <option value="" style="background:#222831">-- Pilih Jenis Aplikasi --</option>
            ${categoryTitles.map(title => `
              <option value="${title}" style="background:#222831">${title}</option>
            `).join('')}
          </select>
        </div>

        <div>
          <label class="block text-gray-300 text-sm font-semibold mb-2">Tambahan Fitur</label>
          <select id="f-features-select" disabled
            class="w-full bg-primary/50 border border-card-border rounded-xl px-4 py-3.5 text-sm focus:outline-none focus:border-accent/60 transition-colors appearance-none" style="color: #d1d5db; opacity: 0.5; cursor: not-allowed;">
            <option value="" style="background:#222831">-- Pilih Jenis Aplikasi Terlebih Dahulu --</option>
          </select>
          <p class="text-gray-500 text-xs mt-1">Pilih jenis aplikasi terlebih dahulu untuk melihat fitur yang tersedia</p>
        </div>

        <div>
          <label class="block text-gray-300 text-sm font-semibold mb-2">Ceritakan Kebutuhan Aplikasi yang Ingin Dibuat</label>
          <textarea id="f-desc" placeholder="Contoh: login user, dashboard penjualan, export ke Excel, notifikasi WhatsApp, dll."
            rows="4"
            class="w-full bg-primary/50 border border-card-border rounded-xl px-4 py-3.5 text-light text-sm placeholder-gray-600 focus:outline-none focus:border-accent/60 transition-colors resize-none"></textarea>
        </div>

        <div>
          <label class="block text-gray-300 text-sm font-semibold mb-2">Target Deadline</label>
          <select id="f-deadline"
            class="w-full bg-primary/50 border border-card-border rounded-xl px-4 py-3.5 text-sm focus:outline-none focus:border-accent/60 transition-colors" style="color: #d1d5db;">
            <option value="" style="background:#222831">-- Pilih Target Deadline --</option>
            <option value="3minggu" style="background:#222831">3 Minggu</option>
            <option value="5minggu" style="background:#222831">5 Minggu</option>
            <option value="7minggu" style="background:#222831">7 Minggu</option>
            <option value="10minggu" style="background:#222831">10 Minggu</option>
          </select>
        </div>

        <div id="form-error" class="hidden text-red-400 text-sm bg-red-500/10 border border-red-500/20 rounded-xl px-4 py-3"></div>
        <div id="form-success" class="hidden text-green-400 text-sm bg-green-500/10 border border-green-500/20 rounded-xl px-4 py-3"></div>

        <button id="submit-order-btn" class="btn-accent w-full py-4 rounded-2xl font-bold text-base flex items-center justify-center gap-3 relative z-10">
          <i class="fa-solid fa-paper-plane"></i>
          Kirim Brief Project
        </button>

        <p class="text-center text-gray-500 text-xs">
          Atau langsung hubungi kami via
          <a href="https://wa.me/6283829058640" target="_blank" class="text-accent hover:text-accent-light">
            <i class="fa-brands fa-whatsapp"></i> WhatsApp
          </a>
        </p>
      </div>
    </div>
  `;

  // Re-attach reveal observer for newly added elements
  if (window.revealObserver) {
    document.querySelectorAll('#order-form-container .reveal').forEach(el => {
      window.revealObserver.observe(el);
    });
  }
}

/**
 * Validate and submit order form
 */
function submitOrder() {
  const name = document.getElementById('f-name')?.value.trim();
  const email = document.getElementById('f-email')?.value.trim();
  const wa = document.getElementById('f-wa')?.value.trim();
  const apptype = document.getElementById('f-apptype')?.value;
  const featuresSelect = document.getElementById('f-features-select')?.value;
  const desc = document.getElementById('f-desc')?.value.trim() || '-';
  const deadline = document.getElementById('f-deadline')?.value || '-';
  const errEl = document.getElementById('form-error');
  const sucEl = document.getElementById('form-success');

  // Hide previous messages
  if (errEl) errEl.classList.add('hidden');
  if (sucEl) sucEl.classList.add('hidden');

  // Validate required fields
  if (!name || !email || !wa || !apptype) {
    if (errEl) { 
      errEl.textContent = '⚠ Mohon lengkapi field wajib: Nama, Email, WhatsApp, dan Jenis Aplikasi.';
      errEl.classList.remove('hidden'); 
    }
    return;
  }
  
  // Validate email format
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    if (errEl) { 
      errEl.textContent = '⚠ Format email tidak valid.';
      errEl.classList.remove('hidden'); 
    }
    return;
  }

  // Format deadline for display
  const deadlineMap = {
    '3minggu': '3 Minggu',
    '5minggu': '5 Minggu',
    '7minggu': '7 Minggu',
    '10minggu': '10 Minggu'
  };
  const deadlineDisplay = deadlineMap[deadline] || deadline;

  // Get price estimate from calculator if available
  const estimateEl = document.getElementById('total-price');
  const estimate = estimateEl ? estimateEl.textContent : '-';

  // Build WhatsApp message
  const msg = `*📋 Brief Project — ISR Tech*\n\n` +
    `*Nama:* ${name}\n` +
    `*Email:* ${email}\n` +
    `*WhatsApp:* +62${wa}\n` +
    `*Jenis Aplikasi:* ${apptype}\n` +
    `*Tambahan Fitur:* ${featuresSelect || '-'}\n` +
    `*Estimasi Harga Kalkulator:* ${estimate}\n\n` +
    `*Kebutuhan Aplikasi:*\n${desc}\n\n` +
    `*Target Deadline:* ${deadlineDisplay}\n\n` +
    `_Dikirim dari isrtech.id_`;

  // Open WhatsApp with encoded message
  window.open('https://wa.me/6283829058640?text=' + encodeURIComponent(msg), '_blank');
  
  // Show success message
  if (sucEl) { 
    sucEl.textContent = '✓ Brief project berhasil dikirim via WhatsApp! Tim kami akan merespons dalam 1×24 jam.';
    sucEl.classList.remove('hidden'); 
  }
}

/**
 * Initialize order form module
 */
export function initOrderForm() {
  // Render form HTML
  renderOrderForm();

  // Expose submitOrder to window for inline HTML onclick
  window.orderModule = {
    submitOrder
  };

  // Wait for DOM to update, then attach event listeners
  setTimeout(() => {
    // Attach submit button handler
    const submitBtn = document.getElementById('submit-order-btn');
    if (submitBtn) {
      submitBtn.addEventListener('click', submitOrder);
    }

    // Attach change event listener for app type select to update features
    const apptypeSelect = document.getElementById('f-apptype');
    if (apptypeSelect) {
      apptypeSelect.addEventListener('change', updateFeaturesDropdown);
      
      // Set initial state
      updateFeaturesDropdown();
    }

    // Clear success message when user starts editing form
    document.querySelectorAll('#order-form input, #order-form select, #order-form textarea').forEach(el => {
      el.addEventListener('input', () => {
        const sucEl = document.getElementById('form-success');
        if (sucEl) sucEl.classList.add('hidden');
      });
    });

    // Add real-time validation feedback for email
    const emailInput = document.getElementById('f-email');
    if (emailInput) {
      emailInput.addEventListener('blur', () => {
        const value = emailInput.value.trim();
        if (value && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
          emailInput.style.borderColor = 'rgba(239, 68, 68, 0.6)';
        } else {
          emailInput.style.borderColor = '';
        }
      });
    }
  }, 0);
}