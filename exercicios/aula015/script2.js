var frutas = ["Uva", "Banana", "Laranja", "Abacaxi", "Tangerina"]

/* Forma errada de mostrar a array/vetor sem os "[]"
console.log(frutas[0])
console.log(frutas[1])
console.log(frutas[2])
console.log(frutas[3])
console.log(frutas[4])
*/

//Forma correta:

for (var indice = 0; indice < frutas.length; indice++){
    console.log(frutas[indice])
}

//Melhor forma:

var paises = ["Brasil", "Portugal", "Japão", "Inglaterra", "Estados Unidos"]

for (var indice in paises){
    console.log(paises[indice])
}

//Mostar indice do valor:

console.log(paises.indexOf("Brasil"))

//Quando não tem o valor pedido:

console.log(`O codigo paises.indexOf("Argentina") vai mostrar ${paises.indexOf("Argentina")} pois o js não encontrou esse valor na array.`)