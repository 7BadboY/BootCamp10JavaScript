'use strict'

// =====================================================================Additional=======================================================================

// const list = document.querySelector('.list')
// const element = ['Html', 'CSS', 'JavaScript', 'React', 'Node'];
// const mark = elements.reduce((string, i)=>string + `<li>${i}</li>`, "");
// list.innerHTML = mark;


// =======================================05==============================================

/*
  Есть список с классом .size-filter из произвольного 
  количества чекбоксов, каждый из которых содержит 
  размер одежды в фильтре.
  
  Напишите функцию collectInputData(inputs), которая
  принимает 1 параметр inputs - массив тех инпутов
  у которых состояние checked.
  
  Возвращает массив значений атрибута value.
*/
// let arrInput = document.querySelectorAll('input:checked');
// console.log(arrInput);
// function collectInputData(inputs) {
//     return Array.from(inputs).map(element => element.value);
// }
// console.log(collectInputData(arrInput));


// ========================================06===============================================
/*
  Создайте функцию createMovieCard(), которая 
  создает и возвращает DOM-узел карточки кинофильма.
  
  Разметка с классами есть на вкладке HTML.
  Стили на вкладке CSS.
  
  Используйте createElement для создания узлов.
  Добавьте классы и атрибуты.
*/

// ========================================07================================================

/*
  В HTML-документе уже есть тег с id="root" (вкладка HTML)
  
  Создайте функцию createBoxes(num), которая принимает 1 параметр num - число.
  
  Функция создает столько div, сколько указано в num и возвращает их в одном
  общем контейнере. После чего необходимо повесить результат работы функции
  в div с id="#root"
  
  Каждый div:
    - Имеет случайный rgb цвет фона
    - Размеры самого первого div - 30px на 30px.
    - Каждый следующий div после первого, должен быть шире и выше предыдущего
      на 10px
*/

// let userInput = +prompt('Enter a number');

// function randomColor () {
//   let result = '';
//   let max = 255;
//   return result = `rgb(${Math.floor(Math.random() * (255 + 1))}, ${Math.floor(Math.random() * (255 + 1))}, ${Math.floor(Math.random() * (255 + 1))} )`;
// }
// console.log(randomColor());

// function createBoxes(num) {
//   let container = document.createElement('div');
//   let mainDiv = document.querySelector('#root');
//   let i = 1;
//   let width = 30;
//   let height = 30;

//   do {
//     // let divs = document.createElement('div');
//     // divs.style.backgroundColor = randomColor();
//     // divs.style.width = width +'px';
//     // divs.style.height = height +'px';  
//     container.innerHTML += `<div style = 'width: ${width + "px"}; height: ${height + "px"}; background-color: ${randomColor()} '></div>`;
//     i++;
//     width += 10;
//     height += 10;
//   } while (i <= num);

//   mainDiv.append(container);
// }
// createBoxes(userInput);
// // let max = 255;
// // function randomColor() {
//   // let a = Math.floor(Math.random() * (255 + 1) );
//   // let b = Math.floor(Math.random() * (255 + 1) );
//   // let c = Math.floor(Math.random() * (255 + 1) );
//   // result = `rgb (${Math.floor(Math.random() * (255 + 1) )}, ${Math.floor(Math.random() * (255 + 1) )}, ${Math.floor(Math.random() * (255 + 1) )})`;
// // }