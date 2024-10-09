const openModal = document.querySelectorAll('.teachers-item__btn')
const closeModalBtn = document.querySelector('.modal__close-btn');
const myModal = document.querySelector('.modal');
const modalContent = document.querySelector('.modal__content');

const tabContent = document.querySelectorAll('.tabcontent');
const tabButton = document.querySelectorAll('.modal-tabs__btn');

let i;

for (let i = 0; i < openModal.length; i++) {
  openModal[i].addEventListener('click', function() {
    myModal.classList.add('open')
  })
};

closeModalBtn.addEventListener('click', function() {
  myModal.classList.remove('open');
});

window.addEventListener('keydown', (e) => {
  if(e.key === 'Escape') {
    myModal.classList.remove('open');
  }
});

document.querySelector('#my-modal .modal__content').addEventListener('click', e => {
  e._isClickWithInModal = true;
});

myModal.addEventListener('click', e => {
  if(e._isClickWithInModal) return;
  e.currentTarget.classList.remove('open')
});



tabButton.forEach((btn, i) => {
  btn.addEventListener('click', (e) => {
    tabButton.forEach(btn => {btn.classList.remove('active')});
    btn.classList.add('active');

    tabContent.forEach(tabcontent => {tabcontent.classList.remove('active')});
    tabContent[i].classList.add('active')
    })
})

