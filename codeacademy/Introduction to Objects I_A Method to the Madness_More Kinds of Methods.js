var square = new Object();
square.sideLength = 6;

square.calcPerimeter = function() {
    return this.sideLength * 4;
};

square.calcArea = function() {
    //Doesn't work except 'this' keyword. 'Why' man why ?
    return (this.sideLength * this.sideLength);
}

var p = square.calcPerimeter();
var a = square.calcArea();

console.log(p);
console.log(a);
