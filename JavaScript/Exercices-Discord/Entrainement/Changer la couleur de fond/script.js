let compteur = 0;
let 

// Permet de récuprer la string de la Text Area
function getData() {
  var e = document.getElementById("color");
  var element = document.getElementsByTagName("body");

  console.log(e.value);

  switch (e.value) {
    case "blue":
      element.style.backgroundColor = blue;
      break;
  }
}
