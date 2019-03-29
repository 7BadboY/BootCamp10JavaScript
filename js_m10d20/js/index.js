// 'use strict';

// /*
//   Написать функцию fetchCountryData, которая использует
//   API_URL + текущее значение input для составления запроса.
  
//   Формат полного url таков:
//     https://restcountries.eu/rest/v2/name/имя-страны
    
//   С помощью fetch сделать запрос по составленому адресу. 
//   Обязательно обработать вариант с ошибкой запроса используя catch. 
  
//   Результат запроса вывести в поле result в формате:
//     Country name: имя страны
//     Capital: столица
//     Main currency: название денежной единицы
//     Flag: флаг страны
  
//   Все необходимые данные есть в ответе от API.
  
//   PS: при отправке формы перезагружается страница,
//   решите эту задачу вспомнив о том, как остановить
//   поведение по умолчанию.
// */

// const input = document.querySelector("input");
// const form = document.querySelector(".search-form");
// const result = document.querySelector(".result");

// form.addEventListener("submit", fetchCountryData);


// /*
// @param {FormEvent} evt
// */
// function fetchCountryData(evt) {
//     evt.preventDefault();

//     let API_URL = `https://restcountries.eu/rest/v2/name/${input.value}`;
//     fetch(API_URL)
//     .then(response => response.json())
//     .then(data=>{
//         console.log(data);
//         result.innerHTML = `<p>Country name:${data[0].name}</p>
//         <p>Capital:${data[0].capital}</p>
//         <p>Main currency:${data[0].currencies[0].code}</p>
//         <p>Flag:<img style='width:300px' src="${data[0].flag}"></p>`;
        
//     })
//     .catch(result.innerHTML=`<p>Нет такой страны</p>`);
// }


// ----------------------------------------------------m10Task2------------------------------------------------------------------------
