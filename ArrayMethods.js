// .forEach

const testArray = [1, 2, 3, 4, 5];

const addOne = (item) => {
  console.log(item + 1);
};

const forEachFunc = (arr, callback) => {
  for (item of arr) {
    callback(item);
  }
};

forEachFunc(testArray, addOne);

// .map

const addTwo = (item) => item + 2;

const mapFn = (array, callback) => {
  const newArr = [];

  for (item of array) {
    newArr.push(callback(item));
  }

  return newArr;
};

const resultArray = mapFn(testArray, addTwo);

// .entries

const entriesFn = (array) => {
  let iterator = {};
  for (let i = 0; i < array.length; i++) {
    iterator = {
      ...iterator,
      [i]: [i, array[i]],
    };
  }

  return iterator;
};

console.log(entriesFn(testArray));

// .filter

const condFunc = (item) => {
  return item > 3;
};

const filterFn = (array, callback) => {
  const resultsArr = [];

  for (item of array) {
    if (callback(item)) {
      resultsArr.push(item);
    }
  }

  return resultsArr;
};

console.log(filterFn(testArray, condFunc));

// .reduce

const callbackFunc = (result, item) => {
  return result + item;
};

const reduceFn = (array, callback, inital) => {
  let result = inital;

  for (item of array) {
    result = callback(result, item);
  }

  return result;
};

const result = reduceFn(testArray, callbackFunc, 0);

// .every

const testFunc = (item) => {
  return item > 4 ? true : false;
};

const everyFn = (array, callback) => {
  let results = [];
  for (item of array) {
    results.push(callback(item));
  }

  if (results.includes(false)) {
    return false;
  } else return true;
};

console.log(everyFn(testArray, testFunc));

// .some

const someFn = (array, callback) => {
  let results = [];
  for (item of array) {
    results.push(callback(item));
  }

  if (results.includes(true)) {
    return true;
  } else return false;
};

console.log(someFn(testArray, testFunc));
