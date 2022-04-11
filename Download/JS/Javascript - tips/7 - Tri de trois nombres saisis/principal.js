// Nom du fichier : principal.js
// Objet : traduction de l'algorithmes de tri de 3 nombres saisies :
// 
// 
/* Auteur : eric.martin@afpa.fr
   Date : 06/10/2021
   Modifications : S.O.
*/

//Exercice :  Trier 3 nombres nombre1, nombre2 et nombre3

//  var iLimite = parseInt(prompt("saisir iLimite superieur à 2"))
//      console.log(iLimite + "valeur de iLimite");

//  for (var index=2; index <= iLimite; index=index+2) {
//      console.log(index +"est pair");
//     document.write(index +"est pair");
// }


// // Lire iLimite
// var Ilimitte = prompt("Afficher les nombres pairs jusqu'à ", "<Entrez un chiffre ici>");
// // POUR i DE 2 A iLimite PAS 2
// for (let i = 2; i <= Ilimitte; i += 2) {
//       //     Ecrire i, " est pair"
//       console.log(i + " est pair");
//       // FIN POUR
// }


var iNombre = parseInt(prompt("saisissez le nombre dont vous voulez connaitre les diviseurs : "))
for (let iDiviseur = 1; iDiviseur < (iNombre - 1); iDiviseur++) {
    if (iNombre % iDiviseur == 0) {
        document.write(iDiviseur + " est un diviseur de " + iNombre + "<br />")
    }
}