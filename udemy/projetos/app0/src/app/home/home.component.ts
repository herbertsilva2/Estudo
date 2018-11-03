import { Component, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  
  public nome: string = "";
  public sobrenome: string = "";
  public email: string = "";
  public formulario: string[];

@Output() public emitir(tipo: object[]): void {
    console.log(tipo)

  }

  public pegaTextoNome(nome: Event): void {
    this.nome = (<HTMLInputElement>nome.target).value;
    
  }

  public pegaTextoSobrenome(sobrenome: Event): void {
    this.sobrenome = (<HTMLInputElement>sobrenome.target).value;
    
  }

  public pegaTextoEmail(email: Event): void {
    this.email = (<HTMLInputElement>email.target).value;
    
  }

  public capturarFormulario(formulario: object[]): void {
    this.formulario = [ this.nome, this.sobrenome, this.email ]
    console.log(this.formulario)
  }
  

  constructor() {  }

  ngOnInit() {    
  }

}
