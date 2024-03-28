const menu = document.querySelector('#mobile-menu')
const menuLinks = document.querySelector('.navbar__menu');

menu.addEventListener('click', function() {
    menu.classList.toggle('is-active');
    menuLinks.classList.toggle('active');
});


let element = document.getElementById("myIcon");
let isVisible = element.checkVisibility({
    checkOpacity: true,      // Check CSS opacity property too
    checkVisibilityCSS: true // Check CSS visibility property too
});