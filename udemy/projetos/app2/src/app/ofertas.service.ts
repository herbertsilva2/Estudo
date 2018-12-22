import { Http } from '@angular/http'
import { Injectable } from '@angular/core'
import { Oferta } from './shared/ofertas.model'
import { resetComponentState } from '@angular/core/src/render3/instructions';

@Injectable()

export class OfertasService {

    constructor(private http: Http) {  }

    public getOfertas(): Promise<Oferta[]> {
        
        //Realizar uma requisição HTTP e retornar um Promise Array de Oferta
 
        return this.http.get('http://localhost:3000/ofertas?destaque=true')
            .toPromise()
            .then(( resposta:any ) => resposta.json())
    }

    public getOfertasPorCategoria(categoria: string): Promise<Oferta[]> {
        return this.http.get(`http://localhost:3000/ofertas?categoria=${categoria}`)
            .toPromise()
            .then((resposta: any) => resposta.json())
    }

}