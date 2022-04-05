const encode = require('./encode.js');

describe('Requisito 4', () => {
  it('Testa se encode é uma função', () => {
    expect(typeof encode).toBe('function');
  });
  it('Testa se as vogais a, e, i, o, u são convertidas em 1, 2, 3, 4, 5', () => {
    expect(encode('aeiou')).toBe('12345');
  });
it('Testa se outras letras não são convertidas em 1, 2, 3, 4, 5', () => {
    expect(encode('bcdfg')).not.toBe('12345');
  });
it('Testa se o tamanho é o mesmo quando convertido', () => {
    const string = 'pateta'
    const tamanhoString = string.length
    const tamanhoEncode = encode(string).length
    expect(tamanhoEncode).toEqual(tamanhoString);
  });
});