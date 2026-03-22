from flask import Flask, request, jsonify

app = Flask(__name__)

# Simulação de banco de dados
agendamentos = []

@app.route('/agendar', methods=['POST'])
def agendar():
    dados = request.json
    # Lógica: salvar o nome do pet e o serviço no banco
    agendamentos.append(dados)
    return jsonify({"status": "sucesso", "mensagem": f"Banho marcado para {dados['nome_pet']}!"})

if __name__ == '__main__':
    app.run(debug=True)