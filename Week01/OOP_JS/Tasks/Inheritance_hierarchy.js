// inheritance hierachy 
// shape -> rectangle -> square

class shape{
    area(){
        return 0;
    }
}

class Rectangle extends shape{
    constructor(width,height){
        super(); // callling super() before using this 
        this.width = width;
        this.height = height;
    }

    area(){
        return this.width * this.height;
    }
}

class Square extends Rectangle{
    // extending the area method inside the  square 
    // constructor(side){  
    //     super();
    //     this.side = side;
    // }
    // area(){
    //     return this.side * this.side;
    // }
    
    // wuthout extending also can do
    constructor(side){
        super(side,side);
    }
}

let square = new Square(10);
console.log(square.area())