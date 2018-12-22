import { Component, OnInit, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-topo',
  templateUrl: './topo.component.html',
  styleUrls: ['./topo.component.css']
})
export class TopoComponent implements OnInit {

  public resposta: string

  private recebeCPF(resposta: Event): void {
    this.resposta = (<HTMLInputElement>resposta.target).value;
    console.log(resposta)
  }

  

  constructor() { }

  ngOnInit() {
  }

}
