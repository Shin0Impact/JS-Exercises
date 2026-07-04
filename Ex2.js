//1
function sumTwoSmallestNumbers(numbers) {
  const [first, second] = numbers.sort((a, b) => a - b);
  return first + second;
}
sumTwoSmallestNumbers([19, 5, 42, 2, 77]); // returns 7

//2
function binaryArrayToNumber(arr) {
  return parseInt(arr.join(""), 2);
}
binaryArrayToNumber([0, 0, 0, 1]); // returns 1
binaryArrayToNumber([1, 1, 1, 1]); // returns 15

//3
function findthenextsquare(sq) {
  const next = Math.sqrt(sq) + 1;
  return Number.isInteger(Math.sqrt(sq)) ? next * next : -1;
}
findthenextsquare(121); // returns 144
findthenextsquare(625); // returns 676

//4
function findunique(arr) {
  return arr.find((num) => arr.indexOf(num) === arr.lastIndexOf(num));
}
findunique([1, 1, 2]); // returns 2
findunique([0, 0, 0.55, 0, 0]); // returns 0.55

//5
function summation(num) {
  return (num * (num + 1)) / 2; // dania we dont need to use the method inthe example theres already a math equation for it
}
summation(2); //3
summation(8); //36

//6
function centuryFromYear(year) {
  return Math.ceil(year / 100);
}
centuryFromYear(1705); // returns 18
centuryFromYear(1900); // returns 19

//7
function basicOp(operation, value1, value2) {
  const ops = {
    '+': (a, b) => a + b,
    '-': (a, b) => a - b,
    '*': (a, b) => a * b,
    '/': (a, b) => a / b
  };
  return ops[operation](value1, value2);
}
basicOp('+', 4, 7); // returns 11
basicOp('-', 15, 10); // returns 5
basicOp('*', 3, 8); // returns 24
basicOp('/', 10, 2); // returns 5