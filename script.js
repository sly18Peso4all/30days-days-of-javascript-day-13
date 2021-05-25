//Exercises:Level 1
/*
1) Display the countries array as a table
2) Display the countries object as a table
3) Use console.group() to group logs
*/
// Solution 1
const countries = [
  ["Finland", "Helsinki"],
  ["Sweden", "Stockholm"],
  ["Norway", "Oslo"],
];

console.table(countries);

console.group(countries);

const names = ["Asabeneh", "Brook", "David", "John"];
console.table(names);

//Exercises:Level 2
/*
1) 10 > 2 * 10 use console.assert()
2) Write a warning message using console.warn()
3) Write an error message using console.error()
*/

// Solution 1
console.assert(10 > 2 * 10);

// Solution 2
console.warn("Warning is different from error");

// Solution 3
console.error("This is an error message");

//Exercises:Level 3
/*
1) Check the speed difference among the following loops: while, for, for of, forEach
*/

console.log("++++++++++++");
// Solution 1

console.time("Regular for loop");
for (let i = 0; i < countries.length; i++) {
  console.log(countries[i][0], countries[i][1]);
}
console.timeEnd("Regular for loop");

console.time("for of loop");
for (const [name, city] of countries) {
  console.log(name, city);
}
console.timeEnd("for of loop");

console.time("forEach loop");
countries.forEach(([name, city]) => {
  console.log(name, city);
});
console.timeEnd("forEach loop");
