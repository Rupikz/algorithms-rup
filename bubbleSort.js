const list = new Array(100).fill(null).map(() => Math.floor(Math.random() * 200));

const swap = (index, nextIndex, items) => {
  [items[index], items[nextIndex]] = [items[nextIndex], items[index]];
  return items;
};

const sortIteration = (arr) => {
  let count = 0;

  for (let i = 0; i < arr.length; i += 1) {
    const nextItem = i + 1;
    if (arr[i] > arr[nextItem]) {
      arr = swap(i, nextItem, arr);
      count += 1;
    }
  }

  return { count, arr };
};

const bubbleSort = (arr) => {
  let count;

  while (count !== 0) {
    const sortArr = sortIteration(arr);
    ({ count, arr } = sortArr);
  }

  return arr;
};

console.log(list);
console.log(bubbleSort(list));
