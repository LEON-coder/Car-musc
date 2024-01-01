let form = document.querySelector('.form'),
    formInputs = document.querySelectorAll('.js-input'),
    inputPhone = document.querySelector('.js-input-phone'),
    inputName = document.querySelector('.js-input-name'),
    // inputEmail = document.querySelector('.js-input-mail'),
    // inputCheckbox = document.querySelector('.js-input-checkbox'),
    inputTextArea = document.querySelector('.js-input-textarea');


/*function validateEmail(email) {
    let re = /^[\w-\.]+@[\w-]+\.[a-z]{2,4}$/i;
    return re.test(String(email).toLowerCase());
}
*/


function validateName(inputName) {
    let re = /^[a-zA-Zа-яёА-ЯЁ]+$/u;
    return re.test(String(inputName).toLowerCase());
}


function validatePhone(inputPhone) {
    let re = /^((\+7|7|8)+([0-9]){10})$/i;
    return re.test(String(inputPhone).toLowerCase());
}


form.onsubmit = function () {
    let phoneVal = inputPhone.value,
        nameVal = inputName.value,
        emptyInputs = Array.from(formInputs).filter(input => input.value === '');

    formInputs.forEach(function (input) {
        if (input.value === "") {
            input.classList.add('error');
            inputTextArea.classList.add('error');
        } else {
            input.classList.remove('error');
            inputTextArea.classList.remove('error');
        }
    });

    if (emptyInputs.length !== 0) {
        console.log('поля не заполнены');
        return false;
    }

    if (!validateName(nameVal)) {
        console.log('Введите свое имя');
        inputName.classList.add('.error');
        return false;
    } else {
        inputName.classList.remove('.error');
    }


    if (!validatePhone(phoneVal)) {
        console.log('Номер телефона некорректен');
        inputPhone.classList.add('error');
        return false;
    } else {
        inputPhone.classList.remove('error');
    }

    /*   if (!validateTextArea(textareaVal)) {
           console.log('Вы ничего не написали');
           inputTextArea.classList.add('error');
           return false;
       } else {
           inputTextArea.classList.remove('error');
       }
       */
}
