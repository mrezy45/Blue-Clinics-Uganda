//Menu Toggle JavaScript
function toggleMenu() {
  const menu = document.querySelector('.menu');
  menu.classList.toggle('show');

  // Close when clicking outside
  document.addEventListener('click', function handleOutsideClick(e) {
    const icon = document.querySelector('.menu-icon');
    if (!menu.contains(e.target) && !icon.contains(e.target)) {
      menu.classList.remove('show');
      document.removeEventListener('click', handleOutsideClick);
    }
  }, { once: true });
}

//Image Slider JavaScript
const slides = document.querySelectorAll('.slide');
  let current = 0;

  function showNextSlide() {
    slides[current].classList.remove('active');
    current = (current + 1) % slides.length;
    slides[current].classList.add('active');
  }

  setInterval(showNextSlide, 5000); // Change every 4 seconds

