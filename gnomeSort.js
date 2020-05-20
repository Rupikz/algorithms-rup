const { list, isSort, swap } = require('./helpers');

const gnomeSort = (arr) => {
  for (let i = 0; i < arr.length; i += 1) {
    const nextItem = i + 1;
    if (arr[i] > arr[nextItem]) {
      arr = swap(i, nextItem, arr);
      if (i > 0) {
        i -= 1;
      }
      i -= 1;
    }
  }

  return arr;
};

const sortList = gnomeSort(list);

console.log('До', list);
console.log('После', sortList);
console.log('Тест', isSort(sortList, list));
