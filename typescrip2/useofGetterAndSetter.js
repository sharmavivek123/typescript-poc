var Point = /** @class */ (function () {
    function Point(_x, _y) {
        this._x = _x;
        this._y = _y;
    }
    Object.defineProperty(Point.prototype, "X", {
        get: function () {
            return this._x;
        },
        set: function (value) {
            this._x = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Point.prototype, "Y", {
        get: function () {
            return this._y;
        },
        set: function (value) {
            this._y = value;
        },
        enumerable: true,
        configurable: true
    });
    Point.prototype.getData = function () {
        console.log('value of x is ' + this._x + ' value of y is ' + this._y);
    };
    Point.prototype.calcualteArea = function () {
        console.log('area os shape is', (this._x * this._y));
    };
    return Point;
}());
var point = new Point(2, 3);
point.getData();
point.calcualteArea();
point.X = 23;
console.log(point.X);
point.Y = 20;
console.log(point.Y);
point.getData();
point.calcualteArea();
