import { useState } from 'react'
import './App.css'

function App() {
  const enviar = async(evento) => {
    evento.preventDefault();
    const dados = new FormData(evento.target);
    const email = dados.get('email');
    const senha = dados.get('senha');

    try {
      const response = await fetch('http://localhost:3000/User', {
        method: "POST",
        headers: {
          "Content-Type" : "application/json"
        },
        body: JSON.stringify({
          "email" : email,
          "senha" : senha
        }),
      });
      const data = await response.json();
      if(response.ok) {
        console.log("Dados enviados com sucesso!");
      } else {
        console.log(`Houve um erro durante o envio dos dados: ${response.status}`)
      }
    } catch(error) {
      console.error(`Houve um erro no servidor: ${error.message}`)
    }
  };

  return (
    <>
    <div className="formContainer">
      <form action="" className="formulario">
          <h1 className="login">Login</h1>
          <input type="email" className="email" name="email" placeholder='Email' required />
          <input type="password" className="senha" name="senha" placeholder='Senha' required />
          <div className="opcoes">
            <button className="botaoAcessar">Acessar</button>
            <button className="botaoCadastrar" onSubmit={enviar}>Cadastrar</button>
          </div>
      </form>
    </div>
    </>
  )
}

export default App