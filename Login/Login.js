const botao = document.getElementById('botao')
botao.addEventListener('click', event =>{
    event.preventDefault()
    const email = document.getElementById('email').value;
    const senha = document.getElementById('senha').value;

    const hash = btoa(senha);
    alert(`Email: ${email} \nSenha: ${hash}`);
});