const User = require('../Models/User');

module.exports = {
  salvar: function (nome, email, password){
    try {
      let user = new User();

      user.nome = nome;
      user.email = email;
      user.password = password;
  
      User.salvar(user);
    } catch (error) {
      return error.message;
    }
  },

  listar: function () {
    const usuario = new User();
    User.findAll();
    usuario.falar("Olá, mundo");
    usuario.andar(" 10 passos");
  }
  
};