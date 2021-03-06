console.log("Js Chargé avec succès");
let compteur = 0;
let check1 = $("#name-cocktail").value;
let check2 = $("#random-cocktail").value;
let cardPlus1 = 1;
let formSearch = $(".mb-3");

formSearch.hide();

console.log("Check name = " + check1);
console.log("Check Random = " + check2);

function onClickByName() {
  if (check1 == 0 && check2 == 1) {
    location.reload();
  }
  check1 = 1;
  check2 = 0;
  onClickByName = true;
  onClickRandom = false;
  formSearch.show();
  findByName();
  console.log("Search By name");
}

function onClickRandom() {
  if (check2 == 0 && check1 == 1) {
    location.reload();
  }
  check2 = 1;
  check1 = 0;
  onClickByName = false;
  onClickRandom = true;
  getRandomCocktail();
  console.log("Genere Random");
}

function onClickRefresh() {
  location.reload();
}

/* Un compteur qui sert à limiter le nombre de cartes créées. */

function getRandomCocktail() {
  fetch("https:/www.thecocktaildb.com/api/json/v1/1/random.php").then(function (
    response
  ) {
    if (response.status !== 200) {
      console.log("On a un problème. Status du code : " + response.status);
      return;
    }
    response.json().then(function (data) {
      // console.log(data);
      displayRandomCocktail(data);
    });
  });
}

function findByName() {
  document
    .querySelector("#cocktail-name")
    .addEventListener("input", function () {
      if (this.value.length > 4) {
        let url = `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${this.value}`;
        fetch(url).then((response) =>
          response.json().then((data) => {
            console.log(data);
            displayNameCocktail(data);
          })
        );
      }
    });
}

function getIdJson() {
  localStorage.setItem(idDrinks);
  console.log(idDrinks);
}

function displayRandomCocktail(cocktail) {
  console.log(cocktail.drinks[0]);

  /* Vérifier si le compteur est inférieur ou égal à 2 et si le onClickRandom est vrai et si le
  onClickByName est faux. Si tout cela est vrai, il appellera la fonction getRandomCocktail. */
  if (compteur <= 22 && onClickRandom == true && onClickByName == false) {
    getRandomCocktail();
  }

  for (var x = 0; x < cocktail.drinks.length; x++) {
    let drinksection = document.getElementById("drink-section");

    let card = document.createElement("div");
    card.setAttribute("class", "card-random " + "card-" + cardPlus1++);
    card.setAttribute("onclick", "clickChargePage2()");

    console.log("Card Plus = " + cardPlus1);

    idDrinks = document.createElement("form");
    idDrinks.setAttribute("action", "page-2.html");
    idDrinks.setAttribute("method", "get");
    idDrinks.setAttribute("name", "parameters");
    idDrinks = cocktail.drinks[x].idDrink;
    console.log("ID : " + idDrinks);

    // /* Journalisation de la valeur de la propriété `drinks` de l'objet `cocktail`. */
    console.log(cocktail.drinks[x]);
    /* Création d'un nouvel élément appelé drinkName et définition de innerHTML sur la valeur de la
  propriété strDrink du premier élément du tableau drinks. */
    let drinkName = document.createElement("h2");
    drinkName.innerHTML = cocktail.drinks[x].strDrink;

    card.appendChild(drinkName);

    let img = document.createElement("img");
    img.src = cocktail.drinks[x].strDrinkThumb;

    card.appendChild(img);
    idDrinks.innerHTML += "</form>";
    /* C'est une boucle qui s'exécutera 15 fois. */
    // for (let i = 1; i < 16; i++) {
    //   /* Créer un nouvel élément appelé ingrédient et l'ajouter à l'élément de la carte. */
    //   console.log(i);

    //   if (cocktail.drinks[x][`strIngredient${i}`] == null) {
    //     break;
    //   }

    //   let ingredient = document.createElement("ons-list-item");
    //   ingredient.setAttribute("class", "ingredient");
    //   ingredient.innerHTML =
    //     "<br>" +
    //     cocktail.drinks[x][`strMeasure${i}`] +
    //     ": " +
    //     cocktail.drinks[x][`strIngredient${i}`] +
    //     " ; ";

    //   card.appendChild(ingredient);
    //
    // }

    // let cardInstru = document.createElement("div");
    // cardInstru.setAttribute("id", "instruction-card");
    // cardInstru.innerHTML = cocktail.drinks[x].strInstructions;

    // card.appendChild(cardInstru);
    compteur++;
    console.log("Compteur Random = " + compteur);
    drinksection.appendChild(card);
  }
}

function displayNameCocktail(cocktail) {
  /* Vérifier si le compteur est inférieur ou égal à 2 et si le onClickByName est vrai et si le
  onClickRandom est faux. Si tout cela est vrai, il appellera la fonction findByName. */
  if (compteur <= 22 && onClickByName == true && onClickRandom == false) {
    findByName();
  }
  for (var x = 0; x < cocktail.drinks.length; x++) {
    let drinksection = document.getElementById("drink-section");

    let card = document.createElement("div");
    card.setAttribute("class", "card-name");

    /* Création d'un nouvel élément appelé drinkName et définition de innerHTML sur la valeur de la
  propriété strDrink du premier élément du tableau drinks. */
    let drinkName = document.createElement("h2");
    drinkName.innerHTML = cocktail.drinks[x].strDrink;

    card.appendChild(drinkName);

    let img = document.createElement("img");
    img.src = cocktail.drinks[x].strDrinkThumb;

    card.appendChild(img);

    /* C'est une boucle qui s'exécutera 15 fois. */
    // for (let i = 1; i < 16; i++) {
    //   /* Créer un nouvel élément appelé ingrédient et l'ajouter à l'élément de la carte. */
    //   console.log(i);

    //   if (cocktail.drinks[x][`strIngredient${i}`] == null) {
    //     break;
    //   }

    //   let ingredient = document.createElement("ons-list-item");
    //   ingredient.setAttribute("class", "ingredient");
    //   ingredient.innerHTML =
    //     "<br>" +
    //     cocktail.drinks[x][`strMeasure${i}`] +
    //     ": " +
    //     cocktail.drinks[x][`strIngredient${i}`] +
    //     " ; ";

    //   card.appendChild(ingredient);

    // }

    // let cardInstru = document.createElement("instruction-card");
    // cardInstru.innerHTML = cocktail.drinks[x].strInstructions;

    // card.appendChild(cardInstru);
    drinksection.appendChild(card);
    compteur++;
    console.log("Compteur Name = " + compteur);
  }
  /* Incrémentation du compteur. */
}

function clickChargePage2() {
  window.open("page-2.html", "_blank");
  getIdJson();
}
