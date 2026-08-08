(() => {
  const slides = [...document.querySelectorAll('.slide')];
  const current = document.getElementById('current');
  if (!slides.length) return;

  let index = 0;
  const delay = 7000;

  setInterval(() => {
    slides[index].classList.remove('is-active');
    index = (index + 1) % slides.length;
    slides[index].classList.add('is-active');
    if (current) current.textContent = String(index + 1).padStart(2, '0');
  }, delay);
})();
