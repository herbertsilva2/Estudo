"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
//import {ConcessionariaDao} from "./ConcessionariaDao"
//import {PessoaDao} from "./PessoaDao"
var Concessionaria_1 = __importDefault(require("./Concessionaria"));
var Pessoa_1 = __importDefault(require("./Pessoa"));
var app3_1 = require("./app3");
var Dao_1 = require("./Dao");
//let dao = new ConcessionariaDao()
//let dao2 = new PessoaDao()
var concessionaria1 = new Concessionaria_1.default("", []);
var pessoa1 = new Pessoa_1.default("", "", app3_1.carro1);
var dao3 = new Dao_1.Dao();
dao3.inserir(concessionaria1);
