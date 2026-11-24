/*const pi = 3.16

console.log(pi)

console.log(23 + 97)

console.log((4 + 6 + 9) / 77)

let a = 10

console.log(a)

const max = 57;

const actual = max - 13;

const percentage = actual/max;

// functions

function favAnimal(animal) {
    return(animal + "is my favorite animal")
}

const message = favAnimal('goat')
console.log(message)



function showPrimes(n) {
  nextPrime: for (let i = 2; i < n; i++) {

    for (let j = 2; j < i; j++) {
      if (i % j == 0) continue nextPrime;
    }

    alert( i ); // a prime
  }
}


function draw() {
  ctx.clearRect(0, 0, WIDTH, HEIGHT);
  for (let i = 0; i < 100; i++) {
    ctx.beginPath();
    ctx.fillStyle = "rgb(255 0 0 / 50%)";
    ctx.arc(random(WIDTH), random(HEIGHT), random(50), 0, 2 * Math.PI);
    ctx.fill();
  }
}*/



function addSeven(number){
    return number + 7
}

console.log(addSeven(10))

function multiplyTwo(a, b){
    return a*b
}

console.log(multiplyTwo(17,18))

function capitalize (words){
    return words.charAt(0).toUpperCase() + words.slice(1).toLowerCase()
}

console.log(capitalize('abcd'))
console.log(capitalize('ABCD'))
console.log(capitalize('aBCd'))

function lastLetter(last) {
    return last.slice(-1);
}

console.log(lastLetter("abcd"));

// arrays 

let fruits = ['apple', 'orange', 'banana']

console.log(fruits[0])

fruits[3]='melon'

fruits[2]= 'peach'

console.log(fruits)

console.log(fruits.at(-2))

for (let fruit of fruits){
  console.log(fruit)
}


function sumOfTripledEvens(array) {
  let sum = 0;
  for (let i = 0; i < array.length; i++) {
    if (array[i] % 2 === 0) {
      const tripleEvenNumber = array[i] * 3;

      sum += tripleEvenNumber;
    }
  }
  return sum;
}


function addOne(num) {
  return num + 1;
}
const arr = [1, 2, 3, 4, 5];
const mappedArr = arr.map(addOne);
console.log(mappedArr); 

function isOdd(num) {
  return num % 2 !== 0;
}
const arr2 = [1, 2, 3, 4, 5];
const oddNums = arr.filter(isOdd);
console.log(oddNums); 
console.log(arr);

const container = document.querySelector("#container");

const display = container.firstElementChild;
console.log(display);

const controls = document.querySelector(".controls");
const display2 = controls.previousElementSibling;
console.log(display);


