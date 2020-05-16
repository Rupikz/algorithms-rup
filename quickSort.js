const { list, swap, isSort } = require('./helpers');

const quickSort = (arr) => {
  if (arr.length === 1) {
    return arr;
  }
  const middleIndex = Math.floor(arr.length / 2);
  const middleValue = arr[middleIndex];

  for (let i = 0; i < arr.length; i += 1) {
    if (arr[i] >= middleValue) {
      for (let j = arr.length - 1; j > 0; j -= 1) {
        if (j <= i) {
          break;
        }
        if (arr[j] <= middleValue) {
          swap(i, j, arr);
          break;
        }
      }
    }
  }
  const divisionIndex = arr.findIndex((n) => n > middleValue);
  const arrBefore = quickSort(arr.slice(0, divisionIndex));
  const arrAfter = quickSort(arr.slice(divisionIndex));
  return [...arrBefore, ...arrAfter];
};

console.log('До', list);
const sortList = quickSort(list);
console.log('После', sortList);
console.log('Тест', isSort(sortList));
