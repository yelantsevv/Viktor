let user = {
  firstName: "Вася",
  sayHi() {
    alert(`Привет, ${this.firstName}!`);
  }
};

let sayHi = user.sayHi.bind(user); // (*)

// sayHi(); // Привет, Вася!

// setTimeout(sayHi, 1000); // Привет, Вася!

