function verificar(){
    var letra = document.getElementById("iletra")
    var resul = document.getElementById("res")

    if (letra.value.length == 0){
        alert('[ERRO] digite uma letra')
    } else {
        var l = String(letra.value)

        if (l == "a" || l == "e" || l == "i" || l == "o" || l == "u"){
            resul.innerHTML = `A letra <strong>${l}</strong> é uma vogal! \u{2714} \u{FE0F}`
        } else {
            resul.innerHTML = `A letra <strong>${l}</strong> é uma consoante! \u{2714} \u{FE0F}`
        }
    }
}