function contar(){
    var numeroInicial = document.getElementById('inumeroi')
    var numeroFinal = document.getElementById('inumerof')
    var resul = document.getElementById('res')

    var nI = Number(numeroInicial.value)
    var nF = Number(numeroFinal.value)

    resul.innerHTML = ''

    if (numeroInicial.value.length == 0 || numeroFinal.value.length == 0){
        alert('[ERRO] Digite um número.')
    } else if (nI == nF){
        alert('[ERRO] Digite números diferentes.')
    } else if (nI <= nF){
        for (var contar = nI; contar <= nF; contar++){
            resul.innerHTML += `${contar} \u{1F449} `
        }
    } else if (nI >= nF){
        for (var contar = nI; contar >= nF; contar -= 1){
            resul.innerHTML += `${contar} \u{1F449} `
        }
    } else {
        alert('[ERRO] Algo deu errado.')
    }
    resul.innerHTML += `\u{1F3C1}`
}