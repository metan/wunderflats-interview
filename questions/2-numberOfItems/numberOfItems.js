/* eslint-env node */

function numberOfItems(arr, item) {
  let sum = 0;

  arr.forEach(el => {
    if (Array.isArray(el)) {
      sum += numberOfItems(el, item);
    } else if(el === item) {
      sum += 1;
    }
  })

  return sum;
}

module.exports = numberOfItems;
