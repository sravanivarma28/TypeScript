var product = {
    "Name": "Samsung TV",
    "Price": 6000.6,
    "Stock": "true",
    "ShoppedTo": ['Delhi', "Hyd"],
    "Qty": 2,
    "Total": function () {
        return this.Qty * this.Price;
    },
    "Print": function () {
        console.log("Name = ".concat(this.Name, "\nPrice=").concat(this.Price, "\nStock=").concat(this.Stock, "\nQty=").concat(this.Qty, "\n         \nTotal=").concat(this.Total(), "\nShippedTo=").concat(this.ShippedTo));
    }
};
product.Print();
