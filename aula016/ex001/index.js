function started(){
    var começo = Number(document.getElementById('start').value)
    var fim = Number(document.getElementById('end').value)
    var passo = Number(document.getElementById('step').value)
    var result = document.getElementById('res')
    result.innerText = `Contagem:`
    if (começo == 0 || fim == 0){
        window.alert('Não foi possível realizar a contagem, coloque um valor nos campos indicados!')
    } else {
        if (passo == 0){
            window.alert('O passo vai ser considerado 1!')
            passo = 1
        }
        if (começo < fim) {
            do {
                result.innerText += ` ${começo} \u{1F449}`
                começo += passo
            } while (começo <= fim)
        } else {
            do {
                result.innerText += ` ${começo} \u{1F449}`
                começo -= passo
            } while (começo >= fim)
        } 
        result.innerText += `\u{1F3C1}`
    }
}
