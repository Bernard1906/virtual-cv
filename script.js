document.addEventListener('DOMContentLoaded', () => {
  // Initialize AOS
  AOS.init({
    duration: 800,
    once: true,
    offset: 100
  });

  // Continuous gear rotation
  const gears = document.querySelectorAll('.gear');
  let rotation = 0;
  function animateGears() {
    rotation += 0.5;
    gears.forEach((gear, i) => {
      const dir = i % 2 === 0 ? 1 : -1;
      gear.style.transform = `rotate(${rotation * dir}deg)`;
    });
    requestAnimationFrame(animateGears);
  }
  animateGears();

  // Smooth scrolling & active nav highlighting
  const navLinks = document.querySelectorAll('.nav-link');
  const sections = document.querySelectorAll('section[id]');

  navLinks.forEach(link => {
    link.addEventListener('click', e => {
      e.preventDefault();
      const target = document.querySelector(link.getAttribute('href'));
      const offset = document.querySelector('header').offsetHeight;
      window.scrollTo({
        top: target.offsetTop - offset,
        behavior: 'smooth'
      });
    });
  });

  window.addEventListener('scroll', () => {
    let current = '';
    sections.forEach(sec => {
      if (window.scrollY >= sec.offsetTop - 200) {
        current = sec.getAttribute('id');
      }
    });
    navLinks.forEach(link => {
      link.classList.toggle('active', link.getAttribute('href') === `#${current}`);
    });
  });
});
