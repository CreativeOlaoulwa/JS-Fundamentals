#!/usr/bin/node

const num = parseInt(process.argv[2]);

function factorial(n) {
  if (isNaN(n) || n === 0) {
    return 1;
  }
  return n * factorial(n - 1);
}

console.log(factorial(num));
// 10-factorial.js
// This script calculates the factorial of a number provided as a command line argument and prints the result
