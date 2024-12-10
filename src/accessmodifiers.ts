class AccessModifiers {

    public Name : string ='samsung';
    private Price : number =50000;
    protected Stock : boolean = true;
    public print() : void{

console.log (`Name = ${this.Name}\nPrice = ${this.Price}\nStock = ${this.Stock}`)
    }
}
    class Product extends AccessModifiers {
        
       public print(): void {
        let obj = new Product ();
        obj.Name;
        obj.Stock
    
}
    }
    