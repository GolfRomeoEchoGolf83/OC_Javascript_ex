// Initialiser le constructeur
var Robot = {
    init: function robot(name, life, speed, position) {
        this.name = name;
        this.life = 100;
        this.speed = 3;
        this.position = [0, 0];
    },

    // fonction de présentation
    sePresenter: function () {
        // code pour se presenter
        var description = "Bonjour, je m'appelle " + this.name + ". J'ai " + this.life + " points de vie. Je me déplace à " + this.speed + " cases par seconde. Je suis aux coordonnées (" + this.position + ").";
        return description;
    },

    seDeplacer: function () {
        // fonction de déplacement guidé
        var direction = prompt("choisi une direction : haut / bas / droite / gauche");
        var nombreCases = 0;
        var caseDeplacement = 0;
        var position = [0, 0];

        if (direction.toLowerCase() === "gauche") {
            nombreCases = Number(prompt("choisis un nombre de cases"));
            alert("le robot va se déplacer vers la gauche de " + nombreCases + " cases.");

        } else if (direction.toLowerCase() === "haut") {
            nombreCases = Number(prompt("choisis un nombre de cases"));
            alert("le robot va se déplacer vers le haut de " + nombreCases + " cases.");
            // position.splice(1, 1, nombreCases);
            // console.log(robot.position);

        } else if (direction.toLowerCase() === "droite") {
            nombreCases = Number(prompt("choisis un nombre de cases"));
            alert("le robot va se déplacer vers la droite de " + nombreCases + " cases.");
            // position.splice(0, 1, nombreCases);

        } else if (direction.toLowerCase() === "bas") {
            nombreCases = Number(prompt("choisis un nombre de cases"));
            alert("le robot va se déplacer vers le bas de " + nombreCases + " cases.");
            caseDeplacement = -nombreCases;

        } else {
            alert("la direction renseignée est erronnée. Choisis haut / bas / droite ou gauche.");
        }


        if (direction === "gauche") {
            caseDeplacement = -nombreCases;
            // position.splice(0, 1, caseDeplacement);

        } else if (direction === "bas") {
            caseDeplacement = -nombreCases;
            // position[1].push(caseDeplacement);
            // position.splice(1, 1, caseDeplacement);

        } else {
            caseDeplacement = nombreCases;
        }

        return caseDeplacement;
    },


    // fonction de déplacement aléatoire    
    seDeplacerAleatoirement: function (coupsDeplacement) {
        Math.floor((Math.random() * 10) + 1);
        return coupsDeplacement;
        console.log(coupsDeplacement);
    }
};



// initialisation des 4 robots
var robotSquad = [];
var positionRobot = [[]];
var robot = "";


var robot1 = Object.create(Robot);
var robot2 = Object.create(Robot);
var robot3 = Object.create(Robot);
var robot4 = Object.create(Robot);

robot1.init("Alpha");
robot2.init("Bravo");
robot3.init("Charlie");
robot4.init("Delta");

robotSquad.push(robot1, robot2, robot3, robot4);



// test de l'itération des données pour les robots 
console.log(robot1, robot2, robot3, robot4);
console.log(robotSquad);


// présentations des robots
for (var i = 0; i < robotSquad.length; i++) {
    robotSquad[i].sePresenter();
}


// déplacement guidé des robots
for (var i = 0; i < robotSquad.length; i++) {
    var nomRobot = robotSquad[i][0];
    var resultatDeplacementRobot = robotSquad[i].seDeplacer();
    var positionRobot = robotSquad[i][3];

    console.log("le robot " + robotSquad[i].name + " se deplace de " + resultatDeplacementRobot + " cases");

    console.log("le robot " + robotSquad[i].name + " se trouve à la position " + robotSquad[i][3]);
}


// déplacement aléatoire des robots
var positionInitiale = robotSquat[i][3];
var deplacementAleatoire = seDeplacerAleatoirement();
console.log(deplacementAleatoire);