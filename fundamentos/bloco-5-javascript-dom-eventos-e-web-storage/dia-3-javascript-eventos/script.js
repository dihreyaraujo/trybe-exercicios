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

holiday('feriados')



// function changeBackground() {
//     let feriado = document.getElementsByClassName('holiday')
//     for(let index = 0; index < feriado.length; index += 1) {
//     feriado[index].style.backgroundColor = '#BDECB6';
//     }
// }


    

function corBackground() {    
    let btnFeriados = document.getElementById('btn-holiday');
    let feriado = document.querySelectorAll('.holiday'); 
    
    btnFeriados.addEventListener('click', function() {
        for(let index = 0; index < feriado.length; index += 1) {
            
            if(feriado[index].style.backgroundColor !== '#BDECB6'){
                feriado[index].style.backgroundColor = '#BDECB6';
            }
        
            else {
                feriado[index].style.backgroundColor = 'rgb(238,238,238)';
            }
        }
    })
}

corBackground();







