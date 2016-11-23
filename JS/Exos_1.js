// 1.1_Bonjour
var nom = prompt("Quel est ton nom ?");
alert("Bonjour " + nom + " !");



// 1.2_Bonjour plusieurs fois 
/* demande un nombre entre 1 et 10 */
var nombreChoisi = prompt("Choisi un nombre entre 1 et 10");

/* dis bonjour autant de fois que le nombre choisi */
if (nombreChoisi >= 0 && nombreChoisi <= 10) {
    for (var i = 0; i < nombreChoisi; i++) {
        alert("bonjour");

    }
} else if (nombreChoisi > 10 || nombreChoisi < 1 || isNaN(nombreChoisi)) { /* message d'erreur si le nombre !== [1-10] && !== nombre*/

    alert("Erreur, c'est un nombre compris entre 1 et 10 qui doit être choisi");
}
// POURQUOI LE MESSAGE D'ERREUR N'APPARAIT PAS QUAND LA VALEUR N'EST PAS UN NOMBRE ?



// 1.3_Factorielle
/* fonction factorielle */
function factorial(nbre) {
    if (nbre < 0) {
        return ("factoriel d'un nombre positif uniquement");
    } else if (nbre === 0) {
        return 1;
    } else {
        return (nbre * factorial(nbre - 1));
    }
}
/* demande un nombre entre 1 et 15*/
var nbre = prompt("Choisi un nombre entre 1 et 15");

/* appel de la fonction */
if (nbre >= 1 && nbre <= 15) {
    var resultFactorial = factorial(nbre)
        /* affiche le résultat */
    alert(resultFactorial);
}
/* message d'erreur hors interval */
if (isNaN(nbre)) {
    alert("Il faut choisir un nombre");
} else if (nbre < 1 || nbre > 15) {
    alert("le nombre choisi doit être compris entre 1 et 15");
}



// 1.4_Factorielle du mot
/* demande un mot de 15 caractères maximum */
var mot = prompt("Choisi un mot de 15 caractères maximum");

/* détermine le nombre de lettres du mot */
var nbreMot = mot.length;

/* appelle la fonction factorial */
var result = factorial(nbreMot);

/* affiche le résultat du calcul factoriel du nombre de lettres du mot */
alert(result);