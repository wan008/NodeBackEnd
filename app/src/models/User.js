"use strict";

const UserStorage = require("./UserStorage");

class User {
    constructor(body) {
        this.body = body;
    }

    login() {
        const client = this.body;
        const {id, psword} = UserStorage.getUserInfo(client.id);
        //console.log(id, psword);

        if (id){
            if (id === client.id && psword === client.psword) {
                return { success: true};
            }
            return { success: false, msg: "password is wrong"};
        } 
        return { success: false, msg: "Id is not exist"};  
    }

    register() {
        const client = this.body;
        const response = UserStorage.save(client);
        return response;
    }

}

module.exports = User;