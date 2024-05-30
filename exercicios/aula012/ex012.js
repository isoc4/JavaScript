var hagora = new Date()
var h = hagora.getHours()
console.log(`Agora são ${h} horas.`)
if (h < 6) { //Condição aninhada
    console.log('Boa madrugada')
} else if (h <= 12) {
    console.log('Bom dia!')
} else if (h <= 18) {
    console.log('Boa Tarde!')
} else {
    console.log('Boa noite!')
}

/* Como mostrar a hr atual:

   var x = new Date()
   var y = x.getHours()

   x.get(Hours, Seconds, Day...)()
*/