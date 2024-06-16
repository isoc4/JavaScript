//Sintaxe de uma arrow function:

/*
    () => {
        return x;
    }
*/

//OU

/*
    () => x
*/

//Exemplo:

var calcular = (num1, num2) => num1 + num2

console.log(calcular(10, 5))

//OU

var calcularDois = (valor1, valor2) => {

    var operacao = 0

    if (valor1 > valor2){
        operacao = valor1 / valor2
    } else {
        operacao = valor1 * valor2
    }

    return operacao
}

console.log(calcularDois(5, 10))

//Arrow Function só que sem parametro:

var semParametro = () => console.log('Eu não tenho parametro, e sou uma função de seta')

console.log(semParametro())