const form = document.getElementById('form');

form.addEventListener('submit', async(e)=>{
    e.preventDefault()
    const email = document.getElementById('email').value;
    const senha = document.getElementById('senha').value;

    try {
        const response = await fetch('http://localhost:3000', {
            method : 'POST',
            headers : {
                'Content-Type' : 'application/json'
            },
            body : JSON.stringify({'email': email, 'senha': senha})
        })
        if(response.ok) {
            console.log('Credenciais registradas com sucesso!')
        } else {
            console.log('Houve um erro ao registrar o usuário')
        }
    } catch(error) {
        console.log('Houve um erro no servidor:', error.message)
    }
});

// form.addEventListener('submit', (e)=>{
//     e.preventDefault()
//     const email = document.getElementById('email').value;
//     const senha = document.getElementById('senha').value;

//     if(email !== '' && senha !== '') {
//         const mensagemStatus = document.getElementById('painel');
//         mensagemStatus.innerText = 'Cadastro Realizado com Sucesso!'
//         mensagemStatus.style.color = 'green'

//         mensagemStatus.setAttribute('data-testid', 'success-message');
//     }
// })