function encode(string) {
  let codificado = [];
  for(let index = 0; index < string.length; index += 1) {
    if(string[index] == 'a') {
      codificado.push("1");
    }
    else if(string[index] == 'e') {
      codificado.push("2");
    }
    else if(string[index] == 'i') {
      codificado.push("3");
    }
    else if(string[index] == 'o') {
      codificado.push("4");
    }
    else if(string[index] == 'u') {
      codificado.push("5");
    }
    else {
      codificado.push(string[index]);
    }
  }
  return codificado.join('');
}

module.exports = encode;