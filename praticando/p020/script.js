var resul = document.getElementById('res')

function contar(){
    var numero = 0

    for (var contar = numero; contar <= 10; contar++){
        resul.innerHTML += `${contar} -> `
    }

    resul.innerHTML += 'FIM!'
}

var limpar = () => resul.innerHTML = ''