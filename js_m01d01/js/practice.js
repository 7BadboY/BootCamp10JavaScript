"use strict";

// let input = prompt('type number from 1 to 10');

// input = Number(input);

// const isNaN = Number.isNaN(input);
// console.log(isNaN);
// console.log(input);

// const isCorrect = input >= 1 && input <= 10;

// console.log(typeof input);

// const boxWidthInPx = '25px';
// const width = Number.parseInt('25px');
// console.log(width);

// const boxWidthInPx = '25.5px';
// const width = Number.parseFloat(boxWidthInPx);
// console.log(width);

// ==========================================================================================

// console.log(0.2 + 0.1); //0.30000000000000004
// console.log(0.2 + 0.1 === 0.30000000000000004); // true

// console.log((0.2 * 10 + 0.1 * 10) / 10); // 0.3

// const title = 'Samsung';
// const result = 'sam';

// const passed = title.toLowerCase().includes(result.toLowerCase());
// console.log(passed);

// ============================================== (logical &&) ============================================

// const min = 10;
// const max = 30;
// const value = 25;

// // const inRange = value > min && value < max; //true && true
// // console.log(inRange);

// // -----------------------
// console.log(1 && 2 && 3 && 4 && 6); //6 (last value if true or false value)

// // ============================================== (logical ||) ============================================

// console.log(0 || null || 3 || 5); // 3 (come back first true value)

// // ============================================== (logical ! ) ============================================

// console.log(!true); // false
// console.log(!1); // false
// console.log(!''); // true

// ============================================== ( Branching ) ============================================
// ==============================================     ( if )    ============================================

// const min = 10;
// const max = 30;
// const value = 25;

// const isInRange = value > 10 && value < 30;

// if (isInRange) {
//     console.log('Number is in range'); // if true
// }
// console.log('after if'); // if false

// ============================================== ( if else ) ============================================

// const min = 10;
// const max = 30;
// const value = 325;

// const isInRange = value > 10 && value < 30;

// if (isInRange) {
//     console.log('Number is in range');
// } else {
//     console.log('Number is not in range');
// }
// console.log('after if');

// ---------------------------------------

// const min = 10;
// const max = 30;
// const value = 325;
// let message;

// const isInRange = value > 10 && value < 30;

// if (isInRange) {
//     message = 'Number is in range';
// } else {
//     message = 'Number is not in range';
// }
// console.log(message);

// ============================================== ( else...if ) ============================================

// const min = 10;
// const max = 30;
// const value = 55;
// let message;

// if (value < 10) {
//     message = 'Less then 10';
// } else if (value > 20 && value < 50) {
//     message = 'greater then 20 and less then 50';
// } else if (value > 60 && value < 80) {
//     message = 'greater then 60 and les then 80';
// } else {
//     message = ':('
// }
// console.log(message);

// ============================================== ( Ternary ) ============================================
// const переменная = условие ? опция1 : опция2;

// const IsActive = !true;

// const message = IsActive ? 'Active' : 'Inactive';

// console.log(message);

// ============================================== ( Variable scope ) ============================================

// if (15 > 10) {
//     const message = 'hello!';
// }
// console.log(message); // message is not defined
// ============================================== ( Switch ) ============================================

// const TAKEOUT = 0;
// const COURIER = 1;
// const POST = 2;

// const promptLabel = `Выбери опцию доставки: ${TAKEOUT} - свмовывоз, ${COURIER} - курьер, ${POST} - почта`;
// let useerChoise = prompt(promptLabel);
// let message;

// if (useerChoise === null) {
//   message = "очень жаль приходите ещё";
// } else {
//   useerChoise = Number(useerChoise);

//   switch (useerChoise) {
//     case TAKEOUT:
//       message = "go alone";
//       break;
//     case COURIER:
//       message = "Thanks, we were delivered to you soon";
//       break;
//     case POST:
//       message = "delivered to you yesterday";
//       break;
//     default:
//       message = "nothing selected";
//       break;
//   }
// }
// console.log(message);

// _____________________________________________________________________________________________________

// -----------------------------------------  Tasks  ---------------------------------------------------

// _____________________________________________________________________________________________________

// Задание 1
// Объяви две переменные хранящие название и цену товара: name и price
// Присвой переменным следующие характеристики товара (сразу при объявлении)
// название: Генератор защитного поля
// цена: 1000
// Используя шаблонную строку выведи в консоль информацию о товаре, получится: 'Выбран «Генератор защитного поля», цена за штуку 1000 кредитов'.
// Присвой товару новую цену - 2000
// Используя шаблонную строку выведи в консоль информацию о товаре, получится: 'Выбран «Генератор защитного поля», цена за штуку 2000 кредитов'.

// let name = "Генератор защитного поля";
// let price = 1000;

// console.log(`Выбран ${name}, цена за штуку ${price} кредитов`);

// price = 2000;

// console.log(`Выбран ${name}, цена за штуку ${price} кредитов`);

// =========================================================================================================

// Напиши скрипт проверки количества товаров на складе. Есть переменные total (количество товаров на складе) и ordered (единиц товара в заказе).

// Сравни эти значения и по результатам выведи:

// Если в заказе указано число, превышающее количество товаров на складе, то выведи сообщение "На складе недостаточно твоаров!".
// В другом случае выводи сообщение "Заказ оформлен, с вами свяжется менеджер".
// Проверь работоспособность кода с разными значениями переменной ordered, например 20, 80 и 130.

const total = 100;
let ordered = prompt("Введите количество товара");

ordered = Number(ordered);
if (ordered >= total) {
  alert("На складе недостаточно твоаров!");
} else if (ordered === 0) {
  ordered = prompt("Введите количество товара");
} else {
  alert("Заказ оформлен, с вами свяжется менеджер");
}
