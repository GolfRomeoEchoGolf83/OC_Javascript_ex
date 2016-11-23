// 5.1_Exercice 1
// saisir un nombre X entre 1 et 10
// afficher un carré avec X # sur chque ligne

var X = " ";
var tableauX = [];

var nombreX = Number(prompt("Choisi un nombre ente 1 et 10"));

for (var i = 0; i < nombreX; i++) {
    X = nombreX;
    nombreX = "#";
    tableauX.push(X);
}

alert(tableauX.join(X));