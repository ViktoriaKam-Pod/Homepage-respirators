function $(selector) {
  return document.querySelector(selector);
}

const burgerMenu = $('.icon-burger-menu');
const closeMenu = $(".icon-close-menu");

burgerMenu.addEventListener("click", ()=> {
  $(".icon-burger-menu").style.display = "none";
  $(".header-top-adaptive").style.display = "flex";
  $(".icon-close-menu").style.display = "block"
})
closeMenu.addEventListener("click", ()=> {
  $(".icon-burger-menu").style.display = "block";
  $(".header-top-adaptive").style.display = "none";
  $(".icon-close-menu").style.display = "none";
})