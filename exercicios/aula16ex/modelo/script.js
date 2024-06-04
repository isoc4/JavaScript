var numero = document.getElementById('inumero')
var n = Number(numero.value)
var lista = document.getElementById('ilnadicionados')
var resul = document.getElementById('res')

function guardarNumero(){
    var criarOption = document.createElement('option')
    criarOption.innerText = `O número ${n} foi adicionado.`

    if (numero.value.length == 0){
        alert('Digite um número!!!')
    } else if (n >= 1 || n <= 100){
        alert('CERTO')
    } else {
        alert('ERRO')
    }
}