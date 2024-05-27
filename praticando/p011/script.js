function contar(){
    var numeroLimite = document.getElementById('inumerol')
    var resul = document.getElementById('res')

    resul.innerHTML = ''

    if (numeroLimite.value.length == 0){
        alert('[ERRO] Digite um número.')
    } else {
        var nL = Number(numeroLimite.value)

        for (var nI = 0; nI <= nL; nI++){
            resul.innerHTML += ` ${nI} &rArr;`
        }
        resul.innerHTML += 'FIM!'
    }
}