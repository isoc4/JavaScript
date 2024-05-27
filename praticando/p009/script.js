function contar(){
    var resul = document.getElementById('res')
    for (var numero = 0; numero <=10; numero += 2){
        resul.innerHTML += ` ${numero} &rarr;`
    }
    resul.innerHTML += 'Fim!'
}