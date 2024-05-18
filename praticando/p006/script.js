function calidade(){
    var nasceu = Number(window.prompt("Em que ano você nasceu?"))
    var ano = new Date()
    var anoatual = ano.getFullYear()
    var idade = anoatual - nasceu
    var futuro = idade + 30
    var resul = document.getElementById("res")

    resul.innerHTML = `<p>O ano que você nasceu foi ${nasceu} então você vai fazer ou fez ${idade} anos em ${anoatual}.</p>`
    resul.innerHTML += `<p>E no futuro, daqui 30 anos você irá ter ${futuro} anos!</p>`
}