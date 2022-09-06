function eleicao(){
    var idade = 70;
    if(idade < 16){
        console.log('não vota');
    }else if(idade < 16 || idade > 65){
            console.log('voto opcional');
    } else  {
        console.log('voto obrigatório');
    }
}


function garotoDoTempo(){
    var hora = new Date();
    var horaAtual = hora.getHours();

    if(horaAtual > 5 && horaAtual < 12){
        console.log('bom dia');
    } else if(horaAtual > 12 && horaAtual <=17 ){
        console.log('boa tarde');
    } else if(horaAtual >17 && horaAtual <=24){
        console.log('boa noite');
    } else{
        console.log('boa madrugada')
    }
}
