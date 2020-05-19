const { list, isSort } = require('./helpers');

const immersion = (num, tree) => {
  const defaultObj = {
    value: num,
    left: null,
    right: null,
  };

  if (!tree.right && tree.value <= num) {
    tree.right = defaultObj;
  } else if (!tree.left && tree.value > num) {
    tree.left = defaultObj;
  } else if (tree.value <= num) {
    immersion(num, tree.right);
  } else if (tree.value >= num) {
    immersion(num, tree.left);
  }
};

const treeSort = ([first, ...rest]) => {
  const treeRoot = {
    value: first,
    left: null,
    right: null,
  };

  rest.forEach((n) => {
    immersion(n, treeRoot);
  });

  const sortArr = [];

  const emergence = (tree) => {
    if (tree.left) {
      emergence(tree.left);
    }
    sortArr.push(tree.value);
    if (tree.right) {
      emergence(tree.right);
    }
  };

  emergence(treeRoot);

  return sortArr;
};

const sortList = treeSort(list);

console.log('До', list);
console.log('После', sortList);
console.log('Тест', isSort(sortList, list));
