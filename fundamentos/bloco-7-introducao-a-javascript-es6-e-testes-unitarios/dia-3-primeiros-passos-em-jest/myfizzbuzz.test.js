const myFizzBuzz = require('./myfizzbuzz.js');

describe('Requisito 3', () => {
  it('Verifica se retorna fizzbuzz quando colocado um número divisível por 3 e por 5', () => {
    expect(myFizzBuzz(15)).toBe('fizzbuzz');
  });
  it('Verifica se retorna fizz quando colocado um número divisível por 3', () => {
    expect(myFizzBuzz(9)).toBe('fizz');
  });
  it('Verifica se retorna buzz quando colocado um número divisível por 5', () => {
    expect(myFizzBuzz(25)).toBe('buzz');
  });
  it('Verifica se retorna o número quando colocado um número que não é divisível por 3 e por 5', () => {
    expect(myFizzBuzz(2)).toBe(2);
  });
  it('Verifica se retorna false quando colocado um parâmetro que não é tipo number', () => {
    expect(myFizzBuzz('9')).toBe(false);
  });
});