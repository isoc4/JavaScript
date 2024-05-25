function contar(){
    var numeroInicial = document.getElementById('inumi')
    var numeroFinal = document.getElementById('inumf')
    var ordemContagem = document.getElementById('iordem')
    var resul = document.getElementById('res')

    if (numeroInicial.value.length == 0 || numeroFinal.value.length == 0 || ordemContagem.value.length == 0){
        window.alert('[ERRO] Tente novamente')
    } else{
        resul.innerHTML = 'Contando...<br>'
        var nI = Number(numeroInicial.value)
        var nF = Number(numeroFinal.value)
        var oC = Number(ordemContagem.value)

        if (oC <= 0){
            alert('OPS: Ordem de contagem inválida, Mudando o ordem de contagem para 1...')
            var oC = 1
        }

        if (nI < nF){
            //Contagem crescente
            for (var contar = nI; contar <= nF; contar += oC){
                resul.innerHTML += `<strong>${contar}</strong>\u{27A1} \u{FE0F}`
            }
        } else{
            //Contagem decrescente
            for(var contar = nI; contar >= nF; contar -= oC){
                resul.innerHTML += `<strong>${contar}</strong>\u{27A1} \u{FE0F}`
            }
        }
        resul.innerHTML += `\u{1F3C1}`
    }
}