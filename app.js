//Código principal do curso
let listaDeNumerosSorteados = [];
let numeroLimite = 10
let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 1;
let titulo = document.querySelector('h1');
titulo.innerHTML = 'Jogo do número secreto';

let paragrafo = document.querySelector('p');
paragrafo.innerHTML = 'Escolha um número entre 1 e 10';

//Evitar repetição de código com função
function exibirTextoNaTela(tag,texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    responsiveVoice.speak(texto, 'Brazilian Portuguese Female', {rate:1.2});
}

function exibirMensagemInicial(){
    exibirTextoNaTela('h1', 'Jogo do número secreto');
    exibirTextoNaTela('p', 'Escolha um número entre 1 e 10');
}

//Criação de função
function verificarChute() {
    let chute = document.querySelector('input').value;
    
    if (chute == numeroSecreto){
        exibirTextoNaTela('h1', 'Acertou!');
        let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
        let mensagemTentativas = `Você descobriu o número secreto com ${tentativas} ${palavraTentativa}.`;
        exibirTextoNaTela('p', mensagemTentativas);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
        if (chute > numeroSecreto) {
            exibirTextoNaTela('p', 'O número secreto é menor');
        } else {
            exibirTextoNaTela('p','O número secreto é maior');
        }
        tentativas++;
        limparCampo();
    }
}

function gerarNumeroAleatorio() {
    let numeroEscolhido = parseInt(Math.random() * numeroLimite + 1);
    let quantidadeDeElementosNaLista = listaDeNumerosSorteados.length;

    if (quantidadeDeElementosNaLista == numeroLimite) {
        listaDeNumerosSorteados = [];
    }
        //includes = verifica se o elemento está na lista
    if (listaDeNumerosSorteados.includes(numeroEscolhido)){
        return gerarNumeroAleatorio();
    } else {
        //push = adiciona um item ao final da lista / pop = remover o último elemento da lista
        listaDeNumerosSorteados.push(numeroEscolhido);
        console.log(listaDeNumerosSorteados);
        return numeroEscolhido;
    }
}

function limparCampo() {
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
//input = entrada de usuário
//array = lista (sempre é por colchetes)
//Indice = posição do elemento na lista (o primeiro sempre terá o índice 0)
//Responsive voice = narração dos códigos
/*Desafios
//Criar uma função que exibe "Olá, mundo!" no console.
let mensagem = olaMundo()
console.log(mensagem)

function olaMundo() {
    return 'Olá, mundo!';
}

//Criar uma função que recebe um nome como parâmetro e exibe "Olá, [nome]!" no console.
function nome(nome) {
    console.log(`Olá, ${nome}`);
}

nome('Vitor')

//Criar uma função que recebe um número como parâmetro e retorna o dobro desse número.
function dobro(numero) {
    console.log(numero * 2)
}

dobro(5)

//Criar uma função que recebe três números como parâmetros e retorna a média deles.
function media(numero1,numero2,numero3){
    console.log((numero1 + numero2 + numero3) / 3)
}

media(4,5,9)

//Criar uma função que recebe dois números como parâmetros e retorna o maior deles.
function maior(numero1,numero2){
    console.log(Math.max(numero1,numero2))
}

maior(15,10)
//Criar uma função que recebe um número como parâmetro e retorna o resultado da multiplicação desse número por ele mesmo
let multiplicado = quadrado(2);

function quadrado(numero) {
    console.log(Math.pow(numero, 2));
}*/