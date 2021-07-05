/**
 * @jest-environment node
 */
/* eslint-env jest */
const getRepoCreatedAt = require("./getRepoCreatedAt");

// https://api.github.com/repos/facebook/react
test("Returns correct created_at for facebook/react", async () => {
  const result = await getRepoCreatedAt("facebook", "react");
  expect(result).toBe("2013-05-24");
});

// https://github.com/nodejs/node
test("Returns correct created_at for nodejs/node", async () => {
  const result = await getRepoCreatedAt("nodejs", "node");
  expect(result).toBe("2014-11-26");
});

// https://github.com/axios/axios
test("Returns correct created_at for axios/axios", async () => {
  const result = await getRepoCreatedAt("axios", "axios");
  expect(result).toBe("2014-08-18");
});
