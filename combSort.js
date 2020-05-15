const list = new Array(100).fill(null).map(() => Math.floor(Math.random() * 200));

const swap = (index, nextIndex, items) => {
  [items[index], items[nextIndex]] = [items[nextIndex], items[index]];
  return items;
};

const checkSort = (arr) => {
  for (let i = 0; i < arr.length; i += 1) {
    const nextItem = i + 1;
    if (arr[i] > arr[nextItem]) {
      return false;
    }
  }
  return true;
};

const combSort = (arr) => {
  const coefficient = 1.247;
  let sectorSort = Math.floor(arr.length / coefficient);
  let isSort = false;
  while (!isSort) {
    for (let i = 0; i < arr.length - sectorSort; i += 1) {
      const nextItem = i + Math.round(sectorSort);
      if (arr[i] > arr[nextItem]) {
        arr = swap(i, nextItem, arr);
      }
    }
    sectorSort /= coefficient;
    isSort = checkSort(arr);
  }

  return arr;
};

console.log(list);
console.log(combSort(list));
