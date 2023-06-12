const game = {

    nbDices: null,

    victory: 0,
    defeat: 0,

    ingame: false,

    // ---- init ----

    init() {
        const playBtnElement = document.getElementById('play');
        playBtnElement.addEventListener('click', game.start);

        document.addEventListener('keyup', function (event) {
            if (event.code === 'Space') {
                game.start();
            }
        });

        game.boardElement = document.querySelectorAll('.board');
        game.diceNumberInputElement = document.getElementById('dice-number-input');
        game.diceNumberInputElement.addEventListener('input', game.changeNumber);

        const gameFormElement = document.getElementById('game-form');
        gameFormElement.addEventListener('submit', game.play);

        game.changeNumber();
    },

    // ---- functions ----

    /**
     * Change the div
     */
    start() {
        document.getElementById('welcome').classList.add('hidden');
        document.getElementById('app').classList.remove('hidden');
    },

    changeNumber() {
        const diceNumberElement = document.getElementById('dice-number');
        game.nbDices = game.diceNumberInputElement.value;
        diceNumberElement.textContent = game.nbDices;
    },

    play(event) {
        event.preventDefault();

        if (!game.ingame) { // si on est pas déjà en cours de partie
            game.ingame = true;
            game.reset();
            game.playerScore = game.createAllDices('player');
            setTimeout(game.dealerPlay, 3000);
            game.createCounter();
        }
    },

    /**
     * Delete dices et reset score
     */
    reset() {
        for (let boardIndex = 0; boardIndex < game.boardElement.length; boardIndex++) {
            game.boardElement[boardIndex].innerHTML = '';
        }
    },

    /**
     * Return a random number
     * @param {number} min 
     * @param {number} max 
     * @returns 
     */
    getRandom(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    },

    /**
     * Roll dices et return total score 
     * @param {*} player 
     * @returns 
     */
    createAllDices(player) {
        let score = 0;
        for (let nbDice = 0; nbDice < Number(game.nbDices); nbDice++) {
            const diceScore = game.createDice(player);
            score += diceScore;
        }
        return score;
    },

    // 
    /**
     * Get player index (parameter) to increase his score
     * @param {*} player 
     * @returns 
     */
    createDice(player) {
        const diceElement = document.createElement('div');
        const diceValue = game.getRandom(1, 6);
        const imageOffset = (diceValue - 1) * 100;
        diceElement.className = 'dice';
        diceElement.textContent = '';
        diceElement.style.backgroundPosition = '-' + imageOffset + 'px 0';
        document.getElementById(player).appendChild(diceElement);
        return diceValue;
    },

    /**
     * Roll dice dealer
     */
    dealerPlay() {
        const dealerScore = game.createAllDices('dealer');

        if (dealerScore > game.playerScore) { // si le score de l'adversaire est plus élevé on a perdu
            game.defeat++;
        }
        else if (dealerScore < game.playerScore) { // sinon on gagne
            game.victory++;
        }

        game.displayResult('player', game.victory);
        game.displayResult('dealer', game.defeat);

        game.ingame = false;
    },

    /**
     * Display the scores
     * @param {string} board 
     * @param {number} counter 
     */
    displayResult(board, counter) {
        const resultElement = document.createElement('div');
        resultElement.className = 'result';
        resultElement.textContent = counter;
        document.getElementById(board).appendChild(resultElement);
    },

    /**
     * Initialize counter
     */
    createCounter() {
        game.counter = 3;
        game.counterElement = document.createElement('div');
        game.counterElement.textContent = game.counter;
        game.counterElement.className = 'counter';
        document.getElementById('app').appendChild(game.counterElement);
        game.counterInterval = setInterval(game.countdown, 1000);
    },

    /**
     * Decrement counter
     */
    countdown() {
        game.counter--;
        game.counterElement.textContent = game.counter;
        if (game.counter === 0) {
            game.deleteCounter();
        }
    },

    /**
     * Delete counter and stop 
     */
    deleteCounter() {
        clearInterval(game.counterInterval);
        game.counterElement.remove();
    },
};

document.addEventListener('DOMContentLoaded', game.init);