var chunk = function (arr, size) {
    return Array.from({ length: Math.ceil(arr.length / size) }, function (v, i) {
        return arr.slice(i * size, i * size + size);
    });
};
var sum = function (arr) { return arr.reduce(function (acc, x) { return acc + x; }, 0); };
var filter = function (arr) { return arr.filter(function (element) { return element % 2 == 0; }); };
var find = function (arr) { return arr.find(function (element) { return element % 5 == 0; }); };
var reduce = function (arr) { return arr.reduce(function (acc, value) { return (acc < value) ? acc = value : acc; }, Number.NEGATIVE_INFINITY); };
