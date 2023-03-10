const formulario = document.querySelector('#formulario')

formulario.addEventListener('submit', function(evento){
    evento.preventDefault()
    const form_peso = evento.target.querySelector('#peso')
    const form_altura = evento.target.querySelector('#altura')

    const peso = Number(form_peso.value)
    const altura = Number(form_altura.value)

    if (!peso){
        setResultado('peso invalido!', false )
        return
    }

    if(!altura){
        setResultado('altura invalida!', false)
        return
    }


    console.log('cheguei aqui!')
})

function ciraP(){
    const p = document.createElement('p')
    return p
}

function setResultado(msg, isValid){
    const resultado = document.querySelector('.resultado')
    resultado.innerHTML = ''
    const p = ciraP()
    p.innerHTML = msg
    resultado.appendChild(p)
}

