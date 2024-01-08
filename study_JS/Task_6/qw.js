function removeSmallest(numbers) {
  let x = numbers.indexOf(Math.min(...numbers));
  return [...numbers.slice(0, x), ...numbers.slice(++x)];
}

console.log(removeSmallest([5, 3, 2, 1, 4])); // [5, 3, 2, 4]
