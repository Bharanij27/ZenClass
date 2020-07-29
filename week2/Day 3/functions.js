
function addFive(num) {
    if(Number.isInteger(num)) return num + 5;
    return -1;
}

function getOpposite(num) {
    if(Number.isInteger(num)) return num * -1;
    return -1;
}


function toSeconds(min) {
    return min * 60;
}

function toInteger(mystr) {
    return +mystr
}

function nextNumber(myint) {
    return myint + 1;
}

function getFirstElement(arr) {
    return arr[0];
}

function hourToSeconds(hour) {
    return hour * 60 * 60;
}

function findPerimeter(height, width) {
    return 2 * (height + width);
}

function lessThan100(num1,num2) {
    let sum = num1 + num2;
    return sum < 100;
}

function remainder(divider, divisor) {
    return divider % divisor;
}

function CountAnimals(turkey ,horse, pigs) {
    return (turkey * 2) + (horse * 4) + (pigs * 4);
}

function frames(num1,num2) {
    return 60 * num1, num2;
}

function divisibleByFive(num1) {
    return num1 % 5 == 0;
}


function isEven(num){
    if(+num) return (+num) % 2 == 0;
    return -1;
}

function areBothOdd(num1, num2){
    return num1 % 2 != 0 & num2 % 2 != 0;
}

function getFullName(firstName, lastName){
    if(firstName == undefined) firstName = ''; 
    if(lastName == undefined) lastName = '';
    return firstName + ' ' + lastName;
}

function getLengthOfWord(word1){
    if(typeof word1 == 'string') return word1.length;
    else return -1;
}

function isSameLength(word1, word2){
    return word1.length == word2.length;
}

function getDistance(x1, y1, x2, y2){
    return Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));
}

function getNthElement(array, n){
    return array[n];
}

function getLastElement(array){
    let len = array.length
    return (len==0)? -1 : array[len-1];
}

function getProperty(obj, key){
    if(obj[key]!=undefined) return obj[key];
    return 'NA';
}

function addProperty(obj, key){
    obj[key] = true;
    return obj;
}

function removeProperty(obj, key){
    delete obj[key];
    return obj;
}

function getPositives(ar){
    return ar.filter(element => element > 0);
}

function powersOfTwo(n){
    res = [];
    for(let i = 0; i <= n; i++) res.push(2**i);
    return res;
}

function findMax(ar){
    let min = ar[0];
    return ar.reduce((acc, val) =>{
        if(val>acc) acc = val;
        return acc;
    }, min)
}

function printPrimes(nPrimes)
{
 var n = 0;
 var i = 2;
 
 while(n < nPrimes)
 {
 if (isPrime(i))
 {
 console.log(n, " → ", i);
 n++;
 }
 
 i++;
 }
}

function isPrime(n)
{
    for(let i=2; i<n;i++){
        if(n%i==0) return 0;
    }
    return 1;
}

function getPrimes(start, end){
    let res = [];
    for(let i = start; i < end; i++){
        if(isPrime(i)) res.push(i);
    }
    return res;
}

function mergeArrays(a1, a2){
    return a1.concat(a2);
}


function sumCSV(s)
{
    let arr = s.split(',');
    return arr.reduce((acc, val) => acc+=val, 0);
}

console.log("Adding 5")
console.log('--------------------');
console.log(5 + '-->' + addFive(5));
console.log('')

console.log("get Opposite")
console.log('--------------------');
console.log(5 + '-->' + getOpposite(5));
console.log('')

console.log("toSeconds")
console.log('--------------------');
console.log(5 + '-->' + toSeconds(5));
console.log('')

console.log("toInteger")
console.log('--------------------');
console.log(5 + '-->' + toInteger('5'));
console.log('')

console.log("nextNumber")
console.log('--------------------');
console.log(6 + '-->' + nextNumber(6));
console.log('')

console.log("getFirstElement")
console.log('--------------------');
let arr = [1,2,3,5];
console.log(getFirstElement(arr));
console.log('')

console.log("hourToSeconds")
console.log('--------------------');
console.log("8 hour -->",hourToSeconds(8));
console.log('')

let height = 6, width = 7;
console.log("findPerimeter")
console.log('--------------------');
console.log(findPerimeter(6, 7));
console.log('')

let num1 = 33, num2 = 47;
console.log("lessThan100")
console.log('--------------------');
console.log(lessThan100(6, 7));
console.log('')

let divider = 6, divisor = 4;
console.log("remainder")
console.log('--------------------');
console.log(remainder(divider, divisor));
console.log('')

let turkey = 2, horse = 4, pigs = 3;
console.log("CountAnimals")
console.log('--------------------');
console.log('2 4 3 ---> ',CountAnimals(divider, divisor));
console.log('')

console.log("frames")
console.log('--------------------');
console.log('10 25 ---> ',frames(divider, divisor));
console.log('')

console.log("divisibleByFive")
console.log('--------------------');
console.log('10 ',divisibleByFive(10));
console.log('')

console.log("divisibleByFive")
console.log('--------------------');
console.log('5 ',isEven(5));
console.log('6 ',isEven(6));
console.log('5u ',isEven('5u'));
console.log('')

console.log("areBothOdd")
console.log('--------------------');
console.log('5 7',areBothOdd(5, 7));
console.log('')

console.log("getFullName")
console.log('--------------------');
console.log(getFullName('GUVI', 'GEEK'));
console.log('')

console.log("getLengthOfWord")
console.log('--------------------');
console.log('GUVI', getLengthOfWord('GUVI'));
console.log('')

console.log("isSameLength")
console.log('--------------------');
console.log('GUVI GEEK', isSameLength('GUVI', 'GEEK'));
console.log('')

console.log("getDistance")
console.log('--------------------');
console.log('100, 100, 400, 300', getDistance(100, 100, 400, 300));
console.log('')

console.log("getNthElement")
console.log('--------------------');
console.log('[1, 3, 5], 1 --> ',getNthElement([1, 3, 5], 1));
console.log('')

console.log("getLastElement")
console.log('--------------------');
console.log('[1, 3, 5] --> ',getLastElement([1, 3, 5]));
console.log('')

console.log("getProperty")
console.log('--------------------');
let obj = {
    mykey : 'Value'
}
console.log(getProperty(obj, 'mykey'));
console.log(getProperty(obj, 'dummy'));
console.log('')


console.log("addProperty")
console.log('--------------------');
console.log(addProperty(obj, 'dummy'));
console.log('')

console.log("removeProperty")
console.log('--------------------');
console.log(removeProperty(obj, 'dummy'));
console.log('')

console.log("Count(+) & Sum(-)")
console.log('--------------------');

var arr10 = [-5, 10, -3, 12, -9, 5, 90, 0, 1];
var ar2 = function countPositivesSumNegatives(arr10) {
    let res = [0, 0];
    arr.forEach(element => element > 0 ? res[0]++: res[1]+=element);
    return res;
}

console.log(ar2(arr));
console.log('')

console.log('Positive array');
console.log('--------------------');
var ar = [-5, 10, -3, 12, -9, 5, 90, 0, 1];
var ar21 = getPositives(ar);
console.log(ar21);
console.log('');

console.log('Positive array');
console.log('--------------------');
var ar3 = powersOfTwo(4);
console.log(ar3.join(','));
console.log('');

console.log('find Max');
console.log('--------------------');
var ar20 = findMax([-5, 10, -3, 12, -9, 5, 90, 0, 1]);
console.log(ar20);
console.log('');

console.log('First 100 Prime');
console.log('--------------------');
printPrimes(100);
console.log('');

console.log('First n Prime');
console.log('--------------------');
console.log(getPrimes(10, 100));
console.log('');

console.log('Merge array');
console.log('--------------------');
var ar11 = [1, 2, 3];
var ar12 = [4, 5, 6];
console.log(mergeArrays(ar11, ar12));
console.log('');

console.log('sum CSV');
console.log('--------------------');
console.log(sumCSV("1.5, 2.3, 3.1, 4, 5.5, 6, 7, 8, 9, 10.9"));