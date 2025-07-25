document.addEventListener('DOMContentLoaded', () => {
  // Initialize AOS
  AOS.init({
    duration: 800,
    once: true
  });

  // Rotate all gears on scroll
  const gears = document.querySelectorAll('.gear');
  window.addEventListener('scroll', () => {
    const rotation = window.scrollY / 2;
    gears.forEach(g => {
      g.style.transform = `rotate(${rotation}deg)`;
    });
  });
});
