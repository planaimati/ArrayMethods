const getMyAge = (year) => {
  const date = new Date();
  const actualYear = date.getFullYear();

  if (typeof year === "string") {
    return actualYear - parseInt(year);
  } else if (typeof year === "object") {
    return actualYear - year.toDateString().split(" ")[3];
  } else if (typeof year === "number") {
    return actualYear - year;
  }
};

const result1 = getMyAge(new Date(1990, 1, 1));
const result2 = getMyAge("1990");
const result3 = getMyAge(1990);


