// //ETAPE 1 CREATION DU DE

// /*Création de la div pour le dé "dice"*/
// const diceDiv = document.createElement('div'); 

// /*Ajout de la class = "dice" à la div*/
// diceDiv.classList.add('dice'); 

// /*Selection de l'id #player dans le HTML*/
// const player = document.getElementById('player'); 

// /*Création de la div class = "dice"*/
// player.appendChild(diceDiv); 



/*Selection de l'id #player dans le HTML*/
const player = document.getElementById('player'); 

/*Fonction pour GENERER UN NOMBRE ALEATOIRE ENTRE 1 ET 6*/
function generateRandomInt() {
    return Math.floor(Math.random() * 6) + 1;
}  

/*Fonction pour CREER UN DE ALEATOIRE*/
function addDice(number) {
    const dice = document.createElement('div'); /*Création de la div pour le dé "dice"*/
    dice.classList.add('dice'); /*Ajout de la class = "dice" à la div*/
    const position = (number - 1) * -100; /*Calcul du décalage horizontal en pixels*/
    dice.style.backgroundPositionX = `${position}px`; /*Modification du background*/
    player.appendChild(dice); /*Création de la div class = "dice"*/
}

/* Fonction pour CREER LE NOMBRE DE DES ALEATOIRES + AFFICHER LES DES*/
function rollDice() {
    const numberOfDice = parseInt(prompt(`Combien de dés voulez-vous lancer ?`));
    if (isNaN(numberOfDice) || numberOfDice <= 0) {
        alert('Veuillez saisir un nombre valide de dés (1 et +).');
        return;
    }

    for (let i = 0; i < numberOfDice; i++) {
        const randomInt = generateRandomInt();/*Génération du nombre aléatoire*/
        addDice(randomInt);/*Creation du dé en fonction du nombre aléatoire*/
      }
}

/*Appel de la fontion pour afficher une face au chargement de la page*/
rollDice(); 


