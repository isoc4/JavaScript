function calcularmedia(){
    var nome = window.prompt("Qual é o nome do aluno?")
    var nota1 = Number(window.prompt(`Qual foi a primeira nota de ${nome}`))
    var nota2 = Number(window.prompt(`Qual foi a segunda nota de ${nome}`))
    var media = (nota1 + nota2) / 2
    var resul = document.getElementById("res")

    resul.innerHTML = `<h2>Média final de ${nome}:</h2>`
    resul.innerHTML += `<p>A primeira nota de ${nome} foi ${nota1}</p>`
    resul.innerHTML += `<p>A segunda nota de ${nome} foi ${nota2}</p>`
    resul.innerHTML += `<p>Sendo assim a média do aluno será ${media}</p>`

    var aprovreprov = ''
    if (media < 6){
        aprovreprov = 'O aluno foi REPROVADO'
        resul.innerHTML += `<strong style="background: red;">${aprovreprov}</strong>`
    } else if (media < 10){
        aprovreprov = 'O aluno foi APROVADO'
        resul.innerHTML += `<strong style="background: green;">${aprovreprov}</strong>`
    } else {
        aprovreprov = 'Verifique os dados e tente novamente...'
    }
}