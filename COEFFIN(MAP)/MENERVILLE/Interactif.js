//ARENDEL Florian

//Superposition d'image clignotante
var vousÊtesIci = document.getElementById('vousÊtesIci'); //Récupérer l'élément de l'image superposé

var isVisible = true; //Variable pour suivre l'état actuel (visible ou invisible)

//Fonction pour alterner l'opacité
function toggleImage() {
  if (isVisible) {
    vousÊtesIci.style.opacity = 0; //Image transparente
  } else {
    vousÊtesIci.style.opacity = 1; //Image opaque
  }
  isVisible = !isVisible; //Inverser l'état
}

var intervalId = setInterval(toggleImage, 500); //Définir l'intervalle de clignotement (par exemple, toutes les 500 millisecondes)

//Arrêter le clignotement après un certain temps (par exemple, après 3000 millisecondes)
setTimeout(function () {
  clearInterval(intervalId); //Arrêter l'intervalle
  vousÊtesIci.style.opacity = 0; //Assurer que l'image est complètement transparente à la fin
}, 3000);

//Positions au clic
document.addEventListener('DOMContentLoaded', function() {
    var coeffinHautPoint = document.getElementById('coeffinHautPoint');
  
    coeffinHautPoint.addEventListener('click', function(event) {
      var Accueil = document.getElementById('Accueil');
  
      var x = event.clientX;
      var y = event.clientY;
      alert('Position du clic : x = ' + x + ', y = ' + y); //Pop-up
      if ((x > 242) && (x < 262) && (y > 825) && (y < 845)){ //Intervalle de position x et y
        alert("Bien joué ! Vous avez trouvé l'acceuil !") //Pop-up
      }
    });
  });

document.addEventListener('DOMContentLoaded', function() {
    var coeffinHautPoint2= document.getElementById('coeffinHautPoint2');
  
    coeffinHautPoint2.addEventListener('click', function(event) {
      var BatimentA = document.getElementById('BatimentA');
  
      var x = event.clientX;
      var y = event.clientY;  
      alert('Position du clic : x = ' + x + ', y = ' + y);
      if ((x > 231) && (x < 251) && (y > 575) && (y < 595)){
        alert("Bien joué ! Vous avez trouvé le bâtiment A !")
      }
    });
  });

document.addEventListener('DOMContentLoaded', function() {
    var coeffinHautPoint3= document.getElementById('coeffinHautPoint3');

    coeffinHautPoint3.addEventListener('click', function(event) {
      var CDI = document.getElementById('CDI');

      var x = event.clientX;
      var y = event.clientY;  
      alert('Position du clic : x = ' + x + ', y = ' + y);
      if ((x > 272) && (x < 292) && (y > 680) && (y < 700)){
        alert("Bien joué ! Vous avez trouvé le CDI !")
      }
    });
  });

document.addEventListener('DOMContentLoaded', function() {
    var coeffinHautPoint4= document.getElementById('coeffinHautPoint4');

    coeffinHautPoint4.addEventListener('click', function(event) {
      var VS = document.getElementById('VS');

      var x = event.clientX;
      var y = event.clientY;  
      alert('Position du clic : x = ' + x + ', y = ' + y);
      if ((x > 270) && (x < 290) && (y > 645) && (y < 665)){
        alert("Bien joué ! Vous avez trouvé la vie scolaire !")
      }
    });
  });

document.addEventListener('DOMContentLoaded', function() {
    var coeffinHautPoint5= document.getElementById('coeffinHautPoint5');

    coeffinHautPoint5.addEventListener('click', function(event) {
      var Permanence = document.getElementById('Permanence');

      var x = event.clientX;
      var y = event.clientY;  
      alert('Position du clic : x = ' + x + ', y = ' + y);
      if ((x > 253) && (x < 273) && (y > 640) && (y < 660)){
        alert("Bien joué ! Vous avez trouvé la salle de permanence !")
      }
    });
  });

document.addEventListener('DOMContentLoaded', function() {
    var coeffinHautPoint6= document.getElementById('coeffinHautPoint6');

    coeffinHautPoint6.addEventListener('click', function(event) {
      var Forum = document.getElementById('Forum');

      var x = event.clientX;
      var y = event.clientY;  
      alert('Position du clic : x = ' + x + ', y = ' + y);
      if ((x > 263) && (x < 283) && (y > 661) && (y < 681)){
        alert("Bien joué ! Vous avez trouvé le forum !")
      }
    });
  });

document.addEventListener('DOMContentLoaded', function() {
    var coeffinHautPoint7_1= document.getElementById('coeffinHautPoint7_1');

    coeffinHautPoint7_1.addEventListener('click', function(event) {
      var Toilettes_1 = document.getElementById('Toilettes_1');

      var x = event.clientX;
      var y = event.clientY;  
      alert('Position du clic : x = ' + x + ', y = ' + y);
      if ((x > 272) && (x < 292) && (y > 649) && (y < 669)){
        alert("Bien joué ! Vous avez trouvé les toilettes des garçons !")
      }
    });
  });

document.addEventListener('DOMContentLoaded', function() {
    var coeffinHautPoint7_2= document.getElementById('coeffinHautPoint7_2');

    coeffinHautPoint7_2.addEventListener('click', function(event) {
      var Toilettes_2 = document.getElementById('Toilettes_2');

      var x = event.clientX;
      var y = event.clientY;  
      alert('Position du clic : x = ' + x + ', y = ' + y);
      if ((x > 240) && (x < 260) && (y > 695) && (y < 715)){
        alert("Bien joué ! Vous avez trouvé les toilettes des filles !")
      }
    });
  });

document.addEventListener('DOMContentLoaded', function() {
    var coeffinHautPoint8= document.getElementById('coeffinHautPoint8');

    coeffinHautPoint8.addEventListener('click', function(event) {
      var BatimentB = document.getElementById('BatimentB');

      var x = event.clientX;
      var y = event.clientY;  
      alert('Position du clic : x = ' + x + ', y = ' + y);
      if ((x > 281) && (x < 301) && (y > 669) && (y < 689)){
        alert("Bien joué ! Vous avez trouvé le Batiment B !")
      }
    });
  });

document.addEventListener('DOMContentLoaded', function() {
    var coeffinHautPoint9= document.getElementById('coeffinHautPoint9');

    coeffinHautPoint9.addEventListener('click', function(event) {
      var Administration = document.getElementById('Administration');

      var x = event.clientX;
      var y = event.clientY;  
      alert('Position du clic : x = ' + x + ', y = ' + y);
      if ((x > 258) && (x < 278) && (y > 693) && (y < 713)){
        alert("Bien joué ! Vous avez trouvé l'administration !")
      }
    });
  });

document.addEventListener('DOMContentLoaded', function() {
    var coeffinHautPoint10= document.getElementById('coeffinHautPoint10');

    coeffinHautPoint10.addEventListener('click', function(event) {
      var BatimentC = document.getElementById('BatimentC');

      var x = event.clientX;
      var y = event.clientY;  
      alert('Position du clic : x = ' + x + ', y = ' + y);
      if ((x > 304) && (x < 324) && (y > 736) && (y < 756)){
        alert("Bien joué ! Vous avez trouvé le batiment C !")
      }
    });
  });

document.addEventListener('DOMContentLoaded', function() {
    var coeffinHautPoint11= document.getElementById('coeffinHautPoint11');

    coeffinHautPoint11.addEventListener('click', function(event) {
      var Cafétéria = document.getElementById('Cafétéria');

      var x = event.clientX;
      var y = event.clientY;  
      alert('Position du clic : x = ' + x + ', y = ' + y);
      if ((x > 316) && (x < 336) && (y > 727) && (y < 747)){
        alert("Bien joué ! Vous avez trouvé la cafétéria !")
      }
    });
  });

document.addEventListener('DOMContentLoaded', function() {
    var coeffinHautPoint12= document.getElementById('coeffinHautPoint12');

    coeffinHautPoint12.addEventListener('click', function(event) {
      var Kiosque = document.getElementById('Kiosque');

      var x = event.clientX;
      var y = event.clientY;  
      alert('Position du clic : x = ' + x + ', y = ' + y);
      if ((x > 320) && (x < 340) && (y > 711) && (y < 731)){
        alert("Bien joué ! Vous avez trouvé le Kiosque !")
      }
    });
  });

document.addEventListener('DOMContentLoaded', function() {
    var coeffinHautPoint13= document.getElementById('coeffinHautPoint13');

    coeffinHautPoint13.addEventListener('click', function(event) {
      var BatimentD = document.getElementById('BatimentD');

      var x = event.clientX;
      var y = event.clientY;  
      alert('Position du clic : x = ' + x + ', y = ' + y);
      if ((x > 353) && (x < 373) && (y > 812) && (y < 832)){
        alert("Bien joué ! Vous avez trouvé le Batiment D !")
      }
    });
  });

document.addEventListener('DOMContentLoaded', function() {
    var coeffinHautPoint14= document.getElementById('coeffinHautPoint14');

    coeffinHautPoint14.addEventListener('click', function(event) {
      var BatimentE = document.getElementById('BatimentE');

      var x = event.clientX;
      var y = event.clientY;  
      alert('Position du clic : x = ' + x + ', y = ' + y);
      if ((x > 402) && (x < 422) && (y > 779) && (y < 799)){
        alert("Bien joué ! Vous avez trouvé le Batiment E !")
      }
    });
  });

document.addEventListener('DOMContentLoaded', function() {
    var coeffinHautPoint15= document.getElementById('coeffinHautPoint15');

    coeffinHautPoint15.addEventListener('click', function(event) {
      var Cantine = document.getElementById('Cantine');

      var x = event.clientX;
      var y = event.clientY;  
      alert('Position du clic : x = ' + x + ', y = ' + y);
      if ((x > 362) && (x < 382) && (y > 738) && (y < 758)){
        alert("Bien joué ! Vous avez trouvé la cantine !")
      }
    });
  });

document.addEventListener('DOMContentLoaded', function() {
    var coeffinHautPoint16= document.getElementById('coeffinHautPoint16');

    coeffinHautPoint16.addEventListener('click', function(event) {
      var Infirmerie = document.getElementById('Infirmerie');

      var x = event.clientX;
      var y = event.clientY;  
      alert('Position du clic : x = ' + x + ', y = ' + y);
      if ((x > 393) && (x < 413) && (y > 721) && (y < 741)){
        alert("Bien joué ! Vous avez trouvé l'infirmerie !")
      }
    });
  });

document.addEventListener('DOMContentLoaded', function() {
    var coeffinHautPoint17= document.getElementById('coeffinHautPoint17');

    coeffinHautPoint17.addEventListener('click', function(event) {
      var Internat = document.getElementById('Internat');

      var x = event.clientX;
      var y = event.clientY;  
      alert('Position du clic : x = ' + x + ', y = ' + y);
      if ((x > 432) && (x < 452) && (y > 595) && (y < 615)){
        alert("Bien joué ! Vous avez trouvé l'internat !")
      }
    });
  });

document.addEventListener('DOMContentLoaded', function() {
    var coeffinHautPoint18= document.getElementById('coeffinHautPoint18');

    coeffinHautPoint18.addEventListener('click', function(event) {
      var Plateau_sportif = document.getElementById('Plateau_sportif');

      var x = event.clientX;
      var y = event.clientY;  
      alert('Position du clic : x = ' + x + ', y = ' + y);
      if ((x > 350) && (x < 370) && (y > 579) && (y < 599)){
        alert("Bien joué ! Vous avez trouvé le plateau sportif !")
      }
    });
  });

document.addEventListener('DOMContentLoaded', function() {
    var coeffinHautPoint19= document.getElementById('coeffinHautPoint19');

    coeffinHautPoint19.addEventListener('click', function(event) {
      var Vestiaire_Local = document.getElementById('Vestiaire_Local');

      var x = event.clientX;
      var y = event.clientY;  
      alert('Position du clic : x = ' + x + ', y = ' + y);
      if ((x > 435) && (x < 455) && (y > 561) && (y < 581)){
        alert("Bien joué ! Vous avez trouvé les vestiaire et le local !")
      }
    });
  });

document.addEventListener('DOMContentLoaded', function() {
    var coeffinHautPoint20= document.getElementById('coeffinHautPoint20');

    coeffinHautPoint20.addEventListener('click', function(event) {
      var Salle_de_danse = document.getElementById('Salle_de_danse');

      var x = event.clientX;
      var y = event.clientY;  
      alert('Position du clic : x = ' + x + ', y = ' + y);
      if ((x > 416) && (x < 436) && (y > 548) && (y < 568)){
        alert("Bien joué ! Vous avez trouvé la salle de danse !")
      }
    });
  });

  document.addEventListener('DOMContentLoaded', function() {
    var coeffinHautPoint21= document.getElementById('coeffinHautPoint21');

    coeffinHautPoint21.addEventListener('click', function(event) {
      var BatimentJ = document.getElementById('BatimentJ');

      var x = event.clientX;
      var y = event.clientY;  
      alert('Position du clic : x = ' + x + ', y = ' + y);
      if ((x > 220) && (x < 240) && (y > 625) && (y < 645)){
        alert("Bien joué ! Vous avez trouvé le Batiment J !")
      }
    });
  });

  document.addEventListener('DOMContentLoaded', function() {
    var coeffinHautPoint22= document.getElementById('coeffinHautPoint22');

    coeffinHautPoint22.addEventListener('click', function(event) {
      var Salle_de_musique = document.getElementById('Salle_de_musique');

      var x = event.clientX;
      var y = event.clientY;  
      alert('Position du clic : x = ' + x + ', y = ' + y);
      if ((x > 187) && (x < 207) && (y > 652) && (y < 672)){
        alert("Bien joué ! Vous avez trouvé la salle de musique !")
      }
    });
  });

//Boutons interatifs
document.querySelector('"#Lieu1').style.visibility="hidden";
function afficherLieu1() //Fonction pour afficher le lieu
{
    document.querySelector('#Lieu1').style.visibility="visible"; //Afficher le texte
}
function cacher1() //Fonction pour caher le lieu
{
    document.querySelector('#Lieu1').style.visibility="hidden"; //Cacher le texte
}

document.querySelector('"#Lieu2').style.visibility="hidden";
function afficherLieu2()
{
    document.querySelector('#Lieu2').style.visibility="visible";
}
function cacher2()
{
    document.querySelector('#Lieu2').style.visibility="hidden";
}

document.querySelector('"#Lieu3').style.visibility="hidden";
function afficherLieu3()
{
    document.querySelector('#Lieu3').style.visibility="visible";
}
function cacher3()
{
    document.querySelector('#Lieu3').style.visibility="hidden";
}

document.querySelector('"#Lieu4').style.visibility="hidden";
function afficherLieu4()
{
    document.querySelector('#Lieu4').style.visibility="visible";
}
function cacher4()
{
    document.querySelector('#Lieu4').style.visibility="hidden";
}

document.querySelector('"#Lieu5').style.visibility="hidden";
function afficherLieu5()
{
    document.querySelector('#Lieu5').style.visibility="visible";
}
function cacher5()
{
    document.querySelector('#Lieu5').style.visibility="hidden";
}

document.querySelector('"#Lieu6').style.visibility="hidden";
function afficherLieu6()
{
    document.querySelector('#Lieu6').style.visibility="visible";
}
function cacher6()
{
    document.querySelector('#Lieu6').style.visibility="hidden";
}

document.querySelector('"#Lieu7_1').style.visibility="hidden";
function afficherLieu7_1()
{
    document.querySelector('#Lieu7_1').style.visibility="visible";
}
function cacher7_1()
{
    document.querySelector('#Lieu7_1').style.visibility="hidden";
}

document.querySelector('"#Lieu7_2').style.visibility="hidden";
function afficherLieu7_2()
{
    document.querySelector('#Lieu7_2').style.visibility="visible";
}
function cacher7_2()
{
    document.querySelector('#Lieu7_2').style.visibility="hidden";
}

document.querySelector('"#Lieu7').style.visibility="hidden";
function afficherLieu7()
{
    document.querySelector('#Lieu7').style.visibility="visible";
}
function cacher7()
{
    document.querySelector('#Lieu7').style.visibility="hidden";
}

document.querySelector('"#Lieu8').style.visibility="hidden";
function afficherLieu8()
{
    document.querySelector('#Lieu8').style.visibility="visible";
}
function cacher8()
{
    document.querySelector('#Lieu8').style.visibility="hidden";
}

document.querySelector('"#Lieu9').style.visibility="hidden";
function afficherLieu9()
{
    document.querySelector('#Lieu9').style.visibility="visible";
}
function cacher9()
{
    document.querySelector('#Lieu9').style.visibility="hidden";
}

document.querySelector('"#Lieu10').style.visibility="hidden";
function afficherLieu10()
{
    document.querySelector('#Lieu10').style.visibility="visible";
}
function cacher10()
{
    document.querySelector('#Lieu10').style.visibility="hidden";
}

document.querySelector('"#Lieu11').style.visibility="hidden";
function afficherLieu11()
{
    document.querySelector('#Lieu11').style.visibility="visible";
}
function cacher11()
{
    document.querySelector('#Lieu11').style.visibility="hidden";
}

document.querySelector('"#Lieu12').style.visibility="hidden";
function afficherLieu12()
{
    document.querySelector('#Lieu12').style.visibility="visible";
}
function cacher12()
{
    document.querySelector('#Lieu12').style.visibility="hidden";
}

document.querySelector('"#Lieu13').style.visibility="hidden";
function afficherLieu13()
{
    document.querySelector('#Lieu13').style.visibility="visible";
}
function cacher13()
{
    document.querySelector('#Lieu13').style.visibility="hidden";
}

document.querySelector('"#Lieu14').style.visibility="hidden";
function afficherLieu14()
{
    document.querySelector('#Lieu14').style.visibility="visible";
}
function cacher14()
{
    document.querySelector('#Lieu14').style.visibility="hidden";
}

document.querySelector('"#Lieu15').style.visibility="hidden";
function afficherLieu15()
{
    document.querySelector('#Lieu15').style.visibility="visible";
}
function cacher15()
{
    document.querySelector('#Lieu15').style.visibility="hidden";
}

document.querySelector('"#Lieu16').style.visibility="hidden";
function afficherLieu16()
{
    document.querySelector('#Lieu16').style.visibility="visible";
}
function cacher16()
{
    document.querySelector('#Lieu16').style.visibility="hidden";
}

document.querySelector('"#Lieu17').style.visibility="hidden";
function afficherLieu17()
{
    document.querySelector('#Lieu17').style.visibility="visible";
}
function cacher17()
{
    document.querySelector('#Lieu17').style.visibility="hidden";
}

document.querySelector('"#Lieu18').style.visibility="hidden";
function afficherLieu18()
{
    document.querySelector('#Lieu18').style.visibility="visible";
}
function cacher18()
{
    document.querySelector('#Lieu18').style.visibility="hidden";
}

document.querySelector('"#Lieu19').style.visibility="hidden";
function afficherLieu19()
{
    document.querySelector('#Lieu19').style.visibility="visible";
}
function cacher19()
{
    document.querySelector('#Lieu19').style.visibility="hidden";
}

document.querySelector('"#Lieu20').style.visibility="hidden";
function afficherLieu20()
{
    document.querySelector('#Lieu20').style.visibility="visible";
}
function cacher20()
{
    document.querySelector('#Lieu20').style.visibility="hidden";
}

document.querySelector('"#Lieu21').style.visibility="hidden";
function afficherLieu21()
{
    document.querySelector('#Lieu21').style.visibility="visible";
}
function cacher21()
{
    document.querySelector('#Lieu21').style.visibility="hidden";
}

document.querySelector('"#Lieu22').style.visibility="hidden";
function afficherLieu22()
{
    document.querySelector('#Lieu22').style.visibility="visible";
}
function cacher22()
{
    document.querySelector('#Lieu22').style.visibility="hidden";
}



/* Ilan */
var largeurfenetre = window.innerWidth;
var largeurfenetre08 = window.innerWidth * 0.8;
var largeurfenetre20 = window.innerWidth/20;
var x = document.getElementById("myDIV")
var nommenu = document.getElementById("button")
x.style.display = "none";
function myFunction(e) {
  ;
  if (x.style.display == "none") {
    x.style.display = "block";
    } 
    else {
    x.style.display = "none";
    }
}