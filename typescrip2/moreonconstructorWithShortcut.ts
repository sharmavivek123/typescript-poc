class Point{
    constructor(private x : number, private y: number){
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


