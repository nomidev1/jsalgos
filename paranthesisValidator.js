var isValid = function(s) {
  const stack = [];
  const characters = { "(": ")", "{": "}", "[": "]" };
  
  for (const char of s) {
    if (characters[char]) {
      // If the current character is an opening character, push it onto the stack.
      stack.push(char);
    } else {
      // If it's a closing character, it should match the last opening character in the stack.
      const lastOpen = stack.pop();
      if (characters[lastOpen] !== char) {
        return false;
      }
    }
  }
  
  // If the stack is empty, all brackets were correctly matched.
  return stack.length === 0;
};

// Example usage:
const inputString = "{[()]}";
if (isValid(inputString)) {
  console.log("The string contains valid parentheses.");
} else {
  console.log("The string contains invalid parentheses.");
}





var isValids = function(s) {
    const stack = [];
    const characters = { ')': '(', '}': '{', ']': '['};
    for (const char of s) {
      if (!characters[char]){
        stack.push(char); 
      } else if (stack.pop() !== characters[char]){
        console.log(`Mismatched characters: ${stack[stack.length - 1]} and ${char}`);
        return false;
      }
    }
  
    if (stack.length === 0) {
      console.log('All parentheses are correctly matched.');
    } else {
      console.log(`Unmatched opening characters: ${stack.join(', ')}`);
    }
  
    return stack.length === 0;
  };
  
  // Example usage:
  const inputString1 = "{[()]}";
  if (isValids(inputString1)) {
    console.log("The string contains valid parentheses.");
  } else {
    console.log("The string contains invalid parentheses.");
  }
  