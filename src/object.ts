let product : any ={
    "Name" : "Samsung TV",
    "Price" : 6000.6,
    "Stock" : "true",
    "ShoppedTo" : ['Delhi',"Hyd"],
    "Qty" : 2,
    "Total" : function(){
        return this.Qty*this.Price;
    },
    "Print" : function(){
       console.log(`Name = ${this.Name}\nPrice=${this.Price}\nStock=${this.Stock}\nQty=${this.Qty} \nTotal=${this.Total()}\nShippedTo=${this.ShippedTo}`);
    }
}
product.Print();