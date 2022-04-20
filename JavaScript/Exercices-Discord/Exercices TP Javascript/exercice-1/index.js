function somme(n){
    let sum = 0;
    for (i= 1; i <= n; i++){
        sum += 1;
        alert("Pour i = "+ i + "---> somme = "+ sum);
    }
    return sum;
}

let nombre=prompt("Somme jusqu'a ? "+ 10);
alert(`Somme = ${somme(nombre)}`);