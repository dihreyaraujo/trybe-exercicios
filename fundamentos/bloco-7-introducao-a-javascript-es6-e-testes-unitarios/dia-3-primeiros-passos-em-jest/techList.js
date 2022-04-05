function techList(array, name) {
  let ordenado = array.sort()
  let tecnologias = [];

  for(let index = 0; index < ordenado.length; index += 1) {
    tecnologias.push({tech: ordenado[index], name: name});
  }
  if(tecnologias.length == 0){
    return 'Vazio!'
  }
  else{
  return tecnologias;
  }
}

module.exports = techList;