let form = document.querySelector('.form'),
    formInputs = document.querySelectorAll('.js-input'),
    inputPhone = document.querySelector('.js-input-phone'),
    inputName = document.querySelector('.js-input-name'),
    inputTextArea = document.querySelector('.js-input-textarea');




    function validateName(name) {
        let re = /^[a-z0-9_-]{3,16}$/;
        return re.test(String(name));
    }

    function validatePhone(phone) {
        let re = /^(\s*)?(\+)?([- _():=+]?\d[- _():=+]?){10,14}(\s*)?$/;
        return re.test(Number(phone));
}
    
    function validateTextArea(textarea) {
        let re = /а-z/;
        return re.test(String(textarea));
    }


    form.onsubmit = function() {
   
        let phoneVal = inputPhone.value,
            nameVal = inputName.value,
            textareaVal = inputTextArea.value,
            emptyInputs = Array.from(formInputs).filter(input => input.value === '');

        formInputs.forEach(function(input) {
            if (input.value === "") {
                input.classList.add('.error');
                console.log('поле не заполнено');
            } else {
                input.classList.remove('.error');
            }
        });

        if (emptyInputs.length !== 0) {
            console.log('поля не заполнены');
            return false;
        }


        if(!validateName(nameVal)) {
            console.log('Имя введено некорректно');
            inputName.classList.add('.error');
            return false; 
        } else {
            inputName.classList.remove('.error');
        }


        if(!validatePhone(phoneVal)) {
            console.log('Ваш телефон некорректен');
            inputPhone.classList.add('error');
            return false; 
        } else {
            inputPhone.classList.remove('error');
        }

         if(!validateTextArea(textareaVal)) {
            console.log('Вы ничего не написали');
            inputTextArea.classList.add('error');
            return false; 
        } else {
            inputTextArea .classList.remove('error');
        }
    } ;  
    