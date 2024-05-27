function contar(){
    var numero = 0
    var resul = document.getElementById('res')
    resul.innerHTML = ''
    while (numero <=10){
        if (numero % 2 == 0){
            resul.innerHTML += `<mark>${numero}</mark> &rarr;`
        } else {
            resul.innerHTML += ` ${numero} &rarr;`
        }
        numero++
    }
    resul.innerHTML += 'Fim!'
}