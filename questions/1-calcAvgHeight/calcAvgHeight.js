/* eslint-env node */

function calcAvgHeight(data) {
  const heightsArr = Object.values(data).map(val => val.height);
  const numOfPeople = heightsArr.length;
  if (!numOfPeople) return null;
  
  const sum = heightsArr.reduce((prev, acc) => prev + acc, 0);
  return Math.round(sum/numOfPeople);
}

module.exports = calcAvgHeight;
