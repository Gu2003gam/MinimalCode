const Nomes = [];

while(true) {
    const entrada = prompt('Insira um nome ou digite "sair":').toLowerCase();
    if (entrada === "sair") {
        console.log('Saindo...');
        break
    } else {
        if (entrada.trim() === "") {
            console.log('O valor inserido é inválido.');
        } else {
            Nomes.push(entrada.trim());
        }
    }

    if(Nomes.length === 0) {
        console.log('Nenhum nome foi inserido.')
    } else {
        for (let i = 0; i< Nomes.length; i ++) {
            console.log(`${i + 1}: ${Nomes[i]}`);
        }

        for (const nome of Nomes) {
            console.log(`Bem vindo, ${nome}!`);
        }
    }
}