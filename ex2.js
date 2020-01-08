var Clients = require('./data');

function checkArray(arr, nome){
    for(var i = 0; i < arr.length; i++){
        if(arr[i] === nome){
            return false
        }
    }
    return true
}
function mostRejected(){
    var contadorNome = 0;
    var checar = 0;
    var contador = 0;
    var rejeitados = [];
    var nome = Clients[contadorNome].CANDIDATE;
    while(nome){
        for (var i = 0; i < Clients.length; i++) {
            if(Clients[i].CANDIDATE === nome && Clients[i].LOST_VALUE != 0){
                contador ++;
            }
        }
        if( contador > checar){
            checar = contador;
        }
        contador = 0;
        contadorNome ++;
        if(contadorNome >= Clients.length){
            contadorNome = 0;
            nome = Clients[contadorNome].CANDIDATE;
            while(nome){
                for(var i = 0; i < Clients.length; i++){
                    if(Clients[i].CANDIDATE === nome && Clients[i].LOST_VALUE != 0){
                        contador ++;
                        if(contador === checar && checkArray(rejeitados, nome)){
                            contador = 0;
                            rejeitados.push(Clients[i].CANDIDATE);
                        }
                    }
                }
                contador = 0;
                contadorNome ++;
                if(contadorNome >= Clients.length){
                    return console.log("As pessoas que foram mais rejeitadas foram: " + rejeitados);
                }
                nome = Clients[contadorNome].CANDIDATE;
            }
            return ;
        }
        nome = Clients[contadorNome].CANDIDATE;
    }


}

console.log(mostRejected());