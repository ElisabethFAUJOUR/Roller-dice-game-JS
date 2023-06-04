const app = {
    init: function () {
        const player = document.getElementById('player');
        app.createDealerDiv();
        app.rollDice();
        app.handleClickButton();
    },

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
     * Generate a random number bewteen 1 and 6 
     */
    getRandomDice() {
        return app.getRandomInt(1, 6);
    },

    /**
     * Create a random dice
     */
    createDice(number, targetId) {
        const target = document.getElementById(targetId); /* Sélection de la div cible */
        const dice = document.createElement('div'); /* Création de la div pour le dé "dice" */
        dice.classList.add('dice'); /* Ajout de la classe "dice" à la div */
        const position = (number - 1) * -100; /* Calcul du décalage horizontal en pixels */
        dice.style.backgroundPositionX = `${position}px`; /* Modification du background */
        target.appendChild(dice); /* Ajout de la div class="dice" à la cible */
    },

    /**
    * Create the dealer area 
    */
    createDealerDiv() {
        const dealerDiv = document.createElement('div'); /* Création de la div pour la zone du dealer */
        dealerDiv.classList.add('board', 'orange'); /* Ajout des classes "board" et "orange" à la div */
        dealerDiv.id = 'dealer'; /* Attribution de l'id "dealer" */
        player.after(dealerDiv); /* Ajout de la div après la div avec l'id "player" */
    },

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


    /** 
    * Event click button to roll dices
    */
    handleClickButton() {
        const button = document.getElementById('throw');
        button.addEventListener('click', app.rollDice);
    }
};

window.addEventListener('DOMContentLoaded', app.init);