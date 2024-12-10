var SqlServer = /** @class */ (function () {
    function SqlServer() {
        this.UserId = 'Server';
        this.Password = '1234';
    }
    return SqlServer;
}());
var Database = /** @class */ (function () {
    function Database() {
    }
    Database.prototype.Connection = function (ConnectionString) {
        // it will get value and display we read key and value from a object
        for (var property in ConnectionString) {
            console.log("".concat(property, " : ").concat(ConnectionString[property]));
        }
    };
    return Database;
}());
console.log("------ Connection to Oracle ---------");
var oracle = new Database();
oracle.Connection({ UserName: 'Sravani', Password: '123', Database: 'empdb' });
console.log("------ Connection to MYSql ---------");
var mysql = new Database();
mysql.Connection({ host: 'localhost', UserName: 'root', Password: '123', Database: 'productsDB' });
console.log("------ Connection to MongoDb ---------");
var mongo = new Database();
mongo.Connection({ Url: 'mongobd://127.0.0.1:27017' });
console.log("------ Connection to SqlServer ---------");
var sqlserver = new Database();
var sql = new SqlServer();
sqlserver.Connection({ UserId: sql.UserId, Password: sql.Password });
