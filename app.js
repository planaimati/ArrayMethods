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



