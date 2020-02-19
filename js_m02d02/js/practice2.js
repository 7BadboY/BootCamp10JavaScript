"use strict";
// ------------------------TASK 01---------------

// Напиши функцию logItems(array), 
// которая получает массив и использует цикл for, 
// который для каждого элемента массива будет выводить 
// в консоль сообщение в формате [номер элемента] - [значение элемента].

// Нумерация должна начинаться с 1. 
// К примеру для первого элемента массива ['Mango', 'Poly', 'Ajax']
//  с индексом 0 будет выведено '1 - Mango', 
//  а для индекса 2 выведет '3 - Ajax'.

// const logItems = function(array) {
//   for (let i = 0; i < array.length; i += 1) {
//     console.log(`${i + 1} - ${array[i]}`);
//   }
// };

// /*
//  * Вызовы функции для проверки работоспособности твоей реализации.
//  */
// logItems(["Mango", "Poly", "Ajax", "Lux", "Jay", "Kong"]);

// logItems([5, 10, 15, 20, 25, 30, 35, 40, 45, 50]);

// ------------------------TASK 02---------------

// Напиши скрипт подсчета стоимости гравировки украшений. 
// Для этого создай функцию calculateEngravingPrice(message, pricePerWord) 
// принимающую строку (в строке будут только слова и пробелы) 
// и цену гравировки одного слова, 
// и возвращающую цену гравировки всех слов в строке.

// const calculateEngravingPrice = function(message, pricePerWord) {
//   const words = message.split(" ");
//   const total = words.length * pricePerWord;

//   return total;
// };

// /*
//  * Вызовы функции для проверки работоспособности твоей реализации.
//  */
// console.log(
//   calculateEngravingPrice(
//     "Proin sociis natoque et magnis parturient montes mus",
//     10
//   )
// ); // 80

// console.log(
//   calculateEngravingPrice(
//     "Proin sociis natoque et magnis parturient montes mus",
//     20
//   )
// ); // 160

// console.log(
//   calculateEngravingPrice("Donec orci lectus aliquam est magnis", 40)
// ); // 240

// console.log(
//   calculateEngravingPrice("Donec orci lectus aliquam est magnis", 20)
// ); // 120

// ------------------------TASK 03---------------

// Напиши фукцнию findLongestWord(string), 
// которая принимает параметром произвольную строку 
// (в строке будут только слова и пробелы) 
// и возвращает самое длинное слово в этой строке.

// const findLongestWord = function(string) {
//   const words = string.split(" ");
//   let longestWord = words[0];

//   for (const word of words) {
//     if (word.length > longestWord.length) {
//       longestWord = word;
//     }
//   }
//   console.log(longestWord);
// };

// /*
//  * Вызовы функции для проверки работоспособности твоей реализации.
//  */
// console.log(findLongestWord("The quick brown fox jumped over the lazy dog")); // 'jumped'

// console.log(findLongestWord("Google do a roll")); // 'Google'

// console.log(findLongestWord("May the force be with you")); // 'force'

// ------------------------TASK 04---------------

// Напиши функцию formatString(string) 
// которая принимает строку и форматирует ее если необходимо.

// Если длина строки не превышает 40 символов, 
// функция возвращает ее в исходном виде.
// Если длина больше 40 символов, 
// то функция обрезает строку до 40-ка символов 
// и добавляет в конец строки троеточие '...', 
// после чего возвращает укороченную версию.

// const formatString = function(string) {
//   if (string.length <= 40) {
//     return string;
//   } else {
//     const newString = `${string.slice(0, 40)}...`;
//     return newString;
//   }
// };

// console.log(formatString("Curabitur ligula sapien, tincidunt non."));
// console.log(formatString("Vestibulum facilisis, purus nec pulvinar iaculis."));
// console.log(formatString("Curabitur ligula sapien."));
// console.log(
//   formatString(
//     "Nunc sed turpis. Curabitur a felis in nunc fringilla tristique."
//   )
// );
// ------------------------TASK 05---------------

// Напиши функцию checkForSpam(message), 
// принимающую 1 параметр message - строку. 
// Функция проверяет ее на содержание слов spam и sale. 
// Если нашли зарещенное слово то функция возвращает true, 
// если запрещенных слов нет функция возвращает false. 
// Слова в строке могут быть в произвольном регистре.

// const checkForSpam = function (message) {
//     const registry = message.toLowerCase();
//     const censoredWord1 = 'spam';
//     const censoredWord2 = 'sale';
//     console.log(registry);
//     if (registry.includes(censoredWord1) || registry.includes(censoredWord2)) {
//         return true;
//     }
//     return false;

// };

// /*
//  * Вызовы функции для проверки работоспособности твоей реализации.
//  */
// console.log(checkForSpam("Latest technology news")); // false

// console.log(checkForSpam("JavaScript weekly newsletter")); // false

// console.log(checkForSpam("Get best sale offers now!")); // true

// console.log(checkForSpam("[SPAM] How to earn fast money?")); // true

// ------------------------TASK 06---------------