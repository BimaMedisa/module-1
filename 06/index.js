const ObjProduct_1 = {
  name: "sepeda",
  color: "Biru",
  prize: 20000,
};

const ObjProduct_2 = {
  name: "Raket Badminton",
  color: "Hitam",
  prize: 30000,
};

const Car = {
  brand: "BMW",
  model: "M1351 xDrive",
  prize: 800000000,
};

console.log(Car);

let user = {
  name: "Santos",
  greet() {
    console.log("hello");
    return `hello ${this.name}`;
  },
};
let user2 = new Object();

console.log(user.greet);

const student_1 = {
  name: "santos",
  age: 22,
};

const student_2 = {
  name: "ibnu",
  age: 28,
};

const kelas_jcwd = {
  size: "xl",
  total_murid: 2,
  students: new Array(student_1, student_2),
};

kelas_jcwd.students.map((student) => console.log(student));

const arrSantos = [1, 1, 1, [2, 2, [3, 3, [4, 5]]], 9];
console.log(arrSantos[3][2][2][1]);
console.log(arrSantos[4]);

const arr5 = new Array(1, 2, 3);

arr5.push(4); // method biasa
Array.bind(); // static method

// declare class
class User {
  #email;
  static contoh = "ini contoh static";
  constructor(sindy, FK, age, email) {
    this.name = sindy;
    this.kelas = FK;
    this.age = age;
    this.email = email;
  }
  greetings() {
    console.log("hello world");
  }
}
const User3 = new User("sindy", "FK", 25, "sindy.eldivaw@gmail.com");
console.log(User3);

console.log(User.contoh);
//expression class
const User2 = class {
  greetings() {
    console.log("hello world");
  }
};

const user1 = new User(); // instance of class User
user1.greetings(); // accessing method from obj user1

class DB {
  static #connection = "";

  static #initializeConnection() {
    const randomNumber = Math.ceil(Math.random() * 100);
    DB.#connection = `New Database Connection 
    ${randomNumber}`;
  }
  static getConnection() {
    if (!DB.#connection) DB.#initializeConnection();
    return DB.#connection;
  }
}

const { getConnection } = DB;
console.log(getConnection());

const user3 = {
  firstName: "tyo",
  lastName: "tomo",

  get FullName() {
    return this.firstName + "" + this.lastName;
  },

  set fullName(value) {
    const splittedValue = value.split(" ");
    this.firstName = splittedValue[0];
    this.lastName = splittedValue[1];
  },
};

console.log(user3.firstName, user3.lastName);

user3.fullName = "udin sedunia";

console.log(user3.firstName, user3.lastName);

//get merupakan function yang dipanggil seperti memanggil prop
//set merupakan function untuk re--asign dan depanggil seperti prop

//encapsulation
class Employee {
  #name;

  constructor(name) {
    this.#name = name;
  }

  get employeeName() {
    return this.#name;
  }

  set employeeName(value) {
    if (typeof value !== "string") throw new Error("bukan string");
    this.#name = value;
  }
}

const employee1 = new Employee("naruto");

console.log(employee1.employeeName);

// employee1.employeeName =1 -- error karena type data bukan string
employee1.employeeName = "udin";
console.log(employee1.employeeName);