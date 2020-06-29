"use strict";

// ============================================  task 1  ==============================================
// Напиши скрипт, который, для объекта user, последовательно:

// добавляет поле mood со значением 'happy'
// заменяет значение hobby на 'skydiving'
// заменяет значение premium на false
// выводит содержимое объекта user в формате ключ:значение используя Object.keys() и for...of
//
// const user = {
//   name: "Mango",
//   age: 20,
//   hobby: "html",
//   premium: true,
// };

// user.mood = "happy";
// user.hobby = "skydiving";
// user.premium = false;
// console.log(user);

// const keys = Object.keys(user);
// for (const key of keys) {
//   console.log(key, user[key]);
// }

// ============================================  task 2  ==============================================

// // Напиши функцию countProps(obj), считающую кол-во свойств в объекте. Функция возвращает число - количество свойств.

// // const countProps = function (obj) {
// //   return Object.keys(obj).length;
// // };

// // /*
// //  * Вызовы функции для проверки работоспособности твоей реализации.
// //  */
// // console.log(countProps({})); // 0

// // console.log(countProps({ name: "Mango", age: 2 })); // 2

// // console.log(countProps({ mail: "poly@mail.com", isOnline: true, score: 500 })); // 3

// // ============================================  task 3  ==============================================

// // Напиши функцию findBestEmployee(employees), которая принимает объект сотрудников и возвращает имя самого продуктивного
// // (который выполнил больше всех задач).
// // Сотрудники и кол-во выполненых задач содержатся как свойства объекта в формате "имя":"кол-во задач".

// const findBestEmployee = function (employees) {
//   let tasks = 0;
//   let name;
//   let keys = Object.keys(employees);
//   for (const key of keys) {
//     if (tasks < employees[key]) {
//       tasks = employees[key];
//       name = key;
//     }
//   }
//   return name;
// };

// /*
//  * Вызовы функции для проверки работоспособности твоей реализации.
//  */
// console.log(
//   findBestEmployee({
//     ann: 29,
//     david: 35,
//     helen: 1,
//     lorence: 99,
//   })
// ); // lorence

// console.log(
//   findBestEmployee({
//     poly: 12,
//     mango: 17,
//     ajax: 4,
//   })
// ); // mango

// console.log(
//   findBestEmployee({
//     lux: 147,
//     david: 21,
//     kiwi: 19,
//     chelsy: 38,
//   })
// ); // lux

// ============================================  task 4  ==============================================

// // Напиши функцию countTotalSalary(employees) принимающую объект зарплат.
// // Функция считает общую сумму запрплаты работников и возращает ее.
// // Каждое поле объекта, передаваемого в функцию, имеет вид "имя":"зарплата".

// const countTotalSalary = function (employees) {
//   let total = 0;
//   const sumOfSalaries = Object.values(employees);
//   for (const value of sumOfSalaries) {
//     total += value;
//   }
//   return total;
// };

// /*
//  * Вызовы функции для проверки работоспособности твоей реализации.
//  */
// console.log(countTotalSalary({})); // 0

// console.log(
//   countTotalSalary({
//     mango: 100,
//     poly: 150,
//     alfred: 80,
//   })
// ); // 330

// console.log(
//   countTotalSalary({
//     kiwi: 200,
//     lux: 50,
//     chelsy: 150,
//   })
// ); // 400

// ============================================  task 5  ==============================================

// Напиши функцию getAllPropValues(arr, prop),
//  которая получает массив объектов и имя свойства.
//  Возвращает массив значений определенного свойства prop из каждого объекта в массиве.

const products = [
  { name: "Радар", price: 1300, quantity: 4 },
  { name: "Сканер", price: 2700, quantity: 3 },
  { name: "Дроид", price: 400, quantity: 7 },
  { name: "Захват", price: 1200, quantity: 2 },
];

const getAllPropValues = function (arr, prop) {
  const values = [];
  for (const product of products) {
    // console.log(product[prop]);
    if (prop in product) {
      values.push(product[prop]);
    }
  }
  return values;
};

/*
 * Вызовы функции для проверки работоспособности твоей реализации.
 */
console.log(getAllPropValues(products, "name")); // ['Радар', 'Сканер', 'Дроид', 'Захват']

console.log(getAllPropValues(products, "quantity")); // [4, 3, 7, 2]

console.log(getAllPropValues(products, "category")); // []
