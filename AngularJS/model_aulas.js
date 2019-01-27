//Module Pattern

var counter = (function () {
    _value = 0;
    function _add () {
        return ++_value;
    };
    function _reset () {
        return _value = 0;
    };
    return {
        add: _add,
        reset: _reset
    };
})()

console.log(counter.add());
counter.reset();
console.log(counter.add());

//--------------------------------------------------------------------


//AJAX connection

var get = function(url, callback) {
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function() {
        if (xhr.readyState === 4) {
            callback(xhr.responseText, xhr.status);
        }
    }
    ;
    xhr.open('GET', url);
    xhr.send(null);
};

// Executando a função get

get ("http://localhost:3000/contatos", function(data /* O valor de retorno vai ser atribuído a esta variável */){
    document.getElementById("ajax").innerHTML = data;
});