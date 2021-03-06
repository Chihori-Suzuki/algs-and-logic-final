/*
write a function that loops through an array of numbers, and arrays, and adds all of the numbers
ex. [2, 3, 5, [1, 2], [3]] ---> 16
*/

const sumNestedArray = function (arr) {
    let num = 0;

    for(i = 0; i < arr.length; i++){
        if(typeof arr[i] === 'number'){
            num += arr[i];
        }else{ 
            for(j = 0; j < arr[i].length; j++){
                num += arr[i][j];
            }
        }

    }
    console.log(num);
    return num;
}

// console.log((sumNestedArray([1, [2, 3, 4], 6, 7, 5]) === 28) ? "Test 1: Passing" : "Test 1: Failing");
// console.log((sumNestedArray([1, [2, 3, 4], [2], 7, [3, 5, 6]]) === 33) ? "Test 2: Passing" : "Test 2: Failing");


const newSumNestedArray = function (arr) {

    if(arr.length === 0 ) {
        return 0;
    }
    let num = arr.pop();
    let ans = 0;
    if(Array.isArray(num)){
        for(i = 0; i< num.length; i++){
            ans += num[i];
        }
    }else{
        ans = num;
    }

    return ans + newSumNestedArray(arr);
}

console.log(newSumNestedArray([1, [2, 3, 4], 6, 7, 5]));  // 28
console.log(newSumNestedArray([1, [2, 3, 4], [2], 7, [3, 5, 6]]));  //33



