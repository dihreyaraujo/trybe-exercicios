function hydrate(string) {
  let pegaNumeros = /\d+/g;
  let stringNumero = string.match(pegaNumeros);
  let contador = 0;
  for(let index = 0; index < stringNumero.length; index += 1) {
    let contaMais = parseInt(stringNumero[index])   
    contador = contador + contaMais;
  }
  if(contador > 1) {
    return contador + " copos de água";  
  }
  else {
    return contador + " copo de água";
  }
}

module.exports = hydrate;