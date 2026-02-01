// Main JavaScript file for portfolio interactions

document.addEventListener('DOMContentLoaded', () => {
  // Smooth scrolling for internal anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      const href = this.getAttribute('href');
      if (href.length > 1) {
        e.preventDefault();
        const target = document.querySelector(href);
        if (target) target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });

  // Improve contact form UX
  const contactForm = document.querySelector('form[action^="https://formspree.io"]');
  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      const submitBtn = contactForm.querySelector('button[type="submit"]');
      if (submitBtn) {
        submitBtn.disabled = true;
        const originalText = submitBtn.textContent;
        submitBtn.textContent = 'Sending...';
        setTimeout(() => {
          submitBtn.textContent = originalText;
          submitBtn.disabled = false;
        }, 3000);
      }
    });
  }

  // A small entrance animation (works alongside AOS)
  document.querySelectorAll('.project-card, .rounded-xl').forEach(el => {
    el.addEventListener('mouseenter', () => el.classList.add('scale-105'));
    el.addEventListener('mouseleave', () => el.classList.remove('scale-105'));
  });
});