"use strict";
exports.__esModule = true;
var home_component_1 = require("../home/home.component");
var Formularios = /** @class */ (function () {
    function Formularios() {
    }
    Formularios.prototype.geraFormulario = function (formulario) {
        if (formulario === void 0) { formulario = new home_component_1.HomeComponent(); }
        this.nome = formulario.capturarFormulario[0];
        console.log(this.nome);
    };
    return Formularios;
}());
exports.Formularios = Formularios;
