"use strict";
exports.__esModule = true;
var User = /** @class */ (function () {
    function User(name, email, password) {
        this.name = name;
        this.email = email;
        this.password = password;
    }
    User.prototype.matches = function (another) {
        var b = another !== undefined && another.email === this.email && another.password === this.password;
        console.log(b);
        return b;
    };
    return User;
}());
exports.User = User;
exports.users = {
    "neymar@cbf.com": new User('Neymar', 'neymar@cbf.com', '1010'),
    "coutinho@cbf.com": new User('Coutinho', 'coutinho@cbf.com', '1111')
};
