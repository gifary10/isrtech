// ==================== FAQ MODULE ====================

const faqs = [
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
 * Render FAQ items ke dalam container
 */
function renderFAQs() {
  const faqContainer = document.getElementById('faq-container');
  if (!faqContainer) return;

  // Clear existing content
  faqContainer.innerHTML = '';

  // Generate FAQ items
  faqs.forEach((faq, index) => {
    const faqItem = document.createElement('div');
    faqItem.className = 'card-solid overflow-hidden';
    faqItem.style.cssText = 'border-radius:16px; border:1px solid rgba(45,64,89,0.5); transition: all 0.3s ease;';
    
    // Create FAQ button
    const button = document.createElement('button');
    button.style.cssText = 'width:100%;display:flex;justify-content:space-between;align-items:center;padding:18px 22px;text-align:left;gap:16px;background:transparent;border:none;cursor:pointer;transition: all 0.3s ease;';
    button.setAttribute('aria-expanded', 'false');
    button.setAttribute('aria-controls', `faq-answer-${index}`);
    
    const questionSpan = document.createElement('span');
    questionSpan.style.cssText = 'font-size:14px;font-weight:600;color:var(--text);flex:1;';
    questionSpan.textContent = faq.q;
    
    const icon = document.createElement('i');
    icon.className = 'fa-solid fa-plus faq-icon';
    icon.style.cssText = 'color:var(--accent);font-size:13px;flex-shrink:0;transition: transform 0.35s ease;';
    
    button.appendChild(questionSpan);
    button.appendChild(icon);
    
    // Create answer container
    const answerDiv = document.createElement('div');
    answerDiv.className = 'faq-answer';
    answerDiv.id = `faq-answer-${index}`;
    answerDiv.style.cssText = 'max-height:0;overflow:hidden;transition:max-height 0.4s ease;';
    
    const answerContent = document.createElement('div');
    answerContent.style.cssText = 'padding:0 22px 18px;color:var(--muted);font-size:13px;line-height:1.85;';
    answerContent.textContent = faq.a;
    
    answerDiv.appendChild(answerContent);
    
    // Add hover effect
    button.addEventListener('mouseenter', () => {
      if (!answerDiv.classList.contains('open')) {
        button.style.backgroundColor = 'rgba(255, 87, 34, 0.03)';
      }
    });
    
    button.addEventListener('mouseleave', () => {
      if (!answerDiv.classList.contains('open')) {
        button.style.backgroundColor = 'transparent';
      }
    });
    
    // Add click handler
    button.addEventListener('click', function() {
      toggleFaq(this, answerDiv, icon);
    });
    
    faqItem.appendChild(button);
    faqItem.appendChild(answerDiv);
    faqContainer.appendChild(faqItem);
  });
}

/**
 * Toggle FAQ answer visibility
 * @param {HTMLElement} btn - Button element clicked
 * @param {HTMLElement} answer - Answer container element
 * @param {HTMLElement} icon - Icon element
 */
function toggleFaq(btn, answer, icon) {
  const isOpen = answer.classList.contains('open');
  
  // Close all other answers
  document.querySelectorAll('.faq-answer').forEach(a => {
    a.classList.remove('open');
    a.style.maxHeight = '0';
  });
  
  document.querySelectorAll('.faq-icon').forEach(i => {
    i.classList.remove('rotated');
    i.style.transform = 'rotate(0deg)';
  });
  
  // Reset all button backgrounds
  document.querySelectorAll('#faq-container button').forEach(b => {
    b.style.backgroundColor = 'transparent';
  });
  
  // Toggle current
  if (!isOpen) {
    answer.classList.add('open');
    answer.style.maxHeight = answer.scrollHeight + 'px';
    icon.classList.add('rotated');
    icon.style.transform = 'rotate(45deg)';
    btn.style.backgroundColor = 'rgba(255, 87, 34, 0.05)';
  } else {
    answer.classList.remove('open');
    answer.style.maxHeight = '0';
    icon.classList.remove('rotated');
    icon.style.transform = 'rotate(0deg)';
    btn.style.backgroundColor = 'transparent';
  }
}

/**
 * Initialize FAQ section
 */
export function initFAQ() {
  renderFAQs();
  
  // Update answer heights on window resize
  window.addEventListener('resize', () => {
    document.querySelectorAll('.faq-answer.open').forEach(answer => {
      answer.style.maxHeight = answer.scrollHeight + 'px';
    });
  });
}