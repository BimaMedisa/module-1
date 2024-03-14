// Exercise 1

const MajorityElement = (num: number[]) => {
  let nomor = 0;
  let hitung = 0;

  for (const n of num) {
    if (hitung === 0) {
      nomor = n;
      hitung = 1;
    } else if (nomor == n) {
      hitung++;
    } else {
      hitung--;
    }
  }

  return nomor;
};

const arrNum = [3, 2, 3];
const arrNum2 = [2, 2, 1, 1, 1, 2, 2];
console.log(MajorityElement(arrNum));
console.log(MajorityElement(arrNum2));

// Exercise 2

const RomanToInteger = (input: string): number => {
  let result = 0;
  if (input === "" || input == null || input == undefined) return -1;
  const roman = input.toUpperCase();
  const romanNumerals = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };

  for (let idx = 0; idx < input.length; idx++) {
    switch (roman[idx]) {
      case "I":
        result += 1;
        break;
      case "V":
        result += 5;
        break;
      case "X":
        result += 10;
        break;
      case "L":
        result += 50;
        break;
      case "C":
        result += 100;
        break;
      case "D":
        result += 500;
        break;
      case "M":
        result += 1000;
        break;
      default:
        return -1;
    }

    if (idx > 0 && romanNumerals[roman[idx]] > romanNumerals[roman[idx - 1]]) {
      result -= 2 * romanNumerals[roman[idx - 1]];
    }
  }

  return result;
};
console.log(RomanToInteger("I"));
console.log(RomanToInteger("II"));
console.log(RomanToInteger("IV"));
console.log(RomanToInteger("LVIII"));
