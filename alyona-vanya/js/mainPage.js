const images = document.querySelectorAll('.column__image');
const titles = document.querySelectorAll('.column__title');
// console.log(images, titles);

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