import Carro from "./Carro"
import Moto from "./Moto"
import Concessionaria from "./Concessionaria"

export let carro1 = new Carro("Vectra", 5)
carro1.acelerar()

let moto1 = new Moto()
moto1.acelerar()

let concessionaria1 = new Concessionaria("quadra 6", [])

//console.log(moto1)
//console.log(carro1)
//console.log(concessionaria1.fornecerHorarioDeFuncionamento())