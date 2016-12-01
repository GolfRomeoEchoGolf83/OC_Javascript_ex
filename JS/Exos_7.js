// Exercice_1 

// générer un nombre alératoire 1 - 100
var nombre = Math.floor(Math.random() * 100 + 1);
console.log(nombre);


// demander de deviner le nombre
while (nombreChoisi !== nombre) {
    var nombreChoisi = Number(prompt("Quel est le nombre ?"));

    if (nombreChoisi > nombre) {
        alert("c'est moins ! Quel est le nombre ?");
    } else if (nombreChoisi < nombre) {
        alert("c'est plus ! Quel est le nombre ?");
    } else if (nombreChoisi === nombre) {
        alert("Bravo ! le nombre était " + nombre);
    }
}
*/

// Exercice_2
var nombreChoisi = 0;
var nbreEssai = 0;
var nbreEssaiMax = 2;

while (nombreChoisi !== nombre && nbreEssai < nbreEssaiMax) {
    // for (var i = 0; i < 8; i++) {
    nbreEssai++;
    nombreChoisi = Number(prompt("Quel est le nombre ?" + nbreEssai));


    if (nombreChoisi > nombre) {
        alert("c'est moins ! Quel est le nombre ?");
    } else if (nombreChoisi < nombre) {
        alert("c'est plus ! Quel est le nombre ?");
    }
}

if (nombreChoisi === nombre) {
    alert("Bravo ! le nombre était " + nombre);
} else {
    alert("GAME OVER");
}


// Exercice_3
var difficulte = Number(prompt("1, 2 ou 3"))

// Niveau 1
if (difficulte === 1) {
    // nombre aleatoire 
    var nombre = Math.floor(Math.random() * 11);
    console.log(nombre);

    for (var i = 0; i < 5; i++) {
        // nombre choisi 
        var nombreChoisi = Number(prompt("Quel est le nombre ?"));

        if (nombreChoisi > nombre) {
            alert("c'est moins ! Quel est le nombre ?");
        } else if (nombreChoisi < nombre) {
            alert("c'est plus ! Quel est le nombre ?");
        } else if (nombreChoisi === nombre) {
            alert("Bravo ! le nombre était " + nombre);

        } else {
            alert("GAME OVER ! Le nombre était " + nombre);
        }
    }

    // Niveau 2
} else if (difficulte === 2) {
    // nombre aleatoire
    var nombre = Math.floor(Math.random() * 101);
    console.log(nombre);

    for (var i = 0; i < 10; i++) {
        // nombre choisi
        var nombreChoisi = Number(prompt("Quel est le nombre ?"));

        if (nombreChoisi > nombre) {
            alert("c'est moins ! Quel est le nombre ?");
        } else if (nombreChoisi < nombre) {
            alert("c'est plus ! Quel est le nombre ?");
        } else if (nombreChoisi === nombre) {
            alert("Bravo ! le nombre était " + nombre);
        } else {
            alert("GAME OVER ! Le nombre était " + nombre);
        }
    }
    // Niveau 3
} else if (difficulte === 3) {
    // nombre aleatoire
    var nombre = Math.floor(Math.random() * 1001);
    console.log(nombre);

    for (var i = 0; i < 20; i++) {
        // nombre choisi
        var nombreChoisi = Number(prompt("Quel est le nombre ?"));

        if (nombreChoisi > nombre) {
            alert("c'est moins ! Quel est le nombre ?");
        } else if (nombreChoisi < nombre) {
            alert("c'est plus ! Quel est le nombre ?");
        } else if (nombreChoisi === nombre) {
            alert("Bravo ! le nombre était " + nombre);

        } else {
            alert("GAME OVER ! Le nombre était " + nombre);
        }
    }
}
*/