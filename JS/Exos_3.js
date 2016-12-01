// 3.1_Exercice 1
//Demander la températeur 
var temperature = prompt("Quelle est la température extérieur");

// Vérifier que le nombre correspond aux valeurs [] et est un nombre 

if (temperature < 0 || temperature > 45) {
    alert("Nous n'avons pas vu de telle température de vie d'Homme");
} else if (temperature === isNaN(temperature)) {
    alert("Il faut renseigner une temperature ");
} else if (temperature >= 0 && temperature <= 12) {
    alert("Ca caille");

} else if (temperature >= 13 && temperature <= 24) {
    alert("Un petit apéro les amis");

} else if (temperature >= 25 && temperature <= 45) {
    alert("Ca crame ici, on va mourir");

}



// 3.2_Exercice 2
// Quelle note a été obtenue ? [1 - 10] 
var note = Number(prompt("Quelle note as-tu obtenu ?"));

// Ajoute 10 
if (note >= 1 && note <= 10) {
    var noteCaniculaire = 10 + note;
    console.log(noteCaniculaire);
    alert(noteCaniculaire + "/20."); // Résultat sur 20 
} else if (note < 1 || note > 10) {
    alert("Cette note est impossible");
}



// 3.3_Exercice 3
// Afficher une boite de dialogue par prénom à ajouter (2) dans un tableau. Les 3 premiers prenoms sont Pierre, Julien, Thomas 
var prenoms = " ";
var tableau = ["Pierre", "Julien", "Thomas"];

// ajoute deux prenoms au tableau
for (var i = 0; i < 2; i++) {
    prenoms = prompt("choisir un prenom");
    tableau.push(prenoms);
    alert(prenoms);
}

// vérifie que les noms ont été ajoutés au tableau
for (var i = 0; i < tableau.length; i++) {
    alert(tableau[i]);
}

*/


// 3.4_Exercice 4
var maillotConsommateur = " ";
var ageConsommateur = 0;

// 1O personnes maximum
for (var i = 0; i < 10; i++) {

    maillotConsommateur = prompt("As tu un maillot?");
    while (maillotConsommateur.toLowerCase() !== "oui" || maillotConsommateur.toLowerCase() !== "non") {
        // en cas de réponse inappropriée
        alert("merci de répondre par oui ou non uniquement !");
        // J'AURAIS VOULU FAIRE UN RETOUR VERS LE PROMPT INITIAL ...
    } else if (maillotConsommateur.toLowerCase() === "oui") {
        // le consommateur a un maillot 
        alert("Bienvenu dans la piscine");
    } else if (maillotConsommateur.toLowerCase() !== "oui") {
        // si le consommateur n'a pas de maillot, redirigé vers la boutique
        ageConsommateur = Number(prompt("Quel est ton age?"));
        if (ageConsommateur < 18) {

            alert("le prix du maillot est de 15€");
        } else if (ageConsommateur >= 18) {
            alert("Le prix du maillot est de 25€");
        }
    }
}