function zamena(text) {
  return `<strong>${text}</strong>`;
}

// console.log(getStrong("privet"));
function print(pr, count, price) {
  let totalPrice = count * price;
  document.write(`
  <p>
  ${zamena(pr)}, количество: ${zamena(count)}, 
  цена: ${zamena(price)}, общая стоимость: ${zamena(totalPrice)}
  </p>`);
  return totalPrice;
}
let total = 0;

let tt = () =>
  (total += print(prompt("Tovar"), +prompt("количество"), +prompt("цена")));

total += print("Sahar", 5, 80);
tt();
console.log(total);
