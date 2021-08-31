const alphabet = "abcdefghijklmnoprstuwxyz".split("");

const aggregateIntoChunks = (array) => {
  const resultsArray = [];
  let lettersArray = [];
  let num = Math.floor(Math.random() * (8 - 4) + 4);
  let total = array.length - num;

  for (let i = 0; i < array.length; i++) {
    lettersArray.push(array[i]);

    if (lettersArray.length === num) {
      console.log("number" + num);
      console.log("total" + total);
      resultsArray.push(lettersArray);
      lettersArray = [];

      if (total <= 8) {
        num = Math.floor(Math.random() * (4 - 4) + 4);
        total -= num;
      } else {
        num = Math.floor(Math.random() * (8 - 4) + 4);
        total -= num;
      }
    }
  }

  console.log(resultsArray);
};

console.log(aggregateIntoChunks(alphabet));
