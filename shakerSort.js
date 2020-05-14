const list = new Array(100).fill(null).map(() => Math.floor(Math.random() * 200));

const swap = (index, nextIndex, items) => {
  [items[index], items[nextIndex]] = [items[nextIndex], items[index]];
  return items;
};

const shakerSort = (arr) => {
  let result = false;

  while (!result) {
    result = true;
    for (let i = 0; i < arr.length; i += 1) {
      const nextItem = i + 1;
      if (arr[i] > arr[nextItem]) {
        arr = swap(i, nextItem, arr);
        result = false;
      }
    }
    for (let i = arr.length; i >= 0; i -= 1) {
      const nextItem = i - 1;
      if (arr[i] < arr[nextItem]) {
        arr = swap(i, nextItem, arr);
        result = false;
      }
    }
  }

  return arr;
};


console.log(list);
console.log(shakerSort(list));
