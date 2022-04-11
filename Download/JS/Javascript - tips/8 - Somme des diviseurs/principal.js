// Nom du fichier : principal.js
// Objet : somme des diviseurs
// 
// 
/* Auteur : eric.martin@afpa.fr
   Date : 06/10/2021
   Modifications : S.O.
*/


var iNombre = parseInt(prompt("saisissez le nombre dont vous voulez connaitre la somme des diviseurs : "))
var iSommeDesDiviseurs = 0;
for (let iDiviseur = 1; iDiviseur < (iNombre - 1); iDiviseur++) {
    if (iNombre % iDiviseur == 0) {
        iSommeDesDiviseurs += iDiviseur;
        // même chose que iSommeDesDiviseurs = iSommeDesDiviseurs + iDiviseur;
    }
}
document.write("La somme des diviseurs de " +  iNombre + " vaut "+ iSommeDesDiviseurs)