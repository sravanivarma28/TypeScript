
    interface ProductContract
{
    Name:string;
    readonly Price:number;
}
let tv :ProductContract = {
    Name : "Samsung TV",
    Price: 56000.55
}
tv.Name = "Samsung LED TV";
//tv.Price = 70000.55;            // invalid - readonly
console.log(`Name=${tv.Name}\Price=${tv.Price}`);
