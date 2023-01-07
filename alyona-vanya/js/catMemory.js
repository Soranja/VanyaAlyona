const moves = document.getElementById('moves-counter');
const timer = document.getElementById('timer');
const startButton = document.getElementById('start');
const stopButton = document.getElementById('stop');
const gameContainer = document.querySelector('.game-container');
const result = document.getElementById('result');
const controls = document.querySelector('controls-container');

let cards;
let interval;
let firstCard = false;
let secondCard = false;

//Items Array (?)

const items = [
    { name: 'cat1', image: 'cat1.png' },

];
