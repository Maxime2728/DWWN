// Nom du fichier : principal.js
// Objet : traduction des algorithmes suivants :
// - Rectangle
// - ...
/* Auteur : eric.martin@afpa.fr
   Date : 29/09/2020
   Modifications : màj demain des améliorations
*/

var iA = 55;            // représente l'âge de la personne
var strNom = "Eric";    // nom de la personne
var iCpt = 10;

// Exemple de SI .. SINON
if (iA>50) {
    console.log("Bonjour "+strNom+" vous êtes sénior !");
} else {
    console.log("Bonjour "+strNom+" vous êtes jeune !");
}

// Exemple de POUR
for (let index = 39; index < 45; index++) {
    console.log("index = "+index+" et son triple "+(3*index));
    
}
console.log(" et à rebourd :  ")

// Exemple de POUR à REBOURD
for (let index = 45; index > 39; index--) {
    console.log("index = "+index+" et son triple "+(3*index));
    
}
console.log(" et avec saut de 4 :  ")
// Exemple de POUR avec saut de 4
for (let index = 39; index < 145; index=index+4) {
    console.log("index = "+index);
    
}
console.log(" et avec opération :  ")
// Exemple de POUR avec opération
for (let index = 39; index < 145; index=(2*index)-8) {
    console.log("index = "+index);
    
}
// Exemple de TANT QUE
while (iCpt>-5) {
    console.log(iCpt);
    iCpt = iCpt - 1;
}
// condition de sortie : iCpt <= -5

console.log(" REPETER  ")
// REPETER
iCpt = 21
do {
    console.log(iCpt);
    iCpt = iCpt - 7;
} while (iCpt>0);
