// cibler my-form : contexte dans lequel on appelle addEvent...
const form = document.querySelector("#my-form");
// random number
const getRandomNum = Math.floor(Math.random() * 1000);
// on définit le nombre d'essai à zéro
let attempts = 0;
// fonction display pour afficher texte différent selon résultat
const display = (text) => {
  const indicationToPlayer = document.getElementById("game-frame");
  indicationToPlayer.insertAdjacentHTML('beforeend', `<div> ${text} </div>`)
}
// on écoute le submit de form
form.addEventListener("submit", (event) => {
  event.preventDefault() // on évite le comportement natif de submit
  attempts++ // on incrémente de 1 à chaque fois
  const myInput = document.querySelector("#my-input"); // cibler myInput
  if(parseInt(myInput.value) === getRandomNum) { // comparaison valeur myInput à getR...
    display("You win");
  } else {
    (parseInt(myInput.value) < getRandomNum) ? display("Higher !") : display("Lower !");
  };

});


//mailgun

// // // // on cible l'élément game-frame et on le sauvegarde dans indicationToPlayer
// // // //const indicationToPlayer = document.getElementById("game-frame");
// // // // on cible l'user input - parseInt ?


//const play = () => {
  // const userNumber
  //const userNumber = document.getElementById("my-input")
  // nombre entier aléatoire entre 0 et 1000
  //const getRandomNum = Math.floor(Math.random() * 1000);
  // essai démarré à 1
  //let attempts = 1;
  // boucle : tant que l'input utilisateur est différent du bon nombre
  //while (userNumber != getRandomNum) {
 //   attempts++ // on incrémente son nombre d'essai de 1
    // ternaire : si userNumber < getRandomNum, on affiche tel message, sinon l'autre
    //const hint = (userNumber < getRandomNum) ? indicationToPlayer.insertAdjacentHTML('beforeend', '<div> Its higher !</div>') : indicationToPlayer.insertAdjacentHTML('beforeend', '<div> Its lower !</div>');
   // userNumber = parseInt(prompt(`${hint}`)); // on interpole hint pour le donner à l'user
 // };
  // si gagnant, on sort de la boucle et on indique au joueur son nombre d'essais
 // indicationToPlayer.insertAdjacentHTML('beforeend', `<div> Congratulations, you won with ${attempts} tries</div>`);
//};

//userNumber.addEventListener("input", play());


//const target = document.querySelector(".button"); // variable qui cible le bouton
//target.addEventListener("click", play()); // on écoute le clic sur ce bouton et exécute la fonction play
