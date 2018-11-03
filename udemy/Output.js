"use strict";
exports.__esModule = true;
var MostrarLista = /** @class */ (function () {
    function MostrarLista(listaService) {
        this.listaService = listaService;
        this.lista = this.listaService.getLista();
        console.log(this.lista);
    }
    return MostrarLista;
}());
