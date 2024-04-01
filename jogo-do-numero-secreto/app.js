function exibirTextoNaTela(tag, texto) {
  let nome = document.querySelector(tag);
  nome.innerHTML = texto;
}

let tentativasAtuais = 6;

let listaDeNumerosUsados = []

let palavraTentativa = 'tentativas'

function palavra() {
  palavraTentativa = tentativasAtuais == 1 ? "tentativa" : "tentativas";
}
palavra();

let mensagemTentativas = `escolha um número entre 1 e 10, ${tentativasAtuais} ${palavraTentativa} restantes`;

function exibirMensagemInicial() {
exibirTextoNaTela("h1", "Jogo do número secreto");
exibirTextoNaTela("p", mensagemTentativas);
}

exibirMensagemInicial()

document.getElementById('reiniciar').removeAttribute('disabled')

function verificarChute() {
  if (tentativasAtuais > 1) {
    let chute = document.querySelector("input").value;
    if (chute == numeroSecreto) {
      exibirTextoNaTela("h1", "ACERTOU");
      exibirTextoNaTela("p", "descobriu o numero");
    } else if (chute > numeroSecreto) {
      exibirTextoNaTela("h1", "Errou");
      tentativasAtuais--;
      palavra();
      let mensagemTentativas = `${tentativasAtuais} ${palavraTentativa} restantes`;
      exibirTextoNaTela("p", "número é menor! " + mensagemTentativas);
      limparCampo()
    } else {
      exibirTextoNaTela("h1", "Errou");
      tentativasAtuais--;
      palavra();
      let mensagemTentativas = `${tentativasAtuais} ${palavraTentativa} restantes`;
      exibirTextoNaTela("p", "número é maior! " + mensagemTentativas);
      limparCampo()
    }
  } else {
    exibirTextoNaTela("h1", "PERDEU");
    exibirTextoNaTela("p", "acabaram as tentativas");
    exibirTextoNaTela("input", "-");
    limparCampo();
  }
  console.log(listaDeNumerosUsados)
}

function gerarNumeroAleatorio() {
  let numeroEscolhido = parseInt(Math.random() * 4 + 1);
  let quantidadeDeElementosNaLista = listaDeNumerosUsados.length;
  if (quantidadeDeElementosNaLista == 4) {listaDeNumerosUsados = []};
  if (listaDeNumerosUsados.includes(numeroEscolhido)) {
    return gerarNumeroAleatorio()
  } else {listaDeNumerosUsados.push(numeroEscolhido)
    return numeroEscolhido};

  
}

let numeroSecreto = gerarNumeroAleatorio();

function limparCampo() {
chute = document.querySelector('input');
chute.value = '';

}

function reiniciarJogo() {
numeroSecreto = gerarNumeroAleatorio()
limparCampo()
tentativasAtuais = 5
exibirMensagemInicial()
}


