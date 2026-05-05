// ==================== DARK MODE TOGGLE ====================

/**
 * Initialize dark mode toggle functionality
 */
export function initDarkMode() {
  const toggleBtn = document.getElementById('dm-toggle');
  if (!toggleBtn) return;

  toggleBtn.addEventListener('click', function () {
    const icon = document.getElementById('dm-icon');
    if (!icon) return;
    
    const isDark = icon.classList.contains('fa-moon');
    
    if (isDark) {
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
      icon.className = 'fa-solid fa-moon';
      icon.style.color = 'var(--muted)';
      document.documentElement.style.setProperty('--bg', '#222831');
      document.documentElement.style.setProperty('--card', '#1e2940');
      document.documentElement.style.setProperty('--text', '#EEEEEE');
      document.documentElement.style.setProperty('--muted', '#8892a4');
      document.documentElement.style.setProperty('--border', 'rgba(45, 64, 89, 0.55)');
      // Revert to original background with mesh/grid
      document.body.style.background = '';
      document.body.style.backgroundImage = '';
      document.body.style.backgroundSize = '';
    }
  });
}