let existe;
let min=20;
let max=100;

class personnage {
    //  nom = "";
    //  vie = 0 ;
    //  attaque = 0;
    //  defense = 0;

     constructor(_nom){
         
        // this.vie = 0 ;
        // this.attaque = 0;
        // this.defense = 0;
        this.existe = false;

        this.nombreAleatoire = function () {

            return Math.floor(Math.random() * (max - min + 1) + min);
        }

         if (_nom==""){
            while (_nom==""){
                alert("Pas de nom affecté");
                _nom=prompt("Merci de saisir un nom");
            }
         }

        this.nom = _nom;

        console.log(`Nouveau personnage ${this.nom} créé !`);

        this.vie = this.nombreAleatoire();
        this.attaque = this.nombreAleatoire();
        this.defense = this.nombreAleatoire();

        if(this.vie > 0){
            this.existe = true;
        }
      
        this.AfficheInfos = function()
        {
            console.log(this.nom + " a pour vie " + this.vie + ", pour attaque " + this.attaque + " et pour defense " + this.defense);

        }
       
        this.attaquer = function(defenseur){
            console.log(this.nom + " attaque " + defenseur.nom);
                if(this.attaque > defenseur.defense){
                    defenseur.vie -= 10;
                }
                if(this.attaque == defenseur.defense){
                    defenseur.vie -= 5;
                }
                if(this.attaque < defenseur.defense){
                    this.vie -= 5;
                }
                if(this.vie <=0){
                    console.error("Le personnage " + perso1.nom + " est dead");
                    this.existe = false;
                }
                if (defenseur.vie <=0){
                    console.error("Le personnage " + perso2.nom + " est dead");
                    this.existe = false;
                }


            this.AfficheInfos();
            defenseur.AfficheInfos();
        }
    }
}
  var perso1 = new personnage("");
  perso1.AfficheInfos();
  var perso2 = new personnage("");
  perso2.AfficheInfos();

  perso1.attaquer(perso2);