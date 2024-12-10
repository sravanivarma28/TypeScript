var StatusCode;
(function (StatusCode) {
    StatusCode[StatusCode["NotFound"] = 404] = "NotFound";
    StatusCode[StatusCode["OK"] = 200] = "OK";
    StatusCode[StatusCode["Method"] = 201] = "Method";
    StatusCode[StatusCode["Unauthorized"] = 202] = "Unauthorized";
})(StatusCode || (StatusCode = {}));
console.log('Method =' + StatusCode.Method);
console.log('Unauthorized = ' + StatusCode.Unauthorized);
