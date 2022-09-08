const nums = [6, 5, 2, 3, 4, 1, 0];
// remove each of the last two items with pop(), saving each item to a variable
let lastNum = nums.pop();  //0
let secondLastNum = nums.pop();  //1

// remove each of the first two items with shift(), saving each item to a variable
let firstNum = nums.shift();  //6
let secondNum = nums.shift();   //5

// use push and unshift to add the variables back to the array in numerical order, 0-6
nums.unshift(lastNum, secondLastNum);
nums.push(secondNum, firstNum);
console.log(nums);