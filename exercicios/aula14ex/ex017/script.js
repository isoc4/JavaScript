function exibirTabuada(){
    var numeroTabuada = document.getElementById('inumt')
    var tabuada = document.getElementById('itabuada')

    if (numeroTabuada.value.length == 0){
        alert('[ERRO] Digite um número.')
    } else {
        var n = Number(numeroTabuada.value)
        tabuada.innerHTML = ''

        for (var multiplicador = 1; multiplicador <= 10; multiplicador++){
            var criarOption = document.createElement('option')
            criarOption.text = `${n} \u{2716} \u{FE0F} ${multiplicador} = ${n * multiplicador}`
            tabuada.appendChild(criarOption)
        }
    }
}

function exibirDivisao(){
    var numeroDivisao = document.getElementById('inumd')
    var divisao = document.getElementById('idivisao')

    if (numeroDivisao.value.length == 0){
        alert('[ERRO] Digite um número.')
    } else {
        var n = Number(numeroDivisao.value)
        divisao.innerHTML = ''
        
        for (var divisor = 1; divisor <= 1000; divisor++){
            var criarOption = document.createElement('option')
            criarOption.text = `${n} \u{2797} ${divisor} = ${n / divisor}`
            divisao.appendChild(criarOption)
        }
    }
}