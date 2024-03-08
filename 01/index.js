// Menampilkan tulisan Hello world
console.log("Hello World");

// Menampilkan tulisan Hello new world
console.log("Hello new world");

// var
var jam = "rolex";
console.log(jam);
// let
let angka = 123;
console.log(angka);
// const
const tas = "LV";
console.log(tas);

var jam = "cartier";
console.log(jam);

angka = 124;
console.log(angka);
NewAngka = 125;
console.log(NewAngka);

// string
let str = "test";
console.log(typeof str);

// Tipe data number
let num = 1;
console.log(typeof num);

// Tipe data boolean
let bool = true;
console.log(typeof bool);

// Tipe data null
let n = null;
console.log(n);

// Tipe data undefined
let kotak;
console.log(typeof kotak);

// contoh mutable vs immutable

// immutable
let text = "Hello";
console.log(text);
let newText = text;
console.log(newText);
newText = "World";
console.log(newText, text);

// mutable
let arr = [1, 2, 3, 4, 5, 6];
console.log(arr);
let newArr = arr;
console.log(newArr);
// push adalah sebuah build in method dari sebuah tipe data array
newArr.push(8);
console.log(newArr, arr);

// string built in method
let kalimat = "saya sedang belajar";
console.log(kalimat.toUpperCase());
console.log(kalimat.split("  "));
console.log(kalimat.slice(0, 1));

// template literal
let line = `Halo, ${kalimat}`;
console.log(line);
console.log(`Sindy 
gaharu`);

// number built in method
let numerical = 10000;
let newNumerical = numerical.toString();
console.log(numerical, newNumerical);
console.log(
  numerical.toLocaleString("in-ID", {
    style: "currency",
    currency: "IDR",
  })
);

// Number global built in method
let textNumeric = "10.000";
console.log(Number(textNumeric));
console.log(parseFloat(textNumeric));
console.log(textNumeric);

//Type Conversion
console.log(String(123));
console.log("3" * "9");
console.log(Number("5") + Number("5"));
console.log(Boolean(""));
console.log(Boolean("alo"));
console.log(Boolean(3));
console.log(Boolean(0));

// Date
let now = new Date();
console.log(now);
let firstDate = new Date(0);
console.log(firstDate);
let addDay = new Date(24 * 3600 * 1000);
console.log(addDay);

// Date Built in Method
console.log(now.getDate());
console.log(now.getFullYear());
console.log(now.getMonth() + 1);

// unary
let x = 1;
// x adalah sebuah operand, - adalah sebuah operator
x = -x;
console.log(-x);

// binary
let y = 3;
let j = 2;
// y dan j adalah sebuah operang, * adalah sebuah operator
console.log(y * j);

let counter = 3;
console.log(++counter);
console.log(--counter);

let n1 = 5;
n1 = n1 + 3;
let n2 = 4;
n2 += 3;
console.log(n1);
console.log(n2);

// prefix
let counter1 = 3;
console.log(++counter1);

// postfix
let counter2 = 4;
console.log(counter2++);
console.log(counter2);

// equal
console.log(5 == 5);
console.log(7 == "7");

// strict equal
console.log(5 === 5);
console.log(9 === "9");

// not equal
console.log(5 != 6);
console.log(5 != "5");

// stirct not equal
console.log(5 !== "5");

// greater than
console.log(5 > 6);
console.log(5 > 4);

// lees than
console.log(5 < 6);
console.log(4 < 4);
