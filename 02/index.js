let age = 40;
// if (age >= 17) {
//   // block of code milik if / body dari if
//   console.log("kamu bisa buat ktp");
// } else {
//   // block of code milik else / body dari else
//   console.log("kamu belum bisa membuat ktp");
// }

// if (age >= 17) {
//   console.log("bisa buat KTP");
// } else if (age > 17) {
//   console.log("sudah ada KTP");
// } else {
//   console.log("belum bisa punya KTP");
// }

// 17 - 20 bisa buat KTP
// 21 -28 sudah punya KTP
// 29 keatas tampilkan penggantia KTP

// if else condition with && (and)
if (age >= 17 && age <= 20) {
  console.log("bisa buat KTP");
} else if (age >= 21 && age <= 28) {
  console.log("sudah punya KTP");
} else if (age >= 29) {
  console.log("perbarui KTP");
} else {
  console.log("belum bisa punya KTP");
}

// switch case
let nama = "Bima";

switch (nama) {
  case "budi":
    console.log("Nama kamubudi");
    break;
  case "Bima":
    console.log("Nama kamu Bima");
    break;
  default:
    console.log("Nama kamu tidak terdaftar");
}

// logical operator negation akan membalikan value
console.log(!true);
false;
console.log(!false);
true;

// ternary operator atau shorthand untuk if else
let bool = true;
bool ? console.log("betul") : console.log("salah");

// for loop
for (let i = 1; i <= 3; i++) {
  console.log(i);
}

// while loop
let i = 1;
while (i <= 3) {
  console.log(i);
  i++;
}

// bool loop
i = 0;
bool = true;
while (bool) {
  console.log(i);
  if (i == 10) {
    bool = false;
    console.log("masuk");
  }
  i++;
}

// break loop
i = 0;
while (true) {
  console.log(i);
  if (i == 2) {
    console.log("masuk");
    break;
  }
  i++;
}

// continue loop
for (let i = 1; i <= 10; i++) {
  if (i == 7) {
    continue;
  }
  console.log(i);
}

// do loop
i = 5;
do {
  console.log(i);
  i++;
} while (i < 5);

// cari faktorial dari angka 6

// hint
// formula mencari faktorial 6
// 1 x 2 x 3 x 4 x 5 x 6 = ?

// 1. buat variable menampung angka 6
// 2. buat variable temp = 1 untuk menampung hasil setiap looping
// 3. buat looping menggunakan for dimana i dimulai dari 1, kondisi looping adalah i <= 6
// 4. didalam looping kita kalikan temp dengan i ditampung kedalam i
// 5. tampilkan console.log diluar for

let input = 9;
let temp = 1;

for (let i = 1; i <= input; i++) {
  temp = temp * i;
  console.log(temp);
}
console.log(temp);
