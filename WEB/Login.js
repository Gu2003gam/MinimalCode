let form = document.querySelector('form');
let botao = document.querySelector('button');
botao.addEventListener('click', (Event) =>{
    Event.preventDefault();
let login = document.querySelector("input[type='text']").value;
let senha = document.querySelector("input[type='password']").value;
if(login === 'Gustavo' && senha === '1234') {
    window.location.replace('Curriculo.html');
} else {
    alert('Por favor, preencha todos os campos!')
}
});
let hoverBotao = () =>{
    botao.style.boxShadow = '0px 10px 15px white'
}
let removeHoverBotao = () =>{
    botao.style.boxShadow = 'none'
}
botao.addEventListener('mouseover', hoverBotao);
botao.addEventListener('mouseout', removeHoverBotao);