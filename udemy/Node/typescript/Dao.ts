import { DaoInterface } from "./DaoInterface";

export class Dao<T> implements DaoInterface<T>{
    nomeTabela:string = ""
    
    inserir(object:T):boolean{
    console.log("Lógica do insertBD")
    return true
    }
    
    atualizar(object:T):boolean{
    console.log("Lógica do updateBD")
    return true
    }
    
    remover(id:number):T{
    console.log("Lógica do deleteBD")
    return Object()
    }
    selecionar(id:number):T{
    console.log("Lógica do selectBD")
    return Object()
    }
    selecionarTodos():[T]{
    console.log("Lógica do getAllBD")
    return [Object()]
    }
}
