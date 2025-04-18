// Vorher/Nachher Slider
document.querySelectorAll('.slider').forEach(slider => {
  const range = slider.querySelector('.slider-input');
  const overlay = slider.querySelector('.overlay');
  range.addEventListener('input', () => {
    overlay.style.width = `${range.value}%`;
  });
});

// Scroll-Animation
const fadeInElements = document.querySelectorAll('.fade-in');
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, {
  threshold: 0.1
});
fadeInElements.forEach(el => observer.observe(el));
