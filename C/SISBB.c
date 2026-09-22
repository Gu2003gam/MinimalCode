#include <stdio.h>
#include <string.h>
#include <stdlib.h>
#define MAX_LIVROS 100
typedef struct {
    int id;
    char titulo[100];
    char autor[100];
    char editora[100];
} Livros;

Livros biblioteca[MAX_LIVROS];
int numero_de_livros = 0;

void removerQuebraDeLinha(char *str) {
    size_t len = strlen(str);
    if(len > 0 && str[len - 1] == '\n') {
        str[len - 1] = '\0';
    }
}

int main() {
    int c;
    int opcao;
    do {
        printf(
            "+++++++++++++++++++++++++++++++++++++++\n"
            "SISBB - SISTEMA DE GESTÃO DE BIBLIOTECAS\n"
            "+++++++++++++++++++++++++++++++++++++++\n\n"

            "1 - Gestão de Livros\n"
            "2 - Gestão de Autores\n"
            "3 - Gestão de Usuários\n"
            "4 - Gestão de Empréstimos\n"
            "5 - Relatórios\n"
            "6 - Sair.\n\n"

            "Escolha uma opção:\n"
        );
        scanf("%d", &opcao);
        switch(opcao) {
            case 1:
            while (opcao != 5) {
                printf(
                    "GESTÃO DE LIVROS\n"
                    "1 - Adicionar Livro\n"
                    "2 - Exibir Livros\n"
                    "3 - Atualizar Livro\n"
                    "4 - Excluir Livro\n"
                    "5 - Voltar ao Menu Principal.\n"
                );
                scanf("%d", &opcao);
                switch (opcao) {
                    case 1 :
                    if(numero_de_livros < MAX_LIVROS) {
                        while((c = getchar()) != '\n' && c != EOF);
                        printf("\nDigite o título do livro:\n");
                        fgets(biblioteca[numero_de_livros].titulo, sizeof(biblioteca[numero_de_livros].titulo), stdin);
                        removerQuebraDeLinha(biblioteca[numero_de_livros].titulo);

                        printf("\nDigite o nome do autor:\n");
                        fgets(biblioteca[numero_de_livros].autor, sizeof(biblioteca[numero_de_livros].autor), stdin);
                        removerQuebraDeLinha(biblioteca[numero_de_livros].autor);

                        printf("\nDigite o nome da editora:\n");
                        fgets(biblioteca[numero_de_livros].editora, sizeof(biblioteca[numero_de_livros].editora), stdin);
                        removerQuebraDeLinha(biblioteca[numero_de_livros].editora);
                        system("cls");
                        system("clear");
                        printf(
                            "\nLivro adicionado com sucesso!\n"
                            "\n%s, Autor: %s, Editora: %s\n",
                            biblioteca[numero_de_livros].titulo, biblioteca[numero_de_livros].autor, biblioteca[numero_de_livros].editora
                        );
                        numero_de_livros ++;
                    } else {
                        printf("\nO número máximo de livros foi atingido!\n");
                    }
                    break;
                    case 2 :
                    printf("\nLista de livros:\n");
                    for(int i = 0; i <= numero_de_livros; i++) {
                        printf(
                            "\n%d° - %s, Autor: %s, Editora: %s\n",
                            i, biblioteca[i].titulo, biblioteca[i].autor, biblioteca[i].editora
                        );
                    }
                    break;
                    case 3 :
                }
            }
            break;
        }
    } while(opcao != 6);
    return 0;
}