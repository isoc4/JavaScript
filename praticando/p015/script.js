function carregar(){
    var data = new Date()
    var diaAtual = data.getDay()
    
    var titulo = document.getElementById('dia')
    var imagem = document.getElementById('imagemdia')
    var msg = document.getElementById('frase')
    var backgroundColor = document.getElementById('bc')

    /*
    0 Domingo
    1 Segunda
    2 Terça
    3 Quarta
    4 Quinta
    5 Sexta
    6 Sábado
    */

    switch (diaAtual){
        case 0:
            titulo.innerHTML = 'Hoje é Domingo!'
            imagem.src = 'imagem/domingo.jpg'
            msg.innerHTML = '"Acredite em si mesmo e todo o resto virá." – Walt Disney'
            backgroundColor.style.background = '#12210A'
            break
        case 1:
            titulo.innerHTML = 'Hoje é Segunda!'
            imagem.src = 'imagem/segunda.jpg'
            msg.innerHTML = '"A única maneira de fazer um excelente trabalho é amar o que você faz." – Steve Jobs'
            backgroundColor.style.background = '#FFE891'
            break
        case 2:
            titulo.innerHTML = 'Hoje é Terça!'
            imagem.src = 'imagem/terca.jpg'
            msg.innerHTML = '"A imaginação é mais importante que o conhecimento." – Albert Einstein'
            backgroundColor.style.background = '#F13928'
            break
        case 3:
            titulo.innerHTML = 'Hoje é Quarta!'
            imagem.src = 'imagem/quarta.jpg'
            msg.innerHTML = '"A imaginação é mais importante que o conhecimento." – Albert Einstein'
            backgroundColor.style.background = '#94CBED'
            break
        case 4:
            titulo.innerHTML = 'Hoje é Quinta!'
            imagem.src = 'imagem/quinta.jpg'
            msg.innerHTML = '"Trabalhar nos seus planos e alcançá-los torna a semana gratificante. Aproveite a sua semana!"'
            backgroundColor.style.background = '#1B1D28'
            break
        case 5:
            titulo.innerHTML = 'Hoje é Sexta!'
            imagem.src = 'imagem/sexta.jpg'
            msg.innerHTML = '"Apenas um pequeno pensamento positivo pela manhã pode mudar o dia todo."'
            backgroundColor.style.background = '#C07550'
            break
        case 6:
            titulo.innerHTML = 'Hoje é Sábado!'
            imagem.src = 'imagem/sabado.jpg'
            msg.innerHTML = '"Comece o dia com um bom café, vista o seu melhor sorriso e se prepare para mais um sábado de bastante felicidade."'
            backgroundColor.style.background = '#6B6E48'
            break
        default:
            alert('[ERRO] Algo deu errado em seu sistema.')
            break
    }
}