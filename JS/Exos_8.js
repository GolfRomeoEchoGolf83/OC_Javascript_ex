// Exercice_1
// si on ajoute du graphisme au jeu
/* 
var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");
*/

// Constructeur Robot 
var robot = {
    init: function (name, life, speed, position) {
        this.name = name;
        this.life = 100;
        this.speed = 3;
        this.position = [0, 0];

    },

    decrire: function () {
        var description = "Bonjour, je m'appelle " + this.name + ". J'ai " + this.life + " points de vie. Je me déplace à " + this.speed + " cases par seconde. Je suis aux coordonnées (" + this.position + ",).";
        return description;
    },

    //  seDeplacer: function () {

};



// Exercice_2
// constructeur de robots
var robot1 = Object.create(robot);
var robot2 = Object.create(robot);
var robot3 = Object.create(robot);
var robot4 = Object.create(robot);


// générer un nouveau robot "Alpha"
robot1.init("Alpha");

// générer un second robot "Bravo"
robot2.init("Bravo");


// Exercice_3
// tester Alpaha :  
console.log(robot1.decrire());

// test Bravo : 
console.log(robot2.decrire());


// Exercice_4
robot3.init("Charlie");
robot4.init("Delta");
var robotSquat = [robot1, robot2, robot3, robot4];

for (var i = 0; i < robotSquat.length; i++) {
    console.log(robotSquat[i].decrire());
}


// SE DEPLACER : AJOUTER DANS L'ARRAY LES POSITIONS DES ROBOTS
var positionRobot = [this.positionX, this.positionY];
var position = [[0, 0], [0, 0], [0, 0], [0, 0]];

function seDeplacer(tableau) {
    // initialise les variables
    var deplacement = 0;
    var total = [];

    for (var i = 0; i < tableau.length - 1; i++) {
        // appel de la fonction de calcul de distance entre 2 points
        deplacement = deplacementEntrePoints(tableau[i][0], tableau[i][1], tableau[i + 1][0], tableau[i + 1][1]);
        total.push(deplacement); // ajoute les déplacements dans l'array total
    }

    var resultat = 0; //initialise la variable

    // parcourt l'array total pour calculer le total des déplacements
    for (var i = 0; i < total.length; i++) {

        resultat += total[i]; // calcul
    }

    return resultat; // resultat
}

// fonction qui calcule le déplacement entre 2 points (x,y) 
function deplacementEntrePoints(x1, y1, x2, y2) {
    var resultat = Math.abs(x1 - x2) + Math.abs(y1 - y2);
    return resultat;
}

// appelle la fonction seDeplacer() pour afficher le déplacement
console.log("la distance parcourue est de : " + seDeplacer(position));


// Exericce_5
// fonction seDeplacer() au choix de l'utilisateur haut/bas/gauche/droite + 1-speedmax cases


document.onkeydown = function (e) {
        var direction = alert("appuie sur une touche directionnelle");
        if (direction === "37") {
            console.log("le robot va se déplacer vers la gauche");
        } else if (direction === "38") {
            console.log("le robot va se déplacer vers le haut");
        } else if (direction === "39") {
            console.log("le robot va se déplacer vers la droite");
        } else if (direction === "40") {
            console.log("le robot va se déplacer vers le bas");
        }
    }
    /*    
            var nombreCases = Number(prompt("choisir une valeur de déplacement entre 1 et " + this.speed));
    */





/*
                switch (e.keyCode) {
                case "38":
                    direction = "haut";
                    break;
                case "40":
                    direction = "bas";
                    break;
                case "37":
                    direction = "gauche";
                    break;
                case "39":
                    direction = "droite";
                    break;
                default:
                    console.log("le robot ne peut se déplacer dans ce cas");
                }
                document.addEventListener("keydown", function (event) {
                    var direction, keyCode = event.keyCode;
                    console.log(direction);
                    nombreCase = Number(prompt("de combien de cases"));
                    newPosition = Math.abs(nombreCase - this.position);
                    console.log(newPosition);
                })
            }
        
        var direction = String.fromCharCode(e.charCode);
        console.log("vous avez appuyé sur la touche " + direction);




        var nombreCases = Number(prompt("de combien de cases ?"));
        for (var i = 0; i < robotSquat.length; i++) {
            //AJOUTER LE DEPLACEMENT DANS LA DESCRIPTION DU ROBOT
        }




            // faire se déplacer les robots
            // faire parler pour afficher nouvelles positions



            // Exercice_6
            // seDeplacerAleatoirement(nombredecoupsdedeplacement) ex: 1 case haut + 3 cases gauche + 2 cases gauches + 2 cases bas

            // faire parler pour afficher nouvelles positions


            // Exercice_7
            // définir name, life, speed, positionX et positionY
            // caractéristiques différentes
            // reaction           
*/