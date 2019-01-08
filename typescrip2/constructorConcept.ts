class Point{
  private  x : number;
  private  y : number;

    constructor(x : number, y: number){
        this.x=x;
        this.y=y;
    }

    draw() {
        console.log('X: ' + this.x +'  Y : '+ this.y);
    }
    getDistance(){
        console.log('area of shape is---'+ (this.x*this.y));
    }

}
let point=new Point(3,4);

point.draw();
point.getDistance()


