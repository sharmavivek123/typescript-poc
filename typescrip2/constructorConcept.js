var Point = /** @class */ (function () {
    function Point(x, y) {
        this.x = x;
        this.y = y;
    }
    Point.prototype.draw = function () {
        console.log('X: ' + this.x + '  Y : ' + this.y);
    };
    Point.prototype.getDistance = function () {
        console.log('area of shape is---' + (this.x * this.y));
    };
    return Point;
}());
var point = new Point(3, 4);
point.draw();
point.getDistance();
