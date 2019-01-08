"use strict";
exports.__esModule = true;
var Point = /** @class */ (function () {
    function Point(x, y) {
        this.x = x;
        this.y = y;
    }
    Point.prototype.draw = function () {
        console.log('value of x is ' + this.x + 'value of y is ' + this.y);
    };
    return Point;
}());
exports.Point = Point;
