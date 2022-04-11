let nombreLigne = 0;
let nb_ou_car = 0;
let i = 0;
let j = 0;
let resultat = "";

function affiche(){
    resultat+="1"
    console.log(resultat);
}
nombreLigne=prompt("Rentrez le nombre de ligne désirées")
nb_ou_car=prompt("Rentrez l'entier désiré");

affiche();

for(i =1; i <= nombreLigne; i++){
    affiche();
}