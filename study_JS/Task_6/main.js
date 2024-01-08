// function map(f, a) {
//   var result = []; // Создаём новый массив
//   var i; // Объявляем переменную
//   for (i = 0; i != a.length; i++) result[i] = f(a[i]);
//   return result;
// }
// var f = function (x) {
//   return x * x * x;
// };
// var numbers = [0, 1, 5, 5, 10];
// var cube = map(f, numbers);
// console.log(cube);

// - - - -- - - - - - - - - - - -Вызов функции и область видимости  - - - - - -  - - - - - - - - - - - - - - - -  - - - - - - - - - - - - - - - - - -
// console.log(square); // square поднят со значением undefined.
// // console.log(square(5)); // TypeError: square is not a function
// // если объявить переменную через let  будут ошибки

// var square = function (n) {
//   return n * n;
// };
// console.log(square); // square выведена как строка без ()  бедет  ƒ (n) {return n * n;}
// console.log(square(5)); // результат 25

// - - - -- - - - - - - - - - -Cтек  - - - - - - -  - - - - - - - - - - - - - - - -  - - - - - - - - - - - - - - - - - -

// function foo(i) {
//   if (i < 0) return;
//   console.log("begin: " + i);
//   foo(i - 1);
//   console.log("end: " + i);
// }
// foo(3);

// - - - -- - - - - - - - - - -  - - - - - - -  - - - - - - - - - - - - - - - -  - - - - - - - - - - - - - - - - - -

function addSquares(a, b) {
  function square(x) {
    return x * x;
  }
  return square(a) + square(b);
}
a = addSquares(2, 3); // возвращает 13
b = addSquares(3, 4); // возвращает 25
c = addSquares(4, 5); // возвращает 41
 
console.log(a ,b ,c);
console.log(addSquares.length);

// - - - -- - - - - - - - - - -  - - - - - - -  - - - - - - - - - - - - - - - -  - - - - - - - - - - - - - - - - - -

// function outside(x) {
//   function inside(y) {
//     return x + y;
//   }
//   return inside;
// }
// fn_inside = outside(3); // Думайте об этом как: дайте мне функцию,
// // которая добавляет 3 к любому введенному значению

// result = fn_inside(5); // возвращает 8

// result1 = outside(3)(5); // возвращает 8

// console.log(result, result1, fn_inside(0),  outside);

// - - - -- - - - - - - - - - -  - - - - - - -  - - - - - - - - - - - - - - - -  - - - - - - - - - - - - - - - - - -

// function A(x) {
//   function B(y) {
//     function C(z) {
//       console.log(x + y + z);
//     }
//     C(3);
//   }
//   B(2);
// }
// A(1); // в консоле выводится 6 (1 + 2 + 3)

// - - - -- - - - - - - - - - -  - - - - - - -  - - - - - - - - - - - - - - - -  - - - - - - - - - - - - - - - - - -

// function outside() {
//   let x = 5;
//   function inside(x) {
//     return x * 2;
//   }
//   return inside;
// }

// // outside()(10); // возвращает 20 вместо 10

// console.log(outside(7)(10));

// - - - -- - - - - - - - - - -  - - - - - - -  - - - - - - - - - - - - - - - -  - - - - - - - - - - - - - - - - - -

// var pet = function (name) {
//   // Внешняя функция объявила переменную "name"
//   var getName = function () {
//     return name; // Вложенная функция имеет доступ к "name" внешней функции
//   };
//   return getName; // Возвращаем вложенную функцию, тем самым сохраняя доступ
//   // к ней для другого scope
// };
// myPet = pet("Vivie");

// // myPet(); // Возвращается "Vivie",
// // т.к. даже после выполнения внешней функции
// // name сохранился для вложенной функции

// console.log(myPet());

// - - - -- - - - - - - - - - -  - - - - - - -  - - - - - - - - - - - - - - - -  - - - - - - - - - - - - - - - - - -

// var getCode = (function () {
//   var apiCode = "0]Eal(eh&2"; // Мы не хотим, чтобы данный код мог быть изменен кем-то извне...

//   return function () {
//     return apiCode;
//   };
// })();

// // getCode(); // Возвращает apiCode

// console.log(getCode.toString());
// // console.log(example.toString());

// - - - -- - - - - - - - - - -  - - - - - - -  - - - - - - - - - - - - - - - -  - - - - - - - - - - - - - - - - - -

// function greet(message) {
//   console.log(message + ", " + this.name + "!");
// }

// var person = { name: "Bob" };

// greet.call(person, "Greetings"); // Вызов через call
// greet.apply(person, ["Greetings2"]); // Вызов через apply

// - - - -- - - - - - - - - - -  - - - - - - -  - - - - - - - - - - - - - - - -  - - - - - - - - - - - - - - - - - -
