const mobil = {
  merk: "toyota",
  wanra: "hitam",
  hello() {
    console.log("hello juga");
  },
  kenalan() {
    console.log("hello saya mobil");
    return "hasil return dari kenalan";
  },
};

console.log(mobil.warna); // toyota prop
mobil.hello(); // hello juga method
mobil.kenalan();
console.log(mobil.kenalan());
//prop = menyimpan sebuah value (tipe data
//method = menyimoan sebuah function (menjalankan)

const penjumlahan = (a, b) => {
  return a + b;
};

function penjumlahan2(a, b) {
  return a + b;
}
if ("hello") {
  console.log("ayam goreng");
  console.log("masuk 1");
}
if ("hello") console.log("ayam bakar");
if (Boolean("false")) console.log("hey");

console.log("masuk2");
console.log(penjumlahan(5, 3));

const colors = ["red", "blue", "yellow"];

console.log(colors.length, "panjang dari array colors");
colors.push("green"); // menambahkan value di index pertama
colors.unshift("pink"); // menambahkan value di index terakhir
colors.pop(); // menghapus element index terakhir dari array
colors.shift(); // menghapus element index pertama dari array

colors.fill("white", 1, 2);

console.log(colors.lenght);
console.log(
  colors.filter((color) => color == "red" || color == "blue"),
  "return value red atau blue"
);

colors.forEach((color, idx) => {
  if (color == "white") colors[idx] = "putih";
});
console.log(colors);

colors.forEach((color, index) => {
  console.log(color, index);
});

const newArrayColors = colors.forEach((color) => {
  return color == "red" ? "merah" : color;
});
console.log(newArrayColors, "ini array baru");

console.log(colors.map((color) => color));

const numbers = [5, 10, 15];
console.log(numbers.sort((a, b) => b - a)); // desc (besar ke kecil)
console.log(numbers.sort((a, b) => a - b)); // asc (kecil ke besar)

const total = numbers.reduce((sum, number) => sum + number, 30);

// () => {
// return
// };
// () =>;

console.log(colors);
colors.splice(1, 0, "gantiin blue");

console.log(colors.indexOf("red"), "ini adalah index red");

console.log(
  colors.findIndex((color) => color == "red"),
  "ini find index red"
);

console.log(colors.lastIndexOf("red"), "ini adalah index red");

// param1 = lokasi index
// param2 = berapa banya value yang mau dihapus
// param 3 = value baru yang ditambahkan kedalam array
console.log(colors);

const restParams = (a, b, ...c) => {
  const sumC = c.reduce((sum, val) => sum + val);
  console.log(a + b + sumC); //sum dari parameter
};

restParams(1, 2, 3, 4, 5, 6);

//nested

const getMessage = (fName) => {
  const sayHello = () => "hello " + fName + ", ";
  const WelcomeMsg = () => "welcome to hell";
  return sayHello() + WelcomeMsg();
};

console.log(getMessage("santos"));

const closureGreeting = (name) => {
  const defaultMsg = "hello ";
  return () => defaultMsg + name;
};

const greetBima = closureGreeting("bima");
console.log(greetBima());

//class declaration
//function calling

console.log(greetBima());

//currying

const multi2 = (factor) => (number) => factor * number;
console.log(multi2(5)(7));

//Recursive

const countDown = (fromNumber) => {
  console.log(fromNumber, "count down");

  let nextNumber = fromNumber - 1;
  if (nextNumber > 0) countDown(nextNumber);
};

countDown(5);

const factorial = (n) => {
  if (n == 1) return 1;
  else return n + factorial(n - 1);
};
console.log(factorial(5));
