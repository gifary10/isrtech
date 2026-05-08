import { faqData } from './core.js';

/**
 * Render FAQ items ke dalam container
 */
function renderFAQs() {
  const faqContainer = document.getElementById('faq-container');
  if (!faqContainer) return;
  
  // Clear existing content
  faqContainer.innerHTML = '';

  // Generate FAQ items
  faqData.forEach((faq, index) => {
    const faqItem = document.createElement('div');
    faqItem.className = 'card-solid overflow-hidden';
    faqItem.style.cssText = 'border-radius:16px; border:1px solid rgba(45,64,89,0.5); transition: all 0.3s ease;';
    
    // Create FAQ button
    const button = document.createElement('button');
    button.style.cssText = 'width:100%;display:flex;justify-content:space-between;align-items:center;padding:18px 22px;text-align:left;gap:16px;background:transparent;border:none;cursor:pointer;transition: all 0.3s ease;';
    button.setAttribute('aria-expanded', 'false');
    button.setAttribute('aria-controls', `faq-answer-${index}`);
    
    const questionSpan = document.createElement('span');
    questionSpan.style.cssText = 'font-size:14px;font-weight:600;color:var(--text);flex:1;';
    questionSpan.textContent = faq.q;
    
    const icon = document.createElement('i');
    icon.className = 'fa-solid fa-plus faq-icon';
    icon.style.cssText = 'color:var(--accent);font-size:13px;flex-shrink:0;transition: transform 0.35s ease;';
    
    button.appendChild(questionSpan);
    button.appendChild(icon);
    
    // Create answer container
    const answerDiv = document.createElement('div');
    answerDiv.className = 'faq-answer';
    answerDiv.id = `faq-answer-${index}`;
    answerDiv.style.cssText = 'max-height:0;overflow:hidden;transition:max-height 0.4s ease;';
    
    const answerContent = document.createElement('div');
    answerContent.style.cssText = 'padding:0 22px 18px;color:var(--muted);font-size:13px;line-height:1.85;';
    answerContent.textContent = faq.a;
    
    answerDiv.appendChild(answerContent);
    
    // Add hover effect
    button.addEventListener('mouseenter', () => {
      if (!answerDiv.classList.contains('open')) {
        button.style.backgroundColor = 'rgba(255, 87, 34, 0.03)';
      }
    });
    
    button.addEventListener('mouseleave', () => {
      if (!answerDiv.classList.contains('open')) {
        button.style.backgroundColor = 'transparent';
      }
    });
    
    // Add click handler
    button.addEventListener('click', function() {
      toggleFaq(this, answerDiv, icon);
    });
    
    faqItem.appendChild(button);
    faqItem.appendChild(answerDiv);
    faqContainer.appendChild(faqItem);
  });
}

/**
 * Toggle FAQ answer visibility
 * @param {HTMLElement} btn - Button element clicked
 * @param {HTMLElement} answer - Answer container element
 * @param {HTMLElement} icon - Icon element
 */
function toggleFaq(btn, answer, icon) {
  const isOpen = answer.classList.contains('open');
  
  // Close all other answers
  document.querySelectorAll('.faq-answer').forEach(a => {
    a.classList.remove('open');
    a.style.maxHeight = '0';
  });
  
  document.querySelectorAll('.faq-icon').forEach(i => {
    i.classList.remove('rotated');
    i.style.transform = 'rotate(0deg)';
  });
  
  // Reset all button backgrounds
  document.querySelectorAll('#faq-container button').forEach(b => {
    b.style.backgroundColor = 'transparent';
  });
  
  // Toggle current
  if (!isOpen) {
    answer.classList.add('open');
    answer.style.maxHeight = answer.scrollHeight + 'px';
    icon.classList.add('rotated');
    icon.style.transform = 'rotate(45deg)';
    btn.style.backgroundColor = 'rgba(255, 87, 34, 0.05)';
  } else {
    answer.classList.remove('open');
    answer.style.maxHeight = '0';
    icon.classList.remove('rotated');
    icon.style.transform = 'rotate(0deg)';
    btn.style.backgroundColor = 'transparent';
  }
}

/**
 * Initialize FAQ section
 */
export function initFAQ() {
  renderFAQs();
  
  // Update answer heights on window resize
  window.addEventListener('resize', () => {
    document.querySelectorAll('.faq-answer.open').forEach(answer => {
      answer.style.maxHeight = answer.scrollHeight + 'px';
    });
  });
}