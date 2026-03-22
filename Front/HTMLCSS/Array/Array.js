alert('Lista de Compras');

let listaDeCompras = [];
let opcao;

do{
alert('O que você deseja fazer? \n1 - Adicionar um item \n2 - Remover um item \n3 - Visualizar a lista \n4 - Atualizar um item \n5 - Sair');

opcao = parseInt(prompt('Digite o número correspondente à opção desejada:'));

switch (opcao) {
    case 1:
        let adicionar = prompt('Digite o item que deseja adicionar:');
        listaDeCompras.push(adicionar);
        alert(`${adicionar} foi adicionado à lista!`);
        break;
    case 2:
        let remover = prompt('Digite o item que deseja remover:')
        listaDeCompras.splice(listaDeCompras.indexOf(remover), 1);
        alert(`${remover} foi removido da lista!`);
        break;
    case 3:
        alert('Itens na sua lista de compras:');
        for(let i = 0; i <listaDeCompras.length; i++) {
            alert(`${listaDeCompras[i]}`)
        }
        break;
    case 4:
        let indice = parseInt(prompt('Forneça o índice do item que deseja atualizar:'));
        let valor = prompt('Forneça o valor do item que deseja atualizar:');
        listaDeCompras[indice] = valor;
        alert(`Item na posição ${indice} foi atualizado para ${valor}!`);
        break;
    case 5:
        alert('Saindo...');
        break;
    default:
        alert('Opção inválida!, tente novamente!');
        break;
}
}while(opcao !== 5);