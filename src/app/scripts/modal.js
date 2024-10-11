const openModalBtns = document.querySelectorAll('.teachers-item__btn')
const closeModalBtn = document.querySelector('.close-modal-btn');
const modal = document.querySelector('.modal');
const tabButton = document.querySelectorAll('.tabs-menu__btn');
const tabContent = document.querySelectorAll('.tabcontent');

const openModal = () => {
  modal.classList.add('open');
};

const closeModal = () =>  {
  modal.classList.remove('open');
};

const closeModalOnBackdropClick = (event) => {
   if(event.target !== modal) {
    return;
   }
   closeModal();
};

for (let i = 0; i < openModalBtns.length; i++) {
  openModalBtns[i].addEventListener('click', openModal)
};

closeModalBtn.addEventListener('click', closeModal);

window.addEventListener('keydown', (event) => {
  if(event.key !== 'Escape' || !modal.classList.contains('open')) {
    return;
  }
  closeModal();
});

modal.addEventListener('click', closeModalOnBackdropClick);

// tabButton.forEach((btn, i) => {
//   btn.addEventListener('click', () => {
//     tabButton.forEach((btn) => {
//       btn.classList.remove('active')
//     });
//     btn.classList.add('active');

//     tabContent.forEach(tabcontent => tabcontent.classList.remove('active'));
//     tabContent[i].classList.add('active')
//     })
// })

//* data-atributes
tabButton.forEach((btn) => {
  btn.addEventListener('click', function() {
      const id = this.getAttribute('data-tab');
      console.log(this)
      const content = document.querySelector(`.tabcontent[data-tab="${id}"]`);
      const activeTab = document.querySelector('.tabs-menu__btn.active');
      const activeContent = document.querySelector('.tabcontent.active');

      activeTab.classList.remove('active');
      btn.classList.add('active');

      activeContent.classList.remove('active');
      content.classList.add('active');
   });
});

