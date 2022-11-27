const popupTexts = [{
    img: './img/vanya-page/vania_2013.jpg',
    h3: '2013',
    p: 'Только закончила школу, год становления счастья и свободы.'
}, {
    img: './img/vanya-page/vania_2014.jpg',
    h3: '2014',
    p: 'В погоне за смыслом перепоступила теперь в педагогический, ещё не зная что предопределила свою профессию...'
}, {
    img: './img/vanya-page/vania_2015.jpg',
    h3: '2015',
    p: 'Череда беззаботности, друзей, влюблённостей и немного страданий.'
}, {
    img: './img/vanya-page/vania_2016.jpg',
    h3: '2016',
    p: 'Пик меня в форме я красивая, модная, энергичная и обаятельная'
}, {
    img: './img/vanya-page/vania_2017.jpg',
    h3: '2017',
    p: 'Год разбитого сердца настолько, что это буквально моё главное воспоминание в 2017'
}, {
    img: './img/vanya-page/vania_2018.jpg',
    h3: '2018',
    p: 'Собираю себя и разбитое сердце, заканчиваю универ, нахожу первую взрослую работу, переезжаю в первое съёмное жильё и меняюсь. Точно знаю что ощутила новый виток своего развития. Год моей осознанности.'
}, {
    img: './img/vanya-page/vania_2019.jpg',
    h3: '2019',
    p: 'Появление самого важного Вани в моей жизни и знакомство с Екатеринбургом. То самое одиночество которое я ждала.'
}, {
    img: './img/vanya-page/vania_2020.jpg',
    h3: '2020',
    p: 'Ковиииид который на нас никак не сказался. Садовый и начало совместной жизни. Теперь с Клементиной.'
}, {
    img: './img/vanya-page/vania_2021.jpg',
    h3: '2021',
    p: 'Жизнь идёт своим чередом, мы женимся, работаем.'
}, {
    img: './img/vanya-page/vania_2022.jpg',
    h3: '2022',
    p: 'Хахахха не так мы планировали его провести. Мир конечно разделился для нашего поколения на до и после, но в маленькой семье всё потихоньку налаживается благодаря Еревану.'
}
];

const popupGallery = [
    {
        year: 2013,
        imgs: [
            './img/alyona-page/2013/1.jpg',
            './img/alyona-page/2013/2.jpg',
            './img/alyona-page/2013/3.jpg',
            './img/alyona-page/2013/4.jpg',
            './img/alyona-page/2013/5.jpg'
        ]
    },
    {
        year: 2014,
        imgs: [
            './img/alyona-page/2014/1.jpg',
            './img/alyona-page/2014/2.jpg',
            './img/alyona-page/2014/3.jpg',
            './img/alyona-page/2014/4.jpg'
        ]
    },
    {
        year: 2015,
        imgs: [
            './img/alyona-page/2015/1.jpg',
            './img/alyona-page/2015/2.jpg',
            './img/alyona-page/2015/3.jpg'
        ]
    },
    {
        year: 2016,
        imgs: [
            './img/alyona-page/2016/1.jpg',
            './img/alyona-page/2016/2.jpg',
            './img/alyona-page/2016/3.jpg',
            './img/alyona-page/2016/4.jpg',
            './img/alyona-page/2016/5.jpg'
        ]
    },
    {
        year: 2017,
        imgs: [
            './img/alyona-page/2017/1.jpg',
            './img/alyona-page/2017/2.jpg'
        ]
    },
    {
        year: 2018,
        imgs: [
            './img/alyona-page/2018/1.jpg',
            './img/alyona-page/2018/2.jpg',
            './img/alyona-page/2018/3.jpg',
            './img/alyona-page/2018/4.jpg',
            './img/alyona-page/2018/5.jpg',
            './img/alyona-page/2018/6.jpg',
            './img/alyona-page/2018/7.jpg'
        ]
    },
    {
        year: 2019,
        imgs: [
            './img/alyona-page/2019/1.jpg',
            './img/alyona-page/2019/2.jpeg',
            './img/alyona-page/2019/3.jpeg',
            './img/alyona-page/2019/4.jpg',
            './img/alyona-page/2019/5.jpg',
            './img/alyona-page/2019/6.jpg',
            './img/alyona-page/2019/7.jpg',
            './img/alyona-page/2019/8.JPG',
            './img/alyona-page/2019/9.JPG',
            './img/alyona-page/2019/10.jpg',
        ]
    },
    {
        year: 2020,
        imgs: [
            './img/alyona-page/2020/1.jpg',
            './img/alyona-page/2020/2.jpg',
            './img/alyona-page/2020/3.jpg',
            './img/alyona-page/2020/4.jpg'
        ]
    },
    {
        year: 2021,
        imgs: [
            './img/alyona-page/2021/1.jpg',
            './img/alyona-page/2021/2.jpg',
            './img/alyona-page/2021/3.jpg',
            './img/alyona-page/2021/4.jpg'
        ]
    },
    {
        year: 2022,
        imgs: [
            './img/alyona-page/2022/1.jpg',
            './img/alyona-page/2022/2.jpg',
            './img/alyona-page/2022/3.jpg',
            './img/alyona-page/2022/4.jpg',
            './img/alyona-page/2022/5.jpg',
            './img/alyona-page/2022/6.jpg',
            './img/alyona-page/2022/7.jpg'
        ]
    },
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

        const img = document.querySelector('.pop-up_img');
        const h3 = document.createElement('h3');
        const text = document.createElement('p');

        const prevBtn = document.querySelector(".prev-btn");
        const nextBtn = document.querySelector(".next-btn");

        if (popupTextsIndexes[imgs.indexOf(item)] === imgsIndexes[imgs.indexOf(item)]) {

            popupBody.appendChild(h3);
            popupBody.appendChild(text);

            h3.textContent = `${popupTexts[imgs.indexOf(item)].h3}`;
            text.textContent = `${popupTexts[imgs.indexOf(item)].p}`;

        };

        let currentItem = 0;
        let imgCurrentIndex = imgsIndexes[imgs.indexOf(item)];

        if (popup.classList.contains('show-pop')) {
            const item = popupGallery[imgCurrentIndex];
            img.src = item.imgs[currentItem];
        };

        const showPhoto = function (photo) {
            const item = popupGallery[imgCurrentIndex];
            img.src = item.imgs[photo];
        };

        nextBtn.addEventListener('click', function () {
            currentItem++;
            if (currentItem > popupGallery[imgCurrentIndex].imgs.length - 1) currentItem = 0;
            showPhoto(currentItem);
        });

        prevBtn.addEventListener('click', function () {
            currentItem--;
            if (currentItem < 0) currentItem = popupGallery[imgCurrentIndex].imgs.length - 1;
            showPhoto(currentItem);
        });

        hideBtn.addEventListener('click', function () {
            popup.classList.remove('show-pop');
            setTimeout(() => {
                popupBody.replaceChildren();
            }, 450);
        });
    });
});



// imgs.forEach(function (item) {
//     item.addEventListener('click', function () {
//         popup.classList.add('show-pop');
//         item.style.zIndex = '0';

//         const popupMain = document.querySelector('.pop-up');
//         popupMain.style.height = 'auto';

//         const img = document.createElement('img');
//         const h3 = document.createElement('h3');
//         const text = document.createElement('p');

//         if (popupTextsIndexes[imgs.indexOf(item)] === imgsIndexes[imgs.indexOf(item)]) {

//             popupBody.appendChild(img);
//             popupBody.appendChild(h3);
//             popupBody.appendChild(text);

//             img.setAttribute('src', popupTexts[imgs.indexOf(item)].img);
//             h3.textContent = `${popupTexts[imgs.indexOf(item)].h3}`;
//             text.textContent = `${popupTexts[imgs.indexOf(item)].p}`;

//         };

//         hideBtn.addEventListener('click', function () {
//             popup.classList.remove('show-pop');
//             setTimeout(() => {
//                 popupBody.replaceChildren();
//             }, 450);
//         });

//     });
// });