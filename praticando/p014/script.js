function fatorial(){
    var numero = document.getElementById('inumero')
    var resul = document.getElementById('res')

    if (numero.value.length == 0){
        alert('[ERRO] Digite um número.')
    } else {
        var n = Number(numero.value)

        for (var contador = 1; contador <= n; contador--){
            resul.innerHTML += `${n} X ${contador} = ${n * contador}`
        }
    }
}