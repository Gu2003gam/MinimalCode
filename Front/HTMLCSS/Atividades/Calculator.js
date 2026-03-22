alert('\n1 - Soma (+)\n2 - Subtração (-)\n3 - Multiplicação (*)\n4 - Divisão (/)\n5 - Resto da Divisão(%)')
const operacao = prompt('Selecione o valor correspondente a operação desejada:')

if (!operacao || operacao < 1 || operacao > 5) {
    alert('Erro - Operação Inválida!')
    Calculator()
}

else if (operacao == 1) {
    const n1 = parseFloat(prompt('Digite o primeiro número:'));
    const n2 = parseFloat(prompt('Digite o segundo número:'));
    let resultado = n1;
    resultado += n2;
    alert(`Resultado: ${resultado}`);
}

else if (operacao == 2) {
    const n1 = parseFloat(prompt('Digite o primeiro número:'));
    const n2 = parseFloat(prompt('Digite o segundo número:'));
    let resultado = n1;
    resultado -= n2;   
    alert(`Resultado: ${resultado}`);
}

else if (operacao == 3) {
    const n1 = parseFloat(prompt('Digite o primeiro número:'));
    const n2 = parseFloat(prompt('Digite o segundo número:'));
    let resultado = n1;
    resultado *= n2;
    alert(`Resultado: ${resultado}`);
}

else if (operacao == 4) {
    const n1 = parseFloat(prompt('Digite o primeiro número:'));
    const n2 = parseFloat(prompt('Digite o segundo número:'));
    let resultado = n1;
    resultado /= n2;
    alert(`Resultado: ${resultado}`);
}

else if (operacao == 5) {
    const n1 = parseFloat(prompt('Digite o primeiro número:'));
    const n2 = parseFloat(prompt('Digite o segundo número:'));
    let resultado = n1;
    resultado %= n2;
    alert(`Resultado: ${resultado}`);
}
