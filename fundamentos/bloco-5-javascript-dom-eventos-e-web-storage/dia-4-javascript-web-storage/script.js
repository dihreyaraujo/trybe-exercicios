//cor do background

let amarelo = document.getElementById('amarelo');
let branco = document.getElementById('branco');
let azul = document.getElementById('azul');

function backgroundYellow() {
    localStorage.setItem('amarelo', '#dfd880');
    let corAmarelo = localStorage.getItem('amarelo');
    document.body.style.backgroundColor = corAmarelo;
}

function backgroundWhite() {
    localStorage.setItem('branco', 'white');
    let corBranco = localStorage.getItem('branco');
    document.body.style.backgroundColor = corBranco;
}

function backgroundBlue() {
    localStorage.setItem('azul', '#80bcdf');
    let corAzul = localStorage.getItem('azul');
    document.body.style.backgroundColor = corAzul;
}

amarelo.addEventListener('click', backgroundYellow);
branco.addEventListener('click', backgroundWhite);
azul.addEventListener('click', backgroundBlue);


//cor do texto

let textoAmarelo = document.getElementById('amarelo-texto');
let textoBranco = document.getElementById('branco-texto');
let textoAzul = document.getElementById('azul-texto');

function textYellow() {
    localStorage.setItem('texto-amarelo', '#dfd880');
    let corAmarelo = localStorage.getItem('texto-amarelo');
    document.body.style.color = corAmarelo;
}

function textWhite() {
    localStorage.setItem('texto-branco', 'white');
    let corBranco = localStorage.getItem('texto-branco');
    document.body.style.color = corBranco;
}

function textBlue() {
    localStorage.setItem('texto-azul', '#80bcdf');
    let corAzul = localStorage.getItem('texto-azul');
    document.body.style.color = corAzul;
}

textoAmarelo.addEventListener('click', textYellow);
textoBranco.addEventListener('click', textWhite);
textoAzul.addEventListener('click', textBlue);


//tamanho do texto

let textoP = document.getElementById('texto-pequeno');
let textoM = document.getElementById('texto-medio');
let textoG = document.getElementById('texto-grande');

function textoPequeno() {
    document.body.style.fontSize = '1em';
}

function textoMedio() { 
    document.body.style.fontSize = '1.2em';
}

function textoGrande() {
    document.body.style.fontSize = '1.4em';
}

textoP.addEventListener('click', textoPequeno);
textoM.addEventListener('click', textoMedio);
textoG.addEventListener('click', textoGrande);


//espaçamento entre as linhas

let paragrafo = document.getElementsByClassName('paragrafo');
let poucoEspaço = document.getElementById('pouco-espaço');
let medioEspaço = document.getElementById('medio-espaço');
let grandeEspaço = document.getElementById('grande-espaço');

function poucoEspaçamento() {
    for(let index = 0; index < paragrafo.length; index += 1) {
        paragrafo[index].style.lineHeight = '1.3em';
    }
}

function medioEspaçamento() {
    for(let index = 0; index < paragrafo.length; index += 1) {
        paragrafo[index].style.lineHeight = '1.6em';
    }
}

function grandeEspaçamento() {
    for(let index = 0; index < paragrafo.length; index += 1) {
        paragrafo[index].style.lineHeight = '1.8em';
    }
}

poucoEspaço.addEventListener('click', poucoEspaçamento);
medioEspaço.addEventListener('click', medioEspaçamento);
grandeEspaço.addEventListener('click', grandeEspaçamento);


//fonte de texto

let arial = document.getElementById('arial');
let tnr = document.getElementById('tnr');


function arialText() {
    document.body.style.fontFamily = 'Arial';  
}

function tnrText() {
    document.body.style.fontFamily = 'Time News Roman';   
}


arial.addEventListener('click', arialText);
tnr.addEventListener('click', tnrText);






