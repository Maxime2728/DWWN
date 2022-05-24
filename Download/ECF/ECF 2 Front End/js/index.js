const srcImg = "images/"; // emplacement des images de l'appli
const albumDefaultMini = srcImg + "noComicsMini.jpeg";
const albumDefault = srcImg + "noComics.jpeg";
const srcAlbumMini = "albumsMini/"; // emplacement des images des albums en petit
const srcAlbum = "albums/"; // emplacement des images des albums en grand
let preview = $("#preview");
let search = $("#search");
let panier = $("#panier");
let compteurAffichage = 0;
let compteurBtn = 0;
let getByAlbum = 0;
let getBySerie = 0;
let getByAuteur = 0;

jQuery(document).ready(function ($) {
  /**
   * Récupération de l'album par son id et appel de
   * la fonction d'affichage
   *
   * @param {number} num
   */

  /**
   * Affichage des images, les effets sont chainés et traités
   * en file d'attente par jQuery d'où les "stop()) et "clearQueue()"
   * pour éviter l'accumulation d'effets si défilement rapide des albums.
   *
   * @param {object jQuery} $albumMini
   * @param {object jQuery} $album
   * @param {string} nomFic
   * @param {string} nomFicBig
   */
  function afficheAlbums($albumMini, $album, nomFicMini, nomFic) {
    $album
      .stop(true, true)
      .clearQueue()
      .fadeOut(100, function () {
        $album.attr("src", nomFic);
        $albumMini
          .stop(true, true)
          .clearQueue()
          .fadeOut(150, function () {
            $albumMini.attr("src", nomFicMini);
            $albumMini.slideDown(200, function () {
              $album.slideDown(200);
            });
          });
      });
  }

  /**
   * Affichage de l'image par défaut si le chargement de l'image de l'album
   * ne s'est pas bien passé
   *
   * @param {object HTML} element
   */
  function prbImg(element) {
    // console.log(element);
    if (element.id === "albumMini") element.src = albumDefaultMini;
    else element.src = albumDefault;
  }
});

// ---------------------------------------------------------------------------------

// -------------------- Debut de la Fonction getAlbums ------------------

// Affiche tout les albums
function getAlbums() {
  $("#showorhide").hide();
  compteurAffichage++;
  console.log("CompteurAffichage : " + compteurAffichage);

  // -------------------- Console Log --------------------------

  console.log("Liste des albums");
  for (var [idAlbum, album] of albums.entries()) {
    serie = series.get(album.idSerie);
    auteur = auteurs.get(album.idAuteur);
    console.log(
      album.titre +
        " N°" +
        album.numero +
        " Série:" +
        serie.nom +
        " Auteur:" +
        auteur.nom
    );
    // --------------------- Afficher les BD's ------------------
    if (compteurAffichage <= 1) {
      preview.innerHTML = "";
      console.log(album);
      let card = document.createElement("div");
      card.setAttribute("class", "card");
      card.setAttribute("id", idAlbum);

      const titleAlbum = document.createElement("div");
      titleAlbum.setAttribute("class", "top-title");
      titleAlbum.innerHTML = "<h3>" + album.titre + "</h1>";

      card.append(titleAlbum);

      /* Création d'un élément div avec la classe corp-de-page puis ajout de la série,
      de l'auteur et du prix. */
      let cdp = document.createElement("div");
      cdp.setAttribute("class", "corp-de-page");
      cdp.innerHTML =
        "<h5><span>" +
        series.get(album.idSerie).nom +
        "<br></span> <span> Auteur(s) :</span> " +
        auteurs.get(album.idAuteur).nom +
        "<br> <span> Prix :</span> " +
        album.prix +
        "€</h5>";

      card.append(cdp);

      var nomFic = serie.nom + "-" + album.numero + "-" + album.titre;

      // Utilisation d'une expression régulière pour supprimer
      // les caractères non autorisés dans les noms de fichiers : '!?.":$
      nomFic = nomFic.replace(/'|!|\?|\.|"|:|\$/g, "");

      /* Créer un élément div avec la classe d'images, affiche l'image puis l'ajoute à la carte. */
      let albumPhotoMini = document.createElement("div");
      albumPhotoMini.setAttribute("class", "images");
      albumPhotoMini.innerHTML =
        "<img src='" + srcAlbumMini + nomFic + ".jpg" + "'></img>";

      card.append(albumPhotoMini);

      let addPanier = document.createElement("div");
      addPanier.setAttribute("class", "addToPanier");
      addPanier.innerHTML =
        '<button value="' +
        nomFic +
        '" type="button" class="btn-dark btn btn-addPanier" id="addToPanier" onclick="ajouterPanier(' +
        idAlbum +
        ')"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-cart-plus" viewBox="0 0 16 16"><path d="M9 5.5a.5.5 0 0 0-1 0V7H6.5a.5.5 0 0 0 0 1H8v1.5a.5.5 0 0 0 1 0V8h1.5a.5.5 0 0 0 0-1H9V5.5z"/><path d="M.5 1a.5.5 0 0 0 0 1h1.11l.401 1.607 1.498 7.985A.5.5 0 0 0 4 12h1a2 2 0 1 0 0 4 2 2 0 0 0 0-4h7a2 2 0 1 0 0 4 2 2 0 0 0 0-4h1a.5.5 0 0 0 .491-.408l1.5-8A.5.5 0 0 0 14.5 3H2.89l-.405-1.621A.5.5 0 0 0 2 1H.5zm3.915 10L3.102 4h10.796l-1.313 7h-8.17zM6 14a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm7 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"/></svg></button>';

      // addPanier.innerHTML +=
      //   '<button class="qte" id="qte-" onclick="qteMoins()">Quantité(-)</button>';
      card.appendChild(addPanier);

      preview.append(card);
    } else {
      location.reload();
      compteurAffichage--;
    }
  }
}

// -------------------- Fin de la Fonction getAlbums ------------------

// -------------------- Debut de la Fonction getByAlbums ------------------

//Affiche les recherches par Albums
function getByAlbums() {
  console.log("By Albums");
  if (getByAlbum == 0) {
    getByAlbum++;
    getBySerie = 0;
    getByAuteur = 0;
    console.log(getByAlbum);
    console.log(getBySerie);
    console.log(getByAuteur);
  } else if (getByAlbum == 1) {
    getByAlbum--;
    console.log(getByAlbum);
  }
}

// -------------------- Fin de la Fonction getByAlbum ------------------

// -------------------- Debut de la Fonction getBySeries ------------------

//Affiche les recherches par Series
function getBySeries() {
  console.log("By Series");
  if (getBySerie == 0) {
    getBySerie++;
    getByAlbum = 0;
    getByAuteur = 0;
    console.log(getBySerie);
    console.log(getByAlbum);
    console.log(getByAuteur);
  } else if (getBySerie == 1) {
    getBySerie--;
    console.log(getBySerie);
  }
}

// -------------------- Fin de la Fonction getSeries ------------------

// -------------------- Debut de la Fonction getByAuteurs ------------------

//Affiche les recherches par Auteurs
function getByAuteurs() {
  console.log("By Auteurs");
  if (getByAuteur == 0) {
    getByAuteur++;
    getBySerie = 0;
    getByAlbum = 0;
    console.log(getByAuteur);
    console.log(getBySerie);
    console.log(getByAlbum);
  } else if (getByAuteur >= 1) {
    getByAuteur--;
    console.log(getByAuteur);
  }
}

function clearSearch() {
  if (compteurBtn >= 1) {
    $("#search").empty();
    console.log("Yep ca fonctionne le compteurBtn");
    compteurBtn--;
    console.log("CompteurBtn = " + compteurBtn);
    location.reload();
  }
}

function refreshPage() {
  location.reload();
}

// -------------------- Fin de la Fonction getAuteurs ------------------

// -------------------- Debut de la Fonction Chercher() ------------------

function chercher() {
  //on fait une recherche sur la map des albums:
  //EX: Je ne veux que les albums avec l'auteur Arleston, Mourier (idAuteur=11)

  // Dans un premier temps on va aller recupérer l'id de l'auteur selon la saisie utilisateur (qui sera un input)
  recherche = document.getElementById("research").value;

  console.log("Recherche : " + recherche);

  // auteurNom = auteurs.nom;

  // let indexOfRecherche = auteurNom.indexOf(recherche);

  // console.log(indexOfRecherche);

  // --------------- Début de la fonction recherche par Auteurs ---------------

  if (getByAuteur == 1) {
    var idAuteurToSave = 0;
    search.innerHTML = "";
    compteurBtn++;
    console.log("Compteur : " + compteurBtn);

    // while (search.firstChild) {
    //   search.removeChild(search.firstChild);
    // }
    $("#preview").hide();

    for (var [idAuteur, auteur] of auteurs.entries()) {
      if (auteur.nom.indexOf(recherche) >= 0) {
        //remplacer le nom de l'auteur ici par le choix de l'utilisateur
        //on est sur le bon: on sauvegarde l'id, puis on sort de la boucle
        console.log("on est làààààààààà  " + idAuteur);
        idAuteurToSave = parseInt(idAuteur);
        // on a notre idAuteur, on fait notre petit filtre
        if (idAuteurToSave > 0) {
          for (var [idAlbum, album] of albums.entries()) {
            if (album.idAuteur == idAuteurToSave) {
              serie = series.get(album.idSerie);
              auteur = auteurs.get(album.idAuteur);
              console.log(
                album.titre +
                  " N°" +
                  album.numero +
                  " Série:" +
                  serie.nom +
                  " Auteur:" +
                  auteur.nom
              );
              $("#preview").hide();
              search.innerHTML = "";

              let card = document.createElement("div");
              card.setAttribute("class", "card");

              const titleAlbum = document.createElement("div");
              titleAlbum.setAttribute("class", "top-title");
              titleAlbum.innerHTML = "<h3>" + album.titre + "</h1>";

              card.append(titleAlbum);
              /* Création d'un élément div avec la classe corp-de-page puis ajout de la série,
        de l'auteur et du prix. */
              let cdp = document.createElement("div");
              cdp.setAttribute("class", "corp-de-page");
              cdp.innerHTML =
                "<h5><span>" +
                series.get(album.idSerie).nom +
                "<br></span> <span> Auteur(s) :</span> " +
                auteurs.get(album.idAuteur).nom +
                "<br> <span> Prix :</span> " +
                album.prix +
                "€</h5>";

              card.append(cdp);
              var nomFic = serie.nom + "-" + album.numero + "-" + album.titre;

              // Utilisation d'une expression régulière pour supprimer
              // les caractères non autorisés dans les noms de fichiers : '!?.":$
              nomFic = nomFic.replace(/'|!|\?|\.|"|:|\$/g, "");

              /* Créer un élément div avec la classe d'images, affiche l'image puis l'ajoute à la carte. */
              let albumPhotoMini = document.createElement("div");
              albumPhotoMini.setAttribute("class", "images");
              albumPhotoMini.innerHTML =
                "<img src='" + srcAlbumMini + nomFic + ".jpg" + "'></img>";

              card.append(albumPhotoMini);

              let addPanier = document.createElement("div");
              addPanier.setAttribute("class", "addToPanier");
              addPanier.innerHTML =
                '<button type="button" class="btn-dark btn btn-addPanier" id="addToPanier" onclick="ajouterPanier(' +
                idAlbum +
                ')"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-cart-plus" viewBox="0 0 16 16"><path d="M9 5.5a.5.5 0 0 0-1 0V7H6.5a.5.5 0 0 0 0 1H8v1.5a.5.5 0 0 0 1 0V8h1.5a.5.5 0 0 0 0-1H9V5.5z"/><path d="M.5 1a.5.5 0 0 0 0 1h1.11l.401 1.607 1.498 7.985A.5.5 0 0 0 4 12h1a2 2 0 1 0 0 4 2 2 0 0 0 0-4h7a2 2 0 1 0 0 4 2 2 0 0 0 0-4h1a.5.5 0 0 0 .491-.408l1.5-8A.5.5 0 0 0 14.5 3H2.89l-.405-1.621A.5.5 0 0 0 2 1H.5zm3.915 10L3.102 4h10.796l-1.313 7h-8.17zM6 14a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm7 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"/></svg></button>';

              card.appendChild(addPanier);

              search.append(card);
            }
          }
        }
      }
    }
  }

  // // --------------- Fin de la Fonction recherche par Auteurs ---------------

  // // --------------- Début de la fonction recherche par Albums ---------------
  if (getByAlbum == 1) {
    search.innerHTML = "";
    compteurBtn++;
    console.log("Compteur : " + compteurBtn);

    // while (search.firstChild) {
    //   search.removeChild(search.firstChild);
    // }
    $("#preview").hide();

    for (var [idAlbum, album] of albums.entries()) {
      if (album.titre.indexOf(recherche) >= 0) {
        serie = series.get(album.idSerie);
        auteur = auteurs.get(album.idAuteur);
        console.log(
          album.titre +
            " N°" +
            album.numero +
            " Série:" +
            serie.nom +
            " Auteur:" +
            auteur.nom
        );
        $("#preview").hide();
        search.innerHTML = "";

        let card = document.createElement("div");
        card.setAttribute("class", "card");

        const titleAlbum = document.createElement("div");
        titleAlbum.setAttribute("class", "top-title");
        titleAlbum.innerHTML = "<h3>" + album.titre + "</h1>";

        card.append(titleAlbum);
        /* Création d'un élément div avec la classe corp-de-page puis ajout de la série,
        de l'auteur et du prix. */
        let cdp = document.createElement("div");
        cdp.setAttribute("class", "corp-de-page");
        cdp.innerHTML =
          "<h5><span>" +
          series.get(album.idSerie).nom +
          "<br></span> <span> Auteur(s) :</span> " +
          auteurs.get(album.idAuteur).nom +
          "<br> <span> Prix :</span> " +
          album.prix +
          "€</h5>";

        card.append(cdp);
        var nomFic = serie.nom + "-" + album.numero + "-" + album.titre;

        // Utilisation d'une expression régulière pour supprimer
        // les caractères non autorisés dans les noms de fichiers : '!?.":$
        nomFic = nomFic.replace(/'|!|\?|\.|"|:|\$/g, "");

        /* Créer un élément div avec la classe d'images, affiche l'image puis l'ajoute à la carte. */
        let albumPhotoMini = document.createElement("div");
        albumPhotoMini.setAttribute("class", "images");
        albumPhotoMini.innerHTML =
          "<img src='" + srcAlbumMini + nomFic + ".jpg" + "'></img>";

        card.append(albumPhotoMini);

        let addPanier = document.createElement("div");
        addPanier.setAttribute("class", "addToPanier");
        addPanier.innerHTML =
          '<button type="button" class="btn-dark btn btn-addPanier" id="addToPanier" onclick="ajouterPanier(' +
          idAlbum +
          ')"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-cart-plus" viewBox="0 0 16 16"><path d="M9 5.5a.5.5 0 0 0-1 0V7H6.5a.5.5 0 0 0 0 1H8v1.5a.5.5 0 0 0 1 0V8h1.5a.5.5 0 0 0 0-1H9V5.5z"/><path d="M.5 1a.5.5 0 0 0 0 1h1.11l.401 1.607 1.498 7.985A.5.5 0 0 0 4 12h1a2 2 0 1 0 0 4 2 2 0 0 0 0-4h7a2 2 0 1 0 0 4 2 2 0 0 0 0-4h1a.5.5 0 0 0 .491-.408l1.5-8A.5.5 0 0 0 14.5 3H2.89l-.405-1.621A.5.5 0 0 0 2 1H.5zm3.915 10L3.102 4h10.796l-1.313 7h-8.17zM6 14a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm7 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"/></svg></button>';

        card.appendChild(addPanier);

        search.append(card);
      }
    }
  }

  // // --------------- Fin de la Fonction recherche par Albums ---------------

  // // --------------- Début de la fonction recherche par Series ---------------
  if (getBySerie == 1) {
    var idSerieToSave = 0;
    search.innerHTML = "";
    compteurBtn++;
    console.log("CompteurBtn : " + compteurBtn);

    // while (search.firstChild) {
    //   search.removeChild(search.firstChild);
    // }
    $("#preview").hide();

    for (var [idSerie, serie] of series.entries()) {
      if (serie.nom.indexOf(recherche) >= 0) {
        //remplacer le nom de l'auteur ici par le choix de l'utilisateur
        //on est sur le bon: on sauvegarde l'id, puis on sort de la boucle
        console.log("on est làààààààààà  " + idSerie);
        idSerieToSave = parseInt(idSerie);
        // on a notre idAuteur, on fait notre petit filtre
        if (idSerieToSave > 0) {
          for (var [idAlbum, album] of albums.entries()) {
            if (album.idSerie == idSerieToSave) {
              serie = series.get(album.idSerie);
              auteur = auteurs.get(album.idAuteur);
              console.log(
                album.titre +
                  " N°" +
                  album.numero +
                  " Série:" +
                  serie.nom +
                  " Auteur:" +
                  auteur.nom
              );
              $("#preview").hide();
              search.innerHTML = "";

              let card = document.createElement("div");
              card.setAttribute("class", "card");

              const titleAlbum = document.createElement("div");
              titleAlbum.setAttribute("class", "top-title");
              titleAlbum.innerHTML = "<h3>" + album.titre + "</h1>";

              card.append(titleAlbum);
              /* Création d'un élément div avec la classe corp-de-page puis ajout de la série,
      de l'auteur et du prix. */
              let cdp = document.createElement("div");
              cdp.setAttribute("class", "corp-de-page");
              cdp.innerHTML =
                "<h5><span>" +
                series.get(album.idSerie).nom +
                "<br></span> <span> Auteur(s) :</span> " +
                auteurs.get(album.idAuteur).nom +
                "<br> <span> Prix :</span> " +
                album.prix +
                "€</h5>";

              card.append(cdp);
              var nomFic = serie.nom + "-" + album.numero + "-" + album.titre;

              // Utilisation d'une expression régulière pour supprimer
              // les caractères non autorisés dans les noms de fichiers : '!?.":$
              nomFic = nomFic.replace(/'|!|\?|\.|"|:|\$/g, "");

              /* Créer un élément div avec la classe d'images, affiche l'image puis l'ajoute à la carte. */
              let albumPhotoMini = document.createElement("div");
              albumPhotoMini.setAttribute("class", "images");
              albumPhotoMini.innerHTML =
                "<img src='" + srcAlbumMini + nomFic + ".jpg" + "'></img>";

              card.append(albumPhotoMini);

              let addPanier = document.createElement("div");
              addPanier.setAttribute("class", "addToPanier");
              addPanier.innerHTML =
                '<button type="button" class="btn-dark btn btn-addPanier" id="addToPanier" onclick="ajouterPanier(' +
                idAlbum +
                ')"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-cart-plus" viewBox="0 0 16 16"><path d="M9 5.5a.5.5 0 0 0-1 0V7H6.5a.5.5 0 0 0 0 1H8v1.5a.5.5 0 0 0 1 0V8h1.5a.5.5 0 0 0 0-1H9V5.5z"/><path d="M.5 1a.5.5 0 0 0 0 1h1.11l.401 1.607 1.498 7.985A.5.5 0 0 0 4 12h1a2 2 0 1 0 0 4 2 2 0 0 0 0-4h7a2 2 0 1 0 0 4 2 2 0 0 0 0-4h1a.5.5 0 0 0 .491-.408l1.5-8A.5.5 0 0 0 14.5 3H2.89l-.405-1.621A.5.5 0 0 0 2 1H.5zm3.915 10L3.102 4h10.796l-1.313 7h-8.17zM6 14a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm7 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"/></svg></button>';

              card.appendChild(addPanier);

              search.append(card);
            }
          }
        }
      }
    }
  }
}

// -------------------- Fin de la Fonction Chercher() ------------------

function btnAppelApi() {
  var callBackGetSuccess = function (data) {
    var element = document.getElementById("api-meteo-p");
    element.innerHTML =
      "La temperature à Évreux est de " + data.main.temp + "°C";
  };
  var url =
    "https://api.openweathermap.org/data/2.5/weather?q=Evreux,fr&appid=c21a75b667d6f7abb81f118dcf8d4611&units=metric";

  $.get(url, callBackGetSuccess)
    .done(function () {
      //alert( "second success" );
    })
    .fail(function () {
      alert("error");
    })
    .always(function () {
      //alert( "finished" );
    });
}

// function mapToObject(map) {
//   return Object.assign(
//     Object.create(null),
//     ...[...map].map((v) => ({ [v[0]]: v[1] }))
//   );
// }

// /*
//   // On transforme la map en objets*/
// console.log(mapToObject(albums));

// -------------------- Debut de la Fonction addToPanier ------------------

function ajouterPanier(idAlbumparam) {
  // Le idAlbumParam permet de recuperer l'ID de la map Albums

  tableau = document.getElementById("tableau");
  totalPrix = $("#prixTotal");
  supprime = 1;

  for (var [idAlbum, album] of albums.entries()) {
    if (idAlbum == idAlbumparam) {
      // console.log("on est sur le bon album: " + album.titre);
      console.log(album.titre);
      code = idAlbumparam;
      console.log(code);
      prix = album.prix;
      console.log(prix);

      var existe = false;
      var quantite = 1;
      var ligne;
      //on vérifie s'il y'a une th avec le code qui nous interesse
      try {
        ligneexiste = document.getElementById("tr" + code);
        console.log(ligneexiste);
        if (ligneexiste != null) {
          ligne = ligneexiste;

          var quantiteexiste = document.getElementById("Qte" + code);
          console.log(quantiteexiste);
          quantite += parseInt(quantiteexiste.innerText);
          existe = true;
        } else {
          ligne = document.createElement("tr");
          ligne.setAttribute("id", "tr" + code);
        }
      } catch {}

      ligne.innerHTML =
        '<th id="code' +
        code +
        '">' +
        album.titre +
        "</th>" +
        '<th id="Qte' +
        code +
        '">' +
        quantite +
        '</th><th id="PU' +
        code +
        '">' +
        prix +
        "€</th><th>" +
        quantite * prix +
        "€</th>" +
        '<button id="supprimer-' +
        code +
        '" onclick="supprimer(' +
        "tr" +
        code +
        ')" class="btn btn-black">Supprimer</button>';

      if (existe == false) {
        tableau.appendChild(ligne);
      }
    }
  }
}

function supprimer(ligne) {
  var ligneaSupprimer = document.getElementById(ligne);
  ligne.innerHTML = "";
}
