const list = new Array(100).fill(null).map(() => Math.floor(Math.random() * 200));

const insertionSort = ([first, ...rest]) => {
  let sortArr = [first];

  rest.forEach((num) => {
    if (num > sortArr[sortArr.length - 1]) {
      sortArr = [...sortArr, num];
    }
    if (num < sortArr[0]) {
      sortArr = [num, ...sortArr];
    }
    for (let i = 0; i < sortArr.length; i += 1) {
      if (num > sortArr[i - 1] && num < sortArr[i]) {
        const arrBefore = sortArr.slice(0, i);
        const arrAfter = sortArr.slice(i);
        sortArr = [...arrBefore, num, ...arrAfter];
      }
    }
  });

  return sortArr;
};

console.log(list);
console.log(insertionSort(list));
