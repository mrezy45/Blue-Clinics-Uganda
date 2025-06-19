//Menu Toggle JavaScript
function toggleMenu() {
    const menu = document.querySelector('.navbar .menu');
    const menuIcon = document.querySelector('.menu-icon');

    // Toggle the 'show' class to display the menu
    menu.classList.toggle('show');

    // Close menu when clicking outside
    document.addEventListener('click', function (event) {
        if (!menu.contains(event.target) && !menuIcon.contains(event.target)) {
            menu.classList.remove('show');
        }
    });
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

