function criaPessoa(nome, sexo, idade) {
    return {
        nome: nome,
        sexo: sexo,
        idade: idade
    };
}

const pessoa1 = criaPessoa('igor', 'm', 19)
const pessoa2 = criaPessoa('julia', 'f', 19)


console.log(pessoa1.nome, pessoa2.nome)
