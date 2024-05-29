function exibirTabuada(){
    var numero = document.getElementById('inumero')
    var resul = document.getElementById('res')

    res.innerHTML = ''

    if (numero.value.length == 0){
        alert('[ERRO] Digite um número.')
    } else {
        var n = Number(numero.value)

        for (var multiplicador = 1; multiplicador <=10; multiplicador++){
            resul.innerHTML += `${n} \u{2716} \u{FE0F} ${multiplicador} = <strong>${n * multiplicador}</strong><br>`
        }
    }
}