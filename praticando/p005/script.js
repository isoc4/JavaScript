function verificar(){
    var sistemadh = new Date()
    var d = sistemadh.getDate()
    var m = sistemadh.getMonth()
    var a = sistemadh.getFullYear()
    var ds = sistemadh.getDay()
    var h = sistemadh.getHours()
    var mn = sistemadh.getMinutes()
    var s = sistemadh.getSeconds()
    var resul = document.getElementById("res")

    resul.innerHTML = `<p>Dia: ${d}</p>`
    resul.innerHTML += `<p>Mês: ${m}</p>`
    resul.innerHTML += `<p>Ano: ${a}</p>`
    resul.innerHTML += `<p>Dia da Semana: ${ds}</p>`
    resul.innerHTML += `<p>HMS: ${h}:${mn}:${s}</p>`
}