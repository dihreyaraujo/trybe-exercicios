// escreva greet abaixo

const greet = (user = 'pessoa', saudacao = 'Hi') => `${saudacao} ${user}`

console.log(greet('John')) // 'Hi John'
console.log(greet('John', 'Good morning')) // 'Good morning John'
console.log(greet('Isabela', 'Oi')) // 'Oi Isabela'