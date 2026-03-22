async function enviarAgendamento() {
    const nome = document.getElementById('nomePet').value;
    const servico = document.getElementById('servico').value;

    const resposta = await fetch('/agendar', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ nome_pet: nome, servico: servico })
    });

    const resultado = await resposta.json();
    alert(resultado.mensagem);
}