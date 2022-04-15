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
            alert('Trop petit')
        }
        else if(randomNr < guess){
            console.log("Trop grand");
            alert('Trop grand')
        }      
    }
    while(randomNr != guess && nbCoups !=7);//Modifier le nombre si on veut +/- de coups à jouer
    if(randomNr == guess && nbCoups <= 7){
        alert(`Bravo, tu as réussi ! (en ${nbCoups} coups)`);
    }
    else if(randomNr !=guess && nbCoups <= 7){
        alert(`Dommage, tu n\'as pas réussi ! (en ${nbCoups} coups)`)
    }
}


guessGame();