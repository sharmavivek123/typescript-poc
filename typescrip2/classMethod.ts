class Point{
    x : number;
    y : number;

    draw(){
        console.log('X: ' + this.x +'  Y : '+ this.y);
    }
    getDistance(another : Point){
        let p=another.y * another.x;
        console.log('area of shape is---'+ p);
    }
}
let point=new Point();
point.x=12;
point.y=3;
point.draw();

point.getDistance(point);
