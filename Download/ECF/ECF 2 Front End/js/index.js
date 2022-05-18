const srcImg = "images/"; // emplacement des images de l'appli
const albumDefaultMini = srcImg + "noComicsMini.jpeg";
const albumDefault = srcImg + "noComics.jpeg";
const srcAlbumMini = "albumsMini/"; // emplacement des images des albums en petit
const srcAlbum = "albums/"; // emplacement des images des albums en grand
const preview = $("#preview");
const search = $("#search");
let compteur = 0;
let getByAlbum = 0;
let getBySerie = 0;
let getByAuteur = 0;
let recherche = document.getElementById("research").value;

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

// Lecture d'un album
async function getAlbums() {
  $("#showorhide").hide();
  compteur++;
  console.log("Compteur : " + compteur);

  // -------------------- Console Log --------------------------

  console.log("Liste des albums");
  albums.forEach((album) => {
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
    if (compteur <= 1) {
      preview.innerHTML = "";

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

      preview.append(card);
    } else {
      location.reload();
      compteur--;
    }
  });
}

// -------------------- Fin de la Fonction getAlbums ------------------

// -------------------- Debut de la Fonction getByAlbums ------------------

async function getByAlbums() {
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

async function getBySeries() {
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

async function getByAuteurs() {
  console.log("By Auteurs");
  if (getByAuteur == 0) {
    getByAuteur++;
    getBySerie = 0;
    getByAlbum = 0;
    console.log(getByAuteur);
    console.log(getBySerie);
    console.log(getByAlbum);
  } else if (getByAuteur == 1) {
    getByAuteur--;
    console.log(getByAuteur);
  }
}

// -------------------- Fin de la Fonction getAuteurs ------------------

// -------------------- Debut de la Fonction research ------------------

function chercher() {
  //on fait une recherche sur la map des albums:
  //EX: Je ne veux que les albums avec l'auteur Arleston, Mourier (idAuteur=11)

  // Dans un premier temps on va aller recupérer l'id de l'auteur selon la saisie utilisateur (qui sera un input)

  console.log("Recherche : " + recherche);
  // --------------- Début de la fonction recherche par Auteurs ---------------
  if (getByAuteur == 1) {
    var idAuteurToSave = 0;
    for (var [idAuteur, auteur] of auteurs.entries()) {
      if (auteur.nom == recherche) {
        //remplacer le nom de l'auteur ici par le choix de l'utilisateur
        //on est sur le bon: on sauvegarde l'id, puis on sort de la boucle
        console.log("on est làààààààààà  " + idAuteur);
        idAuteurToSave = parseInt(idAuteur);
        break;
      }
    }
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

          // --------------- Affiche les éléments de recherche par Auteurs ---------------

          if (getByAuteur == 1 && recherche == auteur.nom) {
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

            search.append(card);
          }
        }
      }
    }
  }

  // --------------- Fin de la Fonction recherche par Auteurs ---------------

  // --------------- Début de la fonction recherche par Albums ---------------

  if (getByAlbum == 1) {
    for (var [idAlbum, album] of albums.entries()) {
      if (album.titre == recherche) {
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

        // --------------- Affiche les éléments de recherche par Albums ---------------

        if (getByAlbum == 1 && recherche == album.titre) {
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

          search.append(card);
        }
      }
    }
  }

  // --------------- Fin de la Fonction recherche par Albums ---------------

  // --------------- Début de la fonction recherche par Series ---------------

  if (getBySerie == 1) {
    var idSerieToSave = 0;
    for (var [idSerie, serie] of series.entries()) {
      if (serie.nom == recherche) {
        //remplacer le nom de l'auteur ici par le choix de l'utilisateur
        //on est sur le bon: on sauvegarde l'id, puis on sort de la boucle
        console.log("on est làààààààààà  " + idSerie);
        idSerieToSave = parseInt(idSerie);
        break;
      }
    }
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

          // --------------- Affiche les éléments de recherche par Auteurs ---------------

          if (getBySerie == 1 && recherche == serie.nom) {
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

            search.append(card);
          }
        }
      }
    }
  }
}

// -------------------- Fin de la Fonction Research ------------------
