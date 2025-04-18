// Bildvergleich: Nachher-Bild ein-/ausblenden
const toggleButton = document.getElementById('toggleButton');
const wrapper = document.querySelector('.vergleich-wrapper');
let isNachher = false;

toggleButton.addEventListener('click', () => {
  isNachher = !isNachher;
  wrapper.classList.toggle('show-nachher', isNachher);
  toggleButton.textContent = isNachher
    ? 'Vorher anzeigen'
    : 'Nachher anzeigen';
});

// Scroll-Fade-In
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

// Preloader entfernen nach Laden
window.addEventListener("load", () => {
  const preloader = document.getElementById("preloader");
  if (preloader) {
    preloader.classList.add("fade-out");
    setTimeout(() => {
      preloader.remove();
    }, 500);
  }
});

// Dropdown: vollständige Preisliste ein-/ausklappen
const preiseButton = document.getElementById('preiseButton');
const preiseWrapper = document.getElementById('preiseBildWrapper');

preiseWrapper.style.display = "none"; // anfangs ausgeblendet

preiseButton.addEventListener('click', () => {
  const isOpen = preiseWrapper.classList.toggle('open');
  preiseWrapper.style.display = isOpen ? "block" : "none";
  preiseButton.textContent = isOpen
    ? 'Vollständige Preisliste ausblenden ▲'
    : 'Vollständige Preisliste anzeigen ▼';
});
