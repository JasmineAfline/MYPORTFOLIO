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

  // Project modal handling
  const modal = document.getElementById('project-modal');
  const modalTitle = document.getElementById('modal-title');
  const modalDesc = document.getElementById('modal-desc');
  const modalTech = document.getElementById('modal-tech');
  const modalRepo = document.getElementById('modal-repo');
  const modalClose = document.getElementById('modal-close');
  const modalClose2 = document.getElementById('modal-close-2');

  document.querySelectorAll('.project-open').forEach(btn => {
    btn.addEventListener('click', (e) => {
      const card = e.target.closest('.project-card');
      const title = card?.dataset?.title || 'Project';
      const desc = card?.dataset?.desc || '';
      const tech = (card?.dataset?.tech || '').split(',').map(t => t.trim()).filter(Boolean);
      const repo = btn.dataset?.repo || card?.dataset?.repo || '#';

      modalTitle.textContent = title;
      modalDesc.textContent = desc;
      modalTech.innerHTML = '';
      tech.forEach(t => {
        const el = document.createElement('span');
        el.className = 'badge';
        el.textContent = t;
        modalTech.appendChild(el);
      });
      modalRepo.href = repo;

      modal.classList.add('show');
      document.body.style.overflow = 'hidden';
    });
  });

  [modalClose, modalClose2].forEach(btn => btn && btn.addEventListener('click', () => {
    modal.classList.remove('show');
    document.body.style.overflow = '';
  }));

  // close when clicking backdrop
  document.querySelectorAll('#project-modal .modal-backdrop').forEach(b => b.addEventListener('click', () => {
    modal.classList.remove('show');
    document.body.style.overflow = '';
  }));
});