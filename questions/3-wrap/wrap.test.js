/**
 * @jest-environment node
 */
/* eslint-env jest */

const wrap = require("./wrap");

test("Sample case", () => {
  const errorExec = wrap(function () {
    throw new Error("Error");
  });
  const resultExec = wrap(function () {
    return "Result";
  });
  expect(errorExec && errorExec()).toBe(null); // Should output null
  expect(resultExec && resultExec()).toBe("Result"); // Should output "Result"
});

test("Correct value", () => {
  const testFunc = jest.fn(() => {
    return "hello";
  });

  const wrappedFunc = wrap(testFunc);
  wrappedFunc();
  wrappedFunc();
  expect(testFunc).toHaveBeenCalledTimes(2);
  expect(testFunc).toHaveNthReturnedWith(1, "hello");
  expect(testFunc).toHaveNthReturnedWith(2, "hello");
});

test("Execution prevented after error", () => {
  let callCount = 0;
  const failingFunc = jest.fn(() => {
    if (callCount >= 1) {
      throw new Error("💩");
    }
    callCount++;
    return "hello";
  });

  const wrappedFunc = wrap(failingFunc);
  expect(wrappedFunc()).toBe("hello");
  expect(wrappedFunc()).toBe(null);
  expect(wrappedFunc()).toBe(null);
  expect(wrappedFunc()).toBe(null);

  expect(failingFunc).toHaveBeenCalledTimes(2);
  expect(failingFunc).toHaveReturnedTimes(1);
});

test("Multiple modified functions", () => {
  const func1 = jest.fn(() => "func1");
  const func2 = jest.fn(() => "func2");
  const errFunc = jest.fn(() => {
    throw new Error("💩");
  });

  const wrappedFunc1 = wrap(func1);
  const wrappedFunc2 = wrap(func2);
  const wrappedErrFunc = wrap(errFunc);

  expect(wrappedFunc1()).toBe("func1");
  expect(wrappedFunc2()).toBe("func2");
  expect(wrappedErrFunc()).toBe(null);

  expect(wrappedFunc1()).toBe("func1");
  expect(wrappedFunc2()).toBe("func2");
  expect(wrappedErrFunc()).toBe(null);

  expect(wrappedFunc1()).toBe("func1");
  expect(wrappedFunc2()).toBe("func2");
  expect(wrappedErrFunc()).toBe(null);

  expect(func1).toHaveBeenCalledTimes(3);
  expect(func2).toHaveBeenCalledTimes(3);
  expect(errFunc).toHaveBeenCalledTimes(1);
});
