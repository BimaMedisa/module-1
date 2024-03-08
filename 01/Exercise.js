// rectangle
let p = 5;
let L = 3;
const hasil = p * L;
console.log(hasil);

// perimeter rectangle
let a = 5;
let b = 3;
const hasil2 = 2 * (p + L);
console.log(hasil2);

// diameter,keliling,area lingkaran
let r = 5;
let phi = Math.PI;
const dmt = 2 * r;
const are = phi * Math.pow(r, 2);
const kel = phi * r * 2;
console.log(dmt);
console.log(are);
console.log(kel);

// find angles of triangle
let anA = 80;
let anB = 60;
const anC = 180 - (anA + anB);
console.log(anC);

// get difference between dates in days
let date1 = new Date("2022-01-01");
let date2 = new Date("2022-02-31");
console.log(date2 - date1);
const dateDifferences = (date2 - date1) / (24 * 3600 * 1000);
console.log(dateDifferences);

// write a code to convert days to years, months and days
let day1 = 400;
const years = day1 / 365;
const months = (day1 % 365) / 30;
const days = (day1 % 365) % 30;
console.log(`1 tahun, 1 bulan, 5 hari${years.toFixed()} 
tahun, ${months.toFixed()}, ${days} hari`);

let test = 5;
