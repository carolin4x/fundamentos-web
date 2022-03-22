/* var: variavel escopo global
let: variavel escopo local
const: constante escopo global */

//por Tag: getElementsByTagName(); por Id: getElementsById(); por Nome: getElementsByName;
//por Classe: getElementsByClassName(); por Seletor: querySelector();

let nome = window.document.getElementById('nome') 
let email = document.querySelector('#email')
let assunto= document.querySelector('#assunto')
let nomeOk = false
let emailOk = false
let assuntoOk = false
let mapa = document.querySelector('#mapa')

nome.style.width = '100%'
email.style.width = '100%'
assunto.style.width = '100%'

//sempre utilzar funções com nomes
function validaNome () { 
    let txtNome = document.querySelector('#txtNome')
    if (nome.value.length < 3) { 
       txtNome.innerHTML = 'Nome inválido ):'
       txtNome.style.color = "red"
    } else { 
        txtNome.innerHTML = 'Nome válido :D'
        txtNome.style.color = 'darkgreen'
        nomeOk = true
    }
}


function validaEmail () { 
    let txtEmail = document.querySelector('#txtEmail')
    if(email.value.indexOf('@') == -1 || email.value.indexOf('.') == -1) { //indexOf mostra pra mim um valor específico que vai ser o que eu colocar dentro do ('AQUI A COISA')
        txtEmail.innerHTML = 'Email inválido ):' 
        txtEmail.style.color = "red"
    } else { 
        txtEmail.innerHTML = 'Email válido :D'
        txtEmail.style.color = 'darkgreen'
        emailOk = true
    }
}

function validaAssunto () { 
    let txtAssunto = document.querySelector('#txtAssunto')
    if(assunto.value.length >= 100) { 
        txtAssunto.innerHTML = 'Texto muito grande ): Digite no máximo 100 caracteres, ok.'
        txtAssunto.style.color = 'red'
        txtAssunto.style.display = 'block'

    } else { 
        txtAssunto.style.display = 'none'
        assuntoOk = true
    }

}
function enviar () { 
    if(nomeOk == true  && emailOk == true && assuntoOk == true) {
        alert ('Seu formulário foi enviado, uhul!') 
    } else { 
        alert ('Ainda tem alguma informação faltando, hein. Preencha tudo, ok.')
    }
}

function mapaZoom () { 
    mapa.style.width = '600px'
    mapa.style.height = '400px'
}

function mapaNormal () { 
    mapa.style.width = '400px'
    mapa.style.height = '250px'
}