var Point = /** @class */ (function () {
    function Point() {
    }
    Point.prototype.draw = function () {
        console.log('X: ' + this.x + 'Y : ' + this.y);
    };
    Point.prototype.getDistance = function (another) {
        var p = another.y * another.x;
        console.log('area of shape is---' + p);
    };
    return Point;
}());
var point = new Point();
point.x = 12;
point.y = 3;
point.draw();
point.getDistance(point);
