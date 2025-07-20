#!/usr/bin/node

const a = parseInt(process.argv[2]);
const b = parseInt(process.argv[3]);

function add(x, y) {
  return x + y;
}

console.log(add(a, b));
// 9-add.js
// This script adds two numbers provided as command line arguments and prints the result.