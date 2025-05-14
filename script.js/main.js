document.addEventListener("DOMContentLoaded", () => {
  // Hamburger menu toggle
  const hamburgerIcon = document.getElementById('hamburger-icon');
  const navbarLinks = document.querySelector('.navbar-links');

  hamburgerIcon.addEventListener('click', () => {
    navbarLinks.classList.toggle('active');
    hamburgerIcon.classList.toggle('active');
  });

  // Scroll animations
  const animatedElements = document.querySelectorAll('.scroll-animate');

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });

  animatedElements.forEach(el => {
    if (el.getBoundingClientRect().top < window.innerHeight * 0.9) {
      el.classList.add('visible');
    } else {
      observer.observe(el);
    }
  });
});


// Animate skill progress bars when page loads
const progressBars = document.querySelectorAll('.progress');

progressBars.forEach(bar => {
  // Get the target width from style attribute (like "width: 90%")
  const targetWidth = bar.getAttribute('style').match(/width:\s*(\d+%)/)[1];
  bar.style.width = '0'; // Reset width initially
  setTimeout(() => {
    bar.style.width = targetWidth; // Animate to target
  }, 500);
});


document.addEventListener("DOMContentLoaded", function () {
    // existing hamburger + scroll animation code...

    // Skill progress animation
    const skillBars = document.querySelectorAll('.progress');

    const skillObserver = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const progress = entry.target.getAttribute('data-progress');
          entry.target.style.width = progress;
        }
      });
    }, {
      threshold: 0.5
    });

    skillBars.forEach(bar => skillObserver.observe(bar));
});
