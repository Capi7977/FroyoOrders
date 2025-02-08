const orderInput = prompt(
  "Please enter your flavor, separeted by commas, ",
  "vanilla,vanilla,vanilla,strawberry,coffee,coffee"
);
console.log(orderInput);
const arrayInput = orderInput.split(",");
console.log(arrayInput);
const order = {};
for (let i = 0; i < arrayInput.length; i++) {
  if (order[arrayInput[i]]) {
    order[arrayInput[i]] += 1;
  } else {
    order[arrayInput[i]] = 1;
  }
}
console.table(order);
