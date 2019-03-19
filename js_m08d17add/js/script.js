'use strict'
// ________________________________________m08_task_1________________________________________________________
/*
  Напишите скрипт который реализует следующий функционал.
  
  Есть кнопка с классом button, текст которой отображает 
  кол-во раз которое по ней кликнули, обновляется при каждом клике.
*/

// let buttonClickCounter = document.querySelector('.button');
// buttonClickCounter.addEventListener('click', () => buttonClickCounter.textContent++);

// ______________________________________m08_task_2________________________________________________________

/*
  Даны 2 инпута, абзац и кнопка. По нажатию на кнопку 
  получите числа которые бьудут введены в инпуты и запишите их сумму в span.result.
*/
// let firstInput = document.querySelector('.input1');
// let secondInput = document.querySelector('.input2');
// let button = document.querySelector('button[data-action="add"]');
// let result = document.querySelector('.result');

// function summ(el1, el2) {
//     result.textContent = +el1.value + (+el2.value);
//     return result.textContent;
// }
// button.addEventListener('click', () => summ(firstInput, secondInput));


// _________________________________________m08_task_3_________________________________________________________

/*
  Есть счетчик (спан) и кнопки +1, -1, которые должны увеличивать и уменьшать значение счетчика на 1. 
  
  - Создайте класс Counter, который хранит одно поле value - текущее значение счетчика
  - Класс принимает один параметр - onChange, функцию для обновления интерфейса при изменении счетчика
  - Добавьте классу методы increment и decrement для увеличения и ументшение значения счетчика
  - Привяжите вызовы методов и значение счетчика к раметке
*/

// class Counter {
//     constructor(onChange) {
//         this.value = 0;
//         this.onChange = onChange;
//         this.increment = this.increment.bind(this);
//         this.decriment = this.decriment.bind(this);
//     }

//     increment() {
//         this.value += 1;
//         this.onChange(this.value);
//     }
//     decriment() {
//         this.value -= 1;
//         this.onChange(this.value);
//     }
// }
// let plus = document.querySelector('button[data-action="add"]');
// let minus = document.querySelector('button[data-action="sub"]');
// let valueSpan = document.querySelector('.value');

// function changeValue(value) {
//     valueSpan.textContent = value;
// }

// const counter = new Counter(changeValue);
// console.log(counter.onChange);

// plus.addEventListener('click', counter.increment);
// minus.addEventListener('click', counter.decriment);

// ____________________________________________m08_task_4___________________________________________________________

/*
  Есть форма с набором радиокнопок. Пользователь выбирает вариант ответа, 
  после чего нажимает кнопку "Submit" и происходит отправка формы.
  
  При отправке формы:
    - не должна перезагружаться страница
    - необходимо получить выбранную опцию и вывести в параграф с классом .result
*/

// const questionForm = document.querySelector('question-form');
// let userBtn = document.querySelector('.btn');
// let userChoice = document.querySelectorAll('input');
// let userResult = document.querySelector('.result');

// function submitForm(event) {
//     event.preventDefault();
//     Array.from(userChoice).find(i => i.checked === true ? userResult.textContent = `Result: ${i.value}`: null);
// }
// userBtn.addEventListener('click', submitForm);

// _____________________________________________m08_task_5____________________________________________________________


/*
  Дан список изображений. Сделайте так, чтобы по клику на картинку 
  алертом выводился ее src. Обязательно используйте делегирование событий.
*/

// const imgList = document.querySelector('.images');
// imgList.addEventListener('click', () => alert(event.target.src) );

// _____________________________________________M08_task_6_____________________________________________________________


/*
  Дан ul, а внутри него произвольное количество li с текстом и кнопкой. 
  Сделайте так, чтобы по нажатию на кнопку, удалялся тот li в котором
  она находится. Обязательно используйте делегирование событий.
*/

// const x = document.querySelector('.list');

// function deleteLi (event) {
//     event.preventDefault();
//     let target = event.target;
//     if(target.nodeName !== 'BUTTON') return;
//     target.parentNode.remove();

// }
// x.addEventListener('click', deleteLi);

// _______________________________________________m08_task_7______________________________________________________________

/*
  Дан набор инпутов. Сделайте так, чтобы при потере фокуса все 
  инпуты проверяли свое содержимое на правильное количество символов. 
  
  - Сколько символов должно быть в инпуте, указывается в атрибуте data-length. 
  - Если введено подходящее количество, то outline инпута становится зеленым, 
    если неправильное - красным. Для добавления стилей, на вкладке CSS есть стили valid и invalid
*/

// const x = document.querySelector('.input-list');
// x.addEventListener('focusout', checkInput);

// function checkInput(e) {
//     let y = e.target.value;
//     ['valid', 'invalid'].forEach((k) => e.target.classlist.remove(k));
//     y.length === Number(e.target.dataset.length) ? e.target.classlist.add('valid') : e.target.classlist.add('invalid');
// }

// let inputParent = document.querySelector('.input-list');

// function getResult(el) {
//     el.target.addEventListener('blur', verification);
// }

// function verification (event) {
//     const target = event.target;
//     if (target.value.length === +target.dataset.length) {
//         target.classList.remove("invalid");
//         target.classList.add('valid');
//     } else {
//         target.classList.remove("valid");
//         target.classList.add('invalid');
//     }
// }
// inputParent.addEventListener('click', getResult);

// _______________________________________________________08_task_08_____________________________________________________

/*
  Напишите скрипт который:
    
    - При фокусе текстового поля, в p.message рендерит строку "Input is in focus!"
    - При наборе текста в инпуте (событие input), текущее его значение должно 
      отображаться в p.input-value 
*/

// const mess = document.querySelector('.message');
// const input = document.querySelector('.input');
// const text = document.querySelector('.input-value');
// input.addEventListener('focus', render);
// function render() {
//     mess.textContent = 'input is is focus!';
// };
// function textInput() {
//     text.textContent = `Current input value: ${input.value}`;
// };
// input.addEventListener('input', textInput);

// ________________________________________________________08_task_09______________________________________________________

/*
  На вкладках HTML и CSS уже готовая верстка модального окна.
  По умолчанию модальное окно скрыто классом modal-hidden.
  
  Напишите скрипт который реализует следующее поведение:
 
  - При клике на кнопке с надписью "Open Modal", модальное окно с классом modal, 
    должно появляться. Для этого необходимо убрать класс modal-hidden. 
    Для выбора модального модального окна используйте класс js-modal-backdrop
 
  - При открытом модальном окне, клик на кнопку с крестиком (data-action="close-modal")
    или на серый фон с прозрачностью (js-modal-backdrop), модальное окно должно закрываться.
*/

// let openModal = document.querySelector('.btn');
// let modal = document.querySelector('.modal');
// let closet = document.querySelector('[data-action="close-modal"]');
// modal.addEventListener('click', close);
// openModal.addEventListener('click', open);
// function open () {
//     modal.classList.remove('modal-hidden');
// }
// function close (event) {
//     if(event.target === closet || event.target === modal) {
//         modal.classList.add('modal-hidden')
//     }
// }
// ________________________________________________________08_task_10________________________________________________________

/*
  Ознакомьтесь с HTML и CSS.
  
  Есть меню навигации, необходимо написать скрипт, который
  при клике на пункт меню добавит ему класс active,
  таким образом выделив текущую (активную) ссылку,
  при этом убрав его у всех остальных элементов меню.
  
  Пунктов меню может быть произвольное количество, используйте
  прием делегирование событий. Учтите клик по самому ul, его
  необходимо игнорировать.
  
  При клике по ссылкам не должна перезагружаться страница!
*/
