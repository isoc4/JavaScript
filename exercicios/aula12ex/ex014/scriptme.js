function carregar(){
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var band = window.document.getElementById('b')
    var somb = window.document.getElementById('s')
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} horas`

    if (hora >= 0 && hora < 4) {
        img.src = 'imagem/madrugada.jpg'
        band.style.background = '#1D1D1F'
        somb.style.boxShadow = ' 4px 4px 8px #000000'
    } else if (hora >= 4 && hora < 5) {
        img.src = 'imagem/madrugadamanha.jpg'
        band.style.background = '#BA6769'
        somb.style.boxShadow = ' 4px 4px 8px #774343'
    } else if (hora >= 5 && hora < 12) {
        img.src = 'imagem/manha.jpg'
        band.style.background = '#A8A92B'
        somb.style.boxShadow = ' 4px 4px 8px #75751e'
    } else if (hora >=12 && hora < 19){
        img.src = 'imagem/tarde.jpg'
        band.style.background = '#7B90A0'
        somb.style.boxShadow = ' 4px 4px 8px #647582'
    } else {
        img.src = 'imagem/noite.jpg'
        band.style.background = '#030406E9'
        somb.style.boxShadow = ' 4px 4px 8px #000000'
    }
}