const lesson1 = {
  materia: 'Matemática',
  numeroEstudantes: 20,
  professor: 'Maria Clara',
  turno: 'manhã',
};

const lesson2 = {
  materia: 'História',
  numeroEstudantes: 20,
  professor: 'Carlos',
};

const lesson3 = {
  materia: 'Matemática',
  numeroEstudantes: 10,
  professor: 'Maria Clara',
  turno: 'noite',
};

function adicionaTurno(obj, key, value){
  return obj[key] = value;
}

adicionaTurno(lesson2, 'turno', 'noite');

function keysDoObjeto(obj) {
  return Object.keys(obj);
}

function tamanhoDoObjeto(obj){
  let tamanho = Object.keys(obj);
  return tamanho.length;
}

function valuesDoObjeto(obj){
  return Object.values(obj);
}

const allLessons = {
  lesson1: Object.assign({}, lesson1),
  lesson2: Object.assign({}, lesson2),
  lesson3: Object.assign({}, lesson3)
}

function numeroDeEstudantes() {
  return allLessons.lesson1.numeroEstudantes + allLessons.lesson2.numeroEstudantes + allLessons.lesson3.numeroEstudantes;
}

function getValueByNumber(obj, number){
  return Object.values(obj)[number];
}

function verifyPair(obj, key, value){
  let chaves = Object.keys(obj);
  if(chaves.includes(key) && obj[key] == value){
    return true;
  }
  else{
    return false;
  }
}
