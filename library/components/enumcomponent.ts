/// <reference path = "../templates/enumtemplate.ts"/>

import { SandBox } from "../templates/enumtemplate";

export class EnumComponent extends SandBox.Templates.EnumTemplate {

    Name = 'Samsung TV';
    Price = 46000.55;
    Qty = 2;
    Total() {
        return this.Qty * this.Price;
    }
    Print() {
        console.log(`Name=${this.Name}\nPrice=${this.Price}\nQty=${this.Qty}\nTotal=${this.Total()}`);
    }

}