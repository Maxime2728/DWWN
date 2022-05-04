console.log("Js Chargé avec succès");

/* Un compteur qui sert à limiter le nombre de cartes créées. */
let compteur = 0;

function getRandomCocktail() {
  fetch("https:/www.thecocktaildb.com/api/json/v1/1/random.php").then(function (
    response
  ) {
    if (response.status !== 200) {
      console.log("On a un problème Chef. Status du code : " + response.status);
      return;
    }
    response.json().then(function (data) {
      // console.log(data);
      displayRandomCocktail(data);
    });
  });
}

function findByName() {}

getRandomCocktail();

function displayRandomCocktail(cocktail) {
  console.log(cocktail.drinks[0]);

  /* Limite le nombre de cartes créées à 4. */
  if (compteur <= 2) {
    getRandomCocktail();
  }

  let drinksection = document.getElementById("drink-section");

  let card = document.createElement("div");
  card.setAttribute("class", "card");

  let drinkName = document.createElement("h2");
  drinkName.innerHTML = cocktail.drinks[0].strDrink;

  card.appendChild(drinkName);

  let img = document.createElement("img");
  img.src = cocktail.drinks[0].strDrinkThumb;

  card.appendChild(img);

  for (let i = 1; i < 16; i++) {
    console.log(i);

    if (cocktail.drinks[0][`strIngredient${i}`] == null) {
      break;
    }

    let ingredient = document.createElement("ons-list-item");
    ingredient.setAttribute("class", "ingredient");
    ingredient.innerHTML =
      "<br>" +
      cocktail.drinks[0][`strMeasure${i}`] +
      ": " +
      cocktail.drinks[0][`strIngredient${i}`] +
      " ; ";

    card.appendChild(ingredient);
    drinksection.appendChild(card);
  }

  compteur++;
}
