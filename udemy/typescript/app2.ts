import Carro from "./Carro"
import Concessionaria from "./Concessionaria"
import Pessoa from "./Pessoa"

/*..............Criar Carro...............*/

let carro1 = new Carro("Vectra", 5)
let carro2 = new Carro("Cruze", 5)
let carro3 = new Carro("Jetta", 5)
let carro4 = new Carro("Jeep Renegade", 5)
let carro5 = new Carro("Fusca", 3)

/*...........Montar a lista de carros da concessionária..............*/

let listaDeCarros:Carro[] = [carro1, carro2, carro3, carro4, carro5]

let concessionaria = new Concessionaria("Av Valparaiso", listaDeCarros)

/*....Teste....*/

//console.log(concessionaria.mostrarListaDeCarros())

/*.....Criar pessoa.....*/

let pessoa1 = new Pessoa("Gabriela", "Jeep Renegade", carro5)

//console.log(pessoa1.dizerCarroQueTem())
//console.log(pessoa1.dizerCarroQueTem())
//console.log(pessoa1.dizerCarroPreferido())
//console.log(pessoa1.dizerCarroQueTem())

concessionaria.mostrarListaDeCarros().map((carro:Carro) => {
    if(carro['modelo'] == pessoa1.dizerCarroPreferido()){
        pessoa1.comprarCarro(carro)
    }

    else{
        return false
    }
})

console.log(pessoa1.dizerCarroQueTem())



