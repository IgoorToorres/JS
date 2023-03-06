let num = Number(prompt('informe um numero: '))
let numero_titulo = document.getElementById('numero_titulo')
numero_titulo.innerHTML = num
let texto = document.getElementById('texto')

texto.innerHTML = ''
texto.innerHTML += `<p>Raiz quadrada do numero: ${num ** 0.5} </p>`
texto.innerHTML += `<p>É um numero inteiro: ${Number.isInteger(num)} </p>`
texto.innerHTML += `<p>É NAN: ${Number.isNaN(num)} </p>`
texto.innerHTML += `<p>Arredondando o numero para baixo: ${Math.floor(num)} </p>`
texto.innerHTML += `<p>Arredondando o numero para cima: ${Math.ceil(num)} </p>`
texto.innerHTML += `<p>Com duas casas decimais: ${num.toFixed(2)} </p>`

