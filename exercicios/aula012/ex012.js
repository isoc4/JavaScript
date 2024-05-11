var hagora = new Date()
var h = hagora.getHours()
console.log(`Agora são ${h} horas.`)
if (h < 6) {
    console.log('Boa madrugada')
} else if (h <= 12) {
    console.log('Bom dia!')
} else if (h <= 18) {
    console.log('Boa Tarde!')
} else {
    console.log('Boa noite!')
}

/* Para Mostrar a hr atual:

   var x = new Date()
   var y = x.getHours()

   x.get(Hours, Seconds, Day...)()
*/