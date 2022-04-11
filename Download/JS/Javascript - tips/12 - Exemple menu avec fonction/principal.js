// Nom du fichier : principal.js
// Objet : Menu avec des fonctions
/* Auteur : Florian
   Date : 08/10/2021
   Modifications : S.O.
*/

// Fonction fct_Premier
// Saisie d'une limite et affichage de tous les nombres premiers jusqu'à cette limite

function fct_Premier() {
    alert("Programme nombres premiers");
}

// Fonction fct_Parfait
// Saisie d'une limite et affichage de tous les nombres parfaits jusqu'à cette limite

function fct_Parfait() {
    alert("Programme nombres parfaits");
}

// Fonction fct_Sortie
// Message d'adieux !

function fct_Sortie(monchoix) {
    alert("Au revoir ! car vous avez choisi " + monchoix);
}

// utilisation d'un paramètre
function fct_Question(message) {
    reponse = parseInt(prompt(message));
    return reponse;
}

// appelle la fonction correspondant au choix
function fct_Aiguillage(sonchoix) {
    if (sonchoix == 1) {
        // TRAITEMENT NOMBRE PREMIER
        fct_Premier();
    } else if (sonchoix == 2) {
        // TRAITEMENT NOMBRE PARFAIT
        fct_Parfait();
    }
    else {
        // RIEN
        nouveauchoix = fct_Question("pour Florian")
        fct_Sortie(nouveauchoix);
    }
}




do {
    do {
        choix = parseInt(prompt("Que voulez-vous faire ?", "<1 pour premier, 2 pour parfait, 0 pour sortir>"));
    } while ((choix != 1) && (choix != 2) && (choix != 0));
    // choix = 1, 2 ou 3
    fct_Aiguillage(choix);
} while (choix != 0);
// choix = 0 pour sortir

