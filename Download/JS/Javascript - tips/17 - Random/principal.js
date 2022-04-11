
var action_au_click = function () {
    var inombre_aleatoire_entre_0_et_1 = Math.random(); //entre 0 et 1
    var inombre_aleatoire_entre_0_et_99_avec_virgule = inombre_aleatoire_entre_0_et_1 * 100; // entre 0 et 99
    var inombre_aleatoire_entre_0_et_99_sans_virgule = Math.floor(inombre_aleatoire_entre_0_et_99_avec_virgule); // idem sans la virgule
    document.getElementById("resultat").innerText += "Nombres générés : " + inombre_aleatoire_entre_0_et_1+ " "+ inombre_aleatoire_entre_0_et_99_avec_virgule+ " "+ inombre_aleatoire_entre_0_et_99_sans_virgule+ "\n";
};

var btnDOM = document.getElementById('btnDOM');
btnDOM.addEventListener("click", action_au_click, false);

