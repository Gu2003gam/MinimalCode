const botao = document.getElementById('botao');
const form = document.getElementById('cadastro-form');

form.addEventListener('submit', (event) => {
    event.preventDefault();

    
    const errorSpans = document.querySelectorAll('.error-message');
    const successMessage = document.getElementById('success-message');

    
    errorSpans.forEach(span => span.textContent = '');
    successMessage.textContent = '';

    try {
        
        const nome = document.getElementById('nome').value.trim();
        const usuario = document.getElementById('usuario').value.trim();
        const senha = document.getElementById('senha').value;
        const email = document.getElementById('email').value.trim();
        const nascimento = document.getElementById('nascimento').value;

       

        
        if (nome === '') {
            throw { field: 'nome', message: 'O campo Nome é obrigatório.' };
        }

        
        if (usuario === '') {
            throw { field: 'usuario', message: 'O campo Usuário é obrigatório.' };
        }

        
        if (senha === '') {
            throw { field: 'senha', message: 'O campo Senha é obrigatório.' };
        }

        
        if (email === '') {
            throw { field: 'email', message: 'O campo E-mail é obrigatório.' };
        }
        
        if (!email.includes('@') || !email.includes('.')) {
            throw { field: 'email', message: 'Por favor, insira um e-mail válido.' };
        }

        
        if (nascimento === '') {
            throw { field: 'nascimento', message: 'O campo Data de Nascimento é obrigatório.' };
        }

        const dataNascimento = new Date(nascimento);
        const hoje = new Date();
        let idade = hoje.getFullYear() - dataNascimento.getFullYear();
        const mes = hoje.getMonth() - dataNascimento.getMonth();
        if (mes < 0 || (mes === 0 && hoje.getDate() < dataNascimento.getDate())) {
            idade--;
        }

        if (idade < 18) {
            throw { field: 'nascimento', message: 'Você deve ter pelo menos 18 anos para se cadastrar.' };
        }

        
        successMessage.textContent = 'Cadastro realizado com sucesso!';
        form.reset(); // 

    } catch (error) {
        
        const errorElement = document.getElementById(`${error.field}-error`);
        if (errorElement) {
            errorElement.textContent = error.message;
        } else {
            
            console.error('Ocorreu um erro inesperado:', error);
            alert('Ocorreu um erro inesperado. Verifique o console.');
        }
    }
});
