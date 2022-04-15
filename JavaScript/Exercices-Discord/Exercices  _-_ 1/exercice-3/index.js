function ager(){
    let age=0;
    age = parseInt(prompt("Entrez votre age"));
    console.log(age);

    if (age>=1 && age<=110){
        alert("Votre age est correcte");
    }
    else if(age != Number|| age<=0 && age>= 111){
        alert("Erreur, mauvaise réponse !");
        age = parseInt(prompt("Ressaisissez votre age"));
        console.log(age);
    
            if (age>=1 && age<=110){
                alert("Votre age est correcte");
            }
            else{
                alert("Erreur, réessayer plus tard (F5)")
            }
    }
}

ager()