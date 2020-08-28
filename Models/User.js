const dbUsers = require('../config/database');

class Users {

    constructor() {
        this._id = id;
        this._email = email;
        this._password = password;
        this._nome = nome;
    }

    get id() {
        return this._id;
    }

    get email() {
        return this._email;
    }

    get password() {
        return this._password;
    }

    get nome() {
        return this._nome;
    }

    set id(id) {
        if (id.typeof === 'string') {
            console.log("Id precisa ser número");
        } else {
            this._id = id;
        }

    }

    set email(email) {
        if (email.includes("@")) {
            this._email = email;
        } else {
            console.log("Email inválido");
        }
    }

    set password(password) {
        this._password = password;
    }
    set nome(nome) {
        this._nome = nome;
    }

    salvar(user) {
        if (dbUsers.length > 0) {
            user.id = dbUsers[dbUsers.length - 1].id + 1;
        } else {
            user.id = 1;
        }
        dbUsers.push(user);

    }



}



module.exports = Users;