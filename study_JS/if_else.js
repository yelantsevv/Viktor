// let age = Number(prompt("ввчедите age"));
// document.write(` Вашее age: ${age} `);
// let height = Number(prompt("ввчедите height"));
// document.write(` Вашее height: ${height}`);

// if (age >= 18 || height >= 180) {
//   document.write(`++DA++`);
// } else {
//   document.write(`--NO--`);
// }

//старт счетчика
let counter = 0;
//Получить возраст и проверяем в условии
function getAge(year) {
  let result = 2023 - year;
  if (result >= 18) {
    return `${result} (совершеннолетний)`;
  }
  return `${result} ( НЕ совершеннолетний)`;
}

//создаем элемент списка ul
function getStListUl() {
  let ul = document.createElement("ul");
  return ul;
}

let StListUl = getStListUl();

//Создаем элемент списка li и заполнить инфу
function getSt(index, name, year, height) {
  let li = document.createElement("li");
  let textSpan = document.createElement("span");

  textSpan.textContent = `${index}) ${name}, год ${year}, 
    рост ${height}, возраст: ${getAge(year)}`;

  //Описываем кнопку  Удалить
  let removeBtn = document.createElement("button");
  removeBtn.textContent = "Удалить";

  //описание действия  кнопки removeBtn при клике
  removeBtn.onclick = function () {
    li.remove(); // удалить li
  };

  //Описываем кнопку Проверить рост
  let chekHeightBtn = document.createElement("button");
  chekHeightBtn.textContent = "Проверить рост";

  //проверяем условие возраст И рост
  chekHeightBtn.onclick = function () {
    if (year >= 2001 && height >= 175) {
      textSpan.classList.add("success");
      textSpan.textContent = `${textSpan.textContent} (Отбор пройден)`;
    } else {
      textSpan.textContent = `${textSpan.textContent} (Отбор  НЕ пройден)`;
    }
  };

  //Добавляем кнопки в li
  li.append(textSpan, chekHeightBtn, removeBtn);
  return li;
}

// Создаем блок ввода данных
function getAddStBlock() {
  //создаем элемент div
  let box = document.createElement("div");

  // Создаем текстовые поля для ввода информации
  let nameInp = document.createElement("input");
  nameInp.placeholder = "Имя";
  nameInp.type = "text";

  let yearInp = document.createElement("input");
  yearInp.placeholder = "Год рождения";
  yearInp.type = "number";

  let heightInp = document.createElement("input");
  heightInp.placeholder = "Рост";
  heightInp.type = "number";

  let addBtn = document.createElement("button");
  addBtn.textContent = "Добавить";

  //берем данные из input-ов и передаем их по клику
  addBtn.onclick = function name(params) {
    //прибавляем счетчик
    counter++;

    //присваиваем переменным значение из input-ов
    let nameValue = nameInp.value;
    let yearValue = +yearInp.value;
    let heightValue = +heightInp.value;

    // вкладываем newST в StListUl -> li вкладываем в Ul
    let newST = getSt(counter, nameValue, yearValue, heightValue);
    StListUl.append(newST);

    // очищаем поле value
    nameInp.value = "";
    yearInp.value = "";
    heightInp.value = "";
  };
  //выбираем элемкнты которые бцдут добавленные на экран
  box.append(nameInp, yearInp, heightInp, addBtn);
  return box;
}

let addStBlock = getAddStBlock();

document.body.append(addStBlock, StListUl);
