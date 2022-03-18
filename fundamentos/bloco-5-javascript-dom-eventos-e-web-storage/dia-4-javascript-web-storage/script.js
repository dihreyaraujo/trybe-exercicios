//cor do background

let amarelo = document.getElementById('amarelo');
let branco = document.getElementById('branco');
let azul = document.getElementById('azul');

function backgroundYellow() {
    localStorage.setItem('background', '#dfd880');
    let corAmarelo = localStorage.getItem('background');
    document.body.style.backgroundColor = corAmarelo;
}

function backgroundWhite() {
    localStorage.setItem('background', 'white');
    let corBranco = localStorage.getItem('background');
    document.body.style.backgroundColor = corBranco;  
}

function backgroundBlue() {
    localStorage.setItem('background', '#80bcdf');
    let corAzul = localStorage.getItem('background');
    document.body.style.backgroundColor = corAzul;
}

let backgroundBody = localStorage.getItem('background');
let colorText = localStorage.getItem('color-text');
let textSize = localStorage.getItem('font-size');
let lineSpace = localStorage.getItem('espaçamento');
let fontFamily = localStorage.getItem('font');

window.onload = function() {
    document.body.style.backgroundColor = backgroundBody;
    document.body.style.color = colorText;
    document.body.style.fontSize = textSize;
    document.body.style.fontFamily = fontFamily;
    for(let index = 0; index < paragrafo.length; index += 1) {
        paragrafo[index].style.lineHeight = lineSpace;
    }
}

amarelo.addEventListener('click', backgroundYellow);
branco.addEventListener('click', backgroundWhite);
azul.addEventListener('click', backgroundBlue);


//cor do texto

let textoAmarelo = document.getElementById('amarelo-texto');
let textoBranco = document.getElementById('branco-texto');
let textoAzul = document.getElementById('azul-texto');

function textYellow() {
    localStorage.setItem('color-text', '#dfd880');
    let corAmarelo = localStorage.getItem('color-text');
    document.body.style.color = corAmarelo;
}

function textWhite() {
    localStorage.setItem('color-text', 'white');
    let corBranco = localStorage.getItem('color-text');
    document.body.style.color = corBranco;
}

function textBlue() {
    localStorage.setItem('color-text', '#80bcdf');
    let corAzul = localStorage.getItem('color-text');
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
    localStorage.setItem('font-size', '1em');
}

function textoMedio() { 
    document.body.style.fontSize = '1.2em';
    localStorage.setItem('font-size', '1.2em');
}

function textoGrande() {
    document.body.style.fontSize = '1.4em';
    localStorage.setItem('font-size', '1.4em');
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
    localStorage.setItem('espaçamento', '1.3em');
}

function medioEspaçamento() {
    for(let index = 0; index < paragrafo.length; index += 1) {
        paragrafo[index].style.lineHeight = '1.6em';
    }
    localStorage.setItem('espaçamento', '1.6em');
}

function grandeEspaçamento() {
    for(let index = 0; index < paragrafo.length; index += 1) {
        paragrafo[index].style.lineHeight = '1.8em';
    }
    localStorage.setItem('espaçamento', '1.8em');
}

poucoEspaço.addEventListener('click', poucoEspaçamento);
medioEspaço.addEventListener('click', medioEspaçamento);
grandeEspaço.addEventListener('click', grandeEspaçamento);


//fonte de texto

let arial = document.getElementById('arial');
let tnr = document.getElementById('tnr');


function arialText() {
    document.body.style.fontFamily = 'Arial';  
    localStorage.setItem('font', 'Arial');
}

function tnrText() {
    document.body.style.fontFamily = 'Time News Roman';   
    localStorage.setItem('font', 'Time News Roman');
}


arial.addEventListener('click', arialText);
tnr.addEventListener('click', tnrText);






