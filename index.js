// Your code here
//Polygon
class Polygon {

    constructor(arrayOfSides) {
        this.sides = arrayOfSides
    }

    get countSides() {
        return this.sides.length
    }

    get perimeter() {
    if (!Array.isArray(this.sides)) return;
    let sum = 0;
    for (var int of this.sides) {
      sum += int
    }
    return sum
    }
}

//Triangle
class Triangle extends Polygon {
  
    get isValid() {
        const side1 = this.sides[0]
        const side2 = this.sides[1]
        const side3 = this.sides[2]
        return (side1 + side2 > side3 && side2 + side3 > side1 && side3 + side1 > side2) ? true : false
    }
}

//Square
class Square extends Polygon {
  
    get isValid() {
        const side1 = this.sides[0]
        const side2 = this.sides[1]
        const side3 = this.sides[2]
        const side4 = this.sides[3]
        return (side1 === side2 && side2 === side3 && side3 === side4) ? true : false
    }

    get area() {
        return this.sides[0] ** 2
    }
}