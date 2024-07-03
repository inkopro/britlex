const menu = document.querySelector('.header__mobile__mnu')
const menuBtn = document.querySelector('.header__burger-btn')
const menuOverlay = document.querySelector('.overlay')
const menuClose = document.querySelector('.header__close-btn')
const menuLink = document.querySelector('.header__mnu__item')
const body = document.body;
// кнопка бургера
if (menu && menuBtn) {
  menuBtn.addEventListener('click', () => {
    menu.classList.toggle('active')
    menuBtn.classList.toggle('active')
    menuOverlay.classList.toggle('active')
    body.classList.toggle('lock')
  })
  // /кнопка бурегера

  // кнопка закрытия мобильного меню
  menuClose.addEventListener('click', () => {
    menu.classList.remove('active')
    menuOverlay.classList.remove('active')
    body.classList.remove('lock')
  })
  menuLink.addEventListener('click', () => {
    menu.classList.remove('active')
    menuOverlay.classList.remove('active')
    body.classList.remove('lock')
  })

  // /кнопка закрытия мобильного меню
}

// плавный скролл
const anchors = document.querySelectorAll('a[href*="#"]');

anchors.forEach(anchors => {
  anchors.addEventListener('click', event => {
    event.preventDefault();

    const blockID = anchors.getAttribute('href').substring(1);

    document.getElementById(blockID).scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    })
  })
})
// /плавный скролл
