// Nom du fichier : principal.js
// Objet : traduction de l'algorithmes de tri de 3 nombres saisies :
// 
// 
/* Auteur : eric.martin@afpa.fr
   Date : 06/10/2021
   Modifications : S.O.
*/

//Exercice :  Trier 3 nombres nombre1, nombre2 et nombre3

var nombre1 = parseInt(prompt("nombre 1 :"));
var nombre2 = parseInt(prompt("nombre 2 :"));
var nombre3 = parseInt(prompt("nombre 3 :"));

// SI (nombre1 > nombre2)
if (nombre1 > nombre2) {
    // ALORS 	SI (nombre1 > nombre3)
    if (nombre1 > nombre3) {
        // 	    ALORS 	Ecrire nombre1 + " est plus grand que "
        //console.log(nombre1 + " est plus grand que ");
        // 		        SI (nombre2 > nombre3)
        if (nombre2 > nombre3) {
            // 		        ALORS Ecrire nombre2 + " est plus grand que " + nombre3
            console.log(nombre1 + " est plus grand que " + nombre2 + " est plus grand que " + nombre3);
        } else {
            // 		        SINON Ecrire nombre3 + " est plus grand que " + nombre2
            console.log(nombre1 + " est plus grand que " + nombre3 + " est plus grand que " + nombre2);
        }
        //		        FINSI
    } else {
        // 	    SINON /* nombre1 > nombre2 ET nombre3 >= nombre1 */
        // 	            Ecrire nombre3 + " est plus grand que " + nombre1 + " est plus grand que " + nombre2
        console.log(nombre3 + " est plus grand que " + nombre1+ " est plus grand que " + nombre2);
        // 	    FINSI
    }
} else {
    // SINON /* ceci est un commentaire à ne pas traduire en JS nombre2 >= nombre1 */
    //         SI (nombre2 > nombre3)
    if (nombre2 > nombre3) {
        //         ALORS   Ecrire nombre2 + " est plus grand que "
        console.log(nombre2 + " est plus grand que ");
        //                 SI (nombre1 > nombre3)
        if (nombre1 > nombre3) {
            //                 ALORS Ecrire nombre1 + " est plus grand que " + nombre3
            console.log(nombre1 + " est plus grand que " + nombre3);
        } else {
            // 		        SINON Ecrire nombre3 + " est plus grand que " + nombre1
            console.log(nombre3 + " est plus grand que " + nombre1);
        }
    } else {
        // 	    SINON /* ceci est aussi un commantaire à ne pas traduire nombre1 > nombre2 ET nombre3 >= nombre1 */

        // 	            Ecrire nombre3 + " est plus grand que " + nombre2 + " est plus grand que " + nombre1
        console.log(nombre3 + " est plus grand que " + nombre2 + " est plus grand que " + nombre1);
        // 	    FINSI
        // FINSI
    }
}
