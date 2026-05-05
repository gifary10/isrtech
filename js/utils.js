// ==================== UTILITY FUNCTIONS ====================

/**
 * Format number to Rupiah currency string
 * @param {number} n - Number to format
 * @returns {string} Formatted Rupiah string
 */
export function formatRp(n) {
  if (!n || n === 0) return 'Rp 0';
  if (n >= 1000000) {
    const juta = n / 1000000;
    return 'Rp ' + (Number.isInteger(juta) ? juta : juta.toFixed(1)) + ' Juta';
  }
  if (n >= 1000) return 'Rp ' + (n / 1000).toFixed(0) + '.000';
  return 'Rp ' + n;
}

/**
 * Format large numbers to short format (K/M)
 * @param {number} n - Number to format
 * @returns {string} Short formatted number
 */
export function formatShortNumber(n) {
  if (n >= 1000000) return (n / 1000000).toFixed(1) + 'M';
  if (n >= 1000) return (n / 1000).toFixed(0) + 'K';
  return n.toString();
}

/**
 * Debounce function to limit execution rate
 * @param {Function} func - Function to debounce
 * @param {number} wait - Wait time in milliseconds
 * @returns {Function} Debounced function
 */
export function debounce(func, wait) {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
}

/**
 * Throttle function to limit execution frequency
 * @param {Function} func - Function to throttle
 * @param {number} limit - Limit time in milliseconds
 * @returns {Function} Throttled function
 */
export function throttle(func, limit) {
  let inThrottle;
  return function(...args) {
    if (!inThrottle) {
      func.apply(this, args);
      inThrottle = true;
      setTimeout(() => inThrottle = false, limit);
    }
  };
}