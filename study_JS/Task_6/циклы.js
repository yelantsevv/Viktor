// -------------for-----------------------------------------------------------

// for (let i = 0; i < 3; i++) {
//     console.log(i);
// }

// -------------while-----------------------------------------------------------
// let i = 0;
// while (i < 5) {
//     console.log(i);
//     i++;
// }

// -----------do-while-----------------------------------------------------------

// let i = 0;
// do {
//     console.log(i);
//     i++;
// } while (i < 3);

// -----------for...in----------------------------------------------------------
// Итерирует по перечислимым свойствам объекта.

// const obj = { a: 1, b: 2, c: 3 };

// for (let key in obj) {
//     console.log(key, obj[key]);
// }

// -----------for...of----------------------------------------------------------

// Итерирует по значениям перебираемых объектов,
//  таких как массивы или строки.

// const arr = [1, 2, 3];

// for (let value of arr) {
//     console.log(value);
// }

// -----------break и continue----------------------------------------------------------

// for (let i = 0; i < 7; i++) {
//   if (i === 2) {
//     continue;
//   }
//   if (i === 5) {
//     break;
//   }
//   console.log(i);
// }

// -----------forEach для массивов----------------------------------------------------------
// Метод forEach используется для итерации по элементам массива.

// const arr = [1, 2, 3];

// arr.forEach(function (element) {
//   console.log(element);
// });
// ---------------------------------------------------------------------

// function regularFunction() {
//     console.log("n Regular Function - this:", this);
// }

// const arrowFunction = () => {
//     console.log("Arrow Function - this:", this);
// };

// const obj = {
//     methodInObject: function() {
//         console.log("Method in Object - this:", this);

//         // Обычная функция внутри метода
//         function innerRegularFunction() {
//             console.log("Inner Regular Function - this:", this);
//         }
//         innerRegularFunction();

//         // Стрелочная функция внутри метода
//         const innerArrowFunction = () => {
//             console.log("Inner Arrow Function - this:", this);
//         };
//         innerArrowFunction();

//     }
// };

// regularFunction(); // this указывает на глобальный объект (в браузере - на window)
// arrowFunction();   // this также указывает на глобальный объект (в браузере - на window)
// obj.methodInObject();

// ---------------------------------------------------------------------
// 1. Метод объекта:
// Если функция является методом объекта, то ее область видимости
// будет определена объектом, к которому она привязана.

// const myObject = {
//     myMethod: function() {
//         console.log("This is a method of myObject", this);
//     }
// };

// myObject.myMethod(); // Вызов метода, область видимости - myObject

// // ---------------------------------------------------------------------

// const myObject = {};

// myObject.myFunction = function() {
//     console.log("This is a function property of myObject", this);
// };

// myObject.myFunction(); // Вызов функции, область видимости - myObject

// // ---------------------------------------------------------------------

// class Rectangle {
//   constructor(width, height) {
//     this.width = width;
//     this.height = height;
//   }

//   calculateArea(wer = 2) {
//     return this.width * this.height + wer;
//   }
// }

// const rectangle = new Rectangle(5, 10);
// console.log(rectangle.calculateArea(4)); // Выведет: 50

// // ---------------------------------------------------------------------

// const dynamicMethods = {
//     addMethod(name, func) {
//         this[name] = func;
//     }
// };

// dynamicMethods.addMethod("sayHello", function() {
//     console.log("Hello!");
// });

// dynamicMethods.sayHello(); // Выведет: Hello!

// // ---------------------------------------------------------------------

// const dynamicMethodsExample = {}

// function sayHello() {
//     console.log("Hello!");
// }

// dynamicMethodsExample.addMethod = function(name, func) {
//     this[name] = func;
// };

// dynamicMethodsExample.addMethod("sayHello", sayHello);

// dynamicMethodsExample.sayHello(); // Выведет: Hello!

// // ---------------------------------------------------------------------

const startValues = [5, 8, 3];

for (let j = 0; j < startValues.length; j++) {
    let startValue = startValues[j];

    for (let i = startValue; i < 10; i++) {
        console.log(i);
    }
}

