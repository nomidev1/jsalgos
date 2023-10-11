// const arr = [1, 2, 3, 4, 5, 6, 7, 8, 10, 1, 2, 4, 6, 8, 10, 11, 13, 15];
const arr = [1, 2, 3, 4, 5, 6, 7, 8, 10, 12, 14, 90];
//this method not valid for duplicates values and only for a sequence

let missingNumber = [];
const findMissingNumber = (arr) => {
  console.log(arr);
  for (let i = 0; i < arr.length - 1; i++) {
    console.log(i);
    if (arr[i] + 1 !== arr[i + 1]) {
      missingNumber.push(arr[i] + 1);
    }

    console.log("missing", missingNumber);
  }
  return false;
};

console.log(findMissingNumber(arr));


///Now for duplicates and missing numbers

const testArr = [1, 2, 3, 4, 5, 6, 7, 8, 10, 1, 2, 4, 6, 8, 10, 11, 13, 15];

const duplicates = [];
const SeenNumbers = [];

for (let i = 0; i < testArr.length - 1; i++) {
  const currentNumber = testArr[i];
  console.log("---current Number-----", currentNumber);
  console.log(SeenNumbers.indexOf(currentNumber));

  if (SeenNumbers.indexOf(currentNumber) !== -1) {
    if (duplicates.indexOf(currentNumber) === -1) {
      duplicates.push(currentNumber);
    }
  } else {
    SeenNumbers.push(currentNumber);
  }
}

console.log("given array", testArr);
console.log("seen numbers", SeenNumbers);
console.log("duplicate numbers", duplicates);

//finding the missing numbers in an array ;

//lets find minimum and maximum number in an array to configure out the search range

//its not working without spread operator
//because make it iteratable and math function
//take number not an array
let minNum = Math.min(...testArr);
console.log("Minimum number", minNum);
let maxNum = Math.max(...testArr);
console.log("maximum number", maxNum);
let MissingNumbersFromArray2 = [];
//now we can implement our code to check the missing numbers

for (let i = minNum; i < maxNum; i++) {
  if (SeenNumbers.indexOf(i) === -1) {
    //there i am checking is there any missing number already exist or not

    MissingNumbersFromArray2.push(i);
  }
}

console.log("missing numbers", missingNumber);