// Run when the page is fully loaded
document.addEventListener("DOMContentLoaded", function () {
    // HAMBURGER MENU TOGGLE
    const hamburgerIcon = document.getElementById('hamburger-icon');
    const navbarLinks = document.querySelector('.navbar-links');
  
    hamburgerIcon.addEventListener('click', () => {
      navbarLinks.classList.toggle('active');
    });
  
    // SCROLL ANIMATIONS
    const animatedElements = document.querySelectorAll('.scroll-animate');
  
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, {
      threshold: 0.1
    });
  
    animatedElements.forEach(el => observer.observe(el));
  });