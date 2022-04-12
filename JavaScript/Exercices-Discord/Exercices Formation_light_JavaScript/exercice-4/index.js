function guessGame(){
    let interval = Number;
    let guess;
    let nbCoups = 0;
    
    // console.log(fixedNr);
    interval = parseInt(prompt("Choisissez l'interval du jeu"));
    let randomNr = Math.floor(Math.random() * interval);
    do{
        guess = prompt(`Devine le nombre entre 1 et ${interval}`);
        console.log(guess, randomNr);
        nbCoups = nbCoups + 1;

        if(randomNr > guess){
            console.log('Trop petit');
        }
        else if(randomNr < guess){
            console.log("Trop grand");
        }      
    }
    while(randomNr != guess && nbCoups !=5);//Modifier le 5 si on veut + de coups à jouer
    if(randomNr == guess && nbCoups <= 5){
        alert(`Bravo, tu as réussi ! (en ${nbCoups} coups)`);
    }
    else if(randomNr !=guess && nbCoups <= 5){
        alert(`Dommage, tu n\'as pas réussi ! (en ${nbCoups} coups)`)
    }
}


guessGame();