// Makki Masjid Tokyo – simple page scripts

// Current year in footer
document.getElementById('year').textContent = new Date().getFullYear();

// Close mobile menu when a nav link is clicked
document.querySelectorAll('.nav ul a').forEach(function (link) {
  link.addEventListener('click', function () {
    document.querySelector('.nav ul').classList.remove('show');
  });
});

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(function (link) {
  link.addEventListener('click', function (e) {
    var target = document.querySelector(link.getAttribute('href'));
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
});
