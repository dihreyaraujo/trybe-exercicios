//Exercício 1

const nameEmail = (name) => {
  let nome = name.split(' ');
  let transformaEmail = [];
  for(let index = 0; index < nome.length; index += 1) {
    if(index < nome.length - 1){
      transformaEmail.push(nome[index].toLowerCase());
      transformaEmail.push('_');
    }
    else{
      transformaEmail.push(nome[index].toLowerCase());
    }
  }
  transformaEmail.push('@trybe.com');
  let eMail = transformaEmail.join('');
  return {
    nome: name,
    email: eMail,
  };
};

const newEmployees = (func) => {
  const employees = {
    id1: func('Pedro Guerra'), // Nome: Pedro Guerra -> Chame sua função passando o nome Pedro Guerra como parâmetro, substituindo as aspas
    id2: func('Luiza Drumond'), // Nome: Luiza Drumond -> Chame sua função passando o nome Luiza Drumond como parâmetro, substituindo as aspas
    id3: func('Carla Paiva'), // Nome: Carla Paiva -> Chame sua função passando o nome Carla Paiva como parâmetro, substituindo as aspas
  }
  return employees;
};

// console.log(newEmployees(nameEmail));


//Exercício 2

const sorteio = (number, func) => {
  const numero = Math.floor(Math.random() * 5 + 1);
  return func(number, numero) ? 'Parabéns você ganhou!' : 'Tente novamente!';
}

const resultadoSorteio = (myNumber, sorte) => {
  return myNumber === sorte;
}

// console.log(sorteio(3, resultadoSorteio));


//Exercicio 3

const resultado = (gabarito, resposta, func) => {
  let count = 0;
  for(let index = 0; index < gabarito.length; index += 1) {
    func(gabarito[index], resposta[index]) ? count += 1 : count = count;
  }
  return count;
}

const verificaResultado = (gabarito, resposta) => gabarito === resposta;

const certo = ['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'];
const estudante = ['A', 'N.A', 'B', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B'];

// console.log(resultado(certo, estudante, verificaResultado));