const list = new Array(100).fill(null).map(() => Math.floor(Math.random() * 200));

const swap = (index, nextIndex, items) => {
  [items[index], items[nextIndex]] = [items[nextIndex], items[index]];
  return items;
};

const selectionSort = (arr) => {
  for (let i = 0; i < arr.length; i += 1) {
    const arrBefore = arr.slice(0, i);
    const arrAfter = arr.slice(i);
    let minNum = 0;
    for (let j = 1; j < arrAfter.length; j += 1) {
      if (arrAfter[j] < arrAfter[minNum]) {
        minNum = j;
      }
    }
    swap(0, minNum, arrAfter);
    arr = [...arrBefore, ...arrAfter];
  }

  return arr;
};


console.log(list);
console.log(selectionSort(list));
