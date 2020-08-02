class Calculator{
    constructor(x, y){
        [this.x, this.y] = [x, y];
    }
    add(){ return this.x + this.y; }
    sub(){ return this.x - this.y; }
    mul(){ return this.x * this.y; }
    div(){ return this.x / this.y; }
    mod(){ return this.x % this.y; }
}

let cal = new Calculator(10, 6);
console.log(cal.add());
console.log(cal.sub());
console.log(cal.mul());
console.log(cal.div());
console.log(cal.mod());
