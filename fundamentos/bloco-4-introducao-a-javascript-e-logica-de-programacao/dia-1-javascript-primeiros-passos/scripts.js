//programa 1

let a = 20;
let b = 2;

console.log(a + b);
console.log(a - b);
console.log(a * b);
console.log(a / b);
console.log(a % b);

//programa 2

let n1 = 10;
let n2 = 20;

if (n1 > n2) {
    console.log("10 é maior que 20")
}
else {
    console.log("20 é maior que 10")
}

//programa 3

let n3 = 30;

if (n1 > n2 && n1 > n3) {
    console.log("10 é maior que 20 e 30")
}
else if (n2 > n1 && n2 > n3) {
    console.log("20 é maior que 10 e 30")
}
else {
    console.log("30 é maior que 10 e 20")
}

//programa 4

let numero = -15;

if (numero > 0) {
    console.log("positive");
}
else if (numero < 0) {
    console.log("negative");
}
else {
    console.log("zero");
}

//programa 5

let angulo1 = 60;
let angulo2 = 60;
let angulo3 = 60;

if (angulo1 + angulo2 + angulo3 == 180) {
    console.log("true")
}

else if (angulo1 + angulo2 + angulo3 < 0) {
    console.log("erro")
}

else {
    console.log("false")
}

//programa 6

let bispo = 'Bispo'

if (bispo.toLowerCase() === 'bispo') {
    console.log('diagonals');
}
else {
    console.log('é uma outra peça');
}

//programa 7

let porcentagem = 90;

if (porcentagem >= 90 && porcentagem < 100) {
    console.log('A');
}

else if (porcentagem >= 80 && porcentagem < 90) {
    console.log('B')
}

else if (porcentagem >= 70 && porcentagem < 80) {
    console.log('C')
}

else if (porcentagem >= 60 && porcentagem < 70) {
    console.log('D')
}

else if (porcentagem >= 50 && porcentagem < 60) {
    console.log('E')
}

else if (porcentagem < 50 && porcentagem > 0) {
    console.log('F')
}

else if (porcentagem < 0 || porcentagem > 100) {
    console.log('erro')
}

else {
    console.log('algarismo não identificado')
}

// programa 8

let n4 = 11;
let n5 = 13;
let n6 = 15;

if (n4 % 2 == 0 || n5 % 2 == 0 || n6 % 2 == 0) {
    console.log('true')
}
else {
    console.log('false')
}

//programa 9

let n7 = 11;
let n8 = 13;
let n9 = 15;

if (n7 % 2 !== 0 || n8 % 2 !== 0 || n9 % 2 !== 0) {
    console.log('true')
}
else {
    console.log('false')
}

//programa 10

let custo = 10 + (10 * 0,2);
let venda = 30;
let lucro = venda - custo;

switch (custo, venda) {
    case 0:
        console.log('erro');
        break;  
    default:
        console.log(lucro * 1000);
}

//programa 11















