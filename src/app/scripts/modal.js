const openModalBtns = document.querySelectorAll('.teachers-item__btn')
const closeModalBtn = document.querySelector('.close-modal-btn');
const modal = document.querySelector('.modal');
const tabButtons = document.querySelectorAll('.tabs-menu__btn');
const contentTabs = document.querySelectorAll('.tabcontent');

const teachersSelect = document.querySelector('.select-teachers')
const openOptionsBtn = document.querySelector('.select-teachers__btn');
const selectOptions = document.querySelector('.select-teachers__options');
const openOptionOne = document.querySelectorAll('.select-teachers__option');
const closeMobileBtn = document.querySelector('.close-mobile-btn');

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
  if (!event.key == 'Escape' || !modal.classList.contains('open')) {
    return;
  }

  closeModal();
});

modal.addEventListener('click', closeModalOnBackdropClick);

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
});

//* Select mobile
//* Клик по кнопке - открыть/закрыть
const openOptions = () => {
  selectOptions.classList.toggle('active');
};

openOptionsBtn.addEventListener('click', openOptions);

//* выбрать элемент из списка / закрыть дропдаун
function selectedOption (event) {
  event.stopPropagation();
  openOptionsBtn.innerText = this.innerText;
  selectOptions.classList.remove('active');
}

openOptionOne.forEach ((option) => {
  option.addEventListener('click', selectedOption)
});

//* клик снаружи дропдауна - закрыть дропдаун:
const closeOptionsOnBackdropClick = (event) => {
  if(event.target !== openOptionsBtn) {
    selectOptions.classList.remove('active');
  }
};

modal.addEventListener('click', closeOptionsOnBackdropClick);

//* крестик
const closeMobile = () => {
  modal.classList.remove('open');
};

closeMobileBtn.addEventListener('click', closeMobile);

//* Options
const setActiveOption = (optionOne, id) => {
  optionOne.classList.remove('active');
  const activeOption = document.querySelector(`.select-teachers__option[data-value="${id}"]`);
  activeOption.classList.add('active');
}

const onOptionOneClick = (event) => {
  const dataId = event.target.getAttribute('data-value');

  contentTabs.forEach((tabContent) => {
    setActiveTabContent(tabContent, dataId);
  });

  openOptionOne.forEach((optionOne) => {
    setActiveOption(optionOne, dataId);
  });
}

openOptionOne.forEach((optionOne) => {
  optionOne.addEventListener('click', onOptionOneClick);
});

