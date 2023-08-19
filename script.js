const tela = document.querySelector('.tela');
const telaResul = document.querySelector('#telaResul');
const num1 = document.querySelector('#num1');
const num2 = document.querySelector('#num2');
const operador = document.querySelector('#operador');
const btnResul = document.querySelector('#btn-resultado');

btnResul.addEventListener('click', function(event){

    const num1Value = num1.value;
    const num2Value = num2.value;
    const operadorValue = operador.value;

    if (operadorValue === '+') {
        const soma = parseInt(num1.value) + parseInt(num2.value);
        telaResul.textContent = soma;
        telaResul.classList = 'tela';

        setTimeout(() => {
            telaResul.textContent = '';
            num1.value = '';
            num2.value = '';
            operador.value = '';
        }, 30000)
        return;

    }else if (operadorValue === '-') {
        const subtra = parseInt(num1.value) - parseInt(num2.value);
        telaResul.textContent = subtra;
        telaResul.classList = 'tela';

        setTimeout(() => {
            telaResul.textContent = '';
            num1.value = '';
            num2.value = '';
            operador.value = '';
        }, 30000)
        return;

    }else if (operadorValue === '*') {
        const mult = parseInt(num1.value) * parseInt(num2.value);
        telaResul.textContent = mult;
        telaResul.classList = 'tela';

        setTimeout(() => {
            telaResul.textContent = '';
            num1.value = '';
            num2.value = '';
            operador.value = '';
        }, 30000)
        return;

    }else if (operadorValue === '/') {
        const div = parseInt(num1.value) / parseInt(num2.value);
        telaResul.textContent = div;
        telaResul.classList = 'tela';

        setTimeout(() => {
            telaResul.textContent = '';
            num1.value = '';
            num2.value = '';
            operador.value = '';
        }, 30000)
        return;

    }else if (operadorValue === '%') {
        const porc = parseInt(num1.value) % parseInt(num2.value);
        telaResul.textContent = porc;

        setTimeout(() => {
            telaResul.textContent = '';
            num1.value = '';
            num2.value = '';
            operador.value = '';
        }, 30000)
        return;

    }else {
        alert('Digite um número valido ou um operador!');
    }
});
