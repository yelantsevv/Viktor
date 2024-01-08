// ----------------Печатаем в документ----------------
document.write(`<p>I tot</p>`);

// ----------------Загрлавный----------------
let title = document.createElement("h1");
title.classList.add("title-h1"); // добавляем класс к элементу
title.textContent = "Я заголовок";
document.body.append(title);
// console.log(title);

// ----------------Параграф----------------
let desc = document.createElement("p");
desc.classList.add("desc-p", "text"); // add  добавляем класс к элементу
desc.classList.remove("text"); // remove  удаляем класс у элементу

desc.textContent = "Я параграф";
document.body.append(desc);

// ----------------Список----------------
let counet = 0;
let list = document.createElement("ul");
// let listItem1 = document.createElement("li");
// listItem1.textContent = `Я список ${++counet}`;
// let listItem2 = document.createElement("li");
// listItem2.textContent = `Я список ${++counet}`;
// let listItem3 = document.createElement("li");
// listItem3.textContent = `Я список ${++counet}`;
document.body.append(list);
// list.append(listItem1, listItem2, listItem3); // можно списком или каждый отдельно
// // list.append(listItem2);  //append - добавляет в конец другого элемента
// // list.prepend(listItem3);  //prepend - добавляет в начало элемента

// ----------------Текстовое поле----------------
let textInp = document.createElement("input");
textInp.placeholder = "Ввeдите имя";
textInp.type = "text";
textInp.classList.add();
document.body.append(textInp);

// ----------------Кнопка----------------
let action = document.createElement("button");
action.textContent = "Я кнопка";
document.body.append(action);

// назначение события на кнопку
action.onclick = function () {
  // вводим тукст с инпута в список и номируем его
  let inpText = textInp.value;
  let listItem = document.createElement("li");
  listItem.textContent = `${++counet} ${inpText}`;
  list.append(listItem);
  // чистем поле инпут
  textInp.value = "";

  //
  // меняем заголовок на текст  ...
  title.textContent = "Клик по кнопке";

  // добавляем class ("text") к параграфу desc
  desc.classList.add("text");

  // добавляем элементы к списку по клику
  // let listItem = document.createElement("li");
  // listItem.textContent = `Я список ${++counet}`;
  // list.append(listItem);
};
// action.onclick = () => console.log("dfdg");   //назначение события на кнопку стрелкой



// ----------------Текстовое поле----------------