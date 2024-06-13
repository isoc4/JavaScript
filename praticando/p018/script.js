const resul = document.getElementById('res')

function fazerCalculo(){
    var numeroUm = Number(prompt('Digite um número: '))
    var numeroDois = Number(prompt('Digite outro número: '))
    var escolherCalculo = Number(prompt('Escolha o calculo: \n[1]Somar \n[2]Subtrair \n[3]Multiplicar \n[4]Dividir'))

    resul.innerHTML = '<h2>Calculando. . .'
    switch (escolherCalculo){
        case 1:
            resul.innerHTML += `<p>${numeroUm} + ${numeroDois} = ${numeroUm + numeroDois}</p>`
            break
        case 2:
            resul.innerHTML += `<p>${numeroUm} - ${numeroDois} = ${numeroUm - numeroDois}</p>`
            break
        case 3:
            resul.innerHTML += `<p>${numeroUm} x ${numeroDois} = ${numeroUm * numeroDois}</p>`
            break
        case 4:
            resul.innerHTML += `<p>${numeroUm} / ${numeroDois} = ${numeroUm / numeroDois}</p>`
            break
        default:
            resul.innerHTML += `<p>Escolha uma opção!!!</p>`
            break
    }
}