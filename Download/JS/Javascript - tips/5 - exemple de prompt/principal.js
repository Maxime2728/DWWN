// Nom du fichier : principal.js
// Objet : exemple de prompt
// 
// 
/* Auteur : eric.martin@afpa.fr
   Date : 07/10/2021
   Modifications : S.O.
*/

var reponse = prompt("Comment t'appelles-tu ?", "<Entrez ici votre prénom>");
if( reponse == null ){
    alert("Vous avez cliqué sur Annuler");
} else {
    alert("Bonjour " + reponse + ", ça roule ?");
}

var age = prompt("Quel age as-tu ?", "<Entrez ici votre age>");
if( age < 18 ){
    alert("Vous êtes mineur");
    console.log("majeur");
} else {
    alert("Vous êtes majeur");
}

for (let index = 0; index < age; index++) {
    console.log("i="+index);
    
}