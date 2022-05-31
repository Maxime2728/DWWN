let existe;
let min=20;
let max=100;
let attaquant = PlayerGenerator();
let defenseur = PlayerGenerator()
let oldAttaquant = -1;
const nbrJoueur = 2;
console.log("Nombre de joueurs : " + nbrJoueur);
let players = Array();

class personnage {
     constructor(_nom){
         
        this.existe = false;

        this.nombreAleatoire = function () { // Genere un nombre aleatoirement

            return Math.floor(Math.random() * (max - min + 1) + min);
        }

         if (_nom==""){ // Saisie du nom, si nom est vide
            while (_nom==""){
                alert("Pas de nom affecté");
                _nom=prompt("Merci de saisir un nom");
            }
         }

        this.nom = _nom; // Infos joueurs

        console.log(`Nouveau personnage ${this.nom} créé !`);

        this.vie = this.nombreAleatoire();
        this.attaque = this.nombreAleatoire();
        this.defense = this.nombreAleatoire();

        if(this.vie > 0){
            this.existe = true;
        }
      
        this.AfficheInfos = function()
        {
            console.log(`${this.nom} a ${this.vie}% de vie, ${this.attaque} d'attaque et ${this.defense} de défense`); // Points de vie, d'attaque et de defense

        }
       
        this.attaquer = function(defenseur){ //fonction attaque
            console.log(`${this.nom} attaque ${defenseur.nom}`);
                if(this.attaque > defenseur.defense){//perd de la vie si l'attaque est supérieur à la défense
                    defenseur.vie -= 10;
                }
                if(this.attaque == defenseur.defense){
                    defenseur.vie -= 5;
                }
                if(this.attaque < defenseur.defense){
                    this.vie -= 5;
                }
                if(this.vie <=0){
                    console.error(`Le personnage ${perso1.nom} est K.O`);// pour afficher un message d'erreur si le personnage est à 0 de vie
                    this.existe = false;
                }
                if (defenseur.vie <=0){
                    console.error(`Le personnage ${perso2.nom} est K.O`);
                    this.existe = false;
                }
        }      
    }
}
function PlayerGenerator(length) {
    return Math.floor(Math.random() * length);
}
    
function run(){
        while (players.perso > 1){
            

            
        }  
    }
// Creation du nouveau perso et envoie dans le tableau
let perso=new personnage("");
perso.AfficheInfos();
players.push(perso);

perso=new personnage("");
perso.AfficheInfos();
players.push(perso);

// je les affiche tous
console.log(players)

//j'affiche le 1er
console.log(players[0]);

//j'affiche le 2ème
console.log(players[1]);

//Pour lancer le script attaque
run();

//   var perso1 = new personnage("");
//   perso1.AfficheInfos();
//   var perso2 = new personnage("");
//   perso2.AfficheInfos();

//   perso1.attaquer(perso2);