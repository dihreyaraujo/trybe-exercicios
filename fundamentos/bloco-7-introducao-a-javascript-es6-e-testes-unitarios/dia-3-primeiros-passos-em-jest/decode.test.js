const decode = require('./decode.js');

describe('Requito 5', () => {
  it('Testa se decode é uma função', () => {
    expect(typeof decode).toBe('function');
  });
  it('Testa se os numeros 1, 2, 3, 4, 5 são convertidas em a, e, i, o, u', () => {
    expect(decode('12345')).toBe('aeiou');
  });
  it('Testa se outros números não são convertidas em a, e, i, o, u', () => {
    expect(decode('67890')).not.toBe('aeiou');
  });
  it('Testa se o tamanho é o mesmo quando desconvertido', () => {
    const string = 'p1t2t1'
    const tamanhoString = string.length
    const tamanhoEncode = decode(string).length
    expect(tamanhoEncode).toEqual(tamanhoString);
  });
});