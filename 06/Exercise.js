class Student {
  constructor(name, email, age, score) {
    this.name = name;
    this.email = email;
    this.age = age;
    this.score = score;
  }
}

class Students {
  arrStudents = [];
  score;
  age;
  constructor(input = []) {
    this.arrStudents = input;
    this.score = input.map((el) => el.score);
    this.age = input.map((el) => el.age);
  }

  hmaScore() {
    return {
      High: Math.max(...this.score),
      Minimum: Math.min(...this.score),
      Avg: (
        this.score.reduce((prev, current) => prev + current) / this.score.length
      ).toFixed(1),
    };
  }

  hmaAge() {
    return {
      High: Math.max(...this.age),
      Minimum: Math.min(...this.age),
      Avg: (
        this.age.reduce((prev, current) => prev + current) / this.age.length
      ).toFixed(1),
    };
  }
}

const student1 = new Student("Bolo", "bolo.gmail.com", 25, 60);
const student2 = new Student("anton", "anton@yahoo.com", 21, 75);
const student3 = new Student("budi", "budi@rocketmail.com", 23, 80);

console.log(student1, student2, student3);

const murid = new Students([student1, student2, student3]);
console.log(murid.hmaScore());
console.log(murid.hmaAge());
