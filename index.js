// Your code here
class Polygon {
    constructor(arr) {
        this.arr = arr
        this.count = this.arr.length
    }

    get countSides() {
        return this.arr.length
    }

    get perimeter() {
        return this.arr.reduce((total, i) => total + i)
    }

}

class Triangle extends Polygon {
    get isValid() {
        if(this.arr.length === 3) {
            if(this.arr[0] + this.arr[1] > this.arr[2] && this.arr[0] + this.arr[2] > this.arr[1] && this.arr[1] + this.arr[2] > this.arr[0]) {
                return true
            } else {
                return false
            }
        }
    }
}

class Square extends Polygon {
    get isValid() {
        if(this.arr.length === 4) {
            if(this.arr[0] === this.arr[1] && this.arr[1] === this.arr[2] && this.arr[2] === this.arr[3]) {
                return true 
            } else {
                return false
            }
        }
    }

    get area() {
        if(this.isValid === true) {
            return this.arr[0] ** 2
        }
    }
}