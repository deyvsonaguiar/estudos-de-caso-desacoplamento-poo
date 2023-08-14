"use strict";
exports.__esModule = true;
var Email_1 = require("./Email");
var Funcionario_1 = require("./Funcionario");
var funcionario1 = new Funcionario_1.Funcionario('Deyvson Aguiar', 1, new Email_1.Email('deyvsonaguiar@mail.com'));
console.log(funcionario1);
funcionario1.email.atualizarEmail('novoemail@mail.com');
console.log("Seu novo email \u00E9: ".concat(funcionario1.email.email));
