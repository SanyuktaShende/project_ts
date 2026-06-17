"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
class User {
    name;
    id;
    email;
    constructor(name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email;
    }
    displayInfo = () => {
        console.log(`Id: ${this.id} , name: ${this.name}, email: ${this.email}`);
    };
}
exports.User = User;
