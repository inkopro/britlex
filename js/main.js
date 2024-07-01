const menu = document.querySelector('.header__mobile__mnu')
const menuBtn = document.querySelector('.header__burger-btn')
const menuOverlay = document.querySelector('.overlay')
const menuClose = document.querySelector('.header__close-btn')
const body = document.body;

if (menu && menuBtn) {
  menuBtn.addEventListener('click', () => {
    menu.classList.toggle('active')
    menuBtn.classList.toggle('active')
    menuOverlay.classList.toggle('active')
    body.classList.toggle('lock')
  })

  menuClose.addEventListener('click', () => {
    menu.classList.remove('active')
    menuOverlay.classList.remove('active')
    body.classList.remove('lock')
  })

}