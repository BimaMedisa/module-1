// Celsius to fahrenheit
let C = 60;
const F = (9 / 5) * C + 32;
console.log(F);

// write a ccode check whether the number is odd or even
let number = 25;
if (number % 2 == 0) {
  console.log("genap");
} else {
  console.log("ganjil");
}

// write a code to check whether the number is prime number or not
let itsPrima = true;
number = 19;
for (let i = 2; i < number; i++) {
  if (number % i == 0) {
    itsPrima = false;
  }
}
if (itsPrima) {
  console.log("prima");
} else {
  console.log("noPrima");
}

// find the sum of the numbers 1 to N
let N = 3;
