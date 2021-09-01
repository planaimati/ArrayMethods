const generateArrayWithRandomNumbers = (howManyNumbers, min, max) => {
  const arrayOfNumbers = [];

  for (let i = 0; i < howManyNumbers; i++) {
    let generatedNumber = Math.floor(Math.random() * (max - min) + min);

    arrayOfNumbers.push(generatedNumber);
  }

  return arrayOfNumbers;
};

//console.log(generateArrayWithRandomNumbers(10, 5, 10));

const generateArrayOfArrays = (
  howManyArrays,
  howManyNumbers,
  min,
  max,
  func
) => {
  const arrayOfArrays = [];

  for (let i = 0; i < howManyArrays; i++) {
    arrayOfArrays.push(func(howManyNumbers, min, max));
  }

  return arrayOfArrays;
};

//console.log(
  //generateArrayOfArrays(10, 10, 5, 10, generateArrayWithRandomNumbers)
//);
