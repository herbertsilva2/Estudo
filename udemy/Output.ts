import { ListaService } from './ArrayDeLista'
import { Lista } from './Teste'

    class MostrarLista {
        public lista: Lista[]
        
        constructor(public listaService: ListaService){
        
        this.lista = this.listaService.getLista();
        
        console.log(this.lista)
        
        }
        
    }