function verificar(){
    var letra = document.getElementById("iletra")
    var resul = document.getElementById("res")

    if (letra === 'a' || letra === 'e' || letra === 'i' || letra === 'o' || letra === 'u'){
        resul.innerHTML = `<p>A letra ${letra} é uma vogal.</p>`
    } else {
        resul.innerHTML += `<p>A letra ${letra} é uma consoante.</p>`
    }
}