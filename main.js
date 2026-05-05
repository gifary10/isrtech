// ==================== MAIN ENTRY POINT ====================
// ISR Tech - ES6 Module Architecture

import { formatRp, formatShortNumber, debounce, throttle } from './js/utils.js';
import { initNavbar } from './js/navbar.js';
import { initAnimations } from './js/animations.js';
import { initCarousel } from './js/layanan.js';
import { initDarkMode } from './js/darkMode.js';
import { initSegments } from './js/segments.js';
import { initPricingCalculator } from './js/estimasi.js';
import { initFAQ } from './js/faq.js';
import { initPortfolio } from './js/portofolio.js';
import { initOrderForm } from './js/orderForm.js';
import { initDemo } from './js/demo.js';
import { initSolusi } from './js/solusi.js'; 
import { initProses } from './js/proses.js'; 
import { initTemplate } from './js/template.js'; 

// Export utility functions to window for inline HTML access
window.formatRp = formatRp;
window.formatShortNumber = formatShortNumber;

// Initialize all modules when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
  initNavbar();
  initAnimations();
  initCarousel();
  initDarkMode();
  initSegments();
  initPricingCalculator();
  initFAQ();
  initPortfolio();
  initOrderForm();
  initDemo();
  initSolusi(); 
  initProses(); 
  initTemplate(); 
  
  console.log('🚀 ISR Tech — All modules initialized');
});