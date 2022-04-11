
var action_au_click = function () {
    var txt = document.getElementById("txt").value;
    document.getElementById("resultat").innerText = "Vous avez saisie : " + txt;
};

var btnDOM = document.getElementById('btnDOM');
btnDOM.addEventListener("click", action_au_click, false);

