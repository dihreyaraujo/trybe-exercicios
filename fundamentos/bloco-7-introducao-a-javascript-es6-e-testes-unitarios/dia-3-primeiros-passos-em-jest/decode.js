function decode(string) {
  let decodificado = [];
  for(let index = 0; index < string.length; index += 1) {
    if(string[index] == '1') {
      decodificado.push("a");
    }
    else if(string[index] == '2') {
      decodificado.push("e");
    }
    else if(string[index] == '3') {
      decodificado.push("i");
    }
    else if(string[index] == '4') {
      decodificado.push("o");
    }
    else if(string[index] == '5') {
      decodificado.push("u");
    }
    else {
      decodificado.push(string[index]);
    }
  }
  return decodificado.join('');
}

module.exports = decode;