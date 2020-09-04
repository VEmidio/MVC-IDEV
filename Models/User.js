const dbUsers = require('../config/database');

class Users {

    constructor() {
        this._id = Number();
        this._email = String();
        this._password = String();
        this._nome = String();
        this.generateId();
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

    set id(value) {
        if (value.typeof === 'string') {
            console.log("Id precisa ser número");
        } else {
            this._id = value;
        }
    }

    set email(email) {
        if (email.includes("@")) {
            this._email = email;
        } else {
            throw new Error("Informe um email válido");
        }
    }

    set password(password) {
        if (password === '') {
            throw new Error("Informe uma senha válida");  
        }
        this._password = password;
    }
    set nome(nome) {
        if (nome === '') {
            throw new Error("Informe um nome"); 
        }
        this._nome = nome;
    }

    generateId() {
        if (dbUsers.length > 0) {
            this._id = dbUsers[dbUsers.length - 1].id + 1;
        } else {
            this._id = 1;
        }
    }

    falar(frase) {
        console.log(frase);
    }

    andar(velocidade) {
        console.log("Caminhando... " + velocidade);
    }

    static salvar(user) {
        dbUsers.push(user);
    }

    static findAll() {
        console.table(dbUsers);
    }



}



module.exports = Users;