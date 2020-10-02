/*
Write a function that takes in an array of strings, and converts them all 
into snake case 
(ex. (['Dogs are cute', 'Cats aRe also cute']) ---> ['dogs_are_cute', 'cats_are_also_cute']) notice the 
lowercase letters, and underscores connecting the words. 
return the entire array with the converted strings
*/
const snakeCaseArr = function (arr) {
    // your code here. 
    
    for (i = 0; i < arr.length; i++){ //['Coding Is Fun', 'Dogs ARE cool']
        arr[i] = arr[i].toLowerCase();  // arr[0]: 'coding is fun'
        arr[i] = arr[i].split(' ').join('_'); // arr[0]: ['coding','is','fun'](split) -> 'coding_is_fun'(join)
    }
    console.log(arr);
    return arr;

}

console.log((snakeCaseArr(['Coding Is Fun']) === ['coding_is_fun']) ? "Test 1: Passing" : "Test 1: Failing");

console.log((snakeCaseArr(['Coding Is Fun', 'Dogs ARE cool']) === ['coding_is_fun', 'dogs_are_cool']) ? "Test 2: Passing" : "Test 2: Failing");

console.log((snakeCaseArr(['cats are CUTE', 'Dogs ARE cool']) === ['cats_are_cute', 'dogs_are_cool']) ? "Test 3: Passing" : "Test 3: Failing");