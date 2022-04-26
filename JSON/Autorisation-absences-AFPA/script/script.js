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
  //   preview.innerHTML = "";

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
      motifListElement.innerHTML +=
        '<input type="checkbox">' + listOptions[y].op_label + "</p>";
    }

    motifAbsenceList.appendChild(motifListElement);
  }
  preview.appendChild(motifAbsenceList);
}

chargeJson();
