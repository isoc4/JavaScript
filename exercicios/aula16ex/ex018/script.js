var numero = document.getElementById('inumero')
var lista = document.getElementById('ilnadicionados')
var resul = document.getElementById('res')
var valores = []
resul.innerHTML = ""

function inLista(num, list){
    if (list.indexOf(Number(num)) != -1){
        return true
    } else {
        return false
    }
}

function isNumero(num){
    if (Number(num) >= 1 && Number(num) <= 100){
        return true
    } else {
        return false
    }
}

//Explicação dessas duas funções acima no documento "codigo.txt" dentro dessa mesma pasta.

function guardarNumero(){
    if (isNumero(numero.value) && !inLista(numero.value, valores)){
        valores.push(Number(numero.value))

        var criarOption = document.createElement('option')
        criarOption.innerText = `O número ${Number(numero.value)} foi adicionado.`

        lista.appendChild(criarOption)
        resul.innerHTML = ""
    } else {
        alert('Esse número já esta na lista ou não possui valor válido.')
    }
}

function resultado(){
    if (valores.length == 0){
        alert('Nenhum valor foi adicionado.')
    } else {
        var numeroMaior = valores[0]
        var numeroMenor = valores[0]

        for (var indice in valores){
            if (valores[indice] > numeroMaior){
                numeroMaior = valores[indice]
            }
            if (valores[indice] < numeroMenor){
                numeroMenor = valores[indice]
            }
        }

        var somarValores = 0
        var mediaValores = 0

        for (var indice in valores){
            somarValores += valores[indice]
        }

        mediaValores = somarValores / valores.length

        resul.innerHTML += `<p>Temos ${valores.length} números cadastrados.</p>`
        resul.innerHTML += `<p>O maior valor cadastrado foi ${numeroMaior}</p>`
        resul.innerHTML += `<p>O menor valor cadastrado foi ${numeroMenor}</p>`
        resul.innerHTML += `<p>A soma de todos os valores é ${somarValores}</p>`
        resul.innerHTML += `<p>A media dos valores é de ${mediaValores}</p>`
    }
}