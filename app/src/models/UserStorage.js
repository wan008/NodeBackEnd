"use strict";

class UserStorage {

    static #users = {
        id: ["woorimIT", "wan", "tae"],
        psword: ["1234", "1234", "123456"],
        name: ["Woori", "Oakville", "Burlington"],
    }

    // static getUsers() {
    //     return this.#users;
    // }

    static getUsers(...fields) {
        //console.log(fields); // ["id", "psword"] or ["id", " psword", "name"]
        //return this.#users;

        const users = this.#users;

        const newUsers = fields.reduce((newUsers, field) => {
            console.log(newUsers, field);
            if (users.hasOwnProperty(field)) {
                newUsers[field] = users[field];
            }
            return newUsers;

        }, {});
        return newUsers;
    }  
    
    static getUserInfo(id) {
        const users = this.#users;
        const idx = users.id.indexOf(id);
        const usersKeys = Object.keys(users); // ==> [id, psword, name]
        const userInfo = usersKeys.reduce((newUser, info) => {
            newUser[info] = users[info][idx];
            return newUser;
        }, {});

        return userInfo;
    }

    static save(userInfo) {
        const users = this.#users;
        users.id.push(userInfo.id);
        users.name.push(userInfo.name);
        users.psword.push(userInfo.psword);
        //console.log(users);
        return{success: true};
    }
    
}

module.exports = UserStorage;