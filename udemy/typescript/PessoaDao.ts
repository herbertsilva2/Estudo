import {DaoInterface} from "./DaoInterface"
import Pessoa from "./Pessoa"
import {carro1} from "./app3"

export class PessoaDao implements DaoInterface{
    nomeTabela:string = "Tabela_Pessoa"

    inserir(object:Pessoa):boolean{
        console.log("Lógica do insertBD")
        return true
    }

    atualizar(object:Pessoa):boolean{
        console.log("Lógica do updateBD")
        return true
    }

    remover(id:number):Pessoa{
        console.log("Lógica do deleteBD")
        return new Pessoa("", "", carro1)
    }
    selecionar(id:number):Pessoa{
        console.log("Lógica do selectBD")
        return new Pessoa("", "", carro1)
    }
    selecionarTodos():[Pessoa]{
    console.log("Lógica do getAllBD")
    return [new Pessoa("", "", carro1)]
    }
}