const readline = require('readline-sync');
//importa a biblioteca!

// Inicializa o tabuleiro
let tabuleiro = [
    [' ', ' ', ' '],
    [' ', ' ', ' '],
    [' ', ' ', ' ']
];

// Iniciar o jogo
comecarJogo();

// Função para exibir o tabuleiro
function exibirTabuleiro() {
    console.log('Tabuleiro atual:');
    for (let i = 0; i < tabuleiro.length; i++) {
        console.log(tabuleiro[i].join(' | '));
        //join -> concatenar
    }
    //   tabuleiro.forEach(row => {
    //     console.log(row.join(' | '));
    //   });
}
// Função para fazer uma jogada
function fazerJogada(jogador) {
    let linha, coluna;

    while (true) {
        linha = readline.questionInt(`Vez do Jogador ${jogador}, selecione a linha (0, 1 ou 2): `);
        if (linha >= 0 && linha < 3) {
            coluna = readline.questionInt(`Vez do Jogador ${jogador}, selecione a coluna (0, 1 ou 2): `);
            if (coluna >= 0 && coluna < 3) {
                if (tabuleiro[linha][coluna] === ' ') {
                    tabuleiro[linha][coluna] = jogador;
                    break;
                } else {
                    console.log("A posição já está ocupada! Tente outra posição.");
                }
            } else {
                console.log("Coluna inválida. Tente novamente.");
            }
        } else {
            console.log("Linha inválida! Tente novamente.");
        }
    }
}




// Função para verificar vitória
function verificarVencedor(jogador) {
    for (let i = 0; i < 3; i++) {
        if (tabuleiro[i].every(cell => cell === jogador)) return true;
        //every -> verificar se todos os elementos do array atendem a uma 
        // determinada condição!
        //vencer nas linhas(horizontais)!
    }

    for (let j = 0; j < 3; j++) {
        if (tabuleiro[0][j] === jogador && tabuleiro[1][j] === jogador && tabuleiro[2][j] === jogador) return true;
        //sempre na vertical!!
    }

    if (tabuleiro[0][0] === jogador && tabuleiro[1][1] === jogador && tabuleiro[2][2] === jogador) return true;
    if (tabuleiro[0][2] === jogador && tabuleiro[1][1] === jogador && tabuleiro[2][0] === jogador) return true;

    return false;
}

// Função principal para iniciar o jogo
function comecarJogo() {
    let jogadorAtual = 'X';
    let movimento = 0;

    while (movimento < 9) {
        exibirTabuleiro();
        fazerJogada(jogadorAtual);

        if (verificarVencedor(jogadorAtual)) {
            exibirTabuleiro();
            console.log(`Parabéns, jogador ${jogadorAtual}! Você venceu!`);
            return;
        }

        if (jogadorAtual === "X") {
            jogadorAtual = "O";
        } else {
            jogadorAtual = "X";
        }
        // jogadorAtual = jogadorAtual === 'X' ? 'O' : 'X';
        movimento++;
    }

    exibirTabuleiro();
    console.log('O jogo terminou em empate!');
}


