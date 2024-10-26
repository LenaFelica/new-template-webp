const openBurgerBtn = document.querySelector('#open-burger-btn');
const closeBurgerBtn = document.querySelector('#close-burger-btn');
const mobileMenu = document.querySelector('#mobile-menu');
const mobileBtns = document.querySelector('.mobile-buttons');
const menuLinks = document.querySelectorAll('.nav-list__item');
const body = document.querySelector('body');

const openMobileMenu = () => {
  mobileMenu.classList.add('open');
  body.classList.add('unscroll');
};

const closeMobileMenu = () => {
  mobileMenu.classList.remove('open');
  body.classList.remove('unscroll');
};

menuLinks.forEach((link) => {
  link.addEventListener('click', closeMobileMenu)
})

openBurgerBtn.addEventListener('click', openMobileMenu);

closeBurgerBtn.addEventListener('click', closeMobileMenu);

