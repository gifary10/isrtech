// ==================== DEMO DASHBOARD INTERACTIVE MODULE ====================

/**
 * Initialize demo dashboard interactive elements
 */
export function initDemo() {
  // Simulate real-time updates for demo dashboard
  const updateDemoMetrics = () => {
    const metrics = {
      revenue: ['Rp 4.2Jt', 'Rp 4.8Jt', 'Rp 5.1Jt', 'Rp 4.5Jt', 'Rp 6.2Jt'],
      orders: ['28', '32', '25', '38', '42'],
      customers: ['7', '12', '9', '15', '11'],
      stock: ['3', '5', '2', '4', '1']
    };
    
    const randomIndex = Math.floor(Math.random() * metrics.revenue.length);
    
    // Update demo dashboard values if elements exist
    const kpiValues = document.querySelectorAll('#demo .text-light.font-bold.text-sm');
    if (kpiValues.length >= 4) {
      kpiValues[0].textContent = metrics.revenue[randomIndex];
      kpiValues[1].textContent = metrics.orders[randomIndex];
      kpiValues[2].textContent = metrics.customers[randomIndex];
      kpiValues[3].textContent = metrics.stock[randomIndex];
    }
  };

  // Update metrics every 5 seconds
  setInterval(updateDemoMetrics, 5000);

  // Sidebar navigation in demo
  document.querySelectorAll('#demo .rounded-xl.cursor-pointer, #demo [class*="rounded-xl"]').forEach(item => {
    if (item.querySelector('i') && item.closest('.w-48')) {
      item.style.cursor = 'pointer';
      item.addEventListener('click', () => {
        // Remove active state from all items
        const sidebarItems = item.parentElement.querySelectorAll('[class*="rounded-xl"]');
        sidebarItems.forEach(i => {
          i.style.background = 'transparent';
          i.style.color = '#6b7280';
        });
        
        // Set active state
        item.style.background = 'rgba(255,87,34,0.2)';
        item.style.color = '#ff5722';
      });
    }
  });

  // Chart bar hover effects in demo
  document.querySelectorAll('.chart-bar').forEach(bar => {
    bar.addEventListener('mouseenter', () => {
      bar.style.opacity = '0.8';
      bar.style.transform = 'scaleY(1.05)';
      bar.style.transition = 'all 0.2s ease';
    });
    
    bar.addEventListener('mouseleave', () => {
      bar.style.opacity = '1';
      bar.style.transform = 'scaleY(1)';
    });
  });

  // Animate KPI cards on hover
  document.querySelectorAll('#demo .rounded-xl.p-3').forEach(card => {
    card.addEventListener('mouseenter', () => {
      card.style.transform = 'translateY(-2px)';
      card.style.transition = 'transform 0.2s ease';
      card.style.boxShadow = '0 4px 12px rgba(0,0,0,0.1)';
    });
    
    card.addEventListener('mouseleave', () => {
      card.style.transform = '';
      card.style.boxShadow = '';
    });
  });
}