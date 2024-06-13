const resul = document.getElementById('res')
let numeroPensado = Math.floor(Math.random() * 100)

function adivinhar(){
    var numeroDigitado = prompt('Digite um número entre 1 e 100.')

    if (numeroDigitado == numeroPensado){
        resul.innerHTML += `<p>Acertou!! o número era ${numeroDigitado}</p>`
    } else if (numeroDigitado < numeroPensado){
        resul.innerHTML += `<p>O número ${numeroDigitado} é MENOR que o número que pensei.</p>`
    } else if (numeroDigitado > numeroPensado){
        resul.innerHTML += `<p>O número ${numeroDigitado} é MAIOR que o número que pensei.</p>`
    } else {
        resul.innerHTML += `[ERRO] Digite um número.`
    }
}