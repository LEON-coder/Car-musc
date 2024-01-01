let form = document.querySelector('.form'),
    formInputs = document.querySelectorAll('.js-input'),
    inputPhone = document.querySelector('.js-input-phone'),
    inputName = document.querySelector('.js-input-name'),
    // inputEmail = document.querySelector('.js-input-mail'),
    // inputCheckbox = document.querySelector('.js-input-checkbox'),
    inputTextArea = document.querySelector('.js-input-textarea');
notifyName = document.querySelector('.notify-name');
notifyPhone = document.querySelector('.notify-phone');
notifyTextArea = document.querySelector('.notify-text-area');


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
function validateTextArea(inputTextArea) {
    let re = /^[a-zA-Zа-яёА-ЯЁ]+$/u;
    return re.test(String(inputTextArea).toLowerCase());
}






form.onsubmit = function () {
    let phoneVal = inputPhone.value,
        nameVal = inputName.value,
        textAreaVal = inputTextArea.value,
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
        inputName.classList.add('error');
        notifyName.classList.add('name-notify-show');
        return false;
    } else {
        inputName.classList.remove('error');
        notifyName.classList.remove('name-notify-show');
    }


    if (!validatePhone(phoneVal)) {
        notifyPhone.classList.add('phone-notify-show');
        inputPhone.classList.add('error');
        return false;
    } else {
        notifyPhone.classList.remove('phone-notify-show');
        inputPhone.classList.remove('error');
    }

    if (!validateTextArea(textAreaVal)) {
        console.log('Вы ничего не написали');
        inputTextArea.classList.add('error');
        notifyTextArea.classList.add('notify-text-area-show');
        return false;
    } else {
        inputTextArea.classList.remove('error');
        notifyTextArea.classList.remove('notify-text-area-show');
    }
}
