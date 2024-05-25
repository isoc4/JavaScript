var a = new Date()
var ds = a.getDay()

/* 
    0 Domingo
    1 Segunda
    2 Terça
    3 Quarta
    4 Quinta
    5 Sexta
    6 Sábado
*/

console.log(`Hoje é o dia ${ds} da semana!`)

switch(ds) {//Condição Múltipa
    case 0:
        console.log('Ou Domingo')
        break
    case 1:
        console.log('Ou Segunda')
        break
    case 2:
        console.log('Ou Terça')
        break
    case 3:
        console.log('Ou Quarta')
        break
    case 4:
        console.log('Ou Quinta')
        break
    case 5:
        console.log('Ou Sexta')
        break
    case 6:
        console.log('Ou Sábado')
        break
    default:
        console.log('[ERRO]')
        break
}