//*1*

var num = [5, 8, 9, 4, 6]
console.log(num)

//*2*

//Para adicionar um valor.
num.push(7) //Ou num[5] = 7
console.log(num)

//*3*

//Para mostrar o comprimento da array/vetor.
console.log(`Essa array tem ${num.length} elementos de comprimento`)

//*4*

//Para ordenar em ordem crescente ou em ordem alfabetica.
num.sort()
console.log(num)

//*5*

//Para mostrar o valor dentro do elemento do indice desejado.
console.log(`No índice 3 (de 0 a ...) tem o elemento com o valor ${num[3]}`)

//*6*

var paises = ["Brasil", "Portugal", "Japão", "Inglaterra", "Estados Unidos"]

//Mostar indice do valor:

console.log(paises.indexOf("Inglaterra"))

//Oque acontece quando não tem o valor pedido:

var indice = paises.indexOf("Argentina")
console.log(`O codigo paises.indexOf("Argentina") vai mostrar ${indice} pois o js não encontrou esse valor na array.`)

//E para mostrar que não tem o valor de uma forma mais ""humana"":

if (indice == -1){
    console.log('Não encontramos esse valor.')
}

//Aperte F8 para ver o resultado na saída do código. 