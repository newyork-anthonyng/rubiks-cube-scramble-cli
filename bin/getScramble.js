#! /usr/bin/env node

const argv = require("yargs")
  .usage("Usage: $0 [options]")
  .describe("number", "Get number of rubiks scrambles")
  .alias("n", "number").argv;
const createEmptyArray = require("create-empty-array");
const getScramble = require("../lib");

let number = Math.max(argv.number, 1);
if (typeof number !== "number" || Number.isNaN(number)) {
  number = 1;
}

createEmptyArray(number).forEach(() => {
  getScramble(number);

  console.log(); // print line break between scrambles
});
