// 1A. Write a function to get the lowest, highest and average value in the array

arr = [12, 5, 23, 18, 4, 45, 32];
function cariKecilTinggiAvg(arr) {
  let highest = Math.max(...arr);
  let lowest = Math.min(...arr);
  let avg = arr.reduce((a, b) => a + b) / arr.length;

  return { average: avg.toFixed(1), highest, lowest };
}
console.log(cariKecilTinggiAvg(arr));

// 2A.

const list = ["apple", "banana", "cherry", "date"];

const output = list.reduce(function (acc, cur, i) {
  let str = acc;
  str += cur;

  if (i < list.length - 2) {
    str += ", ";
  } else if (i < list.length - 1) {
    str += ", and ";
  }

  return str;
}, "");

console.log(output);
