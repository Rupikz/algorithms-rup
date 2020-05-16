const { list } = require('./helpers');

const mergeSort = (arr) => {
  if (arr.length === 1) {
    return arr;
  }

  const middleArr = Math.floor(arr.length / 2);
  const arrBefore = mergeSort(arr.slice(0, middleArr));
  const arrAfter = mergeSort(arr.slice(middleArr));

  const newArr = [];

  while (arrBefore.length > 0 || arrAfter.length > 0) {
    if (arrBefore.length === 0) {
      newArr.push(...arrAfter);
      arrAfter.length = 0;
    } else if (arrAfter.length === 0) {
      newArr.push(...arrBefore);
      arrBefore.length = 0;
    } else if (arrBefore[0] > arrAfter[0]) {
      newArr.push(arrAfter.shift());
    } else {
      newArr.push(arrBefore.shift());
    }
  }

  return newArr;
};

console.log(list);
console.log(mergeSort(list));
