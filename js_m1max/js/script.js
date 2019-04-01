'use strict';

// 1. Зайдите в консоль своего браузера. При помощи оператора определения типа уточните тип следующих величин: «Привет», 123, true, «true».

// const str = 'Hello';
// const num = 123;
// const bull = true;
// const bull1 = 'true';

// console.log(typeof str);
// console.log(typeof num);
// console.log(typeof bull);
// console.log(typeof bull1);




// 2. Зайдите в консоль своего браузера. При помощи математических операторов (сложение, вычитание и т.д.) найдите значения выражений: 5 + 3, 5 — 3, 5 * 3, 5 / 3.

// let a = 5;
// let b = 3;

// console.log(a + b);
// console.log(a - b);
// console.log(a * b);
// console.log(a / b);



// 3. Зайдите в консоль своего браузера. При помощи оператора нахождения остатка от деления %, найдите значения выражений: 5 % 3, 3 % 5.

// let a = 5;
// let b = 3;

// console.log(5 % 3);
// console.log(3 % 5);


// 4. Зайдите в консоль своего браузера. При помощи оператора + (сложение, склеивание) найдите значения выражений: 5 + ‘3’ , ‘5’ — 3, 75 + ‘кг’.

// let ab = "5";
// let bc = "3";
// let c = 75;
// let d = 'kg';


// console.log(a+bc);
// console.log(ab-b);
// console.log(c+d);






// 5. Создайте переменные строкового, числового и булева типов. Выведите их содержимое.

// let a = 7;
// let b = '7';
// let c = false;

// console.log(a, b , c);


// 6. Напишите скрипт, который находит площадь прямоугольника длиной 23см., шириной 10см.

// let width = 10;
// let heith = 23;

// console.log("square of rectainmble ", width * heith);

// 7. (*) Найди двенадцатый элемент последовательности Леонардо Пизанского (нужно использовать функцию Math.pow(число, степень))


// 8. (*) Даны размер ипотечного кредита, процентная ставка, кол-во лет. Найти переплату по кредиту.

// _________________________________
// 9) Створіть змінну num і надайте їй значення 3. Виведіть значення цієї змінної на екран за допомогою методу alert

// let num = 3;
// alert(num);

// // 10) Створіть змінні a = 10 і b = 2. Виведіть на екран їх суму, різницю, добуток і частку (результат ділення)

// let a = 10;
// let b = 2;

// console.log(a+b);
// console.log(a-b);
// console.log(a*b);
// console.log(a/b);
// console.log(a%b);


// 11) Створіть змінні c = 15 і d = 2. Підсумуйте їх, а результат надайте змінної result. Виведіть на екран значення змінної result

// let c = 15;
// let d = 2;

// let result = c + d;

// console.log(result);


// 12) Створіть змінні a = 10, b = 2 і c = 5. Виведіть на екран їх суму.

// let a = 10;
// let b = 2;
// let c = 5;

// let result = a + b + c;

// console.log(result);


// 13) Створіть змінні a = 17 і b = 10. Відніміть від a змінну b і результат надайте зміннії c. Потім створіть змінну d, надайте їй значення 7. Складіть змінні c і d, а результат запишіть в змінну result. Виведіть на екран значення змінної result.

// let a = 17;
// let b = 10;
// let c = a - b;

// let d = 7; 
// let result = c + d
// console.log(result);


// 14) Запитайте ім'я користувача за допомогою методи prompt. Виведіть за допомогою alert повідомлення 'Ваше ім'я
// %значення що отримали з prompt%'

// let ask = prompt('What is your name?', '');
// let answr = alert(ask);

// 15) Створіть три змінні - година, хвилина, секунда. З їх допомогою виведіть поточний час в форматі 'година: хвилина: секунда'.

// let houre = 4;
// let second = 15;
// let minutes = 10;

// console.log(`${houre}:${minutes}:${second}`);



// 16) Створіть змінну, надайте їй число. Зведіть це число в квадрат. Виведіть його на екран

// let a = 2;
// // let result = Math.pow(a, 2);
// console.log(Math.pow(a, 2));


// 17) Переробіть цей код так, щоб в ньому використовувалися операції + =, - =, * =, / =. Кількість рядків коду при цьому не повинно змінитися.

//   var num = 47;
//   num += 7;
//   num -= 18;
//   num *= 10;
//   num /= 15;
//   alert (num);


// 18) Створіть змінну str і надайте їй значення 'Hello World'. Виведіть значення цієї змінної на екран

// let str = 'Hello World';
// console.log(str);


// 19) Створіть змінні str1 = 'Hello,' і str2 = 'World!'. За допомогою цих змінних і операції додавання рядків виведіть на екран фразу 'Hello World'.

// let str1 = 'Hello ';
// let str2 = 'World!';

// console.log(str1 + str2);


// 20) Створіть змінну name і надайте їй ваше ім'я. Створіть змінну age і надайте їй ваш вік. Виведіть на екран 'Привіт, я  % Ім'я%!'Мені% Вік% років!'.

// let name = 'Sergey';
// let age = 30;

// console.log(`Hello. I'm ${name} I have ${age} years old`);


// 21) Створіть змінну str і надайте їй значення 'abcde'. Звертаючись до окремих символів цього рядка виведіть на екран символ 'a', символ 'c', символ 'e'

// let str = "abcde";

// console.log(str[0], str[2], str[4]);


// 22) Створіть змінну num і надайте їй значення '12345'. Знайдіть суму, різницю, добуток, частку цифр цього числа
// і виведіть ці значення в консоль

// let num = '12345';

// let sum = Number(num[0]) + Number(num[1]) + Number(num[2]) + Number(num[3]) + Number(num[4]);
// let minus = Number(num[0]) - Number(num[1]) - Number(num[2]) - Number(num[3]) - Number(num[4]);
// let dub = Number(num[0]) * Number(num[1]) * Number(num[2]) * Number(num[3]) * Number(num[4]);
// let down = Number(num[0]) / Number(num[1]) / Number(num[2]) / Number(num[3]) / Number(num[4]);

// console.log(sum, minus, dub, down);

// 23) Дана рядок 'js'. Зробіть з неї рядок 'JS'.

// let a = 'js';
// console.log(a.toUpperCase());


// 24) Дана рядок 'JS'. Зробіть з неї рядок 'js'

// let a = 'JS';
// console.log(a.toLowerCase());


// 25) Дана рядок 'я вчу javascript!'. Знайдіть кількість символів в цьому рядку.

// let a = "I'm learning JavaScript";
// console.log(a.length);


// 26) Даны переменные a = 10 и b = 3. Найдите остаток от деления a на b.

// let a = 10;
// let b = 3;

// console.log(a%b);


// 27) Возведите 2 в 10 степень. Результат запишите в переменную st.

// let a = 2;
// let b = 10;

// let result = Math.pow(a,b);



// 28) Найдите квадратный корень из 245.

// console.log(Math.sqrt(245));


// 29) Найдите квадратный корень из 379. Результат округлите до целых, до десятых, до сотых. (toFixed(0))

// let result = Math.sqrt(379);

// console.log(result.toFixed(0));
// console.log(result.toFixed(2));
// console.log(result.toFixed(3));



// 30) Найдите квадратный корень из 587. Округлите результат в большую и меньшую стороны (edited) 
// Перечень методов для работы со строками

let sqr = Math.sqrt(587);

let max = Math.ceil(sqr);
let min = Math.floor(sqr);

console.log(sqr);

console.log(max, min);


















// __________________________________________________________________________Teory_________________________________________________________________________________________
// const a = {
//     first: 10,
//     second: 20
// }
// console.log(a);


// let show = prompt("bla bla", '');
// let afterShow = Number(show);

// const a = 10;
// const b = 5;
// let result; 
// result = a * b;

// console.log(result);
// console.log(result * 2);

// let num = "5";
// let numTypeOf = Number(num);
// let showNan = typeof numTypeOf;

// console.log(showNan);


// console.log(Number.isNaN(numTypeOf));


// console.log(Number.parseInt("322px"));

// let num = Number.parseInt("254px20os");
// console.log(typeof num);

// let px = "23px";
// console.log(px);

// let num = Number.parseFloat("24.95px");
// console.log(num);


// let string = "Hello my dear friend";
// console.log(string.split(''));
// console.log(string.length);
// let newMass = string.split(' ');
// console.log(newMass[newMass.length -2]);
// console.log(string.includes("Hello "));


