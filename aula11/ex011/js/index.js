function verificar(){
    var nacionalidade = document.querySelector('#nacionality')
    var response = document.querySelector('#res')
    response.innerHTML = `<p>O país que você mora é ${nacionalidade.value}, certo?</p>`
    if (String(nacionalidade.value).toLowerCase() == 'brasil') {
        response.innerHTML += `<p>Como vai você, querido conterrâneo!?</p>`
    } else {
        response.innerHTML += `<p>Se estiver correto, você é estrangeiro!!!</p>`
    }
}