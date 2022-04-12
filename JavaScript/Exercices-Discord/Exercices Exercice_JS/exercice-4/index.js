let nombreLigne = 0;
let nb_ou_car = 0;
let i = 0;
let resultat = "";

function affiche(){
    resultat+=nb_ou_car
    console.log(resultat);
}
nombreLigne=prompt("Rentrez le nombre de ligne désirées")
nb_ou_car=prompt("Rentrez l'entier désiré");

affiche();

for(i =2; i <= nombreLigne; i++){
    affiche();
}