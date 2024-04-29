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


let product_img = document.querySelector('.product-img img');
let product_thumbnail = document.querySelectorAll('.product-thumbnail');


product_thumbnail.forEach((product)=>{
  product.addEventListener('click', ()=>{
    product_thumbnail.forEach((product)=>{
      product.classList.remove('active');
    });
    product.classList.add('active');

    let img = product.querySelector('img').getAttribute('src');
    let index = product.querySelector('img').getAttribute('data-index');

    product_img.setAttribute('src', img)
    product_img.setAttribute('data-index', index);

    product_img.classList.add('product-down-animation');
    setTimeout(()=> {
      product_img.classList.remove('product-down-animation');

    }, 500)


  })
})