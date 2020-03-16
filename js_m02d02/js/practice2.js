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

// Напиши скрипт со следующим функционалом:

// При загрузке страницы пользователю предлагается в prompt ввести число.
// Ввод сохраняется в переменную input и добавляется в массив чисел numbers.
// Операция ввода числа пользователем и сохранение в массив продолжается до тех пор,
// пока пользователь не нажмет Cancel в prompt.
// После того как пользователь прекратил ввод нажав Cancel,
// если массив не пустой,
// необходимо посчитать сумму всех элементов массива и записать ее в переменную total.
// Используй цикл for или for...of. После чего в консоль выведи строку 'Общая сумма чисел равна [сумма]'.
// 🔔 Делать проверку того, что пользователь ввел именно число,
// а не произвольный набор символов, не обязательно.
// Если хочешь, в случае некорректного ввода,
// показывай alert с текстом 'Было введено не число, попробуйте еще раз',
// при этом результат prompt записывать в массив чисел не нужно,
// после чего снова пользователю предлагается ввести число в prompt.

// const numbers = [];
// const userMessage = "Введите число";
// const message = 'Общая сумма чисел равна';
// const erroMsg = 'Было введено не число, попробуйте еще раз';
// let input;
// let total = 0;

// do {
//     input = Number(prompt(userMessage));
//     numbers.push(input);
// }
// while (input !== 0);

// for (const number of numbers) {
//     total += number;
// }
// if (numbers.length >= 1) {
//     alert(`${message} ${total}`);
// }

// console.log(total);

// ------------------------TASK 07---------------

// Есть массив logins с логинами пользователей.
// Напиши скрипт добавления логина в массив logins.
// Добавляемый логин должен:
// проходить проверку на длину от 4 до 16-ти символов включительно
// быть уникален, то есть отсутствовать в массиве logins
// Разбей задачу на подзадачи с помощью функций.

// Напиши функцию isLoginValid(login),
// в которой проверь количество символов параметра login и верни true или false в зависимости от того,
// попадает ли длина параметра в заданный диапазон от 4-х до 16-ти символов включительно.

// Напиши функцию isLoginUnique(allLogins, login),
// которая принимает список всех логинов и добавляемый логин как параметры
// и проверяет наличие login в массиве allLogins,
// возвращая true если такого логина еще нет и false если логин уже используется.

// Напиши функцию addLogin(allLogins, login) которая:

// Принимает новый логин и массив всех логинов как параметры
// Проверяет валидность логина используя вспомогательную функцию isLoginValid
// Если логин не валиден, прекратить исполнение функции addLogin и вернуть строку 'Ошибка! Логин должен быть от 4 до 16 символов'
// Если логин валиден, функция addLogin проверяеть уникальность логина с помощью функции isLoginUnique
// Если isLoginUnique вернет false, тогда addLogin не добавляет логин в массив и возвращает строку 'Такой логин уже используется!'
// Если isLoginUnique вернет true, addLogin добавляет новый логин в logins и возвращает строку 'Логин успешно добавлен!'
// 🔔 Принцип единственной ответственности функции - каждая функция делает что-то одно.
// Это позволяет переиспользовать код и изменять логику работы функции только в одном месте, не затрагивая работу программы в целом.

// Предикатные функции возвращают только true или false. Такие функции принято называть начиная с is: isLoginUnique и isLoginValid в нашем случае.

// isLoginUnique только проверяет есть ли такой логин в массиве и возвращает true или false.
// isLoginValid только проверяет валидный ли логин и возвращает true или false.
// addLogin добавляет или не добавляет логин в массив.
// При этом для проверок условия добавления использует результаты вызовов других функций - isLoginUnique и isLoginValid.
const logins = ["Mango", "robotGoogles", "Poly", "Aj4x1sBozz", "qwerty123"];

const isLoginValid = function (login) {
  return login.length >= 4 && login.length <= 16;
};

const isLoginUnique = function (allLogins, login) {
  if (allLogins.includes(login)) {
    return false;
  }
  return true;
};

const addLogin = function (allLogins, login) {
  if (isLoginValid(login)) {
    if (isLoginUnique(logins, login)) {
      logins.push(login)
      console.log('Логин успешно добавлен');

    } else {
      console.log('Такой логин уже используется');

    }
  } else {
    console.log('Ошибка! Логин должен быть от 4 до 16 символов');
  }
};

/*
 * Вызовы функции для проверки работоспособности твоей реализации.
 */
console.log(addLogin(logins, "Ajax")); // 'Логин успешно добавлен!'
console.log(addLogin(logins, "robotGoogles")); // 'Такой логин уже используется!'
console.log(addLogin(logins, "Zod")); // 'Ошибка! Логин должен быть от 4 до 16 символов'
console.log(addLogin(logins, "jqueryisextremelyfast")); // 'Ошибка! Логин должен быть от 4 до 16 символов'