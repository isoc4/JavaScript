const resul = document.getElementById('res')

function limpar(){
    resul.innerHTML = ""
}

function gerarNumero(){
    let numeroAleatorio = Math.floor(Math.random() * 100)
    resul.innerHTML += `<p>pensei no número ${numeroAleatorio}!</p>`
}