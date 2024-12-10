enum StatusCode {

    NotFound = 404,
}
let ErrorCode = StatusCode[404];
console.log(`Error Reference :${ErrorCode}`);
console.log(`Error Code : ${StatusCode.NotFound}`);