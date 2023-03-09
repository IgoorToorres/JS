const pessoa1 = {
    nome: 'igor',
    sobrenome: 'torres',
    idade: 19,

    fala(){
        console.log(`ola! meu nome é ${this.nome} e tenho ${this.idade} anos`)
    },

    addIdade(){
        this.idade++
    }
}

