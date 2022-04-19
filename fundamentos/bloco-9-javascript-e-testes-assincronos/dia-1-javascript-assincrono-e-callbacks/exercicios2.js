const uppercase = (str, callback) => {
  setTimeout(() => {
    callback(str.toUpperCase());
  }, 500);
};

function maiusculo (callback) {
  return callback;
}

test('Verifica se é Upper Case', (done) => {
  setTimeout(() => {
    try {
      const maiuscula = uppercase('dihrey', maiusculo());
      expect(maiuscula).toBe('DIHREY');
      done();
    } catch(error) {
      done(error);
    }
  });
})