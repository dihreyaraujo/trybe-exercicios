//ex1

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

for (let index = 0; index < numbers.length; index +=1) {
    console.log (numbers[index]);
}

//ex2

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let soma = 0;
for (let index = 0; index < numbers.length; index +=1) {
    soma += numbers[index];       
}
console.log (soma);

//ex3

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let soma = 0;
for (let index = 0; index < numbers.length; index +=1) {
    soma += numbers[index];       
}

console.log(soma / numbers.length);

//ex4

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let soma = 0;
for (let index = 0; index < numbers.length; index +=1) {
    soma += numbers[index];       
}

if (soma / numbers.length > 20) {
    console.log('Valor maior que 20')
}

else {
    console.log('Valor menor ou igual a 20')
}

//ex5

let maior = 0;
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let ordenado = numbers.sort((a, b) => a - b);
for (let index = 0; index < ordenado.length; index++) {
    if (numbers[index] < numbers[index +=1]) {
        maior = numbers[index]
    }
}
console.log(maior);

//ex6

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let impar = 0;
for (let index = 0; index < numbers.length; index++) {
    if (numbers[index] % 2 !== 0) {
        impar++;
    }
    
}

    if(impar == 0) {
        console.log('não tem números ímpares')
    }
    else{
        console.log(impar);
    }
//ex7

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let menorNumero = numbers[0];

for (let index = 1; index < numbers.length; index++) {
    if (numbers[index] < menorNumero) {
        menorNumero = numbers[index]
    }
}

console.log(menorNumero)

//ex8

let numeros = [];

for (let index = 1; index <= 25; index++) {
    numeros.push(index);
}

console.log(numeros);

//ex9

let numeros = [];
let divisao = [];

for (let index = 1; index <= 25; index++) {
    numeros.push(index);
}

for (let index2 = 0; index2 < numeros.length; index2++) {
    divisao.push(numeros[index2] / 2);
}

console.log(divisao);
