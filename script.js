// Nachher-Button
const toggleButton = document.getElementById('toggleButton');
const wrapper = document.querySelector('.vergleich-wrapper');
let isNachher = false;

toggleButton.addEventListener('click', () => {
  isNachher = !isNachher;
  wrapper.classList.toggle('show-nachher', isNachher);
  toggleButton.textContent = isNachher ? 'Vorher anzeigen' : 'Nachher anzeigen';
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
