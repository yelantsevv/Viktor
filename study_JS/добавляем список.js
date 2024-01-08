let divElement = document.createElement("div");
let counter = 0;
let nameInp = document.createElement("input");
nameInp.placeholder = "Введите имя";
nameInp.type = "text";

let yearInp = document.createElement("input");
yearInp.placeholder = "Введите год рождения";
yearInp.type = "number";

let addBtn = document.createElement("button");
addBtn.textContent = "Добавить пользлвателя";

let listUsers = document.createElement("ul");

function getAge(year) {
  return 2023 - year;
}

function createNewUserItem(index, userName, userYear) {
  let item = document.createElement("li");
  item.textContent = `${index}) ${userName}, год рождения ${userYear}, 
  возраст: ${getAge(userYear)}`;
  return item;
}

addBtn.onclick = function () {
  counter++;
  let userName = nameInp.value;
  let userAge = Number(yearInp.value);
  let newItem = createNewUserItem(counter, userName, userAge);
  listUsers.append(newItem);
  nameInp.value = "";
  yearInp.value = "";
};

document.body.append(divElement);
divElement.append(nameInp, yearInp, addBtn);
document.body.append(listUsers);
