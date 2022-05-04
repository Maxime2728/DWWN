let start = $("#start");
const body = $("body");
const game = $("#game");
const title = $("#title");
let gameSection = document.getElementById("container1");
let questions;
let compteur = 0;
let score = 0;
game.hide();

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
      // on stock le tableau json dans
      tableauJson = data;
      startGame(tableauJson);
    });
}

/**
 * Lorsque le bouton de démarrage est cliqué, masquez le bouton de démarrage, affichez le jeu et créez
 * la première question.
 */
let startGame = (data) => {
  start.hide();
  game.show();
  createQuestion(data[compteur]);
};

/**
 * Si la réponse de l'utilisateur est correcte, incrémentez le compteur, supprimez la question
 * actuelle, supprimez les classes verte et rouge du corps et créez la question suivante.
 */
const nextQuestion = () => {
  compteur++;
  gameSection.innerHTML = "";
  document.body.classList.remove("green");
  document.body.classList.remove("red");
  createQuestion(tableauJson[compteur]);
};

/**
 * Il crée une question et ses choix.
 */
const createQuestion = (question) => {
  choixfait = false;
  console.log(question);
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
      '<button id="answer" class="btnReponse" onclick="this.disabled = true;" data-correct ="' +
      question.correct +
      '">' +
      choiceList[r] +
      "</button>";
    answers.append(listReponses);
  }
  /* Au clique sur une réponse le background change de couleur en fonction de la réponse et créé un bouton next */
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
  /* Il crée un div avec la classe "score" et le innerHTML du score. */
  console.log(score);
  console.log(compteur);
  // if (compteur > 9) {
  //   score = document.createElement("div");
  //   score.setAttribute("class", "score");
  //   score.innerHTML = "<p>" + score + "</p>";
  // }
};

/**
 * Si le choix de l'utilisateur est égal à la bonne réponse, lancez le jeu.

 */
// const verification = (data) => {
//   if (data.choices == data.correct) {
//     startGame();
//   }
// };

//#endregion "Function"
