const form = document.querySelector('#add-form');
const inputName = document.querySelector('#name')
const inputPhone = document.querySelector('#phone');
const inputEmail = document.querySelector('#email');

const regexName = new RegExp(/^[a-zA-Z0-9]+$/);
const regexPhone = new RegExp(/^(\s*)?(\+)?([- _():=+]?\d[- _():=+]?){10,14}(\s*)?$/gm);
const regexEmail = new RegExp(/^((?!\.)[\w\-_.]*[^.])(@\w+)(\.\w+(\.\w+)?[^.\W])$/gm);

let formData = {
  name: {
    value: "",
    isValid: false,
  },
  phone: {
    value: "",
    isValid: false,
  },
  email: {
    value: "",
    isValid: false,
  }
};

function handleNameChange(e) {
  formData.name.value = e.target.value;
  formData.name.isValid = true;
  inputName.classList.remove('error')
}

inputName.addEventListener('keydown', handleNameChange);
inputName.addEventListener('paste', handleNameChange);
inputName.addEventListener('input', handleNameChange);

function handleChangePhone(e) {
  formData.phone.value = e.target.value;
  formData.phone.isValid = true;
  inputPhone.classList.remove('error');
}

inputPhone.addEventListener('keydown', handleChangePhone);
inputPhone.addEventListener('paste', handleChangePhone);
inputPhone.addEventListener('input', handleChangePhone);

function handleChangeEmail(e) {
  formData.email.value = e.target.value;
  formData.email.isValid = true;
  inputEmail.classList.remove('error');
}

inputEmail.addEventListener('keydown', handleChangeEmail);
inputEmail.addEventListener('paste', handleChangeEmail);
inputEmail.addEventListener('input', handleChangeEmail);

function checkNameValidity() {
  const isValidName = formData.name.value.match(regexName);
  formData.name.isValid = isValidName;
  if(!isValidName) {
    inputName.classList.add('error');
    console.log('Name is not valid')
    return;
  }
    inputName.classList.remove('error');
}

function checkPhoneValidity() {
  const isValidPhone = formData.phone.value.match(regexPhone);
  formData.phone.isValid = isValidPhone;

  if(!isValidPhone) {
    inputPhone.classList.add('error');
    console.log('Phone is not valid')
    return;
  }
    inputPhone.classList.remove('error');
}

function checkEmailValidity() {
  const isValidEmail = formData.email.value.match(regexEmail);
  formData.email.isValid = isValidEmail;

  if(!isValidEmail) {
    inputEmail.classList.add('error');
    console.log('Email is not valid')
    return;
  }
    inputEmail.classList.remove('error');
}

function clearInputs() {
  formData = {
    name: {
      value: "",
      isValid: false,
    },
    phone: {
      value: "",
      isValid: false,
    },
    email: {
      value: "",
      isValid: false,
    },
  };

  inputName.value = "";
  inputPhone.value = "";
  inputEmail.value = "";
}

function checkFormValidity() {
  checkNameValidity();
  checkPhoneValidity();
  checkEmailValidity();

const formNativeValidity = form.checkValidity();

const isAllInputsValid = Object.values(formData).filter((value) => !value.isValid).length;

if(formNativeValidity && Boolean(!isAllInputsValid)) {
  console.log({
    name: formData.name.value,
    phone: formData.phone.value,
    email: formData.email.value,
  });
   clearInputs();
  }
}

form.addEventListener('submit', (e) => {
  e.preventDefault();
  checkFormValidity();
});

  const maskPhone = document.querySelectorAll("[data-mask]");
  for (let i = 0; i < maskPhone.length; i++) {
    maskPhone[i].addEventListener('input', maskInput);
  }
  function maskInput() {
    let input = this;
    let mask = input.dataset.mask;
    let value = input.value;
    let literalPattern = /[0\*]/;
    let numberPattern = /[0-9]/;
    let newValue = "";
    try {
      let maskLength = mask.length;
      let valueIndex = 0;
      let maskIndex = 0;

      for (; maskIndex < maskLength;) {
        if (maskIndex >= value.length) break;

        if (mask[maskIndex] === "0" && value[valueIndex].match(numberPattern) === null) break;

        while (mask[maskIndex].match(literalPattern) === null) {
          if (value[valueIndex] === mask[maskIndex]) break;
          newValue += mask[maskIndex++];
        }
        newValue += value[valueIndex++];
        maskIndex++;
      }

      input.value = newValue;
    } catch (e) {
      console.log(e);
    }
  }


