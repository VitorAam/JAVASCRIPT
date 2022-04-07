let numero = document.querySelector('#adicionado').value;
var add_local = document.querySelector('#table');

function added(){
    if (numero >= 1 && numero <= 100){
        add_local.innerHTML = `Valor ${numero} adicionado.`;
    } else {
        window.alert(`O número é ${numero} esse`);
    }
}