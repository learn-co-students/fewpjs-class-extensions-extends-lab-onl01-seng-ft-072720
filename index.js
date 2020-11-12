// Your code here

class Polygon {
    constructor(intArr){
        this.intArr = intArr;
    }

    get countSides(){
        return this.intArr.length;
    }

    get perimeter(){
        return this.intArr.reduce((acc, cur) => acc + cur)
    }
}

class Triangle extends Polygon {

    get isValid(){
        if (this.countSides === 3){
            const [a,b,c] = this.intArr
            return a+b>c && a+c>b && b+c>a ? true : false
            }
    }

}

class Square extends Polygon {

    get isValid(){
        if (this.countSides === 4){
        const a = this.intArr[0]
        return this.intArr.every(cur => cur === a)
        }
    }

    get area(){
        return this.intArr[0]**2
    }

}