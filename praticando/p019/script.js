function verificarEstacao(){
    const resul = document.getElementById('res')
    let mes = prompt('Digite um mês.').toUpperCase()

    resul.innerHTML = ""

    switch (mes){
        case 'JANEIRO': case 'FEVEREIRO': case 'MARÇO':
            resul.innerHTML += `<p>${mes} se encontra no Verão.</p>`
            break
        case 'ABRIL': case 'MAIO': case 'JUNHO':
            resul.innerHTML += `<p>${mes} se encontra no Inverno.</p>`
            break
        case 'JULHO': case 'AGOSTO': case 'SETEMBRO':
            resul.innerHTML += `<p>${mes} se encontra no Outono.</p>`
            break
        case 'OUTUBRO': case 'NOVEMBRO': case 'DEZEMBRO':
            resul.innerHTML += `<p>${mes} se encontra na Primavera.</p>`
            break
        default:
            resul.innerHTML += `[ERRO] Verifique os dados inseridos.`
            break
    }
}