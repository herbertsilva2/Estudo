import {DaoInterface} from "./DaoInterface"
import Concessionaria from "./Concessionaria"

export class ConcessionariaDao implements DaoInterface{
    nomeTabela:string = "Herbert_Concessionaria"

    inserir(object:Concessionaria):boolean{
        console.log("Lógica do insertBD")
        return true
    }

    atualizar(object:Concessionaria):boolean{
        console.log("Lógica do updateBD")
        return true
    }

    remover(id:number):Concessionaria{
        console.log("Lógica do deleteBD")
        return new Concessionaria("", [])
    }
    selecionar(id:number):Concessionaria{
        console.log("Lógica do selectBD")
        return new Concessionaria("", [])
    }
    selecionarTodos():[Concessionaria]{
    console.log("Lógica do getAllBD")
    return [new Concessionaria("", [])]
    }
}