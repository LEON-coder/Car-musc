let form = document.querySelector('.js-form'),
    formInputs = document.querySelectorAll('.js-input'),
    inputPhone = document.querySelector('.js-input-phone'),
    inputName = document.querySelector('.js-input-name');

function validateEmail(email) {
    let re = /^[\w-\.]+@[\w-]+\.[a-z]{2,4}$/i;
    return re.test(String(email).toLowerCase());
}





form.onsubmit = function(){
    let emailVal = inputEmail.value,
        phoneVal = inputPhone.value,
        emptyInputs = Array.from(formInputs).filter(input => input.value === '');


    formInputs.forEach(function(input) {
        if (input.value === '') {
            input.classList.add('error');
         }
         else {
            input.classList.remove('error');
         }
    });

    if (emptyInputs.length !==0) {
        console.log('inputs not filled');
        return false;
    }

if(!validateEmail(emailVal)) {
    console.log('email not valid'),
    inputEmail.classList.add('error');
    return false;
} else {
    inputEmail.classList.remove('error');
}}

    