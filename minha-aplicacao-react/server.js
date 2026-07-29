import express from "express";
import cors from "cors";
import bcrypt from "bcrypt";
const app = express();
const PORT = 3000;

app.use(express.json());
app.use(cors());

const lista = [];
app.post('/User', async (req, res)=>{
    try {
        const {email, senha} = req.body;
        const saltRounds = 10;
        const senhaCriptografada = await bcrypt.hash( senha, saltRounds);

        if(!email || !senha) {
            return res.status(400).json("Todos os campos devem ser preenchidos!")
        } else {
            return res.status(200).json("Campos preenchidos corretamente!")
        }

        const novoUsuario = {
            "email" : email,
            "senha" : senhaCriptografada
        }
        lista.push(novoUsuario)

        console.log("Usuário cadastrado com sucesso!")
        return res.status(201).json({
            message: "Credenciais salvas!",
            totalUsuarios: lista.length
        })
    } catch(error) {
        console.error({ message: `Houve um erro durante o hashing de senha: ${error}`})
        return res.status(500).json('Houve um erro no servidor!')
    }
});
app.get('/User', (req , res)=>{
    res.status(200).json(lista);
});

app.listen(PORT, ()=>{
    console.log(`Servidor rodando na porta ${PORT}`);
});