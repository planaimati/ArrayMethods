

// .map

const mapArray = [1, 2, 3, 4, 5];

const mapCallback = (stored, current) => {
  stored.push(current + 1);

  return stored;
};

const mapFn = (array, callback) => {
  return array.reduce(callback, []);
};

const mapResult = mapFn(mapArray, mapCallback);

// .filter

const filterArray = ["Mont Blanc", "Eiger", "Matterhorn", "Jungfrau"];

const filterCallback = (stored, current) => {
  resultArray = [];
  if ((current = "Eiger")) {
    resultArray.push(current);

    return resultArray;
  } else return stored;
};

const filterFn = (array, callback) => {
  return array.reduce(callback, []);
};

const filterResult = filterFn(filterArray, filterCallback);

// .every

const everyArray = [1, 2, 3, 4, 5];

const everyCallback = (stored, current) => {
  if (current > 1) {
    stored.push(current);

    return stored;
  }

  return stored;
};

const everyFn = (array, callback) => {
  if (array.length != array.reduce(callback, []).length) {
    return false;
  } else return true;
};

const everyResult = everyFn(everyArray, everyCallback);

// .some

const someArray = [1, 2, 3, 4, 5];

const someCallback = (stored, current) => {
  if (current > 1) {
    stored.push(current);
    return stored;
  } else return stored;
};

const someFn = (array, callback) => {
  if (array.reduce(callback, []).length != 0) {
    return true;
  } else return false;
};

const someResult = someFn(someArray, someCallback);
