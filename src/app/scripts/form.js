let addForm = document.getElementById('add-form');
let inputName = document.querySelector('.input-name')
let inputPhone = document.querySelector('.input-phone');
let inputEmail = document.querySelector('.input-email');


function validateName(name) {
  let reg = /^[a-zA-Z0-9]+$/;
  return reg.test(String(name));
}

function validatePhone(phone) {
  let reg =  /^(\+7|7|8)?[\s\-]?\(?[489][0-9]{2}\)?[\s\-]?[0-9]{3}[\s\-]?[0-9]{2}[\s\-]?[0-9]{2}$/;
  return reg.test(phone);
}

function validateEmail(email) {
  let reg = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return reg.test(String(email).toLowerCase());
}

addForm.addEventListener('submit',(e) => {
  e.preventDefault();

  let nameVal = inputName.value;
  let phoneVal = inputPhone.value;
  let emailVal = inputEmail.value;

  function validation(form) {
    let result = true;

    const allInputs = form.querySelectorAll('input');

    for(const input of allInputs) {
      if(input.value === "") {
        input.style.border = '2px solid black';
        console.log('Field not filled!');
        result = false;
      } else {
        input.style.border = 'none';
        console.log(input.value)
      }
    }
    return result;
  }

  if(validation(addForm) === true) {
    alert('Success!')
  }

  if(!validateName(nameVal)) {
    console.log('Name not valid');
    return false;
  }

  if(!validatePhone(phoneVal)) {
    console.log('Phone not valid!');
    return false;
  };

  if(!validateEmail(emailVal)) {
    console.log('Email not valid!');
    return false;
  };

  console.log(`Name: ${nameVal}\nPhone: ${phoneVal}\nEmail: ${emailVal}`)
})
