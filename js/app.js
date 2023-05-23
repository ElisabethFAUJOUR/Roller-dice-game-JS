//ETAPE 1 CREATION DU DE

/*Création de la div pour le dé "dice"*/
const diceDiv = document.createElement('div'); 

/*Ajout de la class = "dice" à la div*/
diceDiv.classList.add('dice'); 

/*Selection de l'id #player dans le HTML*/
const player = document.getElementById('player'); 

/*Création de la div class = "dice"*/
player.appendChild(diceDiv); 


//ETAPE 2 TIRER UN NOMBRE ALEATOIRE 

// const randomInt = Math.floor(Math.random() * 6) + 1;
// const position = (randomInt -1) * -100;
// const dice = document.querySelector('.dice');
// dice.style.backgroundPositionX = `${position}px`;

// console.log(randomInt);
// console.log(position);


/*Ajouter une fonction pour tirer un nombre aléatoire*/
function generateRandomInt() {
    return Math.floor(Math.random() * 6) + 1;
}  

/*Fonction qui affiche la face correspondante au nombre aléatoire*/
function diceFace(number) {
    const dice = document.querySelector('.dice'); /*Sélection de la div du dé*/
    const position = (number - 1) * -100; /*Calcul du décalage horizontal en pixels*/
    dice.style.backgroundPositionX = `${position}px`; /*Modification du background*/
}

/* Fonction qui apelle les 2 autres fonctions => génère un nombre et affiche la face correspondate*/
function rollDice() {
    const randomInt = generateRandomInt(); /*Génération du nombre aléatoire*/
    diceFace(randomInt); /*Affichage de la face correspondante*/
}

/*Appel de la fcontion pour afficher une face au chargement de la page*/
rollDice(); 




