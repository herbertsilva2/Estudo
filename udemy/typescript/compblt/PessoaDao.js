"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var Pessoa_1 = __importDefault(require("./Pessoa"));
var app3_1 = require("./app3");
var PessoaDao = /** @class */ (function () {
    function PessoaDao() {
        this.nomeTabela = "Tabela_Pessoa";
    }
    PessoaDao.prototype.inserir = function (object) {
        console.log("Lógica do insertBD");
        return true;
    };
    PessoaDao.prototype.atualizar = function (object) {
        console.log("Lógica do updateBD");
        return true;
    };
    PessoaDao.prototype.remover = function (id) {
        console.log("Lógica do deleteBD");
        return new Pessoa_1.default("", "", app3_1.carro1);
    };
    PessoaDao.prototype.selecionar = function (id) {
        console.log("Lógica do selectBD");
        return new Pessoa_1.default("", "", app3_1.carro1);
    };
    PessoaDao.prototype.selecionarTodos = function () {
        console.log("Lógica do getAllBD");
        return [new Pessoa_1.default("", "", app3_1.carro1)];
    };
    return PessoaDao;
}());
exports.PessoaDao = PessoaDao;
