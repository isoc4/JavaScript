function contar(){
    var numeroInicial = document.getElementById('inumi')
    var numeroFinal = document.getElementById('inumf')
    var ordemContagem = document.getElementById('iordem')
    var resul = document.getElementById('res')

    if (numeroInicial.value.length == 0 || numeroFinal.value.length == 0 || ordemContagem.value.length == 0){
        alert('[ERRO] verifique os dados inseridos.')
    } else {
        var nI = Number(numeroInicial.value)
        var nF = Number(numeroFinal.value)
        var oC = Number(ordemContagem.value)

        if (oC == 0){
            alert('[INVÁLIDO] alterando a ordem de contagem para 1.')
            oC = 1
        }

        if (nI <= nF){
            for (var contar = nI; contar <= nF; contar += oC){
                resul.innerHTML += `${contar} \u{1F449} `
            }
        } else if (nI >= nF){
            for (var contar = nI; contar >= nF; contar -= oC){
                resul.innerHTML += `${contar} \u{1F449} `
            }
        }
        resul.innerHTML += `\u{1F3C1}`
    }
}