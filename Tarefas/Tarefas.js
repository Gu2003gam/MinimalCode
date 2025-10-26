const botao = document.getElementById('meuBotao');
botao.addEventListener('click', (event) => {
    event.preventDefault();
    const nome = document.querySelector("input[name='nome']").value;
    const descricao = document.querySelector("textarea[name='descricao']").value;
    const novaTarefa = document.createElement('div');
    novaTarefa.innerHTML = `<h3>${nome}</h3><p>${descricao}</p>`;
    document.body.appendChild(novaTarefa);
});

let hoverBotao = () => {
    botao.style.boxShadow = '0px 5px 5px white';
    botao.style.color = 'white'
}
let removeHoverBotao = () => {
    botao.style.boxShadow = 'none';
    botao.style.color = 'black'
}

botao.addEventListener('mouseover', hoverBotao);
botao.addEventListener('mouseout', removeHoverBotao);