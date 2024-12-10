interface ProductsContract {
    
    Name : string;
    Cost : number;
    Qty : number;
    Total():number;
    print():void;
}
interface CategoryContract {
    CategoryName : string;
}
abstract class ProductTemplates implements ProductsContract,CategoryContract {

    public Name : string  = '';
    public Cost: number = 0;
    public Qty: number = 0;
    public CategoryName: string = '';
    public abstract Total(): number;
    public abstract print(): void;
}
//--------------Developer implements-------------
class ProductComponent extends ProductTemplates {

    Name = 'mobile';
    Cost = 30000;
    Qty = 2;
     Total(){
      return  this.Qty * this.Cost;
         }
         print(){
         console.log(`Name = ${this.Name}\nCost = ${this.Cost}\nQty = ${this.Qty}\nTotal = ${ this.Total()}`)
         }
}
let pc = new ProductComponent();

pc.print();