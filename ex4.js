var Clients = require('./data');

function checkArray(arr, nome){
    for(var i = 0; i < arr.length; i++){
        if(arr[i] === nome){
            return false
        }
    }
    return true
}
function allRejected() {
    var contadorNome = 0;
    var nome = Clients[contadorNome].CLIENT_ID;
    var contadorClientes = 0;
    var contadorClientesRej = 0;
    var rejeitadores = [];

    while(nome){
        for (var i = 0; i < Clients.length; i++) {
            if(Clients[i].CLIENT_ID === nome){
                contadorClientes ++;
                if(Clients[i].LOST_VALUE != 0){
                    contadorClientesRej ++;
                }
            }
        }
        if(contadorClientes === contadorClientesRej && checkArray(rejeitadores, nome)){
            rejeitadores.push(Clients[contadorNome].CLIENT_ID);
        }
        contadorClientes = 0;
        contadorClientesRej = 0;
        contadorNome ++;
        if(contadorNome >= Clients.length){
            return console.log("Clientes que rejeitaram todos os candidatos: " + rejeitadores);
        }
        nome = Clients[contadorNome].CLIENT_ID;
    }
}

console.log(allRejected());