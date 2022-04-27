const box1 = document.getElementById("box");
const box2 = document.getElementById("box2");

function handleRadioClick() {
  if (document.getElementById("show").checked) {
    box1.style.display = "block";
    box2.style.display = "none";
  } else {
    box1.style.display = "none";
    box2.style.display = "block";
  }
}
const radioButtons = document.querySelectorAll('input[name="example"]');
radioButtons.forEach((radio) => {
  radio.addEventListener("click", handleRadioClick);
});

function chargeJson() {
  fetch("script/motif.json")
    .then((response) => {
      return response.json();
    })
    .then((motif) => {
      console.log(motif);
      createDivs(motif);
    });
}

function createDivs(motif) {
  const preview = document.getElementsByClassName("preview")[0];
  preview.innerHTML = "";

  const topTitle = document.createElement("div");
  topTitle.setAttribute("class", "top-title");
  topTitle.innerHTML = "<h1>" + motif.topTitle + "</h1>";

  preview.appendChild(topTitle);

  const motifAbsenceList = document.createElement("div");
  motifAbsenceList.setAttribute("id", "contenu");
  motifAbsenceList.setAttribute("id", "motifList");

  var motifList = motif.members;
  for (var x = 0; x < motifList.length; x++) {
    var motifListElement = document.createElement("div");
    motifListElement.setAttribute("class", "card");

    motifListElement.innerHTML =
      '<h3 class="nomMotifs">' +
      motifList[x].name +
      "</h3>" +
      '<h4 class="">' +
      motifList[x].title +
      "</p>";

    let listOptions = motifList[x].options;
    for (y = 0; y < listOptions.length; y++) {
      if (y != 7) {
        motifListElement.innerHTML +=
          '<input type="checkbox">' + listOptions[y].op_label + "</p>";
      } else {
        motifListElement.innerHTML += "<p>" + listOptions[y].op_label + "</p>";
      }
    }

    motifAbsenceList.appendChild(motifListElement);
  }
  preview.appendChild(motifAbsenceList);
}

// /!\ Permet de transférer des paramètres d'une page a une autre /!\
function addParametersInForm() {
  try {
    var parameters = location.search.substring(1).split("&");

    var temp = parameters[0].split("=");
    console.log(temp[1]);
    nom = decodeURI(temp[1]); //decodeURI va calculer une nouvelle chaîne de caractères et remplace les séquences d'échappement hexadécimales par les caractères qu'elles représentent.

    temp = parameters[1].split("=");
    prenom = decodeURI(temp[1]);

    temp = parameters[2].split("=");
    formation = decodeURI(temp[1]);

    temp = parameters[4].split("=");
    le = decodeURI(temp[1]);

    temp = parameters[5].split("=");
    de = decodeURIComponent(temp[1]);

    temp = parameters[6].split("=");
    a = decodeURIComponent(temp[1]);

    temp = parameters[7].split("=");
    du = decodeURIComponent(temp[1]);

    temp = parameters[8].split("=");
    au = decodeURIComponent(temp[1]);

    // temp = parameters[5].split("=");
    // motif = decodeURIComponent(temp[1]);

    document.getElementById("parametre1").innerHTML = "Nom : " + nom;
    document.getElementById("parametre2").innerHTML = "Prénom : " + prenom;
    document.getElementById("parametre3").innerHTML =
      "Formations Suivie : " + formation;
    document.getElementById("parametre4").innerHTML = "Le : " + le;
    document.getElementById("parametre5").innerHTML = "De : " + de;
    document.getElementById("parametre6").innerHTML = "A : " + a;
    document.getElementById("parametre7").innerHTML = "Du : " + du;
    document.getElementById("parametre8").innerHTML = "Au : " + au;
  } catch (error) {
    console.error("Il n'y a pas de paramètres");
    // expected output: ReferenceError: nonExistentFunction is not defined
    // Note - error messages will vary depending on browser
  }
}
