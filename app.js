let listaDeNumerosSorteados = [];
let numeroMax = 100
let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 1;

//let titulo = document.querySelector('h1'); 
//titulo.innerHTML = ('Jogo do Número Secreto');

//let paragrafo = document.querySelector('p'); 
//paragrafo.innerHTML = ('Escolha um número entre 1 e 10');

function exibirTextoNaTela(tag,texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    responsiveVoice.speak(texto, 'Brazilian Portuguese Female',{rate:1.2});
}
function exibirMensagemInicial() {
    exibirTextoNaTela('h1','Jogo do Número Secreto');
    exibirTextoNaTela('p',`Escolha um número entre 1 e ${numeroMax}`);
}

exibirMensagemInicial();
    
function verificarChute() {
    let chute = document.querySelector('input').value;

    if (chute == numeroSecreto) {
        let palavraTentativas = tentativas > 1 ? 'tentativas':'tentativa';
        let mensagemAcertouTentativas = `Você acertou o número secreto em ${tentativas} ${palavraTentativas}`;
        exibirTextoNaTela('h1', 'Parabéns!');
        exibirTextoNaTela('p',mensagemAcertouTentativas);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
        if (chute > numeroSecreto) {
            exibirTextoNaTela('h1', 'Não foi dessa vez!');
            exibirTextoNaTela('p',`O número secreto é menor que ${chute}`);
        } else {
            exibirTextoNaTela('h1','Não foi dessa vez!');
            exibirTextoNaTela('p', `O número secreto é maior que ${chute}`);
        }
        tentativas++;
        limparCampo();
    } 
}  

function gerarNumeroAleatorio() {

   // return parseInt(Math.random() * 10 + 1);

    let numeroEscolhido = parseInt(Math.random() * numeroMax + 1);
    let quatindadeDeElementosNaLista = listaDeNumerosSorteados.length;

if (quatindadeDeElementosNaLista == numeroMax) {
    listaDeNumerosSorteados = []
}

    if (listaDeNumerosSorteados.includes(numeroEscolhido)) {
        return gerarNumeroAleatorio();
    } else {
        listaDeNumerosSorteados.push(numeroEscolhido);
        console.log(listaDeNumerosSorteados);
        return numeroEscolhido;
    }
}


function limparCampo(){
    chute = document.querySelector('input');
    chute.value = '';
}

function reiniciarJogo() {
    numeroSecreto = gerarNumeroAleatorio();
    limparCampo();
    tentativas = 1;
    exibirMensagemInicial();
    document.getElementById('reiniciar').setAttribute('disabled',true);
}