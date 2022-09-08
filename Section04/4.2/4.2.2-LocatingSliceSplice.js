const arr = ["a", "a", "b", "a", "c", "b", "a", "b", "b", "c", "c", "c"];

// find the first index of "a", "b", and "c"
let firstA = arr.indexOf("a");
let firstB = arr.indexOf("b");
let firstC = arr.indexOf("c");
console.log(firstA, firstB, firstC);

// find the last index of "a", "b", and "c"
let lastA = arr.lastIndexOf("a");
let lastB = arr.lastIndexOf("b");
let lastC = arr.lastIndexOf("c");
console.log(lastA, lastB, lastC);

// if the first index and last index of "a" is not the same, remove the last instance
// repeat until there is just one "a"
function removeDuplicates(arr, duplicateValue) {
    let firstIndex = arr.indexOf(duplicateValue);
    let lastIndex = arr.lastIndexOf(duplicateValue);
    while (firstIndex != lastIndex) {
        arr.splice(lastIndex, 1);
        lastIndex = arr.lastIndexOf(duplicateValue);
    }
    return arr;
}
removeDuplicates(arr, "a");
console.log(arr);