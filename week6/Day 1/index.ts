let chunk = (arr: [], size: number) =>
  Array.from({ length: Math.ceil(arr.length / size) }, (v, i) =>
    arr.slice(i * size, i * size + size)
  );

let sum = (arr : []) => arr.reduce((acc, x) => acc + x, 0);

let filter = (arr : []) => arr.filter(element => element % 2 == 0);

let find = (arr : []) => arr.find(element => element % 5 == 0);

let reduce = (arr: []) => arr.reduce((acc, value) => (acc < value) ?acc = value: acc , Number.NEGATIVE_INFINITY);