var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var AccessModifiers = /** @class */ (function () {
    function AccessModifiers() {
        this.Name = 'samsung';
        this.Price = 50000;
        this.Stock = true;
    }
    AccessModifiers.prototype.print = function () {
        console.log("Name = ".concat(this.Name, "\nPrice = ").concat(this.Price, "\nStock = ").concat(this.Stock));
    };
    return AccessModifiers;
}());
var Product = /** @class */ (function (_super) {
    __extends(Product, _super);
    function Product() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Product.prototype.print = function () {
        var obj = new Product();
        obj.Name;
        obj.Stock;
    };
    return Product;
}(AccessModifiers));
