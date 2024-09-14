const slider = document.querySelector('#slider');
const allItems = document.querySelectorAll('.teachers-item');
const btns = document.querySelectorAll('.teachers-controls__btn');
const leftBtn = document.querySelector('#arrow-left');
const rightBtn = document.querySelector('#arrow-right');
const sliderScrollbar = document.querySelector('.teachers-controls')
const scrollbar = document.querySelector('#scrollbar-move');
const thumb = document.querySelector('#scrollbar-thumb');


let sliderMaxScrollLeft = slider.scrollWidth - slider.clientWidth;

const resizeScrollbarThumb = () => {
  thumb.style.width = `${(slider.clientWidth / slider.scrollWidth) * 100}%`;
}
resizeScrollbarThumb();

btns.forEach(btn => {
  btn.addEventListener('click', () => {
    const controls = btn.id === 'arrow-left' ? -1 : 1;
    slider.scrollBy ({
      left: controls * slider.clientWidth,
      behavior: 'smooth',
    });
  });
});

let startX,
  thumbPosition,
  isMouseDown = false;

slider.addEventListener('scroll', () => {
  const positionScrollbarThumb = () => {
    const scrollPosition = slider.scrollLeft;
    const thumbPositionX =
        (scrollPosition / sliderMaxScrollLeft) * (scrollbar.clientWidth - thumb.offsetWidth);
         thumb.style.left = `${thumbPositionX}px`;
  };
})


const sliderRect = scrollbar.getBoundingClientRect();

thumb.addEventListener('mousedown', function(e){
  isMouseDown = true;
  startX = e.clientX;
  thumb.style.cursor = 'grabbing';
  const thumbPosition = thumb.offsetLeft;
  const maxThumbPosition = sliderRect.width - thumb.offsetWidth;

  console.log(startX);

  const onMouseMove = (e) => {
    const X = e.clientX - startX;
    const newThumbPosition = thumbPosition - X;
    const limitedPosition = Math.max(0, Math.min(newThumbPosition, maxThumbPosition));
    const scrollPosition = (limitedPosition / maxThumbPosition) * sliderMaxScrollLeft;
    thumb.style.left = `${limitedPosition}px`;
    slider.scrollLeft = scrollPosition;
  };


  const onMouseUp = () => {
   document.removeEventListener('mousemove', onMouseMove);
 }
})

