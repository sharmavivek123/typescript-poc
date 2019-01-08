// function myFirstFunction(message) {
//     console.log(message);
// }
// var p1 = 'hello world';
// myFirstFunction(p1);
//--------------2222222222222222222----------
//diff between var and let
//
// function dosomething(){
//   for(let i=0;i<5;i++){
//     console.log(i)
//   }
//   console.log('finally-----',i)
//
// }
// dosomething();
//-------33333333333333------------------
var a;
var b;
var c;
var d;
var e = [1, 2, 3, 4];
var f = [1, 'hello', true, false];
var g = 12;
var color;
(function (color) {
    color[color["red"] = 0] = "red";
    color[color["blue"] = 1] = "blue";
    color[color["purple"] = 3] = "purple";
})(color || (color = {}));
;
var exam = color.red;
console.log(exam);
g = 34;
console.log(g);
