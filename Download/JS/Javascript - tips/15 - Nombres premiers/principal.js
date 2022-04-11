
function action_au_click() {
    var limite = parseInt(document.getElementById("limite").value);

    for (let index = 2; index <= limite; index = index + 1) {
        //calcul de la somme des diviseurs de index
        var iSommeDesDiviseurs = 0;
        for (let diviseur = 1; diviseur < index; diviseur++) {
            if (index % diviseur == 0) {
                iSommeDesDiviseurs = iSommeDesDiviseurs + diviseur;
            }
        }
        if (iSommeDesDiviseurs == 1) {
            document.getElementById("resultat").innerText += index + "est premier" + "\n";
        }
    }

};


var btnDOM = document.getElementById('btnDOM');
btnDOM.addEventListener("click", action_au_click, false);

