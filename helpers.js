module.exports.list = new Array(100).fill(null).map(() => Math.floor(Math.random() * 200));

module.exports.swap = (index, nextIndex, items) => {
  [items[index], items[nextIndex]] = [items[nextIndex], items[index]];
  return items;
};

module.exports.isSort = (sortArr) => {
  for (let i = 1; i < sortArr.length; i += 1) {
    if (sortArr[i - 1] > sortArr[i]) {
      return false;
    }
  }
  return true;
};
