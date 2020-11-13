class Polygon {
    constructor(array){
        this.sides = array
    }

    get countSides(){
        return this.sides.length
    }

    get perimeter(){
        return this.sides.reduce(function(side, total){
            return total += side
        }, 0)
    }
}

class Triangle extends Polygon{
    get isValid(){
        if ((this.sides[0] + this.sides[1]) > this.sides[2] && (this.sides[1] + this.sides[2]) > this.sides[0]){
            return true
        } else {
            return false
        }
    }
}

class Square extends Polygon{
    get isValid(){
        return this.sides.every(function(side){
            return side === this.sides[0]
        }.bind(this))
    }

    get area(){
        return this.sides[0]**2
    }
}
