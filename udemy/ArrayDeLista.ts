import { Lista } from './Teste'

export class ListaService {

    public lista: Lista[] = [
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
    ]

    public getLista(): Lista[] {
        return this.lista;
            
    }
}
