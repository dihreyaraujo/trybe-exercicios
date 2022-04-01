//fixação 1 - Consertando função

const testingScope = (escopo) => {
  if (escopo === true) {
    let ifScope = 'Não devo ser utilizada fora do meu escopo (if)';
    ifScope = `${ifScope} ótimo, fui utilizada no escopo !`;
    console.log(ifScope);
  } else {
    let elseScope = 'Não devo ser utilizada fora meu escopo (else)';
    console.log(elseScope);
  }
}

testingScope(true);

// fixação 2 - ordenando números de array

const oddsAndEvens = [13, 3, 4, 10, 7, 2];

const ordenaNumero = (ordena) => ordena.sort((a,b) => a - b)

console.log(`o ${oddsAndEvens} em ordem crescente, fica ${ordenaNumero(oddsAndEvens)}`); // será necessário alterar essa linha 😉

//fixação 3 - faça uma função que retorne seu fatorial

const fatorial = (number) => {
  let multiplica = number
  for(let fatorial = number - 1; fatorial > 0; fatorial -= 1) {
    multiplica = multiplica * fatorial;
  }
  return multiplica;
}

//fixação 4 faça uma função que retorne qual a maior palavra de uma frase;

const maiorPalavra = (frase) => {
  let palavras = frase.split(' ');
  let maiorPalavra = '';
  for(let index = 0; index < palavras.length; index += 1) {
    (palavras[index].length > maiorPalavra.length) ? maiorPalavra = palavras[index] : maiorPalavra = maiorPalavra;
  }
  return maiorPalavra;
}

console.log(maiorPalavra('Antônio foi no banheiro e não sabemos o que aconteceu'));

//fixação 5 Crie um botão que conte quantas vezes o botão foi clicado

const btnCounter = document.getElementById('counter-click');
let counter = document.getElementById('counter');

btnCounter.addEventListener('click', () => {
  counter.innerText = parseInt(counter.innerText) + 1;
});

//fixação 6 Substitua a letra x de uma string por uma palavra

const palavra = 'Tryber x aqui!'

const substituirX = () => {
  let separaLetra = palavra.split('');
  let juntaLetras = [];
  for(let index = 0; index < separaLetra.length; index += 1) {
    if(separaLetra[index] == 'x') {
      juntaLetras.push('bebeto');
    }
    else{
      juntaLetras.push(separaLetra[index]);
    }
  }
  let string = juntaLetras.join('')
  return string;
}
substituirX();

//fixação 7 Faça uma função que retorne a string da primeira função e complemente com suas 5 principais skills

const arraySkills = ['JavaScript', 'HTML', 'CSS', 'DOM', 'ES6'];
const function1 = substituirX();

const arrumaSkills = (function1) => {
  let ordemAlfabética = arraySkills.sort().join(' ');
  return `${function1} Minhas cinco principais habilidades são ${ordemAlfabética}`;
}

console.log(arrumaSkills(function1));