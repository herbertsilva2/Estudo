"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var Concessionaria_1 = __importDefault(require("./Concessionaria"));
var ConcessionariaDao = /** @class */ (function () {
    function ConcessionariaDao() {
        this.nomeTabela = "Herbert_Concessionaria";
    }
    ConcessionariaDao.prototype.inserir = function (object) {
        console.log("Lógica do insertBD");
        return true;
    };
    ConcessionariaDao.prototype.atualizar = function (object) {
        console.log("Lógica do updateBD");
        return true;
    };
    ConcessionariaDao.prototype.remover = function (id) {
        console.log("Lógica do deleteBD");
        return new Concessionaria_1.default("", []);
    };
    ConcessionariaDao.prototype.selecionar = function (id) {
        console.log("Lógica do selectBD");
        return new Concessionaria_1.default("", []);
    };
    ConcessionariaDao.prototype.selecionarTodos = function () {
        console.log("Lógica do getAllBD");
        return [new Concessionaria_1.default("", [])];
    };
    return ConcessionariaDao;
}());
exports.ConcessionariaDao = ConcessionariaDao;
