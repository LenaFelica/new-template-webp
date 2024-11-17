const openModalBtns = document.querySelectorAll('.teachers-item__btn')
const closeModalBtn = document.querySelector('.close-modal-btn');
const modal = document.querySelector('.modal');
const tabButtons = document.querySelectorAll('.tabs-menu__btn');
const contentTabs = document.querySelectorAll('.tabcontent');

const handleModalOpen = () => {
  modal.classList.add('open');
};

openModalBtns.forEach((btn) => {
  btn.addEventListener('click', handleModalOpen);
});

const handleModalClose = () => {
  modal.classList.remove('open');
};

closeModalBtn.addEventListener('click', handleModalClose);

const handleOutsideModalClick = (event) => {
  if (event.target !== modal) {
   return;
  }

  handleModalClose();
};

window.addEventListener('keydown', (event) => {
  if (!event.key == 'Escape' || !modal.classList.contains('open')) {
    return;
  }

  handleModalClose();
});

modal.addEventListener('click', handleOutsideModalClick);

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

const handleTabBtnClick = (event) => {
  const dataId = event.target.getAttribute('data-tab');

  contentTabs.forEach((tabContent) => {
    setActiveTabContent(tabContent, dataId);
  });

  tabButtons.forEach((tabButton) => {
    setActiveTabBtn(tabButton, dataId)
  });
}

tabButtons.forEach((tabButton) => {
  tabButton.addEventListener('click', handleTabBtnClick);
});

const dropDownButton = document.querySelector('.select-teachers__btn');
const dropDownList = document.querySelector('.select-teachers__list');
const dropDownListItem = dropDownList.querySelectorAll('.select-teachers__list-item');
const textInnerButton = document.querySelector('.select-teachers__text');


const handleDropDownListToggle = () => {
  dropDownList.classList.toggle('active');
};

dropDownButton.addEventListener('click', handleDropDownListToggle);

const handleDropDownListClose = () => {
  dropDownList.classList.remove('active');
};

closeModalBtn.addEventListener('click', handleModalClose);

function handleTextChangeInnerBtn (){
  textInnerButton.innerText = this.innerText;
  handleDropDownListClose();
}

dropDownListItem.forEach((listItem) => {
  listItem.addEventListener('click', handleTextChangeInnerBtn)
});

// const handleOutsideSelectClick = (event) => {
//   if(event.target !== dropDownButton) {
//     handleDropDownListClose();
//   }
// };

// modal.addEventListener('click', handleOutsideSelectClick);

const setActiveItem = (listItem, id) => {
  listItem.classList.remove('active');
  const activeItem = document.querySelector(`.select-teachers__list-item[data-tab="${id}"]`);
  activeItem.classList.add('active');
}

const handleItemClick = (event) => {
  const dataId = event.target.getAttribute('data-tab');

  contentTabs.forEach((tabContent) => {
    setActiveTabContent(tabContent, dataId);
  });

  dropDownListItem.forEach((listItem) => {
    setActiveItem(listItem, dataId);
  });
}

dropDownListItem.forEach((item) => {
  item.addEventListener('click', handleItemClick);
});
