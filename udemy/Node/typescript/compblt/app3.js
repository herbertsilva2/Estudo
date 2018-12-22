"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var Carro_1 = __importDefault(require("./Carro"));
var Moto_1 = __importDefault(require("./Moto"));
var Concessionaria_1 = __importDefault(require("./Concessionaria"));
exports.carro1 = new Carro_1.default("Vectra", 5);
exports.carro1.acelerar();
var moto1 = new Moto_1.default();
moto1.acelerar();
var concessionaria1 = new Concessionaria_1.default("quadra 6", []);
//console.log(moto1)
//console.log(carro1)
//console.log(concessionaria1.fornecerHorarioDeFuncionamento())
