// ==================== NAVBAR SCROLL & MOBILE MENU ====================

/**
 * Initialize navbar scroll behavior and mobile menu
 */
export function initNavbar() {
  const navbar = document.getElementById('navbar');
  const menuBtn = document.getElementById('menu-btn');
  const mobileMenu = document.getElementById('mobile-menu');
  
  if (!navbar) return;

  // Scroll effect
  window.addEventListener('scroll', () => {
    navbar.classList.toggle('scrolled', window.scrollY > 60);
    const st = document.getElementById('scroll-top');
    if (st) st.classList.toggle('show', window.scrollY > 400);
  }, { passive: true });

  // Mobile menu toggle
  if (menuBtn && mobileMenu) {
    menuBtn.addEventListener('click', () => {
      const open = !mobileMenu.classList.contains('hidden');
      mobileMenu.classList.toggle('hidden');
      const icon = document.getElementById('menu-icon');
      if (icon) {
        icon.className = open 
          ? 'fa-solid fa-bars text-white text-sm' 
          : 'fa-solid fa-xmark text-white text-sm';
      }
    });
  }

  // Close mobile menu on link click
  document.querySelectorAll('.mobile-link').forEach(a => {
    a.addEventListener('click', () => {
      if (mobileMenu) mobileMenu.classList.add('hidden');
      const icon = document.getElementById('menu-icon');
      if (icon) icon.className = 'fa-solid fa-bars text-white text-sm';
    });
  });

  // Active nav link based on scroll position
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-link');
  
  if (sections.length && navLinks.length) {
    const sectObs = new IntersectionObserver(entries => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          navLinks.forEach(l => {
            l.classList.remove('active');
            if (l.getAttribute('href') === '#' + e.target.id) {
              l.classList.add('active');
            }
          });
        }
      });
    }, { rootMargin: '-35% 0px -60% 0px' });
    
    sections.forEach(s => sectObs.observe(s));
  }

  // Smooth scroll for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', e => {
      const target = document.querySelector(a.getAttribute('href'));
      if (target) { 
        e.preventDefault(); 
        target.scrollIntoView({ behavior: 'smooth' }); 
      }
    });
  });
}