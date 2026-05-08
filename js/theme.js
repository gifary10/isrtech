function initScrollReveal() {
  // Scroll reveal
  const revealObs = new IntersectionObserver(entries => {
    entries.forEach(e => { 
      if (e.isIntersecting) e.target.classList.add('visible'); 
    });
  }, { threshold: 0.07 });
  
  // Expose observer globally so other modules can use it
  window.revealObserver = revealObs;

  document.querySelectorAll('.reveal, .reveal-left, .reveal-right').forEach(el => {
    revealObs.observe(el);
  });

  // Counter animation
  function animCounter(el) {
    const target = parseInt(el.dataset.target);
    let cur = 0;
    const step = target / 55;
    const timer = setInterval(() => {
      cur = Math.min(cur + step, target);
      el.textContent = Math.floor(cur) + '+';
      if (cur >= target) clearInterval(timer);
    }, 18);
  }

  const cntObs = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        document.querySelectorAll('.counter-num').forEach(animCounter);
        cntObs.disconnect();
      }
    });
  }, { threshold: 0.5 });

  const heroEl = document.getElementById('hero');
  if (heroEl) cntObs.observe(heroEl);
}

// ==========================================
// DARK MODE
// ==========================================

/**
 * Initialize dark mode toggle functionality
 */
function initDarkModeToggle() {
  const toggleBtn = document.getElementById('dm-toggle');
  if (!toggleBtn) return;

  // Store original CSS variable values for reset
  const originalVars = {
    '--bg': '#222831',
    '--card': '#1e2940',
    '--text': '#EEEEEE',
    '--muted': '#8892a4',
    '--border': 'rgba(45, 64, 89, 0.55)'
  };

  toggleBtn.addEventListener('click', function () {
    const icon = document.getElementById('dm-icon');
    if (!icon) return;
    
    const isDark = icon.classList.contains('fa-moon');
    
    if (isDark) {
      // Switch to dark mode
      icon.className = 'fa-solid fa-sun';
      icon.style.color = '#FBBF24';
      document.documentElement.style.setProperty('--bg', '#111827');
      document.documentElement.style.setProperty('--card', '#1f2937');
      document.documentElement.style.setProperty('--text', '#f9fafb');
      document.documentElement.style.setProperty('--muted', '#9ca3af');
      document.documentElement.style.setProperty('--border', 'rgba(75, 85, 99, 0.5)');
      // Maintain the mesh/grid pattern with dark background
      document.body.style.background = '#111827';
      document.body.style.backgroundImage = 'linear-gradient(rgba(255, 87, 34, 0.035) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 87, 34, 0.035) 1px, transparent 1px)';
      document.body.style.backgroundSize = '64px 64px';
    } else {
      // Switch back to light mode (original theme)
      icon.className = 'fa-solid fa-moon';
      icon.style.color = 'var(--muted)';
      // Restore original CSS variables
      Object.entries(originalVars).forEach(([key, value]) => {
        document.documentElement.style.setProperty(key, value);
      });
      // Revert to original background with mesh/grid
      document.body.style.background = '';
      document.body.style.backgroundImage = '';
      document.body.style.backgroundSize = '';
    }
  });
}

// ==========================================
// INITIALIZATION
// ==========================================

/**
 * Initialize all theme-related functionality
 */
export function initTheme() {
  initScrollReveal();
  initDarkModeToggle();
}