// ==================== SCROLL REVEAL & COUNTER ANIMATIONS ====================

/**
 * Initialize scroll reveal animations and counter animations
 */
export function initAnimations() {
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