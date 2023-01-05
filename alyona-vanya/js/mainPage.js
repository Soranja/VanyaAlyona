const images = document.querySelectorAll('.column__image');
const titles = document.querySelectorAll('.column__title');
const catImg = document.querySelector('#cat');
const catBtn = document.querySelector('.column__us');
const meow = document.querySelector('#meow');

images[0].addEventListener('mouseover', function () {
    titles[0].classList.add('title__animation');
});

images[0].addEventListener('mouseout', function () {
    titles[0].classList.remove('title__animation');
});

images[1].addEventListener('mouseover', function () {
    titles[1].classList.add('title__animation');
});

images[1].addEventListener('mouseout', function () {
    titles[1].classList.remove('title__animation');
});

catBtn.addEventListener('mouseover', function(){
    catImg.style.transform = 'rotate(-45deg) translate(60px)';
    meow.play();
});

catBtn.addEventListener('mouseout', function(){
    catImg.style.transform = 'rotate(0deg)';
});