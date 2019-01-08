class Point{
    constructor(private _x : number,private  _y: number){
    }
    get X(){
        return this._x;
    }
    set X(value){
        this._x=value;
    }
    get Y(){
        return this._y;
    }
    set Y(value){
        this._y=value;
    }
    getData(){
        console.log('value of x is '+ this._x +' value of y is '+this._y)
    }
    calcualteArea(){
        console.log('area os shape is',(this._x*this._y))
    }
}

let point=new Point(2,3);
point.getData();
point.calcualteArea();
point.X=23;
console.log(point.X);
point.Y=20;
console.log(point.Y)
point.getData();
point.calcualteArea();




