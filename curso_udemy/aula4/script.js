let nome = prompt('informe o seu nome:')






document.body.innerHTML += `o seu nome é: ${nome} <br />`
document.body.innerHTML += `o seu nome tem ${nome.length} letras <br />`
document.body.innerHTML += `a segunda letra do seu nome é: ${nome[1]} <br />`
document.body.innerHTML += `as ultimas 3 letras do seu nome sao: ${nome.slice(-3)} <br />`
//as palavras do seu nome sao
document.body.innerHTML += `seu nome em letras maiusculas: ${nome.toUpperCase()} <br />` 
document.body.innerHTML += `seu nome em letras maiusculas: ${nome.toLowerCase()}`