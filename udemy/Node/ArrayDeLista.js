"use strict";
exports.__esModule = true;
var ListaService = /** @class */ (function () {
    function ListaService() {
        this.lista = [
            {
                id: 1,
                nome: 'Herbert',
                sobrenome: 'Lima',
                curso: ['Sistemas de Informação', 'Engenharia de Software'],
                cidade: ['Brasília', 'Valparaíso']
            },
            {
                id: 2,
                nome: 'Gabriela',
                sobrenome: 'Lima',
                curso: ['Sistemas de Informação', 'Engenharia de Software'],
                cidade: ['Brasília', 'Valparaíso']
            }
        ];
    }
    ListaService.prototype.getLista = function () {
        return this.lista;
    };
    return ListaService;
}());
exports.ListaService = ListaService;
