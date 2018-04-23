const cubeScrambler = require("cube-scrambler")();
const chalk = require("chalk");

// cubeScrambler returns a 24 move scramble
const SCRAMBLE_SPLIT_INDEXES = [
  { beginning: 0, ending: 4 },
  { beginning: 4, ending: 8 },
  { beginning: 8, ending: 12 },
  { beginning: 12, ending: 16 },
  { beginning: 16, ending: 20 },
  { beginning: 20, ending: 24 },
];

const COLORS = [
  chalk.bgWhite.black,
  chalk.bgYellow.black,
  chalk.bgBlue,
  chalk.bgGreen.black,
  chalk.bgRed,
  chalk.bgKeyword("orange").black
]

function getScramble() {
  const result = cubeScrambler.scramble();
  const output = [];

  SCRAMBLE_SPLIT_INDEXES.forEach((split, index) => {
    const text = result.slice(split.beginning, split.ending);

    const colorFunction = COLORS[index];
    if (typeof colorFunction !== "function") {
      throw new TypeError(`${COLORS[index]} is an invalid color`);
    }

    output.push(colorFunction(text));
  });

  console.log.apply(null, output);
}

module.exports = getScramble;

// TODO: It should accept a number variable. The number variable will let you request multiple scrambles
