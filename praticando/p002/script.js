function verificar(){
    var num = window.prompt("Digite um número:")
    var resul = window.document.getElementById("res")

    if (num % 2 == 0){
        resul.innerHTML = `O número ${num} é par!`
    } else {
        resul.innerHTML = `O número ${num} é ímpar!`
    }
}