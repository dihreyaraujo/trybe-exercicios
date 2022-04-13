const palio = ['Palio', 'Fiat', 2019];
const shelbyCobra = ['Shelby Cobra', 'Ford', 1963];
const chiron = ['Chiron', 'Bugatti', 2016];

// escreva toObject abaixo

const toObject = (arr) => {
  const [modelo, marca, ano] = arr;
  return {
    modelo: modelo,
    marca: marca,
    ano: ano,
  };
};

console.log(toObject(palio));