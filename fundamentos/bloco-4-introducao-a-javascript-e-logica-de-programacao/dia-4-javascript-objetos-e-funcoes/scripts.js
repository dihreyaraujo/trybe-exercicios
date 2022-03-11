//fixando conteúdo Objetos

let player = {
    name: 'Marta',
    lastName: 'Silva',
    age: 34,
    bestInTheWorld: [2006, 2007, 2008, 2009, 2010, 2018],
    medals: { 
        golden: 2, 
        silver: 3, 
    }
    
    
}

console.log('A jogadora ' + player.name + ' ' + player.lastName + ' tem ' + player.age + ' anos de idade.');

console.log('A jogadora ' + player.name + ' ' + player.lastName + ' foi eleita a melhor do mundo ' + player.bestInTheWorld.length + ' vezes');

console.log('A jogadora possui ' + player.medals.golden + ' medalhas de ouro e ' + player.medals.silver + ' medalhas de prata');

//

//fixando for/in e for/of

let names = {
    person1: 'João',
    person2: 'Maria',
    person3: 'Jorge',
  };

for (let boasVindas in names) {
    console.log('Olá ' + names[boasVindas]);
}

//

let car = {
    model: 'A3 Sedan',
    manufacturer: 'Audi',
    year: 2020
  };

for (let key in car) {
    console.log(key + ': ' + car[key]);
}

//ex1

let info = {
    personagem: 'Margarida',
    origem: 'Pato Donald',
    nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
    recorrente: 'Sim'
  };

console.log('Bem-vinda, ' + info.personagem + '.');

//ex2

let info2 = {
personagem: 'Margarida',
origem: 'Pato Donald',
nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
recorrente: 'Sim'
};

console.log('Recorrente? ' + info2.recorrente);

//ex3

let info3 = {
    personagem: 'Margarida',
    origem: 'Pato Donald',
    nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
    recorrente: 'Sim'
};

for (let key in info3) {
    console.log(key);
}

//ex4

let info4 = {
    personagem: 'Margarida',
    origem: 'Pato Donald',
    nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
    recorrente: 'Sim'
    };
    
for (let key in info4) {
    console.log(info4[key]);
}

//ex5

let info5 = {
    personagem: 'Margarida e Tio Patinhas',
    origem: 'Pato Donald e Christmas on Bear Mountain, Dells Four Color Comics #178',
    nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald e O último MacPatinhas',
    recorrente: 'Ambos recorrentes'
}

for(let key in info5) {
    console.log(info5[key]);
}

//ex6

let leitor = {
    nome: 'Julia',
    sobrenome: 'Pessoa',
    idade: 21,
    livrosFavoritos: [
      {
        titulo: 'O Pior Dia de Todos',
        autor: 'Daniela Kopsch',
        editora: 'Tordesilhas',
      },
      
    ],
  };
  
  console.log('O livro favorito de ' + leitor.nome + ' ' + leitor.sobrenome + ' se chama ' + leitor.livrosFavoritos[0].titulo);

//ex7

let leitor1 = {
    nome: 'Julia',
    sobrenome: 'Pessoa',
    idade: 21,
    livrosFavoritos: [
      {
        titulo: 'O Pior Dia de Todos',
        autor: 'Daniela Kopsch',
        editora: 'Tordesilhas',
      },
      
      {
        titulo: 'Harry Potter e o Prisioneiro de Azkaban',
        autor: 'JK Rowling',
        editora: 'Rocco',
      }
    ],
  };

  console.log (leitor1.nome + ' tem ' + leitor1.livrosFavoritos.length + ' livros favoritos.');

//

//Exercícios Funções

//ex1

function verificaPalindromo(string) {
    if (string === string.split('').reverse().join('')){
        return true;
    }
    else {
        return false;
    }
}

console.log(verificaPalindromo("desenvolvimento"));

//ex2

let numbers = [2, 3, 6, 7, 10, 1];
function maiorIndice() {
    let maiorNumber = 0;
    for(let index = 0; index < numbers.length; index += 1) {
        if(numbers[index] > maiorNumber) {
            maiorNumber = index;
        }
    }
    return maiorNumber;
}

console.log(maiorIndice(numbers));

//ex3

let numbers2 = [2, 4, 6, 7, 10, 0, -3];
function menorIndice() {
    let maiorNumber = 0;
    for(let index = 0; index < numbers2.length; index += 1) {
        if(numbers2[index] > maiorNumber) {
            maiorNumber = numbers2[index];
        }
    }
    let menorNumber = maiorNumber;
    for(let index2 = 0; index2 < numbers2.length; index2 += 1) {
        if(numbers2[index2] < menorNumber) {
            menorNumber = index2;
        }
    }
    return menorNumber;
}

console.log(menorIndice(numbers2));

//ex4

let namesArray = ['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana'];
function maiorNome() {
    let maiorNome = '';
    for(let index = 0; index < namesArray.length; index += 1) {
        if(namesArray[index].length > maiorNome.length) {
            maiorNome = namesArray[index];
        }
    }
    return maiorNome;
}

console.log(maiorNome(namesArray));

//ex5 

let repeatNumbers = [2, 3, 2, 5, 8, 2, 3];

function maisRepetido(numeros) {
    let contRepetido = 0;
    let contNumero = 0;
    let indexNumeroRepetido = 0;
    for (let index in numeros) {
      let verificaNumero = numeros[index];
      for (let index2 in numeros) {
        if (verificaNumero === numeros[index2]) {
          contNumero += 1;
          
        }
      }
      if (contNumero > contRepetido) {
        contRepetido = contNumero;
        indexNumeroRepetido = index;
        
      }
      contNumero = 0;
    }
    return numeros[indexNumeroRepetido];
  }

  console.log(maisRepetido(repeatNumbers));

//ex6

//let numero = 5;

let somaTudo = 0;
function somatorio(numero) {
    for(let index = 1; index <= numero; index+=1) {
        somaTudo += index;
    }
    return somaTudo;
}

console.log(somatorio(5));

//ex7

let word1 = 'trybe';
let word2 = 'be';

function finalIgual (word, ending) {
    let palavra = word.split('')
    let finalPalavra = ending.split('')
    let controle = true;
    for(let index = 0; index < finalPalavra.length; index +=1) {
        if(palavra[palavra.length - finalPalavra.length + index] != finalPalavra[index]) {
            controle = false;
        }
    }
    return controle;
}

console.log(finalIgual(word1, word2));




