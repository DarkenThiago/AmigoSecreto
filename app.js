// Array para armazenar os nomes
let nomes = [];

// Função para adicionar um nome
function adicionarAmigo() {
    const input = document.querySelector('#amigo');
    const nome = input.value.trim();

    if (nome === "") {
        alert("Por favor, insira um nome válido!");
        return;
    }

    nomes.push(nome); // Adiciona o nome à lista de amigos
    atualizarLista(); // Atualiza a exibição da lista
    input.value = ""; // Limpa o campo de texto
}

// Função para atualizar a lista visível
function atualizarLista() {
    const listaAmigos = document.querySelector('#listaAmigos'); // Seleciona a lista
    listaAmigos.innerHTML = ""; // Limpa os itens da lista

    nomes.forEach(nome => {
        const item = document.createElement('li');
        item.textContent = nome; 
        listaAmigos.appendChild(item); 
    });
}

// Função para sortear um amigo
function sortearAmigo() {
    if (nomes.length === 0) {
        alert("A lista está vazia! Adicione nomes para realizar o sorteio."); // Verifica se a lista está vazia
        return;
    }

    const sorteado = nomes[Math.floor(Math.random() * nomes.length)]; // Realiza o sorteio
    const resultado = document.querySelector('#resultado');

    resultado.innerHTML = `<li>O amigo secreto sorteado é: <strong>${sorteado}</strong></li>`;
}
