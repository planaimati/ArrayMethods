const inputArray = [
  "Mont Blanc",
  "Eiger",
  "Matterhorn",
  "Jungfrau",
  "Monch",
  "Weisshorn",
  "Grand Combin",
  "Adamello",
  "Gran Paradiso",
  "Titlis",
  "Ortler",
  "Liskamm",
  "Breithorn",
  "Marmolada",
  "Weissmies",
];

const findPhraseInArray = (data, phrase) => {
  for (let i = 0; i < data.length; i++) {
    if (data[i] === phrase) {
      return `słowo ${phrase} znajduje się na ${i} miejscu w tablicy`;
    } else if (i === data.length - 1) {
      return `słowo ${phrase} nie znajduje się w tablicy`;
    }
  }
};

//console.log(findPhraseInArray(inputArray, "Eiger"));
