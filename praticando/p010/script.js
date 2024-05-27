function contagemRegressiva(){
    for (var numero = 10; numero >= 0; numero -= 1){
        var resul = document.getElementById('res')
        resul.innerHTML += ` ${numero} &rArr;`
    }
    resul.innerHTML += 'Fim!'
}