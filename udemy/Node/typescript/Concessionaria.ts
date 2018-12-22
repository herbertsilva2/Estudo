import { ConcessionariaInterface } from "./ConcessionariaInterface"
import Carro from "./Carro"

export default class Concessionaria implements ConcessionariaInterface{
    private endereco:string
    private listaDeCarros:Carro[]

    constructor(endereco:string, listaDeCarros:Carro[]){
        this.endereco = endereco
        this.listaDeCarros = listaDeCarros
    }

    public fornecerEndereco():string{
        return this.endereco
    }

    public mostrarListaDeCarros():Carro[]{
        return this.listaDeCarros
    }

    public fornecerHorarioDeFuncionamento(): string{
        return "De segunda a sexta-feira, de 8h as 18h e aos sábados de 8h a 12h."
    }
}