document.addEventListener('DOMContentLoaded', () => {
  // Initialize scroll animations
  AOS.init({
    duration: 800,
    once: true
  });

  // Rotate gears as you scroll
  const gears = document.querySelectorAll('.gear');
  window.addEventListener('scroll', () => {
    const rotation = window.scrollY / 2; 
    gears.forEach(g => {
      g.style.transform = `rotate(${rotation}deg)`;
    });
  });
});
