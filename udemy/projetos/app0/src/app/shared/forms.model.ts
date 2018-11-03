import { EventEmitter } from '@angular/core';
import { HomeComponent } from '../home/home.component'

export class Formularios {

    public nome: string;
    public sobrenome: string;
    public email: string;
    public formulario: object[];
    public emitir = new EventEmitter();

    public geraFormulario(formulario = new HomeComponent()){
        this.nome = formulario.capturarFormulario[0]
        this.emitir.emit(this.nome)
        console.log(this.nome)
    }

   // public emitirFormulario(formulario: object[] ): void{
    //    this.emitir = this.formulario
   //}

    constructor() {    

    }


}