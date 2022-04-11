/*
Type : fonction
Nom : somme_des_diviseurs
Entrées : monNombre entier (nombre dont on veut connaitre la somme des diviseurs)
Sortie : iSommeDesDiviseurs (la somme calculée)
*/
function somme_des_diviseurs(monNombre) {
    //calcul de la somme des diviseurs de index
    var iSommeDesDiviseurs = 0;
    for (let diviseur = 1; diviseur < monNombre; diviseur++) {
        if (monNombre % diviseur == 0) {
            iSommeDesDiviseurs = iSommeDesDiviseurs + diviseur;
        }
    };
    return iSommeDesDiviseurs;
}


function actions_au_click_sur_bouton_premier() {

    var limite = parseInt(document.getElementById("limite").value);

    // on efface le contenu de la div resultat
    document.getElementById("resultat").innerText = "";
    for (let index = 2; index <= limite; index = index + 1) {
        //calcul de la somme des diviseurs de index
        var iSommeDesDiviseurs = somme_des_diviseurs(index);

        if (iSommeDesDiviseurs == 1) {
            document.getElementById("resultat").innerText += index + " est premier" + "\n";
        }
    }

};

function actions_au_click_sur_bouton_parfait() {

    var limite = parseInt(document.getElementById("limite").value);

    // on efface le contenu de la div resultat
    document.getElementById("resultat").innerText = "";
    for (let index = 2; index <= limite; index = index + 1) {
        //calcul de la somme des diviseurs de index
        var iSommeDesDiviseurs = somme_des_diviseurs(index);

        if (iSommeDesDiviseurs == index) {
            document.getElementById("resultat").innerText += index + " est parfait" + "\n";
        }
    }

};


function actions_au_click_sur_bouton_ami() {

    var limite = parseInt(document.getElementById("limite").value);

    // on efface le contenu de la div resultat
    document.getElementById("resultat").innerText = "";

    for (let A = 2; A <= limite; A = A + 1) {
        //calcul de la somme des diviseurs de index
        var B = somme_des_diviseurs(A);
        var iSommeDiviseursB = somme_des_diviseurs(B);

        if ((iSommeDiviseursB == A)&&(A<B)) {
            document.getElementById("resultat").innerText += A + " est ami avec " + B + "\n";
        }
    }

};

var btnPremier = document.getElementById('btnPremier');
btnPremier.addEventListener("click", actions_au_click_sur_bouton_premier, false);

var btnParfait = document.getElementById('btnParfait');
btnParfait.addEventListener("click", actions_au_click_sur_bouton_parfait, false);

var btnAmi = document.getElementById('btnAmi');
btnAmi.addEventListener("click", actions_au_click_sur_bouton_ami, false);