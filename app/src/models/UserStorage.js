"use strict";

class UserStorage{
    static #users = {
        id: ["woorimIT", "wantae", "kim"],
        psword: ["1234", "1234", "123456"],
        name: ["Woori", "ForUs", "Oakville"],
    };

    static getUsers(...fields) {
        //console.log(fields)
        const users = this.#users;
        const ewUsers = fields.reduce((newUsers, field) => {
            console.log(newUsers, field);
            if (users.hasOwnProperty(field)) {
                newUsers[field] = users[field];
            }
            return newUsers;
        }, {});
        console.log(newUsers);
        //return this.#users;
        return newUsers;
    };

    static getUserInfo(id) {
        const users = this.#users;
        const idx = users.id.indexOf(id);
        const usersKeys = Object.keys(users); // => [id, psword, name]
        const userInfo = usersKey.reduce((newUser,info) => {
            newUser[info] = users[info][idx];
            return newUser;
        }, {});

        return userInfo;
    }

}

module.exports = UserStorage;