// ==================== PORTFOLIO MODULE ====================

/**
 * Initialize portfolio section hover effects and click handlers
 */
export function initPortfolio() {
  document.querySelectorAll('.portfolio-card').forEach(card => {
    // Hover effect
    card.addEventListener('mouseenter', () => {
      card.style.transform = 'translateY(-8px)';
      card.style.transition = 'transform 0.3s ease';
    });
    
    card.addEventListener('mouseleave', () => {
      card.style.transform = 'translateY(0)';
      card.style.transition = 'transform 0.3s ease';
    });
    
    // Click handler for portfolio cards
    card.addEventListener('click', () => {
      const projectName = card.querySelector('h3')?.textContent || 'Project';
      const msg = `Halo ISR Tech, saya tertarik dengan project "${projectName}" di portfolio Anda. Bisa ceritakan lebih detail?`;
      window.open('https://wa.me/6283829058640?text=' + encodeURIComponent(msg), '_blank');
    });
  });

  // Add interactive hover for "More Portfolio" card
  const moreCard = document.querySelector('#portfolio .border-dashed');
  if (moreCard) {
    moreCard.addEventListener('mouseenter', () => {
      moreCard.style.borderColor = 'rgba(255, 87, 34, 0.5)';
      moreCard.style.transform = 'scale(1.02)';
      moreCard.style.transition = 'all 0.3s ease';
    });
    
    moreCard.addEventListener('mouseleave', () => {
      moreCard.style.borderColor = 'rgba(45, 64, 89, 0.5)';
      moreCard.style.transform = 'scale(1)';
    });
  }

  // Add overlay effect for portfolio images
  document.querySelectorAll('.portfolio-card .overlay').forEach(overlay => {
    const parent = overlay.parentElement;
    if (parent) {
      parent.addEventListener('mouseenter', () => {
        overlay.style.opacity = '1';
      });
      
      parent.addEventListener('mouseleave', () => {
        overlay.style.opacity = '0';
      });
    }
  });
}