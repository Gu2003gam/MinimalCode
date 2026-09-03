import express from 'express';
import cors from 'cors';
import bcrypt from 'bcrypt';
import mongoose from 'mongoose';
const app = express();
const PORT = 3000;
app.use(express.json());
app.use(cors());
const db_url = "gustavoaraujomelo2003gam_db_usereisOq3X297k1bMdDmongodb+srv://<db_username>:eisOq3X297k1bMdD@cluster0.sj3w4zs.mongodb.net/?appName=Cluster0"


let lista = [];
app.post('/register', async(req, res)=>{
    try {
        const { email, senha } = req.body;
        if(!email || !senha) {
            return res.status(400).json("Preencha todos os campos!");
        } else {
            return res.status(200).json("Dados enviados com sucesso!");
        }
        const saltRounds = 10;
        const senhaCriptografada = await bcrypt.hash(senha, saltRounds);
        const novoUsuario = {
            "email" : email,
            "senha" : senhaCriptografada
        }
        lista.push(novoUsuario);
        res.status(201).json({
            message: "Usuário cadastrado com sucesso!",
            totalUsuarios: lista.length
        })
    } catch (error) {
        return res.status(500).json("Houve um erro durante o hashing de senha!");
    }
});
app.post('/login', async(req, res)=>{
    try {
        const { email, senha } = req.body;
        const usuarioExiste = await User.findOne({email});
        if(usuarioExiste) {
            return res.status(400).json("Usuário já cadastrado!")
        } else {
            const novoUsuario = await User.create(req.body);
            return res.status(201).json(novoUsuario)
        }
    } catch (error) {

    }
});

app.listen(PORT, ()=>{
    console.log(`O servidor está rodando na porta http://localhost:${PORT}`);
});