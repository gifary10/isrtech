// ==================== SOLUSI MODULE ====================
// Handles the Problem & Solution section interactions

/**
 * Initialize solution section interactive elements
 */
export function initSolusi() {
  // Add hover effects for problem cards
  document.querySelectorAll('#problem .card-solid').forEach(card => {
    card.addEventListener('mouseenter', () => {
      card.style.transform = 'translateX(4px)';
      card.style.transition = 'transform 0.3s ease';
    });
    
    card.addEventListener('mouseleave', () => {
      card.style.transform = 'translateX(0)';
    });
  });

  // Add pulse effect to solution cards with glow-accent class
  document.querySelectorAll('#problem .glow-accent').forEach(card => {
    card.addEventListener('mouseenter', () => {
      card.style.boxShadow = '0 0 60px rgba(255, 87, 34, 0.35)';
      card.style.transition = 'box-shadow 0.3s ease';
    });
    
    card.addEventListener('mouseleave', () => {
      card.style.boxShadow = '0 0 40px rgba(255, 87, 34, 0.22)';
    });
  });

  // Initialize icon animations for solution cards
  const solutionIcons = document.querySelectorAll('#problem .gradient-accent');
  solutionIcons.forEach(icon => {
    icon.addEventListener('mouseenter', () => {
      icon.style.transform = 'rotate(-5deg) scale(1.1)';
      icon.style.transition = 'transform 0.3s ease';
    });
    
    icon.addEventListener('mouseleave', () => {
      icon.style.transform = 'rotate(0deg) scale(1)';
    });
  });
}