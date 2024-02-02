"use strict";

const UserStorage = require("./UserStorage");

class User {
    constructor(body) {
        this.body = body;
    }

    login() {
        //const users = UserStorage.getUsers("id", "psword");
        //const {id, psword} = UserStorage.getUsers("id", "psword");
        const body = this.body;
        const {id, psword} = UserStorage.getUserInfo(body.id);
        console.log(id, psword);
        if (id) {
            if (id === body.id && psword === body.psword) {
                return {success:true};
            }
            return { success: false, msg: "password mismatched"};
        }
        return{ success: false, msg: "ID is not exist"};        
    }
}

module.exports = User;