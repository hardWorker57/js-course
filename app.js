
const sum = 389 + 123;
console.log(`1) 389 + 123 = ${sum}`)

const decrease = 389 - 123;
console.log(`2) 389 - 123 = ${decrease}`)

const div = 389 / 123;
console.log(`3) 389 / 123 = ${div}`)

const mult = 3 * 23;
console.log(`4) 3 * 23 = ${mult}`)

const multX = 3 ** 4;
console.log(`5) 3 ** 4 = ${multX}`)

const expression = 3 * (23 + 5);
console.log(`6) 3 * (23 + 5) = ${expression}`)

let userName = 'Scott';
let age = 22;
let mariage = true;

let userName_2 = 'Piter';
let age_2 = 19;
let mariage_2 = true;

let userName_3 = 'Alex';
let age_3 = 23;
let mariage_3 = true;

console.log(`name: ${userName}`);
console.log(`age: ${age}`);
console.log(`mariage: ${mariage}`);

document.body.querySelector('.title_1').innerHTML = userName;
document.body.querySelector('.title_2').innerHTML = userName_2;
document.body.querySelector('.title_3').innerHTML = userName_3;
let daylight = 55,
    wind = 18;

if (daylight > 50 && wind < 20) {
    console.log("it's warm");
} 
else {
    console.log('error');
}

if (daylight > 50 || wind < 20) {
    console.log("it's warm");
} 
else {
    console.log('error');
}

if (daylight > 50 ^ wind < 20) {
    console.log("it's warm");
} 
else {
    console.log('error');
}

if (~daylight > 50 == ~wind < 20) {
    console.log("it's warm");
} 
else {
    console.log('error');
}