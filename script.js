document.querySelectorAll('.slider').forEach(slider => {
  const range = slider.querySelector('.slider-input');
  const overlay = slider.querySelector('.overlay');
  range.addEventListener('input', () => {
    overlay.style.width = `${range.value}%`;
  });
});
