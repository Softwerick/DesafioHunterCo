var Clients = require('./data');

function valuesBilledAndLost(){
    var valueBilled1 = 0;
    var valueLost1 = 0;
    var valueBilled2 = 0;
    var valueLost2 = 0;
    var valueBilled3 = 0;
    var valueLost3 = 0;
    var valueBilled4 = 0;
    var valueLost4 = 0;
    var valueBilled5 = 0;
    var valueLost5 = 0;
    var valueBilled6 = 0;
    var valueLost6 = 0;
    var valueBilled7 = 0;
    var valueLost7 = 0;
    var valueBilled8 = 0;
    var valueLost8 = 0;
    var valueBilled9 = 0;
    var valueLost9 = 0;
    var valueBilled10 = 0;
    var valueLost10 = 0;
    var valueBilled11 = 0;
    var valueLost11 = 0;
    var valueBilled12 = 0;
    var valueLost12 = 0;


    for (var i = 0; i < Clients.length; i++){
        if(Clients[i].PERIODO_COBRANCA === "2018-01"){
            valueBilled1 += Clients[i].VALUE;
            valueLost1 += Clients[i].LOST_VALUE;
        }
        if(Clients[i].PERIODO_COBRANCA === "2018-02"){
            valueBilled2 += Clients[i].VALUE;
            valueLost2 += Clients[i].LOST_VALUE;
        }
        if(Clients[i].PERIODO_COBRANCA === "2018-03"){
            valueBilled3 += Clients[i].VALUE;
            valueLost3 += Clients[i].LOST_VALUE;
        }
        if(Clients[i].PERIODO_COBRANCA === "2018-04"){
            valueBilled4 += Clients[i].VALUE;
            valueLost4 += Clients[i].LOST_VALUE;
        }
        if(Clients[i].PERIODO_COBRANCA === "2018-05"){
            valueBilled5 += Clients[i].VALUE;
            valueLost5 += Clients[i].LOST_VALUE;
        }
        if(Clients[i].PERIODO_COBRANCA === "2018-06"){
            valueBilled6 += Clients[i].VALUE;
            valueLost6 += Clients[i].LOST_VALUE;
        }
        if(Clients[i].PERIODO_COBRANCA === "2018-07"){
            valueBilled7 += Clients[i].VALUE;
            valueLost7 += Clients[i].LOST_VALUE;
        }
        if(Clients[i].PERIODO_COBRANCA === "2018-08"){
            valueBilled8 += Clients[i].VALUE;
            valueLost8 += Clients[i].LOST_VALUE;
        }
        if(Clients[i].PERIODO_COBRANCA === "2018-09"){
            valueBilled9 += Clients[i].VALUE;
            valueLost9 += Clients[i].LOST_VALUE;
        }
        if(Clients[i].PERIODO_COBRANCA === "2018-10"){
            valueBilled10 += Clients[i].VALUE;
            valueLost10 += Clients[i].LOST_VALUE;
        }
        if(Clients[i].PERIODO_COBRANCA === "2018-11"){
            valueBilled11 += Clients[i].VALUE;
            valueLost11 += Clients[i].LOST_VALUE;
        }
        if(Clients[i].PERIODO_COBRANCA === "2018-12"){
            valueBilled12 += Clients[i].VALUE;
            valueLost12 += Clients[i].LOST_VALUE;
        }
    }
    console.log("Valor Faturado em Janeiro de 2018: ", valueBilled1);
    console.log("Valor Perdido em Janeiro de 2018: ", valueLost1);
    console.log("Valor Faturado em Fevereiro de 2018: ", valueBilled2);
    console.log("Valor Perdido em Fevereiro de 2018: ", valueLost2);
    console.log("Valor Faturado em Março de 2018: ", valueBilled3);
    console.log("Valor Perdido em Março de 2018: ", valueLost3);
    console.log("Valor Faturado em Abril de 2018: ", valueBilled4);
    console.log("Valor Perdido em Abril de 2018: ", valueLost4);
    console.log("Valor Faturado em Maio de 2018: ", valueBilled5);
    console.log("Valor Perdido em Maio de 2018: ", valueLost5);
    console.log("Valor Faturado em Junho de 2018: ", valueBilled6);
    console.log("Valor Perdido em Junho de 2018: ", valueLost6);
    console.log("Valor Faturado em Julho de 2018: ", valueBilled7);
    console.log("Valor Perdido em Julho de 2018: ", valueLost7);
    console.log("Valor Faturado em Agosto de 2018: ", valueBilled8);
    console.log("Valor Perdido em Agosto de 2018: ", valueLost8);
    console.log("Valor Faturado em Setembro de 2018: ", valueBilled9);
    console.log("Valor Perdido em Setembro de 2018: ", valueLost9);
    console.log("Valor Faturado em Outubro de 2018: ", valueBilled10);
    console.log("Valor Perdido em Outubro de 2018: ", valueLost10);
    console.log("Valor Faturado em Novembro de 2018: ", valueBilled11);
    console.log("Valor Perdido em Novembro de 2018: ", valueLost11);
    console.log("Valor Faturado em Dezembro de 2018: ", valueBilled12);
    console.log("Valor Perdido em Dezembro de 2018: ", valueLost12);
}



console.log(valuesBilledAndLost());





