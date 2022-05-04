function chargeJson() {
  fetch("script/quizson.json")
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      console.log(data);
      console.log(data[0].choices);
      createDivs(data);
    });
}


function createDivs(data) {
  const preview = document.getElementsByClassName("preview")[0];

  
  const questionTitleList = document.createElement("div");
  questionTitleList.setAttribute("id", "contenu");
  questionTitleList.setAttribute("id", "questionTitle");

  var tableauJson = new Array(data);

  console.log(tableauJson);

  var questionTitle = Array(data[3].correct);
  console.log(questionTitle);
  for (var x = 0; x < questionTitle.length; x++) {
    var questionListElement = document.createElement("div");
    questionListElement.setAttribute("class", "card");

    questionListElement.innerHTML = "<h2>" + questionTitle[x] + "</h2>";

    questionTitleList.appendChild(questionListElement);
  }
  /* Ajout de la questionTitleList à la div de prévisualisation. */
  preview.appendChild(questionTitleList);

  // const questionTitle = document.createElement("div");
  // questionTitle.setAttribute("class", "top-title");
  // questionTitle.innerHTML = "<h1>" + data.question + "</h1>";

  // preview.appendChild(questionTitle);

  // const questionElement = document.createElement("div");
  // questionElement.setAttribute("id", "contenu");
  // questionElement.setAttribute("id", "questionList");
}
