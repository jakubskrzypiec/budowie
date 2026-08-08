const slides=[...document.querySelectorAll('.slide')];
let current=0;
const delay=8000;
function nextSlide(){
  slides[current].classList.remove('is-active');
  current=(current+1)%slides.length;
  slides[current].classList.add('is-active');
}
setInterval(nextSlide,delay);
