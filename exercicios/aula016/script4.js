function fatorial(x){
    var fat = 1
    for (var contador = x; contador > 1; contador--){
        fat *= contador
    }
    return fat
}

console.log(fatorial(5))

// 5! = 5 * 4 * 2 * 1 = 120