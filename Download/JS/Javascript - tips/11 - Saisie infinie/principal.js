// Nom du fichier : principal.js
// Objet : saisie des nombres, les afficher et s'arrêter lorsque l'on saisit 99
// 
// 
/* Auteur : eric.martin@afpa.fr
   Date : 06/10/2021
   Modifications : S.O.
*/

var valeur;
do {
   valeur = parseInt(prompt("saisissez votre valeur (99 pour arrêter"));
   document.write("la valeur vaut : " + valeur + "<br/>")
   console.log("la valeur vaut : " + valeur + "<br/>");
} while (valeur != 99);
// condition de sortie valeur == 99