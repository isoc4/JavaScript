function fatorial(){
    var numero = document.getElementById('inumero')
    var resul = document.getElementById('res')

    if (numero.value.length == 0){
        alert('[ERRO] Digite um número.')
    } else {
        var n = Number(numero.value)

        for (var fatorial = 1; fatorial <= n; fatorial++){
            resul.innerHTML += `${fatorial} X ${fatorial - 1}`
        }
    }
}