"use strict";
///<reference path = "../contracts/enumcontract.ts"/>
Object.defineProperty(exports, "__esModule", { value: true });
exports.SandBox = void 0;
var SandBox;
(function (SandBox) {
    var Templates;
    (function (Templates) {
        var EnumTemplate = /** @class */ (function () {
            function EnumTemplate() {
                this.Name = '';
                this.Price = 0;
                this.Qty = 0;
            }
            return EnumTemplate;
        }());
        Templates.EnumTemplate = EnumTemplate;
    })(Templates = SandBox.Templates || (SandBox.Templates = {}));
})(SandBox || (exports.SandBox = SandBox = {}));
