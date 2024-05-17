function verificar(){
    var num1 = Number(window.prompt("Digite um número"))
    var num2 = Number(window.prompt("Digite outro número"))
    var resul = document.getElementById("res")

    if (num1 > num2){
        resul.innerHTML = `Entre o número ${num1} e o ${num2}, o ${num1} é o maior!`
    } else if (num1 < num2){
        resul.innerHTML = `Entre o número ${num1} e o ${num2}, o ${num2} é o maior!`
    } else {
        resul.innerHTML = `Entre o número ${num1} e o ${num2}, a conclusão é que os dois são iguais!`
    }
}