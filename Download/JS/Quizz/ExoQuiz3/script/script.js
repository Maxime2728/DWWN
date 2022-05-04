let start = $("#start");
const body = $("body");
const game = $("#game");
const title = $("#title");
let gameSection = document.getElementById("container1");
let questions;
let compteur = 0;
let choixfait = false;
let score = 0;

//#region "Function"

/**
 * Il récupère le fichier JSON, puis le convertit en objet JavaScript, puis le transmet à la fonction
 * startGame.
 */
function chargeJson() {
  fetch("script/quizson.json")
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      // on stock le tableau json dans une variable
      tableauJson = data;
      // ON MET CETTE VARIABLE EN PARAMETRE DE LA FONCTION STARTGAME
      startGame(tableauJson);
    });
}

/**
 * Il prend les données du fichier JSON et affiche la première question et les choix pour cette
 * question.
 */
let startGame = (data) => {
  start.hide();
  game.show();

  createQuestion(data[compteur]);
};

/**
 * Il crée une nouvelle question, et si le jeu est terminé, il affiche le score.
 */
const nextQuestion = () => {
  compteur++;
  gameSection.innerHTML = "";
  let compteurHTML = document.createElement("h2");
  compteurHTML.setAttribute("id", "compteur");

  gameSection.appendChild(compteurHTML);
  document.getElementById("compteur").innerHTML = score + " / " + compteur;
  document.body.classList.remove("green");
  document.body.classList.remove("red");
  createQuestion(tableauJson[compteur]);
  endGame(compteur);
};

const createQuestion = (question) => {
  choixfait = false;

  let divTimer = document.createElement("div");
  divTimer.setAttribute("id", "timer");
  divTimer.setAttribute("class", "divTimer");
  divTimer.innerHTML = "100";
  gameSection.appendChild(divTimer);

  let questionTitle = document.createElement("h2");
  questionTitle.innerHTML = question.question;
  questionTitle.setAttribute("id", "questiontitle");
  gameSection.append(questionTitle);

  var choiceList = question.choices;
  var answers = document.createElement("div");
  answers.setAttribute("class", "answersContainer");
  gameSection.appendChild(answers);
  for (var r = 0; r < choiceList.length; r++) {
    var listReponses = document.createElement("div");
    listReponses.setAttribute("class", "answers");
    listReponses.innerHTML =
      '<button id="answer" class="btnReponse" data-correct ="' +
      question.correct +
      '">' +
      choiceList[r] +
      "</button>";

    answers.append(listReponses);
  }

  $(".btnReponse").one("click", function (evt) {
    var bonneReponse = evt.target.dataset.correct;

    if (evt.target.innerHTML == bonneReponse) {
      console.log("bien joué");
      document.body.classList.add("green");
      score++;
      console.log(score);
    } else {
      document.body.classList.add("red");
      document.getElementById("title").style.color = "white";
      document.getElementById("title2").style.color = "white";
      document.getElementById("title3").style.color = "white";
    }
    if (choixfait === false) {
      choixfait = true;
      var next = document.createElement("div");
      next.setAttribute("id", "next");
      next.innerHTML =
        '<button class="nextButton btnReponse" onclick="nextQuestion()">  Next  </button>';
      gameSection.appendChild(next);
    } else {
      console.log("choix deja fait");
    }
  });
};
//#endregion "Function"

const fadeOut = () => {
  let buttonfade = document.getElementById("start");
  buttonfade.classList.add("fadeOut");
};
const timer = () => {
  var timerElement = document.getElementById("timer");
  timerElement.innerText = "99";
  console.log(timerElement);
};
