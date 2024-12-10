interface Oracle {
    UserName : string;
    Password : string;
    Database : string
}
interface MySql {

    host : string
    UserName : string;
    Password : string;
    Database : string
}
interface MongoDB { 
 Url : string   
}
class SqlServer {
 UserId : string = 'Server';
 Password : string = '1234';
}
class Database {

public Connection<T>(ConnectionString:T){
    // it will get value and display we read key and value from a object
    for(var property in ConnectionString){
        console.log(`${property} : ${ConnectionString[property]}`)
    }  
}
}
console.log(`------ Connection to Oracle ---------`);
let oracle = new Database();
oracle.Connection<Oracle>({UserName : 'Sravani',Password : '123',Database : 'empdb'})

console.log(`------ Connection to MYSql ---------`);
let mysql = new Database();
mysql.Connection<MySql>({host : 'localhost',UserName : 'root',Password : '123',Database : 'productsDB'})

console.log(`------ Connection to MongoDb ---------`);
let mongo = new Database();
mongo.Connection<MongoDB>({Url : 'mongobd://127.0.0.1:27017'})

console.log(`------ Connection to SqlServer ---------`);
let sqlserver = new Database();
let sql = new SqlServer();
sqlserver.Connection<SqlServer>({UserId :sql.UserId, Password : sql.Password})