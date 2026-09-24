//LISTA DE DESAFIOS
//LÓGICA DE PROGRAMAÇÃO
//GUSTAVO DOS SANTOS
#include <stdio.h>
#include <string.h>
#include <stdlib.h>
#include <unistd.h>

int desafio1() {
    //área retângulo
    float base;
    float altura;
    printf("\nDigite a medida da base:\n");
    scanf("%f", &base);
    printf("\nDigite a medida da altura:\n");
    scanf("%f", &altura);
    printf("\nA área do retângulo é igual: %.2f\n", base * altura);
    return 0;
}

int desafio2() {
    //conversor de temperatura
    float celsius;
    printf("\nDigite a temperatura em graus celsius:\n");
    scanf("%f", &celsius);
    printf("\n%.1f graus celsius equivale a %.1f graus fahrenheit.\n", celsius, celsius * 1.8 + 32);
    return 0;
}

int desafio3() {
    //média ponderada de provas
    int nota[3];
    int soma = 0;
    for(int i = 1; i <= 3; i++) {
        printf("\nDigite a %d° nota:\n", i);
        scanf("%d", &nota[i]);
    }
    printf("\nAs notas do aluno são:\n");
    for(int i = 1; i <= 3; i++) {
        printf("\n%d\n", nota[i]);
    }
    for(int i = 1; i <= 3; i++) {
        soma = soma + nota[i];
    }
    printf("\nA média ponderada do aluno é: %1.f\n", (float)soma / 3);
    
    return 0;
}

int desafio4() {
    //calculadora de desconto
    float valor;
    printf("\nDigite o valor do produto:\n");
    scanf("%f", &valor);
    printf("\nAplicando um desconto de 15 porcento sobre o valor de R$%1.f, o valor final do produto será: R$%1.f, uma economia de R$%1.f\n", valor, valor - (valor * 0.15), valor * 0.15);
    return 0;
}

int desafio5() {
    //conversor de moedas
    float reais;
    printf("\nDigite o valor em reais:\n");
    scanf("%f", &reais);
    printf("\nCom base na atual cotação do dólar(1 USD = BRL 5,12), o valor de R$%1.f equivale a U$$%1.f\n", reais, reais / 5.12);
    return 0;
}

int desafio6() {
    //verificação de paridade
    int numero;
    printf("\nDigite um número inteiro:\n");
    scanf("%d", &numero);
    char *status = (numero%2 == 0) ? "é um número par!" : "é um número impar!";
    printf("\n%d %s\n", numero, status);
    return 0;
}

int desafio7() {
    //maior de dois números
    int valor[2];
    int maior = 0;
    for(int i = 1; i < 3; i++) {
        printf("\nDigite o %d° número:\n", i);
        scanf("%d", &valor[i]);
    }
    for(int i = 1; i < 3; i++) {
        if(maior < valor[i]) {
            maior = valor[i];
        }
    }
    printf("\nO maior valor é: %d\n", maior);
    return 0;
}

int desafio8() {
    //reajuste salarial baseado em faixa
    float salario;
    printf("\nDigite o valor do salário:\n");
    scanf("%f", &salario);
    float reajuste = (salario <= 1500) ? salario + (salario * 0.2) : salario + (salario * 0.1);
    printf("\nO salário de R$%1.f foi reajustado para R$%1.f.\n", salario, reajuste);
    return 0;
}

int desafio9() {
    //cálculo de consumo de combustível
    float distancia;
    float litros;
    printf("\nDigite o valor da distância em quilômetros(km):\n");
    scanf("%f", &distancia);
    printf("\nDigite o valor da gasolina consumida em litros(l):\n");
    scanf("%f", &litros);
    printf("\nO seu veículo consome em média um litro a cada %1.fkm.\n", distancia / litros);
    return 0;
}

int desafio10() {
    //classificação de nadadores por idade
    int idade;
    printf("\nDigite a idade do competidor:\n");
    scanf("%d", &idade);
    if(idade > 18) {
        printf("\nSênior\n");
    } else {
        if(idade >= 5 && idade <= 7) {
            printf("\nInfantil A\n");
        } else {
            if(idade >= 8 && idade <= 10) {
                printf("\nInfantil B\n");
            } else {
                if(idade >= 11 && idade <= 13) {
                    printf("\nJuvenil A\n");
                } else {
                    if(idade >= 14 && idade <= 17) {
                        printf("\nJuvenil B\n");
                    } else {
                        printf("Valor inválido!");
                    }
                }
            }
        }
    }
    return 0;
}

int desafio11() {
    //classificador completo de triângulos
    int valor[3];
    int valor1, valor2, valor3;
    int eValido = 0;
    for(int i = 1; i <= 3; i++) {
        printf("\nDigite o %d° valor:\n", i);
        scanf("%d", &valor[i]);
        if(i == 0) {
            valor[i] = valor1;
        } else if(i == 1) {
            valor[i] = valor2;
        } else if(i == 2) {
            valor[i] = valor3;
        }
    }
    printf("\nOs valores digitados foram:\n");
    for(int i = 0; i < 3; i++) {
        printf("\n%d\n", valor[i]);
    }
    if(valor[0] == valor[1] && valor[1] == valor[2]) {
        printf("\nAs medidas informadas correspondem a um triângulo equilátero!\n");
    } else {
        char *tipo = (valor[0] != valor[1] && valor[1] != valor[2]) ? "\nAs medidas informadas correspondem a um triângulo escaleno!\n" : "\nAs medidas informadas correspondem a um triângulo isósceles!\n";
        printf("\n%s\n", tipo);
    }
    return 0;
}

int desafio12() {
    //calculadora multifuncional com menu
    int opcao;
    float valor1, valor2;
    printf(
        "\nDigite uma opção:\n"
        "\n1.Soma\n"
        "\n2.Subtração\n"
        "\n3.Multiplicação\n"
        "\n4.Divisão\n"
    );
    scanf("%d", &opcao);
    switch(opcao) {
        case 1:
        printf("\nDigite o valor1:\n");
        scanf("%f", &valor1);
        printf("\nDigite o valor2:\n");
        scanf("%f", &valor2);
        printf("\nA soma de %1.f e %1.f é igual a %1.f.\n", valor1, valor2, valor1 + valor2);
        break;
        case 2:
        printf("\nDigite o valor1:\n");
        scanf("%f", &valor1);
        printf("\nDigite o valor2:\n");
        scanf("%f", &valor2);
        printf("\nA subtração de %1.f e %1.f é igual a %1.f.\n", valor1, valor2, valor1 - valor2);
        break;
        case 3:
        printf("\nDigite o valor1:\n");
        scanf("%f", &valor1);
        printf("\nDigite o valor2:\n");
        scanf("%f", &valor2);
        printf("\nA multiplicação de %1.f e %1.f é igual a %1.f.\n", valor1, valor2, valor1 * valor2);
        break;
        case 4:
        printf("\nDigite o valor1:\n");
        scanf("%f", &valor1);
        printf("\nDigite o valor2:\n");
        scanf("%f", &valor2);
        if(valor2 == 0) {
            printf("Divisão por zero não permitida!");
        } else {
            printf("\nA divisão de %1.f e %1.f é igual a %1.f.\n", valor1, valor2, valor1 / valor2);
        }
        break;
    }
    return 0;
}

int desafio13() {
    //tabuada personalizada com laço
    int numero;
    printf("\nDigite um número de 1 a 10:\n");
    scanf("%d", &numero);
    for(int i = 1; i <= 10; i++) {
        printf("\n%d X %d = %d\n", numero, i, numero * i);
    }

    return 0;
}

int desafio14() {
    //contagem regressiva e detecção de múltiplos
    int numero = 10;
    while(numero >= 0) {
        char *status = (numero % 3 == 0 && numero != 0) ? "é múltiplo de 3" : "não é múltiplo de 3";
        printf("%d %s\n", numero, status);
        numero = numero - 1;
        fflush(stdout);
        sleep(1);
    }
    printf("\nFIM!\n");

    return 0;
}

int desafio15() {
    //validador e média de notas
    float nota1 = 11.0, nota2 = 11.0;
    while((nota1 > 10.0 || nota1 < 0.0) && (nota2 > 10.0 || nota2 < 0.0)) {
        for(int i = 1; i < 3; i++) {
            printf("\nDigite a %d° nota:\n", i);
            if(i == 1) {
                scanf("%f", &nota1);
            } else {
                scanf("%f", &nota2);
            }
        }
        if((nota1 > 10.0 || nota1 < 0.0) && (nota2 > 10.0 || nota2 < 0.0)) {
            printf("\nNota inválida!, o valor de cada nota precisa estar entre '0.0' e '10.0'\n"); 
        }
    }
    printf("\nA média aritmética das notas '%1.f' e '%1.f' é '%1.f'.\n", nota1, nota2, (nota1 + nota2) / 2);

    return 0;
}

int desafio16() {
    //análise de 10 valores inteiros
    int numeros[10];
    int maior = 0;
    int menor = 0;
    int soma = 0;
    for(int i = 1; i <=10; i++) {
        printf("\nDigite o %d° número:\n", i);
        scanf("%d", &numeros[i]);
    }
    for(int i = 1; i <=10; i++) {
        printf("\n%d, \n", numeros[i]);
    }
    for(int i = 1; i <= 10; i++) {
        soma = soma + numeros[i];
        if(maior < numeros[i]) {
            maior = numeros[i];
        } else if(menor > numeros[i]) {
            menor = numeros[i];
        }
    }
    printf(
        "\nO maior valor digitado foi '%d'\n"
        "\nO menor valor digitado foi '%d'\n"
        "\nA média aritmética dos 10 valores foi '%d'\n",
        maior, menor, soma/10
    );
}


int main() {
    desafio16();
    return 0;
}