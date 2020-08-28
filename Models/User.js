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
        return this._email
    }

    get password() {
        return this._password
    }

    get nome() {
        return this._nome
    }

    set id(id) {
        this._id = id
    }

    set email(email) {
        this._email = email
    }
    set password(password) {
        this._password = password;
    }
    set nome(nome) {
        this._nome = nome;
    }



}



module.exports = Users;