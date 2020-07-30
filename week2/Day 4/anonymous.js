let numArr = [1, 2, 3, 4, 5, 9, 21, 7];

(function(){
    let res = numArr.filter(data => data%2!=0);
    console.log("Only odd", res);
})();

(function(){
    
    let arr = ['bharani', 'mani', 'cricket', 'hockey'];
    let res = arr.map(data => {
        return data[0].toUpperCase() + data.slice(1);
    });
    console.log("Title Cap", res);
})();

(function(){
    let res = numArr.reduce((acc, val) => acc+=val, 0);
    console.log("Sum of array", res);
})();

function isPrime(n){
    for(let i = 2; i < n; i++){
        if(n % i == 0) return 0;
    }
    return 1;
}

let prime = function(arr){
    return arr.filter(data => isPrime(data))
}

let isPalindrome = function(arr){
    return arr.filter(data =>{
        let str = data.split('').reverse();
        return data == str.join('');
    });
}

let median = function(arr1, arr2){
    if(arr1.length == arr2.length){
        let arr = arr1.concat(arr2);
        arr.sort(function(a, b){
            return +a - +b;
        });
        let res = 0
        let mid = (arr.length % 2 == 0)? [(arr.length/2) -1, arr.length/2] : [arr.length/2]
        while(mid.length!=0){
            res += arr[mid[0]]
            mid.shift();
        } 
        return res/2;
    }
    return -1;
}

let removeDup = function(arr){
    let obj = {};
    arr = arr.map(data => +data);
    arr.forEach(data =>{
        obj[data] == undefined ? obj[data] = 1: obj[data]++;
    });
    let res = [];
    for(let i in obj){
        if(obj[i] == 1) res.push(i)
    }
    return res;
}

let rotate = function(arr, k){
    let splittedArr = arr.splice(0, k);
    return arr.concat(splittedArr);
}

let dupArr = [1, 2, 3, 1, 5, 7, 3, 7, 4, 9, 5];
let palindromeArr = ['mom', 'taxi', 'malayalam', 'maximum', 'No'];
let arr1 = [1, 3, 5, 7, 9];
let arr2 = [2, 4, 6, 8, 10];
let arr = [1, 2, 3, 4, 5, 6, 7];

console.log("only Prime", prime(numArr));
console.log("Palindrome", isPalindrome(palindromeArr));
console.log("Median", median(arr1, arr2));
console.log("Remove Duplicate", removeDup(dupArr));
console.log("Rotate Array", rotate(arr, 3));