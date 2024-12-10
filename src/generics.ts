 function Sum(a:any,b:any){
    return a+b;
 }
 class demo {

public Add<T>(a:T,b:T):T{
    return Sum(a,b);
}
}
let obj = new demo();
console.log(obj.Add<string>("sravani","varma"));
console.log(obj.Add<number>(5,8));