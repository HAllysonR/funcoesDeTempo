function date(){
    var horaAtual = new Date();
    var hora = horaAtual.getHours();
    console.log(`agora são exatamente ${horaAtual}`)

    if(hora < 12){
        console.log(`bom dia`);
    } else if(hora <= 18){
        console.log(`boa tarde`);
    }else{
        console.log(`boa noite`);
    }
}

function faixaHetaria(){

   var idade = 18;
    switch(idade){
        case idade > 1 && idade <=2:
            console.log('bebê');
            break;

        case idade > 2 && idade <=8: 
            console.log('criança')
            break;

        case idade > 8 && idade <=12:
            console.log('adolecente');
            break;
        
        case idade > 12 && idade < 18:
            console.log('jovem');
            break;

        case idade = 18:
            var carteiraHabilitação = 'habilitado';
            var status = carteiraHabilitação;
                if(carteiraHabilitação == 'habilitado'){
                    console.log(`Você pode dirigir pois já é maior de idade ${idade} e já está ${status}`);
                }
            break;
        default:
            console.log('Idoso');
            break;
        
    }
}

function diasSemana(){
    var hora=new Date();
    var horaAtual = hora.getDay + 1;

    switch(hora){
        case 1:
            console.log('Domingo');
            break;

        case 2:
            console.log('Segunda');
            break;

        case 3:
            console.log('terça');
            break;

        case 4:
            console.log('quarta');
            break;
        
        case 4:
            console.log('quinta');
            break;

        case 5:
            console.log('sexta');
            alert('Sextou ! para onde vamos ? 1- CINEMA /n 2- RESTAURANTE ');
            var resposta = Number(prompt());
            if(resposta == 1){
                console.log('doutor estranho nos aguarda !');
            }  else if(resposta == 2){
                console.log('vamos encher o bucho');
            } else{
                console.log('cansado demais pra sair (-_-)');
            }
            break;
        case 6:
            console.log('sabado');
            break;

        case 7:
            console.log('Domingo');
            break;
        
        default:
            console.log('[ERROR 404] DADOS INVÁLIDOS');
    }
}
