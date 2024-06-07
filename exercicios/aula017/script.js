var amigo = {
    nome: 'Isis', sexo: 'F', peso: 47,

    engordar(p=0){
        console.log('Engordou')
        this.peso += p
    }
}

amigo.engordar(1)
console.log(`${amigo.nome} pesa ${amigo.peso}Kg`)