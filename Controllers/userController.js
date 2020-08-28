const User = require('../Models/User');

module.exports = {
  salvar: function (nome, email, password){
    let user = new User();

    user.nome = nome;
    user.email = email;
    user.password = password;

    user.salvar(user);

  }
  
};