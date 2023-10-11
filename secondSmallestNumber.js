function findSecondSmallest(arr) {
  if (arr.length < 2) {
    return "The array doesn't have a second smallest element.";
  }

  let smallest = Infinity;
  let secondSmallest = Infinity;

  for (let num of arr) {
    if (num < smallest) {
      secondSmallest = smallest;
      smallest = num;
    } else if (num < secondSmallest && num !== smallest) {
      secondSmallest = num;
    }
  }
  if (secondSmallest === Infinity) {
    return "All elements in the array are the same, so there is no distinct second smallest element.";
  }

  return secondSmallest;
}

// Example usage:
const numbers = [5, 2, 8, 1, 9, 2];
const result = findSecondSmallest(numbers);
console.log("The second smallest number is:", result);



//smallest number

function findSmallest(arr) {
    if (arr.length === 0) {
      return "The array is empty.";
    }
  
    let smallest = arr[0];
  
    for (let i = 1; i < arr.length; i++) {
      if (arr[i] < smallest) {
        smallest = arr[i];
      }
    }
  
    return smallest;
  }
  
  // Example usage:
  const numberArr = [5, 2, 8, 1, 9, 2];
  const results = findSmallest(numberArr);
  console.log("The smallest number is:", results);