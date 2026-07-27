#Este código calcula o índice de massa corporal de uma pessoa
try:
    altura = float(input('Informe a sua altura em metros: ')) #solicitando a inserção do valor da altura como um número decimal
    peso = float(input('Informe o seu peso em quilogramas: ')) #solicitando a inserção do valor do peso como um número decimal
    imc = peso / altura ** 2 # o cálculo do valor da variável "imc" é realizado a partir da divisão do peso pelo quadrado da altura

    #Testando a variável "imc"

    print(f' O seu imc é de {imc:.2f}') #imprimindo o resultado da variável "imc", limitando-o a duas casa decimais por meio do ":.2f"

    #condicionais exibem mensagens ao comparar o valor da variável "imc" com os seus respectivos intervalos
    if imc <= 18.5:
        print('O seu imc está abaixo do índice saudável.')
    elif imc >= 18.5 and imc <= 24.9:
        print('O seu imc está dentro dos parâmetros considerados normais pela OMC.')
    elif imc >= 25.0 and imc <= 29.9:
        print('Você está acima do peso.')
    elif imc >= 30.0:
        print('Você está muito acima do peso saudável.') #O bloco "else" fo removido da condicional devido a sua redundância ao lidar com valores que já foram abordados pelos intervalos
except ValueError:
    print('O valor inserido não é um número decimal.') #Exceção lança um erro ao obter um resultado inesperado
except ZeroDivisionError:
    print('Zero não é um valor válido.') #Exceção lança um erro se o valor digitado durante a divisão for especificamente zero