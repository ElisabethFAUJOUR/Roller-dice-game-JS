const app = {

    playerElem: document.getElementById('player'),

    // ---- init ----

    init: function () {
        app.playerElem;
        app.rollDice();
        app.listenToClickButton();
    },

    // ---- functions ----

    /**
     * Generate a random number
     * @param {number} min 
     * @param {number} max 
     */
    getRandomInt(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1) + min);
    },

    /**
     * Generate a random number 
     * @returns {number} - random number bewteen 1 and 6 
     */
    getRandomDice() {
        return app.getRandomInt(1, 6);
    },

    /**
     * Create a random dice
     * @param {number} number 
     * @param {string} targetId 
     */
    createDice(number, targetId) {
        const targetElemn = document.getElementById(targetId); /* Sélection de la div cible */
        const diceElem = document.createElement('div'); /* Création de la div pour le dé "dice" */
        diceElem.classList.add('dice'); /* Ajout de la classe "dice" à la div */
        const position = (number - 1) * -100; /* Calcul du décalage horizontal en pixels */
        diceElem.style.backgroundPositionX = `${position}px`; /* Modification du background */
        targetElemn.appendChild(diceElem); /* Ajout de la div class="dice" à la cible */
    },

    // ---- callback functions ----

    /** 
     * Roll dices 
     */
    rollDice() {
        const numberOfDice = parseInt(prompt(`Combien de dés voulez-vous lancer ?`));
        if (isNaN(numberOfDice) || numberOfDice <= 0) {
            alert('Veuillez saisir un nombre valide de dés (1 et +).');
            return;
        }

        for (let i = 0; i < numberOfDice; i++) {
            const randomIntPlayer = app.getRandomDice(); /* Génération du nombre aléatoire pour le joueur */
            const randomIntDealer = app.getRandomDice(); /* Génération du nombre aléatoire pour le dealer */
            app.createDice(randomIntPlayer, 'player'); /* Création du dé pour le joueur avec le selecteur id getElementById('player')*/
            app.createDice(randomIntDealer, 'dealer'); /* Création du dé pour le dealer avec le selecteur id getElementById('dealer')*/
        }
    },

    // ---- listener events ----

    /** 
     * Event click button to roll dices
     */
    listenToClickButton() {
        const buttonElemn = document.getElementById('throw');
        buttonElemn.addEventListener('click', app.rollDice);
    }
};

window.addEventListener('DOMContentLoaded', app.init);