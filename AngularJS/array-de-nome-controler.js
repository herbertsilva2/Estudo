angular.module("arrayDeNomes", [])
    .controller("ArrayDeNomesCtrl", ArrayDeNomesCtrl);

    function ArrayDeNomesCtrl($scope, $http){

        var vm = this;
            
        vm.iniciar = iniciar;
        
        iniciar();

        function iniciar () {  
            
            vm.chamaLista = chamaLista;
            vm.buscarLista = buscarLista;
            vm.recebeItemSelecionado = recebeItemSelecionado;

            chamaLista();                
        }              

        vm.app = "Dados Pessoais";
        vm.lista = {};

        function buscarLista () {                
        
        resposta = $http.get('http://localhost:3000/contatos');
        return resposta;
        }

        function chamaLista(){
        buscarLista().then(function(resposta){
                vm.lista = resposta.data;
                vm.itens = new Array(vm.lista.length);                 
            });
        }   
        
        function recebeItemSelecionado(index){
            console.log(index);
            vm.itens[index] = !vm.itens[index];
            console.log(vm.itens[index]);
        }
        console.log(vm.contatoSelecionado);
    };