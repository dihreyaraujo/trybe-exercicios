//ex1

let fatorialDeDez = 10;
for(let index = 9; index < fatorial && index > 0; index--) {
   fatorial *= index;
}
console.log(fatorial);

//ex2

let word = 'tryber'
let inverteWord = [];
for(let index = 5; index >= 0; index--) {
    console.log(index)
    inverteWord.push(word[index]);
}
console.log(inverteWord.join(''));

//ex3

let array = ['java', 'javascript', 'python', 'html', 'css'];
let maiorArray = array[0];
let menorArray = array[0];
for(let index = 0; index < array.length; index++) {
    if(array[index].length > maiorArray.length) {
        maiorArray = array[index];
        
    }
for(let index = 0; index < array.length; index++) {
    if(array[index].length < menorArray.length) {
        menorArray = array[index];
        
    }
}
}
console.log('O maior array é ' + maiorArray);
console.log('O menor array é ' + menorArray);

//ex4

let maiorNumeroPrimo = 0;

for (let arrayNumber = 0; arrayNumber <= 50; arrayNumber++) {
    let isPrime = true;
    for (let divisor = 2; divisor < arrayNumber; divisor++) {
        if(arrayNumber % divisor === 0) {
          isPrime = false;  
        }
    }
    if (isPrime) {
        maiorNumeroPrimo = arrayNumber
    }
}

console.log(maiorNumeroPrimo);

//

let somaDosNumeros = 0;
for (let index = 0; index <= 50; index += 1) {
    somaDosNumeros += index
}

