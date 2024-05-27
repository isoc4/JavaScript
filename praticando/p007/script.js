function contar(){
    for (var numero = 0; numero <= 10; numero++){
        var resul = document.getElementById('res')
        resul.innerHTML += ` ${numero} &rArr;`
    }
    resul.innerHTML += 'Fim!'
}