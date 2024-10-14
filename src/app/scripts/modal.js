const openModalBtns = document.querySelectorAll('.teachers-item__btn')
const closeModalBtn = document.querySelector('.close-modal-btn');
const modal = document.querySelector('.modal');
const tabButtons = document.querySelectorAll('.tabs-menu__btn');
const contentTabs = document.querySelectorAll('.tabcontent');

const openModal = () => {
  modal.classList.add('open');
};

for (let i = 0; i < openModalBtns.length; i++) {
  openModalBtns[i].addEventListener('click', openModal);
};

const closeModal = () => {
  modal.classList.remove('open');
};

closeModalBtn.addEventListener('click', closeModal);

const closeModalOnBackdropClick = (event) => {
  if (event.target !== modal) {
   return;
  }

  closeModal();
};

window.addEventListener('keydown', (event) => {
  if (event.key !== 'Escape' || !modal.classList.contains('open')) {
    return;
  }

  closeModal();
});

modal.addEventListener('click', closeModalOnBackdropClick);


// const onTabBtnClick = (buttonId) => {
//   contentTabs.forEach((tab) => {
//     tab.classList.remove('active');
//     const activeTab = document.querySelector(`.tabcontent[data-tab="${buttonId}"]`);
//     activeTab.classList.add('active');
//   })
// }

// tabButtons.forEach((tabBtn) => {
//   tabBtn.addEventListener('click', (event) => {
//     const activeTabBtn = document.querySelector('.tabs-menu__btn.active')
//     activeTabBtn.classList.remove('active');
//     tabBtn.classList.add('active');
//     onTabBtnClick(event.target.getAttribute('data-tab'));
//   })
// });


const setActiveTabContent = (tabContent, id) => {
  tabContent.classList.remove('active');
  const activeTabContent = document.querySelector(`.tabcontent[data-tab="${id}"]`);
  activeTabContent.classList.add('active');
}

const setActiveTabBtn = (tabButton, id) => {
  tabButton.classList.remove('active');
  const activeTabBtn = document.querySelector(`.tabs-menu__btn[data-tab="${id}"]`);
  activeTabBtn.classList.add('active');
}

const onTabBtnClick = (event) => {
  const dataId = event.target.getAttribute('data-tab');

  contentTabs.forEach((tabContent) => {
    setActiveTabContent(tabContent, dataId);
  });

  tabButtons.forEach((tabButton) => {
    setActiveTabBtn(tabButton, dataId)
  });
}

tabButtons.forEach((tabButton) => {
  tabButton.addEventListener('click', onTabBtnClick);
})

