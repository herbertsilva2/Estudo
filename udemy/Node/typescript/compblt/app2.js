"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var Carro_1 = __importDefault(require("./Carro"));
var Concessionaria_1 = __importDefault(require("./Concessionaria"));
var Pessoa_1 = __importDefault(require("./Pessoa"));
/*..............Criar Carro...............*/
var carro1 = new Carro_1.default("Vectra", 5);
var carro2 = new Carro_1.default("Cruze", 5);
var carro3 = new Carro_1.default("Jetta", 5);
var carro4 = new Carro_1.default("Jeep Renegade", 5);
var carro5 = new Carro_1.default("Fusca", 3);
/*...........Montar a lista de carros da concessionária..............*/
var listaDeCarros = [carro1, carro2, carro3, carro4, carro5];
var concessionaria = new Concessionaria_1.default("Av Valparaiso", listaDeCarros);
/*....Teste....*/
//console.log(concessionaria.mostrarListaDeCarros())
/*.....Criar pessoa.....*/
var pessoa1 = new Pessoa_1.default("Gabriela", "Jeep Renegade", carro5);
//console.log(pessoa1.dizerCarroQueTem())
//console.log(pessoa1.dizerCarroQueTem())
//console.log(pessoa1.dizerCarroPreferido())
//console.log(pessoa1.dizerCarroQueTem())
concessionaria.mostrarListaDeCarros().map(function (carro) {
    if (carro['modelo'] == pessoa1.dizerCarroPreferido()) {
        pessoa1.comprarCarro(carro);
    }
    else {
        return false;
    }
});
console.log(pessoa1.dizerCarroQueTem());
