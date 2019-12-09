'use strict'

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

const min = 10;
const max = 30;
const value = 55;
let message;

if (value < 10) {
    message = 'Less then 10';
} else if (value > 20 && value < 50) {
    message = 'greater then 20 and less then 50';
} else if (value > 60 && value < 80) {
    message = 'greater then 60 and les then 80';
} else {
    message = ':('
}
console.log(message);