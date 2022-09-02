// 2.a
// Declare a function called testAverage
//  These are the requirements of the function:
//    Accepts a single parameter that can accept an infinite amount of arguments
//    Inside the function, add the parameters together
//    Divide the sum by the number of parameters that were passed in
//    The function will output the result
// Hints: Remember how a rest parameter represents arguments and what methods that can allow us to use
function testAverage(...testScores) {
    let sum = 0;
    for (testScore of testScores) {
        sum += testScore;
    }
    numOfScores = testScores.length;
    average = sum / numOfScores;
    return average;
}
// Invoke testAverage with the following parameters: 92, 71, 85, 83
console.log(testAverage(92, 71, 85, 83));
// 2.b
// Declare a function called gradeCheck
//  These are the requirements of the function:
//    Accepts a single parameter (we will be passing the returned value of our testAverage function)
//    Inside the function, build the following conditionals:
//    if argument is greater than or equal to 90, print "Your grade is an A, great job!" then output false
//    if argument is greater than or equal to 80 but less than 90, print "Your grade is B, nice job!" then output false
//    if argument is greater than or equal to 70, print "Your grade is a C, extra studying required" then output true
//    if argument is less than 70, print "Uh oh." then output true
function gradeCheck(param) {
    if (param >= 90) {
        console.log("Your grade is an A, great job!");
        return false;
    } else if (param >= 80) {
        console.log("Your grade is B, nice job!");
        return false;
    } else if (param >= 70) {
        console.log("Your grade is a C, extra studying required.");
        return true;
    } else {
        console.log("Uh oh.");
        return true;
    }
}
// Invoke gradeCheck and pass in testAverage as an argument; testAverage should have the same parameters as before
console.log(gradeCheck(testAverage(92, 71, 85, 83)));