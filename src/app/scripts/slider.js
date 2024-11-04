const slider = document.querySelector('#slider')
const controlButtons = document.querySelectorAll('.teachers-controls__btn')
const scrollbar = document.querySelector('#scrollbar-move')
const thumb = document.querySelector('#scrollbar-thumb')
let sliderMaxScrollLeft = slider.scrollWidth - slider.clientWidth
thumb.style.width = `${(slider.clientWidth / slider.scrollWidth) * 100}%`
window.addEventListener('resize', () => {
  sliderMaxScrollLeft = slider.scrollWidth - slider.clientWidth
  thumb.style.width = `${(slider.clientWidth / slider.scrollWidth) * 100}%`
})
controlButtons.forEach(btn => {
  btn.addEventListener('click', () => {
    const controls = btn.id === 'arrow-left' ? -1 : 1
    slider.scrollBy({
      left: controls * slider.clientWidth,
      behavior: 'smooth'
    })
  })
})
slider.addEventListener('scroll', () => {
  const scrollPosition = slider.scrollLeft
  const thumbPosition = (scrollPosition / sliderMaxScrollLeft) * (scrollbar.clientWidth - thumb.offsetWidth)
  thumb.style.left = `${thumbPosition}px`
})
thumb.addEventListener('mousedown', e => {
  const startX = e.clientX
  const thumbPosition = thumb.offsetLeft
  thumb.style.cursor = 'grabbing'
  const handleMouseMove = e => {
    const deltaX = e.clientX - startX
    const newThumbPosition = thumbPosition + deltaX
    const maxThumbPosition = scrollbar.getBoundingClientRect().width - thumb.offsetWidth
    const boundedPosition = Math.max(0, Math.min(maxThumbPosition, newThumbPosition))
    const scrollPosition = (boundedPosition / maxThumbPosition) * sliderMaxScrollLeft
    thumb.style.left = `${boundedPosition}px`
    slider.scrollLeft = scrollPosition
  }
  const handleMouseUp = () => {
    document.removeEventListener('mousemove', handleMouseMove)
    document.removeEventListener('mouseup', handleMouseUp)
    thumb.style.cursor = 'grab'
  }
  document.addEventListener('mousemove', handleMouseMove)
  document.addEventListener('mouseup', handleMouseUp)
})
