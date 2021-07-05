/**
 * @jest-environment node
 */
/* eslint-env jest */

const calcAvgHeight = require("./calcAvgHeight.js");

test("basic example", () => {
  const avgHeight = calcAvgHeight({
    Matt: { height: 174, weight: 69 },
    Jason: { height: 190, weight: 103 },
  });
  expect(avgHeight).toBe(182);
});

test("no people", () => {
  const avgHeight = calcAvgHeight({});
  expect(avgHeight).toBe(null);
});

test("one person", () => {
  const avgHeight = calcAvgHeight({
    Matt: { height: 174, weight: 69 },
  });
  expect(avgHeight).toBe(174);
});

test("three people", () => {
  const avgHeight = calcAvgHeight({
    Matt: { height: 174, weight: 69 },
    Jason: { height: 190, weight: 103 },
    Poopfeast420: { height: 186, weight: 80 },
  });
  expect(avgHeight).toBe(183);
});
