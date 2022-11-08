const popup = document.querySelector('.pop-up-bg');
const hidePop = document.querySelector('.hide-pop');
const showPop = document.querySelector('.show-pop');
const imgs = document.querySelector('.imgs-grid__item');
const hideBtn = document.querySelector('.hideBtn');

imgs.addEventListener('click', function () {
    popup.classList.add('show-pop');
});

hideBtn.addEventListener('click', function () {
    popup.classList.remove('show-pop');
});

