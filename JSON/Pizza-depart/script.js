function chargeJson() {
  // On cherche notre fichier JSON
  fetch("data.json")
    .then((response) => {
      // Une fois le fichier chargé
      return response.json(); //On le convertit en JSON
    })
    .then((data) => {
      //Une fois le fichier convertis
      console.log(data);
      createDivs(data); //On appelle notre fonction
    });
}

function createDivs(data) {
  const preview = document.getElementsByClassName("preview")[0];

  preview.innerHTML = "";

  const pizzeriaName = document.createElement("div");
  pizzeriaName.setAttribute("class", "name-Pizzeria");
  pizzeriaName.innerHTML = "<h1>" + data.nom + "</h1>";

  const sloganName = document.createElement("div");
  sloganName.setAttribute("class", "slogan");
  sloganName.innerHTML = "<h3>" + data.slogan + "</h3>";

  preview.appendChild(pizzeriaName);
  preview.appendChild(sloganName);

  const pizerriaPizzaList = document.createElement("div");
  pizerriaPizzaList.setAttribute("id", "contenu");
  pizerriaPizzaList.setAttribute("id", "Pizzalist");

  var listPizza = data.pizzas;

  for (var x = 0; x < listPizza.length; x++) {
    var pizzaListElement = document.createElement("div");

    pizzaListElement.setAttribute("class", "card");

    pizzaListElement.innerHTML =
      '<h1 class =" nompizza">' +
      listPizza[x].nomPizza +
      "</h1>" +
      '<h2 class = "pizzaprix">' +
      listPizza[x].prix +
      "</h2>";

    let listGarnitures = listPizza[x].garnitures;
    for (y = 0; y < listGarnitures.length; y++) {
      //var garnituresListElement = document.createElement("ol");

      pizzaListElement.innerHTML +=
        '<ol class = "garnituresElements">' + listGarnitures[y] + "</ol>";
    }
    pizzaListElement.innerHTML +=
      '<img class = "image-pizza" src="' + listPizza[x].image + '"></img>';

    pizerriaPizzaList.appendChild(pizzaListElement);
  }

  preview.appendChild(pizerriaPizzaList);
}
