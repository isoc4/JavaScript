function calcularFatorial(){
    let numero = document.getElementById('inumero')
    let resul = document.getElementById('res')
    resul.innerHTML = ''

    if (numero.value.length == 0){
        alert('[ERRO] Digite um número.')
    } else if (Number(numero.value) >= 1 && Number(numero.value) <= 21){
        let contador = Number(numero.value)
        let fatorial = 1

        /*
            enquanto(o contador(que vai ser o número colocado na let numero) for maior que 1){
                resul.noHTML adicionar(+=) `${contador} X `
                fatorial = ele mesmo x o contador
                contador - 1
            }
        */
        while(contador > 1){
            resul.innerHTML += `${contador} X `
            fatorial *=
            contador--
        }

        resul.innerHTML += `1 = ${fatorial.toLocaleString('PT-BR')}`//toLocaleString('PT-BR') define o numero em mil/milhões...
    } else {
        alert('[ERRO] Digite um número entre 1 e 21.')
    }
}