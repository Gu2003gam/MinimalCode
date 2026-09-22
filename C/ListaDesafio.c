//LISTA DE DESAFIOS
//LÓGICA DE PROGRAMAÇÃO
//GUSTAVO DOS SANTOS
#include <stdio.h>
#include <string.h>
#include <stdlib.h>

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

int desafio11 () {
    

    return 0;
}

int main() {
    desafio10();
    return 0;
}