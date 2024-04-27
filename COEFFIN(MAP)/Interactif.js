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
      var imgcoeffinHautClick = document.getElementById('imgcoeffinHautClick');
  
      var x = event.offsetX;
      var y = event.offsetY;
      alert('Position du clic : x = ' + x + ', y = ' + y); //Pop-up
      if ((x > 142) && (x < 162) && (y > 366) && (y < 386)){ //Intervalle de position x et y
        alert("Bien joué ! Vous avez trouvé l'accueil !") //Pop-up
      }
      else if ((x > 118) && (x < 138) && (y > 137) && (y < 157)){ //Intervalle de position x et y
        alert("Bien joué ! Vous avez trouvé le Bâtiment A !") //Pop-up
      }
      else if ((x > 203) && (x < 223) && (y > 256) && (y < 276)){
        alert("Bien joué ! Vous avez trouvé le CDI !")
      }
      else if ((x > 181) && (x < 201) && (y > 193) && (y < 213)){
        alert("Bien joué ! Vous avez trouvé la Vie Scolaire !")
      }
      else if ((x > 155) && (x < 175) && (y > 164) && (y < 184)){
        alert("Bien joué ! Vous avez trouvé la Salle de Permanence !")
      }
      else if ((x > 174) && (x < 194) && (y > 176) && (y < 196)){
        alert("Bien joué ! Vous avez trouvé le Forum !")
      }
      else if ((x > 138) && (x < 158) && (y > 184) && (y < 204)){
        alert("Bien joué ! Vous avez trouvé les Toilettes des garçons !")
      }
      else if ((x > 187) && (x < 207) && (y > 141) && (y < 161)){
        alert("Bien joué ! Vous avez trouvé les Toilettes des filles !")
      }
      else if ((x > 191) && (x < 211) && (y > 267) && (y < 287)){
        alert("Bien joué ! Vous avez trouvé le Bâtiment B !")
      }
      else if ((x > 171) && (x < 191) && (y > 287) && (y < 307)){
        alert("Bien joué ! Vous avez trouvé l'Administration !")
      }
      else if ((x > 237) && (x < 257) && (y > 332) && (y < 352)){
        alert("Bien joué ! Vous avez trouvé le Bâtiment C !")
      }
      else if ((x > 247) && (x < 267) && (y > 305) && (y < 325)){
        alert("Bien joué ! Vous avez trouvé la Cafétéria !")
      }
      else if ((x > 262) && (x < 282) && (y > 257) && (y < 277)){
        alert("Bien joué ! Vous avez trouvé le Kiosque !")
      }
      else if ((x > 319) && (x < 339) && (y > 391) && (y < 411)){
        alert("Bien joué ! Vous avez trouvé le Bâtiment D !")
      }
      else if ((x > 392) && (x < 412) && (y > 319) && (y < 339)){
        alert("Bien joué ! Vous avez trouvé le Bâtiment E !")
      }
      else if ((x > 335) && (x < 355) && (y > 255) && (y < 275)){
        alert("Bien joué ! Vous avez trouvé la Cantine !")
      }
      else if ((x > 379) && (x < 399) && (y > 210) && (y < 230)){
        alert("Bien joué ! Vous avez trouvé l'infirmerie !")
      }
      else if ((x > 451) && (x < 461) && (y > 157) && (y < 177)){
        alert("Bien joué ! Vous avez trouvé l'internat !")
      }
      else if ((x > 311) && (x < 331) && (y > 100) && (y < 120)){
        alert("Bien joué ! Vous avez trouvé le Plateau sportif !")
      }
      else if ((x > 448) && (x < 468) && (y > 58) && (y < 78)){
        alert("Bien joué ! Vous avez trouvé les Vestiaires et le local !")
      }
      else if ((x > 417) && (x < 437) && (y > 34) && (y < 54)){
        alert("Bien joué ! Vous avez trouvé la Salle de danse !")
      }
      else if ((x > 105) && (x < 125) && (y > 114) && (y < 134)){
        alert("Bien joué ! Vous avez trouvé le Bâtiment J !")
      }
      else if ((x > 53) && (x < 73) && (y > 134) && (y < 154)){
        alert("Bien joué ! Vous avez trouvé la Salle de musique !")
      }
      else {
        alert("Raté ! Réésayez encore ! 😉");
      }
    }
  )});


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



/* Syldrina */
function calcul_point()
{
       nombreDeQuestion=6;
       nom=new Array();
       nomLength=new Array();
       point=0;
       for(n=0;n<=(nombreDeQuestion-1);n++)
       {
          nom[n]=document.getElementsByName("choix_"+n);
          nomLength[n]=nom[n].length;
          for(q=0;q<=(nomLength[n]-1);q++)
          {
            if(nom[n][q].checked==true)
            {point=point+eval(nom[n][q].value);} 
            else
            {point=point;}

          }
       }
       document.quizz_1.ptn.value=point;
}