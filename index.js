// Your code here
class Polygon {
        constructor(sides) {
            this.sides = sides
        }
    get countSides() {
        return this.sides.length
    }
    get perimeter() {
        const reducer = (accumulator, currentValue) => accumulator + currentValue;
        return this.sides.reduce(reducer)
    }
}
class Triangle extends Polygon {
    get isValid() {
        
        let [side1, side2, side3] = this.sides
        if(side1+side2 < side3 || side2+side3 < side1 || side1+side3 < side2) {
            return false
        } else { 
            return true
        }
    }
}

class Square extends Polygon {
    get isValid() {
        if (this.countSides!=4) {
            return false
        }
        const allEqual = arr => arr.every( v => v === arr[0] ) // learned to use .every()
        console.log(this.sides)
        return allEqual(this.sides)

    }
    get area() {
        //console.log(this.isValid)
        if (this.isValid) {
            console.log(this.sides[0])
         return this.sides[0] * this.sides[0]
         }
    }
}