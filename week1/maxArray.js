let input = [1,54,85,68,64,98,20,59,27];
let max = input.reduce((data,acc) =>{
    if(acc < data) acc = data;
    return acc;
},0);
console.log(max)