// ==================== TEMPLATE MODULE ====================

/**
 * Initialize template/product section interactive elements
 */
export function initTemplate() {
  // Add click handlers for template "Demo" and "Gunakan" buttons
  document.querySelectorAll('#templates .btn-outline').forEach(btn => {
    if (btn.textContent.trim() === 'Demo') {
      btn.addEventListener('click', () => {
        const card = btn.closest('.card-solid');
        const title = card?.querySelector('h3')?.textContent || 'Template';
        const msg = `Halo ISR Tech, saya tertarik untuk mencoba demo "${title}". Bisa tolong tunjukkan cara kerjanya?`;
        window.open('https://wa.me/6283829058640?text=' + encodeURIComponent(msg), '_blank');
      });
    }
  });

  document.querySelectorAll('#templates .btn-accent').forEach(btn => {
    if (btn.textContent.trim() === 'Gunakan') {
      btn.addEventListener('click', () => {
        const card = btn.closest('.card-solid');
        const title = card?.querySelector('h3')?.textContent || 'Template';
        const price = card?.querySelector('.text-accent.font-bold')?.textContent || '';
        const msg = `Halo ISR Tech, saya ingin menggunakan template "${title}" (${price}). Bisa dibantu proses ordernya?`;
        window.open('https://wa.me/6283829058640?text=' + encodeURIComponent(msg), '_blank');
      });
    }
  });

  // Add hover animations for template cards
  document.querySelectorAll('#templates .card-solid').forEach(card => {
    card.addEventListener('mouseenter', function() {
      this.style.borderColor = 'rgba(255, 87, 34, 0.3)';
      this.style.transform = 'translateY(-4px)';
      this.style.transition = 'all 0.3s ease';
      this.style.boxShadow = '0 20px 40px rgba(0, 0, 0, 0.2)';
    });
    
    card.addEventListener('mouseleave', function() {
      this.style.borderColor = '';
      this.style.transform = '';
      this.style.boxShadow = '';
    });
  });
}