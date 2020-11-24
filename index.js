class Polygon {
  constructor(array) {
    this.array = array
    this.count = this.array.length
  }

  get countSides() {
    return this.array.length
  }

  get perimeter() {
    return this.array.reduce((accum, i) => accum + i)
  }
}

class Triangle extends Polygon {
  get isValid() {
    if(this.array.length === 3) {
        if(this.array[0] + this.array[1] > this.array[2] && this.array[0] + this.array[2] > this.array[1] && this.array[1] + this.array[2] > this.array[0]) {
            return true;
        } else {
            return false
        }
    }
  }
}

class Square extends Polygon {
  get isValid() {
    if(this.array.length === 4) {
      if(this.array[0] === this.array[1] && this.array[1] === this.array[2] && this.array[2] === this.array[3]) {
        return true
      }else {
        return false
      }
    }
  }

  get area() {
    if(this.isValid === true) {
      return this.array[0] ** 2
    }
  }
} 