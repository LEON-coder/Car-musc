let form = document.querySelector('.form__block'),
    formInputs = document.querySelectorAll('.js-input'),
    inputPhone = document.querySelector('.contacts__block__form_phone'),
    inputName = document.querySelector('.contacts__block__form_name'),
    inputQuestionsArea = document.querySelector('.form_questions');




    form.onsubmit = function () {

        let phoneVal = inputPhone.value,
            nameVal = inputName.value,
            emptyInputs = Array.from(formInputs).filter(input => input.value === '');

        formInputs.forEach(function (input) {
            if (input.value === '') {
                input.classList.add('.js-input:hover');
                console.log('поле не заполнено');
            } else {
                input.classList.remove('.js-input:hover'); 
            }
            });


if (emptyInputs.length !==0) {
    console.log('Поле не заполнено');
    return false;
}      
    }