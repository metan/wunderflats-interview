/**
 * @jest-environment node
 */
/* eslint-env jest */

const numberOfItems = require("./numberOfItems.js");

test("Example case", () => {
  const arr = ["apple", ["banana", "strawberry", "apple"]];
  expect(numberOfItems(arr, "apple")).toBe(2);
});

test("Array with items", () => {
  const arr = [2, 3, 2, 4, 2, 5];
  expect(numberOfItems(arr, 2)).toBe(3);
});

test("Array with items and arrays", () => {
  const arr = [2, 3, [2, 4], [2], 5, null, undefined];
  expect(numberOfItems(arr, 2)).toBe(3);
});

test("Array with items and arrays", () => {
  const arr = [2, 3, [2, 4], [2], 5, []];
  expect(numberOfItems(arr, 2)).toBe(3);
});

test("Array with items and arrays", () => {
  const arr = [2, 3, [2, [4]], [[2]], 5, [[]], [1, [2, [3, 4, 2]]]];
  expect(numberOfItems(arr, 2)).toBe(5);
});
