import { aleatorio } from './aleatorio.js';
import { perguntas } from './perguntas.js';

const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");


let atual = 0;
let perguntaAtual;
let historiaFinal = "";


/*
Mostra a pergunta atual
*/

function mostraPergunta() {

if (atual >= perguntas.length) {
mostraResultado();
return;
}

perguntaAtual = perguntas[atual];

caixaPerguntas.textContent = perguntaAtual.enunciado;

caixaAlternativas.textContent = "";

mostraAlternativas();
}


/*
Cria os botões das alternativas
*/

function mostraAlternativas() {

for (const alternativa of perguntaAtual.alternativas) {

const botaoAlternativas = document.createElement("button");

botaoAlternativas.textContent = alternativa.texto;

botaoAlternativas.addEventListener(
"click",
() => respostaSelecionada(alternativa)
);

caixaAlternativas.appendChild(botaoAlternativas);
}
}


/*
Executada quando o usuário escolhe
uma alternativa.
*/

function respostaSelecionada(opcaoSelecionada) {

const afirmacaoSelecionada = aleatorio(
opcaoSelecionada.afirmacao
);

historiaFinal += afirmacaoSelecionada + " ";

atual++;

mostraPergunta();
}


/*
Mostra o resultado final
*/

function mostraResultado() {

caixaPerguntas.textContent = "Em 2049...";

textoResultado.textContent = historiaFinal;

caixaAlternativas.textContent = "";

/*
Aula 5:
adiciona a classe responsável
por mostrar a caixa de resultado.
*/

caixaResultado.classList.add("mostrar-resultado");
}


/*
Inicia o projeto
*/

mostraPergunta();