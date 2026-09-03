import { useState } from 'react';
// 1. Importação do componente e dos ícones
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faLock } from '@fortawesome/free-solid-svg-icons';
import './App.css';

function App() {
  const [mensagem, setMensagem] = useState('');
  const [status, setStatus] = useState('');

  const enviarDados = async (evento) => {
    evento.preventDefault();
    const dados = new FormData(evento.target);
    const email = dados.get('email');
    const senha = dados.get('senha');

    try {
      const response = await fetch('http://localhost:3000/User', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: email,
          senha: senha,
        }),
      });

      const data = await response.json();

      if (response.ok) {
        setMensagem('Dados enviados com sucesso!');
        setStatus('Sucesso');
      } else {
        setMensagem(`Houve um erro durante o envio dos dados: ${response.status}`);
        setStatus('Erro');
      }
    } catch (error) {
      // 2. Correção de error.mensagem para error.message
      setMensagem(`Houve um erro no servidor: ${error.message}`);
      setStatus('Erro');
    }
  };

  return (
    <div className="formContainer">
      <form className="formulario" onSubmit={enviarDados}>
        <h1 className="login">Login</h1>
        
        <div className="emailInput">
          {/* 3. Uso correto do componente FontAwesomeIcon */}
          <FontAwesomeIcon icon={faUser} />
          <input type="email" className="email" name="email" placeholder="Email" required />
        </div>

        <div className="senhaInput">
          <FontAwesomeIcon icon={faLock} />
          <input type="password" className="senha" name="senha" placeholder="Senha" required />
        </div>

        <div className="opcoes">
          <button type="submit" className="botaoAcessar">Acessar</button>
          {/* 4. Definido type="button" para evitar submit acidental */}
          <button type="button" className="botaoCadastrar">Cadastrar</button>
        </div>

        <span className={`painel${status}`}>{mensagem}</span>
      </form>
    </div>
  );
}

export default App;