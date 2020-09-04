const User = require('../Models/User');

module.exports = {
  salvar: function (nome, email, password){
    let user = new User();

    user.nome = nome;
    user.email = email;
    user.password = password;

    User.salvar(user);

  },

  listar: function () {
    const usuario = new User();
    User.findAll();
    usuario.falar("Olá, mundo");
    usuario.andar(" 10 passos");
  }
  
};