// 2.1_Calcul sur tableau
/* Création d'un tableau */
var tab1 = [1, 4, 6, 7];
var somme = 0;

/* Fonction prend en paramètre le tableau */
function fonct(tab1) {
    if (tab1 !== isNaN(tab1)) {
        for (var i = 0; i < tab1.length; i++) {
            somme += tab1[i];
        }
    } else if (tab1 === isNaN(tab1)) { /* Si une case n'est pas un nombre --> renvoi null */
        alert("null"); //NE FONCTIONNE PAS
    }
    return somme;
}

/* Renvoi la somme des nombres contenus dans les cases */
alert(fonct(tab1));




// 2.2_Calcul sur tableau à deux dimensions //NE FONCTiONNE PAS
var tab2 = [1, 3, 10];
var tab3 = [4, 6];
var tab = [tab2, tab3];
var somme = 0

    /* OU var tab2 = [1, 3, [4, 6], 10] MAIS NE FONCTIONNE PAS */

/* fonction qui prend en paramètre un tableau à deux dimensions */
function fonct(tab) {
    for (var i = 0; i < tab.length; i++) {
        somme += tab[i];
    }
    return somme;
}

/* renvoi la somme de tous les nombres du tableau */
alert(fonct(tab));


/* si une case n'est pas un nombre ou est vide --> null */



// 2.3_Affichage du tableau

// 2.4_Tri sur un tableau