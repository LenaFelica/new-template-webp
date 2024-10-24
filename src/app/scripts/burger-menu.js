const openBurgerBtn = document.querySelector('#open-burger-btn');
const closeBurgerBtn = document.querySelector('#close-burger-btn');
const mobileMenu = document.querySelector('#mobile-menu');
const mobileBtns = document.querySelector('.mobile-buttons')

const openMenuMobile = () => {
  mobileMenu.classList.add('open');
  // mobileBtns.classList.remove('active')
}

openBurgerBtn.addEventListener('click', openMenuMobile)
