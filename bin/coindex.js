#!/usr/bin/env node
const program = require('commander');

console.log('Hello from coindex');

const [, , ...argv] = process.argv;
console.log(argv);
