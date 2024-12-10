var StatusCode;
(function (StatusCode) {
    StatusCode[StatusCode["NotFoundObj"] = 400] = "NotFoundObj";
})(StatusCode || (StatusCode = {}));
var ErrorCode = StatusCode[StatusCode.NotFound];
console.log("Error Reference :".concat(ErrorCode));
console.log("Error Code : ".concat(StatusCode.NotFound));
