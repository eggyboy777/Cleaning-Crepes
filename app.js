const menu = document.querySelector('#mobile-menu')
const menuLinks = document.querySelector('.navbar__menu');

menu.addEventListener('click', function() {
    menu.classList.toggle('is-active');
    menuLinks.classList.toggle('active');
});




var prevScrollPos = window.scrollY;
window.onscroll = function() {
  var currentScrollPos = window.scrollY;
  document.getElementById("stub").style.display = prevScrollPos > currentScrollPos ? "block" : "none";
  prevScrollPos = currentScrollPos;
}

