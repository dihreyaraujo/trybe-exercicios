//Fixando o conteúdo arrays

let menu = ['Home', 'Serviços', 'Portfólio', 'Links'];
let menuServices = menu[1] ;

console.log(menuServices);

//

let menu = ['Home', 'Serviços', 'Portfólio', 'Links'];
let indexOfPortfolio = menu.indexOf('Portfólio');

console.log(indexOfPortfolio);

//

let menu = ['Home', 'Serviços', 'Portfólio', 'Links'];
menu.push('Contato')
console.log(menu);

//Fixando Conteúdo FOR

let groceryList = ['Arroz', 'Feijão', 'Alface', 'Melancia'];

for (let index = 0; index < groceryList.length; index +=1) {
    console.log(groceryList[index]);
}

//Fixando Conteúdo For/of

let names = ['João', 'Maria', 'Antônio', 'Margarida'];

for (let name of names) {
    console.log(name)
}

