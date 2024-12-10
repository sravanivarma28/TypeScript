"use strict";
/// <reference path = "../templates/enumtemplate.ts"/>
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
Object.defineProperty(exports, "__esModule", { value: true });
exports.EnumComponent = void 0;
var enumtemplate_1 = require("../templates/enumtemplate");
var EnumComponent = /** @class */ (function (_super) {
    __extends(EnumComponent, _super);
    function EnumComponent() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.Name = 'Samsung TV';
        _this.Price = 46000.55;
        _this.Qty = 2;
        return _this;
    }
    EnumComponent.prototype.Total = function () {
        return this.Qty * this.Price;
    };
    EnumComponent.prototype.Print = function () {
        console.log("Name=".concat(this.Name, "\nPrice=").concat(this.Price, "\nQty=").concat(this.Qty, "\nTotal=").concat(this.Total()));
    };
    return EnumComponent;
}(enumtemplate_1.SandBox.Templates.EnumTemplate));
exports.EnumComponent = EnumComponent;
