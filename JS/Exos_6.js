// Exercice_1

var tab = [[5, 7], [5, 8], [2, 8]];
var tabDistanceX = [];
var tabDistanceY = [];
var i = 0;
var tabTotalDistanceX = [];
var tabTotalDistanceY = [];
var totalDistance = 0;
var distanceFinaleX = 0;
var distanceFinaleY = 0;

// longueur du tableau
var tabLength = tab.length;

// déplacement
for (i = 0; i < tabLength - 1; i++) {
    if (typeof tab !== "undefined") {
        if (tab[i][0] === tab[i + 1][0]) {
            var distanceY = (tab[i + 1][1] - tab[i][1]);
            tabDistanceY.push(distanceY);
            totalDistanceY = alert(tabDistanceY + " case(s) sur l'axe Y");

        } else {
            var distanceX = (tab[i + 1][0] - tab[i][0]);
            tabDistanceX.push(distanceX);
            totalDistanceX = alert(tabDistanceX + " case(s) sur l'axe X");
        }
        var distanceFinaleX = Number(tabDistanceX.slice(0));
        var distanceFinaleY = Number(tabDistanceY.slice(0));
        totalDistance = (distanceFinaleX + distanceFinaleY);
    }
}

console.log("Je me suis déplacé de " + totalDistance + " cases");


*/

// Exercice_2

// fonction qui ouvre une boite de dialogue pour saisir des coordonnées stype X-Y



var tab1 = [];
var tab2 = [];
var tab = [tab1, tab2];
var i = 0;

var saisie = "start";

while (saisie !== null) {
    saisie = prompt("X-Y");
    console.log(saisie.split("-"));
}
/*    
}
    tab1 = prompt("saisir un nombre : coordonnée X");
    console.log(tab1);
    tab[i] = tab.push(tab1);

    tab2 = prompt("saisir un nombre : coordonnée Y");
    console.log(tab2);
    tab[[i]] = tab.push(tab2);
}
console.log(tab);




var tab = [tabX, tabY];
var tabX = [];
var tabY = [];
var X = 0;
var Y = 0;

for (var i = 0; i < 2; i++) {
    var X = prompt("X");
    tab = tabX.push(X);

    var Y = prompt("Y");
    tab = tabY.push(Y);

    var coord = "(" + X + "-" + Y + ")";
    console.log(coord);

}
console.log(tab);


// les stocker dans un tableau 

// tourne jusqu'à ce que l'on décide d'arrêter 

// renvoi un tableau en 2D utilisable avec la fonction de l'ex 1
*/