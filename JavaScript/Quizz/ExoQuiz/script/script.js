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

var  
  for(var x = 0; x < )

  topTitle.innerHTML = "<h1>" + data.question + "</h1>";

  preview.appendChild(topTitle);

  const questionElement = document.createElement("div");
  questionElement.setAttribute("id", "contenu");
  questionElement.setAttribute("id", "questionList");
}
