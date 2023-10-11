



//find min max number without library

let array = [10, 3, 89, 8, 1, 9, 99, 100];

// Function to find the minimum value in an array
function findMin(arr) {
  if (arr.length === 0) {
    return undefined; // Handle an empty array
  }

  let min = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < min) {
      min = arr[i];
    }
  }
  return min;
}

// Function to find the maximum value in an array
function findMax(arr) {
  if (arr.length === 0) {
    return undefined; // Handle an empty array
  }

  let max = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
  }
  return max;
}

const minNum1 = findMin(array);
const maxNum2 = findMax(array);

console.log("Minimum Number: ", minNum1);
console.log("Maximum Number: ", maxNum2)