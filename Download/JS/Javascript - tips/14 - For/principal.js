var action_au_click = function () {
    var iBI = parseInt(document.getElementById("borneInf").value);
    var iBS = parseInt(document.getElementById("borneSup").value);
    var iPas = parseInt(document.getElementById("pas").value);
   
    for (let index = iBI; index <= iBS; index = index+iPas) {
        document.getElementById("resultat").innerText += "valeur de index : " + index+"\n";
    }

};


var btnDOM = document.getElementById('btnDOM');
btnDOM.addEventListener("click", action_au_click, false);

