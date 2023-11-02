function getMealCost(orders) {
  let sum = 0;
  let numOrders = orders.length;
  for (let count = 0; count < numOrders; count++) {
    sum += orders[count].price;
  }
  return sum;
}
let lunch = [
  { item: "Steak Fajitas", price: 9.95 },
  { item: "Chips and Guacamole", price: 5.25 },
  { item: "Sweet Tea", price: 2.79 },
];

let mealCost = getMealCost(lunch);
let totalWithTip = mealCost * 1.8;
console.log("My meal with tip costs $" + totalWithTip.toFixed(2));
mealCost = getMealCost(lunch);
let totalWithTax = mealCost * 0.8;
console.log("My meal with tax costs $" + totalWithTax.toFixed(2));
let totalDue = totalWithTax + totalWithTip;
console.log("My meal total costs $" + totalDue);
