const saida = document.getElementById('saida')

function limpar(){ //Limpa a saída
    saida.value = ''
}

function addSaida(valor){ //adiciona os valores na saída
    saida.value += valor
}

function calcular(){
    if (saida.value.length == 0){
        alert('[ERRO]')
    } else {
        saida.value = eval(saida.value)
    }
    /*
        Quando clicado no botão que executa a function "calcular",
        o bloco de código em else executa o argumento que estiver no valor da saída.
    */
}