// Hamburger menu toggle
const menuToggle = document.querySelector('.menu-toggle');
const navbar = document.querySelector('.navbar');
const menuLinks = document.querySelectorAll('.menu a');
const menuOverlay = document.querySelector('.menu-overlay');

if (menuToggle && navbar) {
  menuToggle.addEventListener('click', () => {
    navbar.classList.toggle('open');
  });
  menuLinks.forEach(link => {
    link.addEventListener('click', () => {
      navbar.classList.remove('open');
    });
  });
  if (menuOverlay) {
    menuOverlay.addEventListener('click', () => {
      navbar.classList.remove('open');
    });
  }
} 