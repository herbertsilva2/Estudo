"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Dao = /** @class */ (function () {
    function Dao() {
        this.nomeTabela = "";
    }
    Dao.prototype.inserir = function (object) {
        console.log("Lógica do insertBD");
        return true;
    };
    Dao.prototype.atualizar = function (object) {
        console.log("Lógica do updateBD");
        return true;
    };
    Dao.prototype.remover = function (id) {
        console.log("Lógica do deleteBD");
        return Object();
    };
    Dao.prototype.selecionar = function (id) {
        console.log("Lógica do selectBD");
        return Object();
    };
    Dao.prototype.selecionarTodos = function () {
        console.log("Lógica do getAllBD");
        return [Object()];
    };
    return Dao;
}());
exports.Dao = Dao;
