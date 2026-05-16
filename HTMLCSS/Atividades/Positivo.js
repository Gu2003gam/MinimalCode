const numero1 = parseFloat(prompt('Digite o primeiro número:'))
const numero2 = parseFloat(prompt('Digite o segundo número:'))

if (numero1 > 0 && numero2 > 0) {
    alert('Ambos os números são positivos.')
}

if (numero1 > 0 || numero2 > 0) {
    alert('Pelo menos um dos números é positivo.')
}

if (!(numero1 > 0) && !(numero2 > 0)) {
    alert('Ambos os números são negativos ou equivalentes a zero.')
}