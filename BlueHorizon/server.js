const express = require('express');
const mysql = require('mysql2');
const bcrypt = require('bcrypt');
const path = require('path');

const app = express();
const PORT = 3000;

app.use(express.json());

app.use(express.static(__dirname));

const db = mysql.createPool({
    host: '127.0.0.1',
    user: 'admin',
    password: 'G2003MAG#*', 
    database: 'BlueHorizon',
    waitForConnections: true,
    connectionLimit: 10
});

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});
//O que a linha acima faz?
// Esta linha faz com que o servidor responda com o arquivo HTML quando uma requisição GET é feita para a rota raiz.

app.post('/', async (req, res) => {
    const { email, senha } = req.body;
    //O que a linha acima faz?
    // Esta linha extrai os campos 'email' e 'senha' do corpo da requisição POST.

    if (!email || !senha) {
        return res.status(400).json({ error: 'E-mail e senha são obrigatórios.' });
    }

    try {
        const saltRounds = 10;
        const senhaCriptografada = await bcrypt.hash(senha, saltRounds);

        const sql = 'INSERT INTO Login (email, senha) VALUES (?, ?)';
        
        db.execute(sql, [email, senhaCriptografada], (err, result) => {
            if (err) {
                console.error('Erro ao inserir no banco:', err);
                
                if (err.code === 'ER_DUP_ENTRY') {
                    return res.status(400).json({ error: 'Este e-mail já está cadastrado.' });
                }
                return res.status(500).json({ error: 'Erro interno ao salvar no banco de dados.' });
            }

            console.log(`Usuário registrado com sucesso! ID: ${result.insertId}`);
            return res.status(201).json({ message: 'Credenciais registradas com sucesso!' });
        });

    } catch (error) {
        console.error('Erro no servidor:', error.message);
        return res.status(500).json({ error: 'Erro inesperado no servidor.' });
    }
});

app.listen(PORT, () => {
    console.log(`Servidor rodando com sucesso em http://localhost:${PORT}`);
});