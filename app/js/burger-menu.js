let BurgerButton = document.querySelector('#burger-menu');
let BurgerMenu = document.querySelector('.nav__list');

BurgerButton.addEventListener('click', function() {
    BurgerMenu.classList.toggle("open-burger");
});