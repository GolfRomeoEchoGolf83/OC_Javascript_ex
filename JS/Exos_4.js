/*
// 4.1_Exercice 1
// demande un numéro
var x = Number(prompt("choisi un numéro"));
// demande un numéro
var y = Number(prompt("choisi un second numéro"));
// addition des deux  
alert("Addition de x et y = " + (x + y));




// 4.2_Exercice 2 suite du 4.1
// ajouter soustraction, multiplication, division, modulo (optionnel)
alert("Soustraction de x et y = " + (x - y) + " Multiplication de x et y = " + (x * y) + " Division de x et y = " + (x / y) + " Modulo de x et y = " + (x % y));




// 4.3_Exercice 3
// demande le nombre de frères et soeurs 
var prenomsEnfants = [];
var prenom = " ";

var nombreEnfants = prompt("Combien as-tu de frères et soeurs ?");
// demande le nom de chacun
for (var i = 0; i < nombreEnfants; i++) {
    prenom = prompt("Quel est son nom ?");
    prenomsEnfants.push(prenom);
}

// affiche une boite de dialogue par prénom "Bonjour X".
for (var i = 0; i < nombreEnfants; i++) {
    alert("Bonjour " + prenomsEnfants[i]);
}

*/

// 4.4_Exercice 4
var stockagePrenoms = [];

var prenom = prompt("Quel est ton prenom ?") // demande le prenom de l'utilisateur
var nombreDeLettresPrenom = prenom.length;

// affiche le prenom autant de fois qu'il y a de lettres dans le prenom
for (var i = 0; i < nombreDeLettresPrenom; i++) {
    stockagePrenoms.push(prenom);
}
alert(stockagePrenoms.join("\n")); // à la ligne
alert(JSON.stringify(stockagePrenoms)); // COMMENT RETIRER LES [] ?