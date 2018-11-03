//import {ConcessionariaDao} from "./ConcessionariaDao"
//import {PessoaDao} from "./PessoaDao"
import Concessionaria from "./Concessionaria"
import Pessoa from "./Pessoa"
import {carro1} from "./app3";
import { Dao } from "./Dao";

//let dao = new ConcessionariaDao()
//let dao2 = new PessoaDao()
let concessionaria1:Concessionaria = new Concessionaria("", [])
let pessoa1:Pessoa = new Pessoa("", "", carro1)

let dao3:Dao<Concessionaria> = new Dao<Concessionaria>()
dao3.inserir(concessionaria1)