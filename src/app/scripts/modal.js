//* modal
const openModalBtns = document.querySelectorAll('.teachers-item__btn')
const closeModalBtn = document.querySelector('.close-modal-btn');
const modal = document.querySelector('#modal');
const tabButtons = document.querySelectorAll('.tabs-menu__btn');
const contentTabs = document.querySelectorAll('.tabcontent');

//* dropdown
const selectContainer = document.querySelector('.select-teachers');
const dropDownButton = document.querySelector('.select-teachers__btn');
const dropDownList = document.querySelector('.select-teachers__list');
const dropDownListItems = document.querySelectorAll('.select-teachers__list-item');
const textInnerButton = document.querySelector('.select-teachers__text');

//* open-close modal
const handleModalOpen = () => {
  modal.classList.add('open');
  document.body.classList.add('unscroll');
};

const handleModalClose = () => {
  modal.classList.remove('open');
  document.body.classList.remove('unscroll');
  setActiveTab(1);
};

const handleOutsideModalClick = (event) => {
  if (event.target !== modal) {
   return;
  }

  handleModalClose();
};

openModalBtns.forEach((btn) => {
  btn.addEventListener('click', handleModalOpen);
});

closeModalBtn.addEventListener('click', handleModalClose);

window.addEventListener('keydown', (event) => {
  if (!event.key == 'Escape' || !modal.classList.contains('open')) {
    return;
  }

  handleModalClose();
});

modal.addEventListener('click', handleOutsideModalClick);

//* set active tab
const setActiveTabContent = (id) => {
  const activeTabContent = document.querySelector(`.tabcontent[data-tab="${id}"]`);
  activeTabContent.classList.add('active');
};

const setActiveTabBtn = (id) => {
  const activeTabBtn = document.querySelector(`.tabs-menu__btn[data-tab="${id}"]`);
  activeTabBtn.classList.add('active');
};

const setActiveTab = (id) => {
  contentTabs.forEach((tabContent) => {
    tabContent.classList.remove('active');
  });

  tabButtons.forEach((tabButton) => {
    tabButton.classList.remove('active');
  });

  setActiveTabContent(id);
  setActiveTabBtn(id);
  setActiveItem(id);
};

const handleTabBtnClick = (event) => {
  const dataId = event.target.getAttribute('data-tab');
  setActiveTab(dataId);
};

tabButtons.forEach((tabButton) => {
  tabButton.addEventListener('click', handleTabBtnClick);
});

//* dropdown
const handleDropDownListOpen = (event) => {
  event.stopPropagation();
  dropDownList.classList.add('active');
};

const handleDropDownListClose = () => {
  dropDownList.classList.remove('active');
};

dropDownButton.addEventListener('click', handleDropDownListOpen);

closeModalBtn.addEventListener('click', handleModalClose);

//* select items
const handleOutsideSelectClick = (event) => {
  if(event.target !== selectContainer) {
    handleDropDownListClose();
  }
};

modal.addEventListener('click', handleOutsideSelectClick);

const handleItemActiveRemove = () => {
  dropDownListItems.forEach((item) => {
    item.classList.remove('active');
  });
};

const setActiveItem = (id) => {
  handleItemActiveRemove();
  const activeItem = document.querySelector(`.select-teachers__list-item[data-tab="${id}"]`);
  textInnerButton.innerText = activeItem.innerText;
  activeItem.classList.add('active');
};

const handleItemClick = (event) => {
  const dataId = event.target.getAttribute('data-tab');
  setActiveTab(dataId);
  setActiveItem(dataId);
  handleDropDownListClose();
};

dropDownListItems.forEach((item) => {
  item.addEventListener('click', handleItemClick);
});
