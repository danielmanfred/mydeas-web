"use strict";
exports.__esModule = true;
var User = /** @class */ (function () {
    function User(name, email, password) {
        this.name = name;
        this.email = email;
        this.password = password;
    }
    User.prototype.matches = function (another) {
        return another !== undefined && another.email === this.email && another.password === this.password;
    };
    return User;
}());
exports.User = User;
exports.users = {
    "neymar@cbf.com": new User('Neymar', 'neymar@cbf.com', 'ramyen'),
    "coutinho@cbf.com": new User('Coutinho', 'coutinho@cbf.com', 'ohnituoc')
};
