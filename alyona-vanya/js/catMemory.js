const moves = document.getElementById('moves-counter');
const timer = document.getElementById('timer');
const startButton = document.getElementById('start');
const stopButton = document.getElementById('stop');
const gameContainer = document.querySelector('.game-container');
const result = document.getElementById('result');
const controls = document.querySelector('.controls-container');
const nav = document.querySelector('.nav-container');

let cards;
let interval;
let firstCard = false;
let secondCard = false;

//Items Array

const items = [
    { name: 'cat1', image: './img/cat-memory/cat1.png' },
    { name: 'cat2', image: './img/cat-memory/cat2.png' },
    { name: 'cat3', image: './img/cat-memory/cat3.png' },
    { name: 'cat4', image: './img/cat-memory/cat4.png' },
    { name: 'cat5', image: './img/cat-memory/cat5.png' },
    { name: 'cat6', image: './img/cat-memory/cat6.png' },
    { name: 'cat7', image: './img/cat-memory/cat7.png' },
    { name: 'cat8', image: './img/cat-memory/cat8.png' }
];

// Initial Time
let seconds = 0,
    minutes = 0;

// Initial moves and win count
let movesCount = 0,
    winCount = 0;

// Timer
const timerGenerator = () => {
    seconds += 1;
    // Minutes logic
    if (seconds >= 60) {
        minutes += 1;
        seconds = 0;
    }
    // Format 'Time: 00:00'
    let secondsValue = seconds < 10 ? `0${seconds}` : seconds;
    let minutesValue = minutes < 10 ? `0${minutes}` : minutes;
    timer.innerHTML = `<span>Time: </span>${minutesValue}:${secondsValue}`;
};

// For calculating moves
const movesCounter = () => {
    movesCount += 1;
    moves.innerHTML = `<span>Moves: </span>${movesCount}`;
};

// Pick random obj from items array
const generateRandom = (size = 4) => {
    // Temporary array (?)
    let tempArray = [...items];
    // Initializes cardValues array
    let cardValues = [];
    // Squaring the size, split in two (?)
    size = (size ** 2) / 2;
    // Random obj selection
    for (let i = 0; i < size; i++) {
        const randomIndex = Math.floor(Math.random() * tempArray.length);
        cardValues.push(tempArray[randomIndex]);
        // Remove selected obj from the Temp array
        tempArray.splice(randomIndex, 1);
    }
    return cardValues;
};

const gridGenerator = (cardValues, size = 4) => {
    gameContainer.innerHTML = '';
    cardValues = [...cardValues, ...cardValues];
    // (??)
    // Shuffle
    cardValues.sort(() => Math.random() - 0.5);
    for (let i = 0; i < (size ** 2); i++) {
        // Create Cards = front and back side + store cards' data attributes
        gameContainer.innerHTML +=
            `
            <div class = 'card-container' data-card-value = '${cardValues[i].name}'>
                <div class = 'card-before'>?</div>
                <div class = 'card-after'> 
                <img src = '${cardValues[i].image}'
                class = 'image'>
                </div>
            </div>
            `;
    }

    // Grid
    gameContainer.style.gridTemplateColumns = `repeat(${size}, auto)`;

    // Cards
    cards = document.querySelectorAll('.card-container');
    cards.forEach((card) => {
        card.addEventListener('click', () => {
            // If selected card is not matched yet then only run (clicked card would be ignored)
            if (!card.classList.contains('matched')) {
                // Flip the clicked card
                card.classList.add('flipped');
                // If it is the first card (!firstCard initially false)
                if (!firstCard) {
                    // Current card becomes firstCard
                    firstCard = card;
                    // Current cards value becomes firstCardValue
                    firstCardValue = card.getAttribute('data-card-value');
                }
                else {
                    // Increment moves since user selected the second card
                    movesCounter();
                    // Second card and value
                    secondCard = card;
                    let secondCardValue = card.getAttribute('data-card-value');
                    if (firstCardValue === secondCardValue) {
                        // If both cards match -- add 'matched' class
                        firstCard.classList.add('matched');
                        secondCard.classList.add('matched');
                        // Set firstCard to false since next card would be first now
                        firstCard = false;
                        // winCount increment as user found a correct match
                        winCount += 1;
                        // Check if winCount === half of cardValues
                        if (winCount === Math.floor(cardValues.length / 2)) {
                            result.innerHTML =
                                `
                            <h2>You Won!</h2>
                            <h4>Moves: ${movesCount}</h4>
                            `;
                            stopGame();
                        }
                    } else {
                        // If the cards don't match
                        // Flip the cards back to normal
                        let [tempFirst, tempSecond] = [firstCard, secondCard];
                        firstCard = false;
                        secondCard = false;
                        let delay = setTimeout(() => {
                            tempFirst.classList.remove('flipped');
                            tempSecond.classList.remove('flipped');
                        }, 900);
                    }
                }
            }
        });
    });
};



// Start Game
startButton.addEventListener('click', () => {
    movesCount = 0;
    seconds = 0;
    minutes = 0;
    // Controls and buttuns visibility
    controls.classList.add('hide');
    stopButton.classList.remove('hide');
    startButton.classList.add('hide');
    // Start timer
    interval = setInterval(timerGenerator, 1000);
    // Initial moves
    moves.innerHTML = `<span>Moves:</span> ${movesCount}`;
    init();
});

// Initialize values and f calls
const init = () => {
    result.innerText = '';
    winCount = 0;
    let cardValues = generateRandom();
    gridGenerator(cardValues);
    console.log(cardValues);
};

// Stop Game
stopButton.addEventListener(
    'click',
    (stopGame = () => {
        controls.classList.remove('hide');
        stopButton.classList.add('hide');
        startButton.classList.remove('hide');
        clearInterval(interval);
    })
);

nav.classList.remove('hide');