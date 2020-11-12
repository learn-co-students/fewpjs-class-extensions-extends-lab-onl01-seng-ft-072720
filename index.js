class Polygon {
    constructor(array) {
        this.sideLengths = array;
    }

    get countSides () {
        return this.sideLengths.length;
    }

    get perimeter () {
        return this.sideLengths.reduce((accumulator, memo) => memo+accumulator, 0)
    }
}

class Triangle extends Polygon {
    get isValid () {
        let [a,b,c] = this.sideLengths;
        if (this.countSides === 3 && (a+b>c && a+c>b && b+c>a)) {
            return true
        } else {
            return false
        }
    }
}

class Square extends Polygon {

    get isValid () {
        if (this.countSides === 4 && (!this.sideLengths.find(num => num != this.sideLengths[0]))) {
            return true
        } else {
            return false
        }
    }

    get area() {
        // if (this.isValid()) { ...how to get this to work?
        if (this.countSides === 4 && (!this.sideLengths.find(num => num != this.sideLengths[0]))) {
            let [a,b] = this.sideLengths;
            return a*b;
        } else {
            return "This is not a square"
        }
    }
}

