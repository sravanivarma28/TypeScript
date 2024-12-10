function Sum(a, b) {
    return a + b;
}
var demo = /** @class */ (function () {
    function demo() {
    }
    demo.prototype.Add = function (a, b) {
        return Sum(a, b);
    };
    return demo;
}());
var obj = new demo();
console.log(obj.Add("sravani", "varma"));
console.log(obj.Add(5, 8));
