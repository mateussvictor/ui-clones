const overlay = document.querySelector('.overlay')
const openMobileMenu = document.querySelector('.menu__icon')
const mobileMenu = document.querySelector('.nav__container--mobile')
const closeMobileMenu = document.querySelector('.close__btn')
const mobileNavItems = document.querySelectorAll('.nav__link')

openMobileMenu.addEventListener('click', () => {
  mobileMenu.classList.add('display')
  overlay.classList.add('display')
})

closeMobileMenu.addEventListener('click', () => {
  mobileMenu.classList.remove('display')
  overlay.classList.remove('display')
})

overlay.addEventListener('click', () => {
  mobileMenu.classList.remove('display')
  overlay.classList.remove('display')
})

mobileNavItems.forEach((value) => {
  value.addEventListener('click', () => {
    mobileMenu.classList.remove('display')
    overlay.classList.remove('display')
  })
})
