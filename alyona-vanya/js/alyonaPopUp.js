const popupTexts = [{
    img: './img/vanya-page/vania_2013.jpg',
    h3: '2013',
    h4: 'Я заканчиваю 9 класс',
    p: 'Опилки-опилки-опилки...'
}, {
    img: './img/vanya-page/vania_2014.jpg',
    h3: '2014',
    h4: 'Я заканчиваю 10 класс',
    p: 'Wabba-dabba!'
}, {
    img: './img/vanya-page/vania_2015.jpg',
    h3: '2015',
    h4: 'Я заканчиваю 11 класс',
    p: 'Bye-Bye!'
}, {
    img: './img/vanya-page/vania_2016.jpg',
    h3: '2016',
    h4: 'Uni I-II',
    p: 'Ni sho wo de...'
}, {
    img: './img/vanya-page/vania_2017.jpg',
    h3: '2017',
    h4: 'QINGDAO',
    p: 'calling... calling...'
}, {
    img: './img/vanya-page/vania_2018.jpg',
    h3: '2018',
    h4: 'Uni III',
    p: 'Nothing special, I guess.'
}, {
    img: './img/vanya-page/vania_2019.jpg',
    h3: '2019',
    h4: 'Alyona',
    p: 'Love!'
}, {
    img: './img/vanya-page/vania_2020.jpg',
    h3: '2020',
    h4: 'COVID',
    p: 'Chinese shit.'
}, {
    img: './img/vanya-page/vania_2021.jpg',
    h3: '2021',
    h4: 'School, videos',
    p: 'Empty year.'
}, {
    img: './img/vanya-page/vania_2022.jpg',
    h3: '2022',
    h4: 'Here we are',
    p: 'Shit just got real!'
}
];

const popup = document.querySelector('.pop-up-bg');
const hideBtn = document.querySelector('.hide-btn');
const popupBody = document.querySelector('.pop-up-body');
const imgs = [...document.querySelectorAll('.imgs-grid__item')];

const popupTextsIndexes = Object.keys(popupTexts);
const imgsIndexes = Object.keys(imgs);

imgs.forEach(function (item) {
    item.addEventListener('click', function () {
        popup.classList.add('show-pop');
        item.style.zIndex = '0';

        const popupMain = document.querySelector('.pop-up');
        popupMain.style.height = 'auto';

        const img = document.createElement('img');
        const h3 = document.createElement('h3');
        const h4 = document.createElement('h4');
        const text = document.createElement('p');

        if (popupTextsIndexes[imgs.indexOf(item)] === imgsIndexes[imgs.indexOf(item)]) {

            popupBody.appendChild(img);
            popupBody.appendChild(h3);
            popupBody.appendChild(h4);
            popupBody.appendChild(text);

            img.setAttribute('src', popupTexts[imgs.indexOf(item)].img);
            h3.textContent = `${popupTexts[imgs.indexOf(item)].h3}`;
            h4.textContent = `${popupTexts[imgs.indexOf(item)].h4}`;
            text.textContent = `${popupTexts[imgs.indexOf(item)].p}`;

        };

        hideBtn.addEventListener('click', function () {
            popup.classList.remove('show-pop');
            setTimeout(() => {
                popupBody.replaceChildren();
            }, 450);
        });

    });
});


const popupGallery = [
    {
        year: 2013,
        img_1: './img/alyona-page/2013/1',
        img_2: './img/alyona-page/2013/2',
        img_3: './img/alyona-page/2013/3',
        img_4: './img/alyona-page/2013/4',
        img_5: './img/alyona-page/2013/5'
    }
];

