const play = () => {
  // nombre entier aléatoire entre 0 et 1000
  const getRandomNum = Math.floor(Math.random() * 1000);
  // user input transformé en integer et sauvegardé
  let userNumber = parseInt(prompt('Guess the right number between 0 and 20. Good luck !'));
  // essai démarré à 1
  let attempts = 1;
  // boucle : tant que l'input utilisateur est différent du bon nombre
  while (userNumber != getRandomNum) {
    attempts++ // on incrémente son nombre d'essai de 1
    // ternaire : si userNumber < getRandomNum, on affiche tel message, sinon l'autre
    const hint = (userNumber < getRandomNum) ? "It's higher !" : "It's lower !";
    userNumber = parseInt(prompt(`${hint}`)); // on interpole hint pour le donner à l'user
  }
  console.log(`Congratulations, you won with ${attempts} tries`); // si gagnant, on sort de la boucle
};

const target = document.querySelector("button");
target.addEventListener("click", (event) => {
  play();
});
