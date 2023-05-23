/* Selection de l'id #player dans le HTML */
const player = document.getElementById('player');

/* Fonction pour générer un nombre aléatoire entre 1 et 6 */
function generateRandomInt() {
    return Math.floor(Math.random() * 6) + 1;
}

/* Fonction pour créer un dé aléatoire */
function addDice(number, targetId) {
    const target = document.getElementById(targetId); /* Sélection de la div cible */
    const dice = document.createElement('div'); /* Création de la div pour le dé "dice" */
    dice.classList.add('dice'); /* Ajout de la classe "dice" à la div */
    const position = (number - 1) * -100; /* Calcul du décalage horizontal en pixels */
    dice.style.backgroundPositionX = `${position}px`; /* Modification du background */
    target.appendChild(dice); /* Ajout de la div class="dice" à la cible */
}

/* Fonction pour créer la zone du dealer */
function createDealerZone() {
    const dealerZone = document.createElement('div'); /* Création de la div pour la zone du dealer */
    dealerZone.classList.add('board', 'orange'); /* Ajout des classes "board" et "orange" à la div */
    dealerZone.id = 'dealer'; /* Attribution de l'id "dealer" */
    player.after(dealerZone); /* Ajout de la div après la div avec l'id "player" */
}

/* Fonction pour effectuer le lancer de dés */
function rollDice() {
    const numberOfDice = parseInt(prompt(`Combien de dés voulez-vous lancer ?`));
    if (isNaN(numberOfDice) || numberOfDice <= 0) {
        alert('Veuillez saisir un nombre valide de dés (1 et +).');
        return;
    }

    for (let i = 0; i < numberOfDice; i++) {
        const randomIntPlayer = generateRandomInt(); /* Génération du nombre aléatoire pour le joueur */
        const randomIntDealer = generateRandomInt(); /* Génération du nombre aléatoire pour le dealer */
        addDice(randomIntPlayer, 'player'); /* Création du dé pour le joueur */
        addDice(randomIntDealer, 'dealer'); /* Création du dé pour le dealer */
    }
}

/* Appel de la fonction pour créer la zone du dealer */
createDealerZone();

/* Appel de la fonction pour afficher les dés */
rollDice();


/*Appel de la fontion pour afficher une face au chargement de la page*/
rollDice(); 


/*Créer la div du dealer*/
