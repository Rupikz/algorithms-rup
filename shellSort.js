const { list, swap, isSort } = require('./helpers');

const sort = (step, arr) => {
  for (let i = 0; i + step < arr.length; i += 1) {
    let index = i;
    while (arr[index]) {
      if (arr[index] > arr[step + index]) {
        arr = swap(index, step + index, arr);
        index = i;
      }
      index += step;
    }

    if (arr[i] > arr[step + i]) {
      arr = swap(i, step + i, arr);
    }
  }

  return arr;
};

const shellSort = (arr) => {
  const step = [1];

  while (step[step.length - 1] < arr.length) {
    const nextStep = step[step.length - 1] * 3 + 1;
    if (nextStep < arr.length) {
      step.push(nextStep);
    } else {
      break;
    }
  }

  step.reverse().forEach((n) => {
    arr = sort(n, arr);
  });

  return arr;
};

console.log('До', list);
const sortList = shellSort(list);
console.log('После', sortList);
console.log('Тест', isSort(sortList));
