const lib = require("./");
const { SCRAMBLE_SPLIT_INDEXES, COLORS, getScramble } = lib;

jest.mock("cube-scrambler", () => {
  return () => ({
    scramble: jest.fn(() => [
      "U",
      "U",
      "U",
      "U",
      "U",
      "U",
      "D",
      "D",
      "D",
      "D",
      "D",
      "D",
      "R",
      "R",
      "R",
      "R",
      "R",
      "R",
      "L",
      "L",
      "L",
      "L",
      "L",
      "L",
    ])
  });
});
jest.mock("chalk", () => {
  const text = textColor => bgColor => jest.fn((text) => {
    return `${text} (${bgColor}, ${textColor})`;
  })
  const black = text("black");
  const white = text("white");

  return {
    bgWhite: { black: black("bgWhite") },
    bgYellow: { black: black("bgYellow")},
    bgBlue: white("bgBlue"),
    bgGreen: { black: black("bgGreen") },
    bgRed: white("bgRed"),
    bgKeyword: jest.fn((color) => ({ black: black(`bg${color}`) }))
  };
})

it("should have correct SCRAMBLE_SPLIT_INDEXES", () => {
  expect(SCRAMBLE_SPLIT_INDEXES).toMatchSnapshot();
});

it("should have correct COLORS", () => {
  expect(COLORS).toMatchSnapshot();
});

it("should call console.log with correct arguments", () => {
  const originalConsoleLog = console.log;
  console.log = jest.fn();

  getScramble();

  expect(console.log).toHaveBeenCalledTimes(1);
  expect(console.log.mock.calls[0]).toMatchSnapshot();
  console.log = originalConsoleLog;
});
