// ------------------------VARIABLES
let min;
let max;
let randomAtq;
let randomDef;
let randomAncienAtq = -1;
min = 20;
max = 100;
//-------------------------COLOR
function colorLog(message, color) {
  switch (color) {
    case "dead":
      color = "red";
      break;
    case "win":
      color = "lightgreen";
      break;
    case "battle":
      color = "orange";
      break;
    case "perso":
      color = "cyan";
      break;
    case "health":
      color = "lightblue";
      break;
    case "round":
      color = "pink";
      break;
    default:
      color = "black";
      break;
  }
  console.log("%c" + message, "color: " + color);
}

// ------FONCTION RANDOM----------

function joueurAleatoire(length) {
  return Math.floor(Math.random() * length);
}

// ------------------------CLASS PERSONNAGE

class personnage {
  constructor(nom) {
    this.nombreAleatoire = function () {
      return Math.floor(Math.random() * (max - min + 1) + min);
    };

    // -----------------------------------------EXISTE
    var _existe;
    this.Getexiste = function () {
      return _existe;
    };
    this.Setexiste = function (newexiste) {
      _existe = newexiste;
    };
    // ---------------------------------------NOM

    this.Getnom = function () {
      return nom;
    };
    this.Setnom = function (newnom) {
      if (nom != "") {
        nom = newnom;
        _existe = true;
      }
    };

    // ------------------------------VIE
    var _vie = this.nombreAleatoire();

    this.Getvie = function () {
      return _vie;
    };
    this.Setvie = function (newvie) {
      _vie = newvie;

      if (_vie <= 0) {
        _existe = false;
        _vie = 0;
        colorLog(`Le personnage ${this.Getnom()} est MORT.`, "dead");
      }
    };
    // ----------------------------------ATTAQUE
    var _attaque = this.nombreAleatoire();

    this.Getattaque = function () {
      return _attaque;
    };
    this.Setattaque = function (newattaque) {
      _attaque = newattaque;
    };
    // ---------------------------------------DEFENSE
    var _defense = this.nombreAleatoire();
    this.Getdefense = function () {
      return _defense;
    };
    this.Setdefense = function (newdefense) {
      _defense = newdefense;
    };

    // ----------------------------------------------AFFICHER INFO
    this.afficherInfo = function () {
      colorLog(
        `Nom : ${this.Getnom()}, Vie : ${this.Getvie()}, Attaque : ${this.Getattaque()}, Défense : ${this.Getdefense()}`,
        "perso"
      );
    };
    // ---------------------------------------------- SURPRISE MOTHERFUCKER (Attaque)
    this.attaquer = function (defenseur) {
      colorLog(
        `Nouvelle attaque de: ${this.Getnom()} sur ${defenseur.Getnom()}`,
        "battle"
      );
      if (this.Getattaque() > defenseur.Getdefense()) {
        defenseur.Setvie(defenseur.Getvie() - 10);
        colorLog(
          `Niveau de vie de ${defenseur.Getnom()}: ${defenseur.Getvie()}`,
          "health"
        );
      }
      if (this.Getattaque() == defenseur.Getdefense()) {
        defenseur.Setvie(defenseur.Getvie() - 5);
        colorLog(
          `Niveau de vie de ${defenseur.Getnom()}: ${defenseur.Getvie()}`,
          "health"
        );
      }
      if (this.Getattaque() < defenseur.Getdefense()) {
        this.Setvie(this.Getvie() - 5);
        colorLog(
          `Niveau de vie de ${this.Getnom()}: ${this.Getvie()}`,
          "health"
        );
      }
    };
  }
}
//------------------------------- TABLEAU -----------------------------------------
//------------------------------- CLASSE MATCH -----------------------------------------
class Match {
  constructor() {
    var nbrJoueur = 3;
    var joueurs = new Array();
    var nbrejoueurcree = 0;
    var nomSaisie = "";
    var perso;
    var bPresent;
    var round = 0;
    var winner;

    while (nbrejoueurcree < nbrJoueur) {
      bPresent = false;
      nomSaisie = prompt("Saisissez-votre nom de personnage :");
      for (var i = 0; i < joueurs.length; i++) {
        if (joueurs[i].Getnom() == nomSaisie) {
          bPresent = true;
          alert("Ce nom existe déjà !");
        }
      }
      if (bPresent == false) {
        perso = new personnage(nomSaisie);
        perso.afficherInfo();
        joueurs.push(perso);
        nbrejoueurcree += 1;
      }
    }
    function win() {
      colorLog(`Le joueur ${joueurs[0].Getnom()} a gagné avec`, "win");
    }

    //tant qu'il reste plus d'un joueur
    while (joueurs.length > 1) {
      //definit l'attaquant de façon aléatoire
      randomAtq = joueurAleatoire(joueurs.length);
      //definit le defenseur
      randomDef = joueurAleatoire(joueurs.length);
      //verifie si l'attaquant est different de l'ancien attaquant
      if (randomAtq != randomAncienAtq) {
        //verifie si l'attaquant est different du defenseur
        if (randomAtq != randomDef) {
          //attaque
          joueurs[randomAtq].attaquer(joueurs[randomDef]);
          round += 1;
          colorLog("Attention le round " + round + " va commencer", "round");
          try {
            //si l'attaquant est mort on le supprime du tableau
            if (joueurs[randomAtq].Getexiste() == false) {
              joueurs.splice(randomAtq, 1);
            }
            //si le defenseur est mort on le supprime du tableau
            if (joueurs[randomDef].Getexiste() == false) {
              joueurs.splice(randomDef, 1);
            }
            //on intercepte l'erreur si la donnée du tableau n'existe plus
          } catch (error) {}

          //l'attaquant devient l'ancien attaquant
          randomAncienAtq = randomAtq;
        }
      }
      console.log(joueurs);
    }
    // Le joueur gagnant est annoncé
    console.log(win());
  }
}

var m = new Match();
