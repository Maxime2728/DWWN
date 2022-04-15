let resultat = '\n';
let valeur;

valeur = parseInt(prompt("Entrez la valeur"));

for(let i = 1; i <= valeur; i++){
    for(let j = 1; j < valeur +1; j++){
        resultat += (i*j) + " "; 
        console.log(resultat);
    }
    resultat += '\n'
}

alert(resultat)

