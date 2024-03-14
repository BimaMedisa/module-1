//excercise 01
const obj1 = {
  a: 1,
};

const obj2 = {
  a: 2,
};

function check(value1, value2) {
  //Object.keys untuk memasukkan key didalam objek menjadi array
  // Mengecek jumlah length dari key, jika value1 dan value dua jumlah key nya tidak sama
  //akan return false
  if (Object.keys(value1).length != Object.keys(value2).length) return false;
  //for menggunakan of untuk objek
  //for menggunakan in untuk array
  for (let [key, value] of Object.entries(value1)) {
    //Cek kalau bukan valuenya sama akan false value yang berada di if merupakan entries
    //dari value1
    if (!(value2[key] == value)) return false;
  }
  return true;
}

const hasil = check(obj1, obj2);
console.log(hasil);

//excercise2
const obj3 = {
  a: 1,
  b: 2,
};

const obj4 = {
  a: 1,
  b: 2,
  c: 3,
};

function intersection(value1, value2) {
  let hasilObj = {};
  //variabel untuk menyimpan array kosong
  //for menggunakan of untuk objek
  //for menggunakan in untuk array
  for (let [key, value] of Object.entries(value1)) {
    //Cek kalau bukan valuenya sama akan false value yang berada di if merupakan entries
    //dari value1
    if (!(value2[key] == value)) {
      //if untuk cek apakah di value2 mempunyai key dan value sama dengan value1
      //kalau sama akan masuk ke else, jika tidak akan looping ke key selanjutnya
    } else {
      hasilObj[key] = value;
    }
  }
  return hasilObj;
}

const hasil2 = intersection(obj3, obj4);
console.log(hasil2);

//excercise 3
const arr1 = [
  { name: "Student 1", email: "student1@mail.com" },
  { name: "Student 2", email: "student2@mail.com" },
];

const arr2 = [
  { name: "Student 1", email: "student1@mail.com" },
  { name: "Student 3", email: "student3@mail.com" },
];
//Gabungin array of object
const tempPush = [...arr1, ...arr2];
console.log(tempPush);

function merge() {
  //buat variabel untuk menampung array dan objek
  let newArr = [];
  let uniqOb = {};

  for (const i in tempPush) {
    //variabel objName melakukakan pengencekan i untuk index pengulangan
    //lalu untuk key nya itu menggunakan name
    objName = tempPush[i]["name"];
    // lalu objname dimasukkan kedalam variabel object ksoong lalu ditimpa menggunakan [i]
    // pada tempPush
    uniqOb[objName] = tempPush[i];
  }
  console.log(uniqOb, "ini uniqob");
  console.log(uniqOb);

  // karena hasilnnya objek dirubah menjadi array menggunakan push
  for (i in uniqOb) {
    newArr.push(uniqOb[i]);
  }
  console.log(newArr);
}
merge();

//excercise 4
const arr3 = [
  {
    name: "David",
    age: 20,
  },
  {
    name: "Bima",
    age: 25,
  },
];

const ob = { a: 1, b: 2 };

console.log(Object.entries(ob));
console.log(Object.keys(ob));
const ents = Object.entries(ob); // [ [ 'a', 1 ], [ 'b', 2 ] ]
const swap2 = ents.map(([key, value]) => [value, key]); //[ [ 1, 'a' ], [ 2, 'b' ] ]
console.log(swap2, "ini swap2");
const objFromEnt = Object.fromEntries(swap2); // { '1': 'a', '2': 'b' }
console.log(objFromEnt);
const a = [1, 2, 3, 4];
// const b = a.map((val) => );
// console.log(b);

const sw = (arrObj = []) =>
  arrObj.map((obj) =>
    Object.fromEntries(Object.entries(obj).map(([key, value]) => [value, key]))
  );

console.log(sw(arr3), "test");

var swapped = arr3.map(swap);
console.log(swapped);

function swap(obj) {
  let result = {};
  for (let [key, value] of Object.entries(obj)) {
    result[value] = value in result ? [key].con(result[value]) : key;
  }
  return result;
}

//triangle
function triangle(h) {
  let num = h;
  for (let i = 1; i <= h; i++) {
    let print = "";
    for (let j = 1; j <= num; j++) {
      print += "*";
    }
    num--;
    console.log(print);
  }
}
triangle(5);

function factorial(x) {
  if (x === 0) {
    return 1;
  } else {
    return x * factorial(x - 1);
  }
}

console.log(factorial(5));
