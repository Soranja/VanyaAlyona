// текст для поп-апов
const popupTexts = {
    2013: {
        img: './img/vanya-page/vania_2013.jpg',
        h3: '2013',
        h4: 'Я заканчиваю 9 класс',
        p: 'Опилки-опилки-опилки...'
    },
    2014: {
        img: './img/vanya-page/vania_2014.jpg',
        h3: '2014',
        h4: 'Я заканчиваю 10 класс',
        p: 'Wabba-dabba!'
    },
    2015: {
        img: './img/vanya-page/vania_2015.jpg',
        h3: '2015',
        h4: 'Я заканчиваю 11 класс',
        p: 'Bye-Bye!'
    },
    2016: {
        img: './img/vanya-page/vania_2016.jpg',
        h3: '2016',
        h4: 'Uni I-II',
        p: 'Ni sho wo de...'
    },
    2017: {
        img: './img/vanya-page/vania_2017.jpg',
        h3: '2017',
        h4: 'QINGDAO',
        p: 'calling... calling...'
    },
    2018: {
        img: './img/vanya-page/vania_2018.jpg',
        h3: '2018',
        h4: 'Uni III',
        p: 'Nothing special, I guess.'
    },
    2019: {
        img: './img/vanya-page/vania_2019.jpg',
        h3: '2019',
        h4: 'Alyona',
        p: 'Love!'
    },
    2020: {
        img: './img/vanya-page/vania_2020.jpg',
        h3: '2020',
        h4: 'COVID',
        p: 'Chinese shit.'
    },
    2021: {
        img: './img/vanya-page/vania_2021.jpg',
        h3: '2021',
        h4: 'School, videos',
        p: 'Empty year.'
    },
    2022: {
        img: './img/vanya-page/vania_2022.jpg',
        h3: '2022',
        h4: 'Here we are',
        p: 'Shit just got real!'
    }
};

const popup = document.querySelector('.pop-up-bg');
const hideBtn = document.querySelector('.hideBtn');
const popupBody = document.querySelector('.pop-up-body');

// const showPop = document.querySelector('.show-pop');
// const hidePop = document.querySelector('.hide-pop');
const imgs = document.querySelectorAll('.imgs-grid__item');

// открывает и закрывает поп-ап, з-индекс
imgs.forEach(function (item) {
    item.addEventListener('click', function () {
        popup.classList.add('show-pop');
        item.style.zIndex = '0';

    });
    hideBtn.addEventListener('click', function () {
        popup.classList.remove('show-pop');
    });
});

const popupTextsIndexes = Object.keys(popupTexts);
const imgsIndexes = Object.keys(imgs);

const imgsPopIds = function () {
    for (let i = 0; i < imgs.length; i++) {
        // console.log(popupTextsIndexes[1]);
        // console.log(imgsIndexes[1]);
        if (popupTextsIndexes[i] === imgsIndexes[i]) {
            console.log('clicked');
        };
    };

};

imgsPopIds();

// console.log(Object.keys(imgs));
// console.log(Object.keys(popupTexts));




// const createText = function () {
//     for (let i = 0; i < imgs.length; i++) {
//         const h3 = document.createElement('h3');
//         const h4 = document.createElement('h4');
//         const mainText = document.createElement('p');
//         h3.setAttribute('id', i);
//         h4.setAttribute('id', i);
//         mainText.setAttribute('id', i);
//         popupBody.append(h3);

//     };
// };

// const createBoard = function () {
//     for (let i = 0; i < cardArray.length; i++) {
//         const card = document.createElement('img');
//         card.setAttribute('src', 'img/blank.png');
//         card.setAttribute('data-id', i);
//         card.addEventListener('click', flipCard);

//     }
// };