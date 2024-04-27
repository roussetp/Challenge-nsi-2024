document.addEventListener('DOMContentLoaded', function () {
    var imageContainer = document.getElementById('imageContainer');
    var infoContainer = document.getElementById('infoContainer');

    imageContainer.addEventListener('click', function (event) {

        var image = document.getElementById('image');
        var location = '';
        // Obtenir la position de l'image par rapport au coin supérieur gauche de la page
        var imageRect = image.getBoundingClientRect();

        // Calculer les coordonnées relatives du clic par rapport à l'image
        var xRelative = 100 * ((event.clientX - imageRect.left) / image.width);
        var yRelative = 100 * ((event.clientY - imageRect.top) / image.height);

        // alert('Position du clic par rapport à l\'image : x = ' + xRelative + ', y = ' + yRelative);

        var distance = Math.sqrt((xRelative - 8) ** 2 + (yRelative - 14) ** 2);
        if (distance < 5) {
            document.getElementById("bat").innerHTML = "<p>Voici la salle de danse !</p> <p><img src='danse.jpg'></p>";

        }
        var distance = Math.sqrt((xRelative - 14) ** 2 + (yRelative - 8) ** 2);
        if (distance < 5) {

            document.getElementById("bat").innerHTML = "<p>Voici les vestiaires !</p><p><img src='vestiaires.jpg'></p>";
        }
        var distance = Math.sqrt((xRelative - 21) ** 2 + (yRelative - 33) ** 2);
        if (distance < 5) {
            document.getElementById("bat").innerHTML = "<p>Voici le terrain de sport ! </p><p><img src='sport.jpg'></p>";
        }
        var distance = Math.sqrt((xRelative - 33) ** 2 + (yRelative - 9) ** 2);
        if (distance < 5) {
            document.getElementById("bat").innerHTML = "<p>Voici l'internat !</p><p><img src='internat.jpg'></p>";
        }
        var distance = Math.sqrt((xRelative - 47) ** 2 + (yRelative - 13) ** 2);
        if (distance < 5) {
            document.getElementById("bat").innerHTML = "<p>Voici l'infirmerie !</p><p><img src='infirmerie.jpg'></p>";
        }
        var distance = Math.sqrt((xRelative - 65) ** 2 + (yRelative - 19) ** 2);
        if (distance < 5) {
            document.getElementById("bat").innerHTML = "<p>Voici le bâtiment E !</p><p><img src='batE.jpg'></p>";
        }
        var distance = Math.sqrt((xRelative - 52) ** 2 + (yRelative - 31) ** 2);
        if (distance < 5) {
            document.getElementById("bat").innerHTML = "<p>Voici le bâtiment F !</p><p><img src='batF2.jpg'></p>";
        }
        var distance = Math.sqrt((xRelative - 46) ** 2 + (yRelative - 37) ** 2);
        if (distance < 5) {
            document.getElementById("bat").innerHTML = "<p>Voici la cantine !</p><p><img src='cantine.jpg'></p>";
        }
        var distance = Math.sqrt((xRelative - 77) ** 2 + (yRelative - 32) ** 2);
        if (distance < 5) {
            document.getElementById("bat").innerHTML = "<p>Voici le bâtiment D !</p><p><img src='batD.jpg'></p>";
        }
        var distance = Math.sqrt((xRelative - 72) ** 2 + (yRelative - 48) ** 2);
        if (distance < 5) {
            document.getElementById("bat").innerHTML = "<p>Voici le bâtiment C !</p><p><img src='batC.jpg'></p>";
        }
        var distance = Math.sqrt((xRelative - 60) ** 2 + (yRelative - 45) ** 2);
        if (distance < 5) {
            document.getElementById("bat").innerHTML = "<p>Voici la cafèt' !</p><p><img src='cafet.jpg'></p>";
        }
        var distance = Math.sqrt((xRelative - 74) ** 2 + (yRelative - 69) ** 2);
        if (distance < 5) {
            document.getElementById("bat").innerHTML = "<p>Voici le hall d'accueil !</p><p><img src='hall2.jpg'></p>";
        }
        var distance = Math.sqrt((xRelative - 55) ** 2 + (yRelative - 58) ** 2);
        if (distance < 5) {
            document.getElementById("bat").innerHTML = "<p>Voici le CDI !</p><p><img src='CDI.jpg'></p>";
        }
        var distance = Math.sqrt((xRelative - 35) ** 2 + (yRelative - 63) ** 2);
        if (distance < 5) {
            document.getElementById("bat").innerHTML = "<p>Voici la vie scolaire !</p><p><img src='vieScolaire.jpg'></p>";
        }
        var distance = Math.sqrt((xRelative - 28) ** 2 + (yRelative - 73) ** 2);
        if (distance < 5) {
            document.getElementById("bat").innerHTML = "<p>Voici le bâtiment A !</p><p><img src='batA.jpg'></p>";
        }
        var distance = Math.sqrt((xRelative - 73) ** 2 + (yRelative - 86) ** 2);
        if (distance < 5) {
            document.getElementById("bat").innerHTML = "<p>Voici la salle Chovino !</p><p><img src='chovino.jpg'></p>";
        }

        var distance = Math.sqrt((xRelative - 28) ** 2 + (yRelative - 87) ** 2);
        if (distance < 5) {
            document.getElementById("bat").innerHTML = "<p>Voici le bâtiment dédié à la musique !</p><p><img src='musique.jpg'></p>"
        }
        var distance = Math.sqrt((xRelative - 16) ** 2 + (yRelative - 84) ** 2);
        if (distance < 5) {
            document.getElementById("bat").innerHTML = "<p>Voici le bâtiment dédié à la physique-chimie !</p><p><img src='PC.jpg'></p>";
        }
        var distance = Math.sqrt((xRelative - 59) ** 2 + (yRelative - 63) ** 2);
        if (distance < 5) {
            document.getElementById("bat").innerHTML = "<p>Voici le bâtiment dédié à l'administration !</p><p><img src='admin.jpg'></p>";
        }

    });
});
