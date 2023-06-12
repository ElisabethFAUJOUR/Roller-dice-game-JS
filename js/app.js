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
     * Start the game
     */
    start() {
        document.getElementById('welcome').classList.add('hidden');
        document.getElementById('app').classList.remove('hidden');
    },

    /**
     * Change the number of dices 
     */
    changeNumber() {
        const diceNumberElement = document.getElementById('dice-number');
        game.nbDices = game.diceNumberInputElement.value;
        diceNumberElement.textContent = game.nbDices;
    },

   /**
    * Lauch the game
    * @param {event} event submit form
    */
    play(event) {
        event.preventDefault();

        if (!game.ingame) { // si on est pas déjà en cours de partie
            game.ingame = true;
            game.reset();
            game.playerScore = game.createAllDices('player');
            setTimeout(game.dealerPlay, 3000);
            game.createTimer();
        }
    },

    /**
     * Reset score and game 
     */
    reset() {
        for (let boardIndex = 0; boardIndex < game.boardElement.length; boardIndex++) {
            game.boardElement[boardIndex].innerHTML = '';
        }
    },

    /**
     * Generate a random number
     * @param {number} min 
     * @param {number} max 
     * @returns {number} - random random
     */
    getRandom(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    },

    /**
     * Create all dices et return total score 
     * @param {string} player - player or dealer
     * @returns {number} - total score
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
     * Create one dice and get its value for the player or dealer 
     * @param {string} player - player or dealer
     * @returns {number} - dice value 
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
     * launch the game : roll the dices of player and dealer, get the scores and the result
     */
    dealerPlay() {
        const dealerScore = game.createAllDices('dealer');

        if (dealerScore > game.playerScore) { // si le score du dealer est plus élevé on a perdu
            game.defeat++;
        }
        else if (dealerScore < game.playerScore) { // si le score du dealer est plus petit on gagne
            game.victory++;
        }

        game.displayResult('player', game.victory);
        game.displayResult('dealer', game.defeat);

        game.ingame = false;
    },

    /**
     * Display the scores
     * @param {string} board - name of the board (player or dealer)
     * @param {number} counter - counter of victories or defeats 
     */
    displayResult(board, counter) {
        const resultElement = document.createElement('div');
        resultElement.className = 'result';
        resultElement.textContent = counter;
        document.getElementById(board).appendChild(resultElement);
    },

    /**
     * Initialize timer (3 - 2 - 1)
     */
    createTimer () {
        game.timer = 3;
        game.timerElement = document.createElement('div');
        game.timerElement.textContent = game.timer;
        game.timerElement.className = 'timer';
        document.getElementById('app').appendChild(game.timerElement);
        game.timerInterval = setInterval(game.timerDown, 1000);
    },

    /**
     * Decrement counter
     */
    timerDown() {
        game.timer--;
        game.timerElement.textContent = game.timer;
        if (game.timer === 0) {
            game.deleteTimer();
        }
    },

    /**
     * Delete counter and stop 
     */
    deleteTimer () {
        clearInterval(game.timerInterval);
        game.timerElement.remove();
    },
};

document.addEventListener('DOMContentLoaded', game.init);