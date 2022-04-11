// Nom du fichier : principal.js
// Objet : l'utilisateur doit saisir son CA puis on lui affiche sa remise selon les règles suivantes : (modifié)
// Pour un CA de 0 à 10 000 euros : 10% de taux de remise
// de 10 000 à 20 000 euros : 20 %
// au delà de 20 000 euros : 30 %
// 
// 
/* Auteur : eric.martin@afpa.fr
   Date : 07/10/2021
   Modifications : S.O.
*/

var CA = 45000;

// SI (CA<10000) ALORS 10% de remise
if (CA < 10000) {
    console.log("vous avez le droit à 10% de remise dans la console");
    document.write("vous avez le droit à 10% de remise dans la page");
} else if (CA < 20000) {
    console.log("vous avez le droit à 20% de remise dans la console");
    document.write("vous avez le droit à 20% de remise dans la page");
}
else {
    console.log("vous avez le droit à 30% de remise dans la console");
    document.write("vous avez le droit à 30% de remise dans la page");
}