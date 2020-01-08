var Clients = require('./data');

function checkArray(arr, nome){
    for(var i = 0; i < arr.length; i++){
        if(arr[i] === nome){
            return false
        }
    }
    return true
}
function mostRejection(){
    var contadorNome = 0;
    var checar = 0;
    var contador = 0;
    var rejeitados = [];
    var nome = Clients[contadorNome].CLIENT_ID;
    while(nome){
        for (var i = 0; i < Clients.length; i++) {
            if(Clients[i].CLIENT_ID === nome && Clients[i].LOST_VALUE != 0){
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
            nome = Clients[contadorNome].CLIENT_ID;
            while(nome){
                for(var i = 0; i < Clients.length; i++){
                    if(Clients[i].CLIENT_ID === nome && Clients[i].LOST_VALUE != 0){
                        contador ++;
                        if(contador === checar && checkArray(rejeitados, nome)){
                            contador = 0;
                            rejeitados.push(Clients[i].CLIENT_ID);
                        }
                    }
                }
                contador = 0;
                contadorNome ++;
                if(contadorNome >= Clients.length){
                    return console.log("O cliente que mais rejeitou candidatos foi: " + rejeitados + ". Ele rejeitou " + checar + " candidatos.");
                }
                nome = Clients[contadorNome].CLIENT_ID;
            }
            return ;
        }
        nome = Clients[contadorNome].CLIENT_ID;
    }


}

console.log(mostRejection());