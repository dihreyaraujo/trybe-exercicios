const sum = require('./sum.js');

describe('Requisito 1', () => {
  it('Verifica se a soma de 4 e 5 é igual à 9', () => {
    expect(sum(4, 5)).toEqual(9);
  });
  it('Verifica se a soma de 0 e 0 é igual à 0', () => {
    expect(sum(0, 0)).toEqual(0);
  });
  it('Verifica se a função lança um erro quando um dos parâmetros não é do tipo number', () => {
    expect(() => { sum(4, '5') }).toThrow();
  });
  it('Verifica se a mensagem do erro é: parameters must be numbers', () => {
    expect(() => { sum(4, '5') }).toThrowError(new Error('parameters must be numbers'));
  })
})
