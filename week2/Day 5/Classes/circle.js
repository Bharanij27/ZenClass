class Circle{
    constructor(...args){
        [this.radius, this.color] = args;
    }
    getRadius(){return this.radius;}
    getcolor(){return this.color;}
    setRadius(value){this.radius = value;}
    setColor(value){this.color = value;}
    toString(){return this.radius + this.color;}
    getArea(){ return Math.PI * 2 * this.radius;}
}

let c1 = new Circle();
let c2 = new Circle(2);
let c3 = new Circle(3, "Red");

