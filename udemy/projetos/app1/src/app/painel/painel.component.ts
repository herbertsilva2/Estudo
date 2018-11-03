import { Component, OnInit, EventEmitter, Output, OnDestroy } from '@angular/core';
import { Frase } from '../shared/frase.model';
import { FRASES } from './frase-mock';

@Component({
  selector: 'app-painel',
  templateUrl: './painel.component.html',
  styleUrls: ['./painel.component.css']
})
export class PainelComponent implements OnInit {

  public frases:Frase[] = FRASES;

  public instrucao:string = 'Traduza a frase a seguir:';

  public resposta:string = "";

  public rodada:number = 0;
  public rodadaFrase:Frase;

  public progresso:number = 0;

  public tentativas:number = 3;

  @Output() public encerrarJogo: EventEmitter<string> = new EventEmitter;

  constructor() { 
    this.atualizaRodada();
  }

  ngOnInit() {
  }

  ngOnDestroy(){
  }

  public atualizaResposta(resposta:Event):void{
    this.resposta = (<HTMLInputElement>resposta.target).value;
    
  }

  public verificarResposta():void{

    if(this.rodadaFrase.frasePtBr == this.resposta){
    
    //trocar pergunta da rodada
      this.rodada++;

    //incrementar progresso
      this.progresso = this.progresso + (100 / this.frases.length);

    //
      if(this.rodada == 4){
        this.encerrarJogo.emit('vitoria');

    }

    //atualiza o objeto rodadaFrase  
      this.atualizaRodada();
      
    }
    else{
      //diminuir a variavel tentativas
      this.tentativas--;  
        
      if(this.tentativas == -1){
        this.encerrarJogo.emit('derrota');
        
      }
    }
  }

  public atualizaRodada():void{
    
    //define a frase da rodada

    if(this.rodada == 4){
      this.progresso = 100;
    }
    else{this.rodadaFrase = this.frases[this.rodada];
    
    //limpa a resposta para a nova página
    this.resposta = "";
    }
  }
  
}
