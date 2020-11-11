class Polygon {

    constructor(arrayOfSides) {
        this.sides = arrayOfSides
    }

    get countSides() {
        return this.sides.length
    }

    get perimeter() {
        const reducer = (accumulator, currentValue) => accumulator + currentValue;
        return this.sides.reduce(reducer, 0)
    }
}

class Triangle extends Polygon {
    get isValid() {
        const side1 = this.sides[0]
        const side2 = this.sides[1]
        const side3 = this.sides[2]
        return (side1 + side2 > side3 && side2 + side3 > side1 && side3 + side1 > side2) ? true : false
    }
}

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