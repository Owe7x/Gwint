console.log('file 1');
const hamburgerBtn = document.querySelector('.header__inner-btn')
const hamburgerModal = document.querySelector('.modal-burger')
const hamburgerModalClose = document.querySelector('.modal-burger__close')

hamburgerBtn.addEventListener('click', () => {
    hamburgerModal.classList.add('modal-active')
})

hamburgerModalClose.addEventListener('click', () => {
    hamburgerModal.classList.remove('modal-active')
})