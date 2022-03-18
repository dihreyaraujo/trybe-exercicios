function createDaysOfTheWeek() {
    const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
    const weekDaysList = document.querySelector('.week-days');
  
    for (let index = 0; index < weekDays.length; index += 1) {
      const days = weekDays[index];
      const dayListItem = document.createElement('li');
      dayListItem.innerHTML = days;
  
      weekDaysList.appendChild(dayListItem);
    };
  };
  
  createDaysOfTheWeek();
  
  // Escreva seu código abaixo.

let monthDaysList = document.querySelector('#days'); 

const dezDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];

function monthDays() {
    let dayList = 0;
    for(let index = 0; index < dezDaysList.length; index += 1) {
        dayList = dezDaysList[index];
        let elemento = document.createElement('li');
        elemento.className = 'day'
        elemento.innerText = dayList;
        if(dayList == 24 || dayList == 25 || dayList == 31){
            elemento.className = 'day holiday';
        }
        if(dayList == 4 || dayList == 11 || dayList == 18) {
            elemento.className = 'day friday';
        }
        if(dayList == 25) {
            elemento.className = 'day holiday friday'
        }
        
        monthDaysList.appendChild(elemento);

    }
}

monthDays();

//


let containerButton = document.querySelector('.buttons-container');

function holiday(string) {
    let button = document.createElement('button');
    button.id = 'btn-holiday'
    button.innerText = string;
    containerButton.appendChild(button);

}

holiday('Feriados')

//background color holiday


let btnFeriados = document.getElementById('btn-holiday');
let feriado = document.querySelectorAll('.holiday');
let background = 'rgb(238,238,238)';
let newColor = 'green'


function corBackground() {    
    
    btnFeriados.addEventListener('click', function() {
        for(let index = 0; index < feriado.length; index += 1) {
            if(feriado[index].style.backgroundColor === newColor){
                feriado[index].style.backgroundColor = background;
            }
        
            else{
                feriado[index].style.backgroundColor = newColor;
            }
        }
    })
}

corBackground();


//background color friday

let containerBotao = document.querySelector('.buttons-container');

function friday(string) {
    let botaoF = document.createElement('button');
    botaoF.innerText = string;
    botaoF.id = 'btn-friday';
    containerBotao.appendChild(botaoF);
}

friday('Sexta-feira');


let sexta = document.querySelectorAll('.friday');
let btnSexta = document.getElementById('btn-friday');
let sextaFeira = [4, 11, 18, 25];
let sextouF = 'sextou'


function sextou() {
    for(let index = 0; index < sexta.length; index += 1) {
        if(sexta[index].innerText == sextaFeira[index]) {
            sexta[index].innerText = sextouF;
        }
        else {
            sexta[index].innerText = sextaFeira[index];
        }
    }
}


btnSexta.addEventListener('click', sextou);


//efeito zoom

function dayMouseOver() {
    let dias = document.querySelector('#days');
  
    dias.addEventListener('mouseover', function(event) {
      event.target.style.fontSize = '30px';
      event.target.style.fontWeight = '600';
      event.target.style.transition = '0.2s';
    })
  };
  
  function dayMouseOut() {
    let dias = document.querySelector('#days');
  
    dias.addEventListener('mouseout', function(event) {
      event.target.style.fontWeight = '200';
      event.target.style.fontSize = '20px';
      event.target.style.transition = '0.2s';
    })
  };
  
  dayMouseOver();
  dayMouseOut();


//tarefas

let task = document.querySelector('.my-tasks');

function criarTarefa(string) {
    let span = document.createElement('span');
    span.innerText = string;
    task.appendChild(span);
}

criarTarefa('cozinhar');


//legenda das tasks


function criaLegenda(cor) {
    let container = document.createElement('div');
    container.className = 'task';
    container.style.backgroundColor = cor;
    task.appendChild(container);
}

criaLegenda('green');


//task selecionada

let taskSelecionada = document.querySelector('.task');

function taskSelect() {
    if(taskSelecionada.classList.contains('selected')) {
        taskSelecionada.classList.remove('selected');
    }
    else {
        taskSelecionada.classList.add('selected');
    }
}

taskSelecionada.addEventListener('click', taskSelect);


//adicionando backgroundCOlor


function setDayColor() {
    let selectedTask = document.getElementsByClassName('task selected');
    let days = document.querySelector('#days');
    let taskDiv = document.querySelector('.task');
    let taskColor = taskDiv.style.backgroundColor;
    
    days.addEventListener('click', function(event){
      let eventTargetColor = event.target.style.color;
      if (selectedTask.length > 0 && eventTargetColor !== taskColor) {
        let color = selectedTask[0].style.backgroundColor;
        event.target.style.color = color;
      } else if (eventTargetColor === taskColor && selectedTask.length !== 0) {
        event.target.style.color = 'rgb(119,119,119)';
      }
    });
  };
  
  setDayColor();

  







