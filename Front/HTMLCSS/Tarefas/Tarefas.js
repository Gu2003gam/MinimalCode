alert('Lista de Tarefas!');

let tarefas = [];

let opcao;

while(opcao !== 4) {
    alert('Gerenciador de Tarefas!');
    opcao = parseInt(prompt('Insira o número correspondente a opção desejada: \n1-Adicionar \n2-Remover \n3-Listar \n4-Concluir'));
    switch(opcao) {
        case 1:
            let tarefa = prompt('Insira o título da tarefa que deseja adicionar:');
            tarefas.push(tarefa);
            alert(`A tarefa ${tarefa} foi adicionada com sucesso!`);
            break;
        case 2:
            alert('Tarefas a serem removidas')
            tarefas.forEach(function(t) {
                alert(t);
            });
            let indice = parseInt(prompt('Insira o índice correspondente a tarefa que deseja remover'));
            tarefas.splice(indice, 1);
            alert(`A tarefa do índice ${indice} foi removida com sucesso`);
            break;
        case 3:
            tarefas.forEach(function(t) {
                alert(t)
            });
            break;
        case 4:
            alert('Encerrando programa...');
            break;
        default:
            alert('Opção inválida!');
            break
    }
}