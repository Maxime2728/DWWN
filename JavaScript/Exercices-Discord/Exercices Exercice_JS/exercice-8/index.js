function operation(op){
    firstnb = document.calc.nbr1.value;
    secondnb = document.calc.nbr2.value;
    switch(op){
        case "add": resultat = parseFloat(firstnb)+parseFloat(secondnb); console.log(resultat); break;
        case "sous": resultat = parseFloat(firstnb)-parseFloat(secondnb); break;
        case "multi": resultat= parseFloat(firstnb)*parseFloat(secondnb); break;
        case "divi": {
            if(secondnb!=0){
                resultat=firstnb/secondnb;
            }
            else{
                resultat="Erreur !"
            }

        }
    }
    document.calc.result.value=resultat;
}