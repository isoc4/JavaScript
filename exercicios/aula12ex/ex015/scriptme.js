function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var forano = document.getElementById("iano")
    var res = document.getElementById("res")

    if (forano.value.length == 0 || Number(forano.value) > ano){

        alert("[ERRO] Verifique os dados que foram inseridos")

    } else {
        var idade = ano - Number(forano.value)
        var forsex = document.getElementsByName("sex")
        var genero = ''
        var img = document.getElementById("imagem")



        if (forsex[0].checked){
            genero = 'homem'
            if (idade >= 0 && idade < 10){
                img.src = 'imagem/crianca-h.jpg'
            } else if (idade >= 10 && idade < 19){
                img.src = 'imagem/jovem-h.jpg'
            } else if (idade >= 19 && idade < 60){
                img.src = 'imagem/adulto-h.jpg'
            } else {
                img.src = 'imagem/velho-h.jpg'
            }
        } else if (forsex[1].checked){
            genero = 'mulher'
            if (idade >= 0 && idade < 10){
                img.src = 'imagem/crianca-m.jpg'
            } else if (idade >= 10 && idade < 19){
                img.src = 'imagem/jovem-m.jpg'
            } else if (idade >= 19 && idade < 60){
                img.src = 'imagem/adulto-m.jpg'
            } else {
                img.src = 'imagem/velho-m.jpg'
            }
        }


        res.innerHTML = `Você é ${genero} e tem ${idade} anos!`
        res.appendChild(img)
    }
}