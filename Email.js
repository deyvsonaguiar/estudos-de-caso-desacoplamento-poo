"use strict";
exports.__esModule = true;
exports.Email = void 0;
var Email = /** @class */ (function () {
    function Email(email) {
        this.email = email;
    }
    Email.prototype.getValue = function () {
        return this.email;
    };
    Email.prototype.setValue = function (email) {
        this.email = email;
    };
    Email.prototype.atualizarEmail = function (novoEmail) {
        this.validarEmail(novoEmail);
        this.setValue(novoEmail);
    };
    Email.prototype.validarEmail = function (email) {
        if (email.length === 0)
            throw new Error('E-mail não pode estar vazio');
        if (!email.includes('@'))
            throw new Error('E-mail inválido');
    };
    return Email;
}());
exports.Email = Email;
