import { segmentData } from './core.js';

/**
 * Render segment tabs and panels
 */
function renderSegments() {
  const segContainer = document.getElementById('seg-content');
  if (!segContainer) return;

  // Clear existing panels
  segContainer.innerHTML = '';

  // Render panels for each segment
  segmentData.forEach((segment, index) => {
    const panel = document.createElement('div');
    panel.className = `seg-panel grid md:grid-cols-3 gap-6${index > 0 ? ' hidden' : ''}`;
    panel.setAttribute('data-segment', segment.id);

    // Problem Card
    const problemCard = document.createElement('div');
    problemCard.className = 'card-solid rounded-2xl p-6';
    problemCard.innerHTML = `
      <div class="w-12 h-12 rounded-2xl bg-accent/15 flex items-center justify-center text-accent mb-4 text-xl">
        <i class="fa-solid fa-exclamation-triangle"></i>
      </div>
      <h4 class="font-bold text-light mb-3">Masalah</h4>
      <ul class="space-y-2 text-gray-400 text-sm">
        ${segment.problems.map(p => `
          <li class="flex items-start gap-2">
            <span class="text-red-400 mt-0.5">•</span>${p}
          </li>
        `).join('')}
      </ul>
    `;

    // Solution Card
    const solutionCard = document.createElement('div');
    solutionCard.className = 'card-solid rounded-2xl p-6 border border-accent/20';
    solutionCard.innerHTML = `
      <div class="w-12 h-12 rounded-2xl gradient-accent flex items-center justify-center text-white mb-4 text-xl">
        <i class="fa-solid fa-lightbulb"></i>
      </div>
      <h4 class="font-bold text-light mb-3">Solusi ISR Tech</h4>
      <ul class="space-y-2 text-gray-400 text-sm">
        ${segment.solutions.map(s => `
          <li class="flex items-start gap-2">
            <span class="text-accent mt-0.5">✓</span>${s}
          </li>
        `).join('')}
      </ul>
    `;

    // Example Card
    const exampleCard = document.createElement('div');
    exampleCard.className = 'card-solid rounded-2xl p-6';
    exampleCard.innerHTML = `
      <div class="w-12 h-12 rounded-2xl bg-blue-500/15 flex items-center justify-center text-blue-400 mb-4 text-xl">
        <i class="fa-solid fa-cube"></i>
      </div>
      <h4 class="font-bold text-light mb-3">Contoh Aplikasi</h4>
      <ul class="space-y-2 text-gray-400 text-sm">
        ${segment.examples.map(e => `
          <li class="flex items-start gap-2">
            <span class="text-blue-400 mt-0.5">→</span>${e}
          </li>
        `).join('')}
      </ul>
    `;

    panel.appendChild(problemCard);
    panel.appendChild(solutionCard);
    panel.appendChild(exampleCard);
    segContainer.appendChild(panel);
  });
}

/**
 * Initialize segment tab switching functionality
 */
export function initSegments() {
  // Render segments first
  renderSegments();
  
  const tabs = document.querySelectorAll('.seg-tab');
  if (!tabs.length) return;

  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      // Remove active state from all tabs
      tabs.forEach(t => t.classList.remove('active'));
      
      // Set active state on clicked tab
      tab.classList.add('active');
      
      // Get index and show corresponding panel
      const idx = parseInt(tab.dataset.seg);
      document.querySelectorAll('.seg-panel').forEach((p, i) => {
        p.classList.toggle('hidden', i !== idx);
        
        // Add fade-in animation
        if (i === idx) {
          p.style.opacity = '0';
          p.style.transform = 'translateY(10px)';
          p.style.transition = 'opacity 0.3s ease, transform 0.3s ease';
          
          requestAnimationFrame(() => {
            p.style.opacity = '1';
            p.style.transform = 'translateY(0)';
          });
        }
      });
    });
  });
}