/*
Write a function that takes in a string and converts it into kebab case
(ex. ('Dogs are cute') ---> Dogs-Are-Cute) notice how every word 
becomes capitalized, and connected by a hyphen.
if the string passed in is an empty string, return 'This is an empty string!'

for this question, make a comment for every piece of the code, explaining
what it does and why.
*/

const kebabCase = function (str) {
    // your code here
    let newStr = '';
    if(str === ''){
        newStr = 'This is an empty string!'
    }else{    
        str = str.split(' '); // arr[0]: ['Coding','Is','Fun']
        for (i = 0; i < str.length; i++){ // loop each eloment in str
            if(i === 0){
                newStr += str[i].charAt(0).toUpperCase() + str[i].slice(1).toLowerCase(); //'C' + 'oding'
            }else{
                newStr += '-' + str[i].charAt(0).toUpperCase() + str[i].slice(1).toLowerCase(); // '-' + 'I' + 's' // '-' + 'F' + 'un'
            }
        }
    }

    
    return newStr;
}

// kebabCase('this STrIng has Weird casing');

console.log((kebabCase('Coding Is Fun') === 'Coding-Is-Fun') ? "Test 1: Passing" : "Test 1: Failing");

console.log((kebabCase('this STrIng has Weird casing') === 'This-String-Has-Weird-Casing') ? "Test 2: Passing" : "Test 2: Failing");

console.log((kebabCase('') === 'This is an empty string!') ? "Test 3: Passing" : "Test 3: Failing");

