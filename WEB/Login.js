let botao = document.querySelector("button");

hoverBotao = () => {
    botao.style.boxShadow = '0px 5px 10px white'
    botao.style.color = 'white'
}

removeHoverBotao = () => {
    botao.style.boxShadow = 'none'
    botao.style.color = 'black'
}

botao.addEventListener("mouseover", hoverBotao);
botao.addEventListener("mouseout", removeHoverBotao);