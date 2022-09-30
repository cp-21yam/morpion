$(function () {

    var symbole = true;

    var $i = 1;

    var tab = [0, 1, 2, 3, 4, 5, 6, 7, 8];

    //pour chaque case
    $("td").each(function (index, element) {
        //Clique dans une case
        $(element).click(function () {

            //vérifier si la case n'est pas déjà occupé
            if ($(element).hasClass("symbole_0") || $(element).hasClass("symbole_1")) {
                //colorier les bordures des cases occupées en rouge quand on clique dessus
                $(element).css({"border": "1px solid red"});
                setTimeout(() => {
                    $(element).css({"border": "1px solid black"});
                }, 600);

            } else {

                //mettre le symbole rond si $i est paire
                if ($i % 2 == 0) {
                    $(element).addClass("symbole_0");
                    tab.splice(index, 1, "O");
                    $i++
                } else {
                    //mettre le symbole croix si $i est impaire
                    $(element).addClass("symbole_1");
                    tab.splice(index, 1, "X");
                    $i++
                }
            }

            //condition de victoire pour les ronds
            if ($i >= 5) {
                console.log(tab);
                if (tab[0] == "X" && tab[1] == "X" && tab[2] == "X"
                    || tab[3] == "X" && tab[4] == "X" && tab[5] == "X"
                    || tab[6] == "X" && tab[7] == "X" && tab[8] == "X"
                    || tab[0] == "X" && tab[3] == "X" && tab[6] == "X"
                    || tab[1] == "X" && tab[4] == "X" && tab[7] == "X"
                    || tab[2] == "X" && tab[5] == "X" && tab[8] == "X"
                    || tab[2] == "X" && tab[5] == "X" && tab[8] == "X"
                    || tab[0] == "X" && tab[4] == "X" && tab[8] == "X"
                    || tab[2] == "X" && tab[4] == "X" && tab[6] == "X"
                ) {
                    setTimeout(() => {
                        alert("les croix ont gagné");
                        //remettre le tableau par défaut
                        tab = [0, 1, 2, 3, 4, 5, 6, 7, 8];
                        //remettre les classes par défaut
                        $("td").removeClass("symbole_0");
                        $("td").removeClass("symbole_1");
                        $i = 1;
                    }, 200);

                    //vérifier si les croix n'ont pas gagné
                } else if ($i > 9) {
                    var egalite = 1;
                }

            }
            //condition de victoire pour les ronds
            if ($i >= 5) {
                if (tab[0] == "O" && tab[1] == "O" && tab[2] == "O"
                    || tab[3] == "O" && tab[4] == "O" && tab[5] == "O"
                    || tab[6] == "O" && tab[7] == "O" && tab[8] == "O"
                    || tab[0] == "O" && tab[3] == "O" && tab[6] == "O"
                    || tab[1] == "O" && tab[4] == "O" && tab[7] == "O"
                    || tab[2] == "O" && tab[5] == "O" && tab[8] == "O"
                    || tab[2] == "O" && tab[5] == "O" && tab[8] == "O"
                    || tab[0] == "O" && tab[4] == "O" && tab[8] == "O"
                    || tab[2] == "O" && tab[4] == "O" && tab[6] == "O"
                ) {
                    setTimeout(() => {
                        alert("les ronds ont gagné");
                        //remettre le tableau par défaut
                        tab = [0, 1, 2, 3, 4, 5, 6, 7, 8];
                        //remettre les classes par défaut
                        $("td").removeClass("symbole_0");
                        $("td").removeClass("symbole_1");
                        $i = 1;
                    }, 200);
                } else if ($i > 9) {
                    egalite++;
                    if (egalite == 2) {
                        setTimeout(() => {
                            alert("Égalité")
                            //remettre le tableau par défaut
                            tab = [0, 1, 2, 3, 4, 5, 6, 7, 8];
                            //remettre les classes par défaut
                            $("td").removeClass("symbole_0");
                            $("td").removeClass("symbole_1");
                            $i = 1;
                        })
                    }
                }
            }


        });


    });


});



