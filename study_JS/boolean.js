//Создаем текстовое поле
function getInput(placeholder, type, className) {
  let input = document.createElement("input");
  // плейсхолдер
  input.placeholder = placeholder;
  //определяем тип
  input.type = type;
  //добавляем class к элементу input
  input.classList.add(className);
  //   input.classList = className;

  //возвращаем результат
  return input;
}



//Создаем блок для текстовых полей
let box = document.createElement("div");
box.classList = "box";

let title = document.createElement("h1");
title.classList.add("title");
title.textContent = "Регистрация";

//Создание текстовых полей
let surnameInpWra = document.createElement("div");
surnameInpWra.classList.add("field-wrap");
let surnameInp = getInput("Фамилия", "text", "text-field");
let surnameErrorLabel = document.createElement("label");
surnameErrorLabel.textContent = "Ошибка";
surnameErrorLabel.classList.add("error");
surnameInpWra.append(surnameInp, surnameErrorLabel);

let nameInp = getInput("Имя", "text", "text-field");
let ageInp = getInput("Возраст", "Number", "text-field");
let emailInp = getInput("e-mail", "email", "text-field");
let passwordInp = getInput("password", "password", "text-field");

//сщздание согласия с условием
let conditionLabel = document.createElement("label");
conditionLabel.classList.add("condition");
let conditionInp = document.createElement("input");
conditionInp.type = "checkbox";
let conditionSpan = document.createElement("span");
conditionSpan.textContent = "Согласие с условием";
conditionLabel.append(conditionInp, conditionSpan);

// создаем кнопу
let regBtn = document.createElement("button");
regBtn.classList.add("btn");
regBtn.textContent = "Регистрация";

regBtn.onclick = function name(params) {
  //Получаем значения

  let surnameValue = surnameInp.value;
  let nameValue = nameInp.value;
  let ageValue = Number(ageInp.value);
  let emailValue = emailInp.value;
  let passworValue = passwordInp.value; //получаем значение
  let conditionValue = conditionInp.checked; //получаем значение true или  false из чекбокса

  //Проверка ...--------------------
  if (surnameValue === "") {
    return;
  }

  //length - проверяет длинну строки
  if (surnameValue.length < 2) {
    alert("Фамилия слишком маленькая");
    return;
  }

  //includes - проверяем наличие или отсутствие значение в ("при") true или  false
  if (
    !emailValue.includes("@") ||
    !emailValue.includes(".") ||
    emailValue.length < 5
  ) {
    alert("email ввседен не правильно ");
    return;
  }

  if (conditionValue === false) {
    alert("Вы не согласны с условиями");
    return;
  }
  // ------------------------------
};

//добавляем бокс для поля
document.body.append(box);
//добавляем поля
box.append(


  title,
  nameInp,
  surnameInpWra,
  ageInp,
  emailInp,
  passwordInp,
  conditionLabel,
  regBtn
);
