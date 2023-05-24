//ETAPE 1 CREATION DU DE

// /*Création de la div pour le dé "dice"*/
// const diceDiv = document.createElement('div'); 

// /*Ajout de la class = "dice" à la div*/
// diceDiv.classList.add('dice'); 

// /*Selection de l'id #player dans le HTML*/
// const player = document.getElementById('player'); 

// /*Création de la div class = "dice"*/
// player.appendChild(diceDiv); 



//ETAPE 2 TIRER UN NOMBRE ALEATOIRE

/*Fonction pour Générer un nombre aléatoire entre 1 et 6 (valeur du dé)*/
function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
}  

/*Fonction pour Afficher un la face du dé correspondante au nb généré aléatoirement*/
function createDice(number) {
    const dice = document.createElement('div'); /*Création de la div pour le dé "dice"*/
    dice.classList.add('dice'); /*Ajout de la class = "dice" à la div*/
    const position = (number - 1) * -100; /*Calcul du décalage horizontal en pixels avec -1 pour être entre 0 et 500px*/
    dice.style.backgroundPositionX = `${position}px`; /*Modification du background*/
    const player = document.getElementById('player');
    player.appendChild(dice); /*Création de la div class = "dice"*/
}

/* Fonction pour Effectuer le lancer de dés avec le nb de dés démandé*/
function rollDice() {
    const numberOfDice = parseInt(prompt(`Combien de dés voulez-vous lancer ?`));
    if (isNaN(numberOfDice) || numberOfDice <= 0) {
        alert('Veuillez saisir un nombre valide de dés (1 et +).');
        return;
    }

    for (let i = 0; i < numberOfDice; i++) {
        const diceValue = getRandomInt(1, 6);/*Génération du nombre aléatoire pour donné la valeur du dé*/
        createDice(diceValue);/*Creation du dé en fonction du nombre aléatoire généré : 6 => face 6*/
      }
}

/*Appel de la fontion pour afficher le/les dé(s) au chargement de la page*/
rollDice(); 




