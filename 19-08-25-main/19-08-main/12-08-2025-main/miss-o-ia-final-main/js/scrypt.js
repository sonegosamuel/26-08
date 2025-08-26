import {aleatorio, nome} from './aleatorio.js';
import {perguntas} from './perguntas.js';

const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");
const botaojogarnovamente = document.querySelector(".novamente-btn");

let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta(){
    if(atual >= perguntas.length){
        mostraResultado();
        return; 

    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativa();
}

function mostraAlternativa(){
    for(const alternativa of perguntaAtual.alternativas){
        const botaoAlternativa = document.createElement("button");
        botaoAlternativa.textContent = alternativa.texto;
        botaoAlternativa.addEventListener("click", () => respostaSelecionada(alternativa));
            
        caixaAlternativas.appendChild(botaoAlternativa);
    }

}

function respostaSelecionada(opcaoSelecionada){
    const afirmacoes = aleatorio(opcaoSelecionada.afirmacao)
    historiaFinal += afirmacoes + "";
    atual++;
mostraPergunta();

}

function mostraResultado(){
    caixaPerguntas.textContent = `muito obrigado pela participação,${nome}`;
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
    caixaResultado.classList.add("mostrar");
    botaojogarnovamente.addEventListener("click", jaganovaente);
}


function jaganovaente(){
atual = 0;
historiaFinal = "";
caixaResultado.classList.remove("mostrar");
mostraPergunta();
}

function substituironome(){
for(const perguntas of perguntas){
    perguntas.enunciado = perguntas.enunciado.replace(/você/g, nome);
}
}

substituironome();

mostraPergunta();
