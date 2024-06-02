//Meu codigo:

function somando(x, y){
    if (x == undefined || y == undefined){
        return '[ERRO] Digite o segundo numero.'
    } else{
        return x + y
    }
}

console.log(somando(10, 6))

//Codigo do guanabara:

function somandoo(x=0, y=0){
    return x + y
}

console.log(somandoo(10, 6))