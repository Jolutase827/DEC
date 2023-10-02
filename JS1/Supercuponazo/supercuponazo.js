main();




function main(){
    explicionPrograma();
    darSolucion(pedirNumero(),parseInt(pedirVecesParaJugar()));
}


function darSolucion(numeroyserie, vecesAjugar){
    let dineroGastado = vecesAjugar*3;
    let premios;
    if(numeroyserie[0]===' '){
        premios = numerosAleatorios(vecesAjugar);
    }else{
        premios = mismoNumero(numeroyserie,vecesAjugar);
    }
    dineroGanado = ganado(premios);
    console.log('Dinero gastado= '+dineroGastado+'€');
    console.log('Dinero ganado= '+dineroGanado+'€');
    console.log('Resultado final = '+(dineroGanado-dineroGastado)+'€');
    console.log(premios[0]+' 1º Premios:'+(premios[0]*6000000));
    console.log(premios[1]+' 2º Premios:'+(premios[1]*40000));
    console.log(premios[2]+' 3º Premios:'+(premios[2]*500));
    console.log(premios[3]+' 4º Premios:'+(premios[3]*50));
    console.log(premios[4]+' 5º Premios:'+(premios[4]*6));
    console.log(premios[5]+' 6º Premios:'+(premios[5]*3));
}

function ganado(premios){
    return ((premios[0]*6000000)+(premios[1]*40000)+(premios[2]*500)+(premios[3]*50)+(premios[4]*6)+(premios[5]*3));
}

function numerosAleatorios(vecesAjugar){
    let premios = [];
    premios[0] = 0;
    premios[1] = 0;
    premios[2] = 0;
    premios[3] = 0;
    premios[4] = 0;
    premios[5] = 0;
    let serie;
    let numero;
    let serieGanador;
    let numeroGanador;
    for(let i = 0;i<vecesAjugar;i++){
        serie = generar3Numeros();
        numero = generar5Numeros();
        serieGanador = generar3Numeros();
        numeroGanador = generar5Numeros();
        if(comprobar1Premio(numero,serie,numeroGanador,serieGanador)==1){
            premios[0]++;
        }else if(comprobar2Premio(numero,numeroGanador)==1){
            premios[1]++;
        }else if(comprobar3Premio(numero,numeroGanador)==1){
            premios[2]++;
        }else if(comprobar4Premio(numero,numeroGanador)==1){
            premios[3]++;
        }else if(comprobar5Premio(numero,numeroGanador)==1){
            premios[4]++;
        }else if(comprobar6Premio(numero,numeroGanador)==1){
            premios[5]++;
        }
    }
    return premios;
}

function mismoNumero(numeroyserie,vecesAjugar){
    let premios =[];
    let numero = numeroyserie[0];
    let serie = numeroyserie[1];
    premios[0] = 0;
    premios[1]= 0;
    premios[2]= 0;
    premios[3]= 0;
    premios[4]= 0;
    premios[5]= 0;
    let serieGanador;
    let numeroGanador;
    for(let i = 0;i<vecesAjugar;i++){
        serieGanador = generar3Numeros();
        numeroGanador = generar5Numeros();
        if(comprobar1Premio(numero,serie,numeroGanador,serieGanador)==1){
            premios[0]++;
        }else if(comprobar2Premio(numero,numeroGanador)==1){
            premios[1]++;
        }else if(comprobar3Premio(numero,numeroGanador)==1){
            premios[2]++;
        }else if(comprobar4Premio(numero,numeroGanador)==1){
            premios[3]++;
        }else if(comprobar5Premio(numero,numeroGanador)==1){
            premios[4]++;
        }else if(comprobar6Premio(numero,numeroGanador)==1){
            premios[5]++;
        }
    }
    return premios;
}

function comprobar1Premio(numero,serie,numeroGanador,serieGanador){
    if(numero==numeroGanador&&serie==serieGanador){
        return 1;
    }else
        return 0;
}
function comprobar2Premio(numero,numeroGanador){
    if(numero==numeroGanador){
        return 1;
    }else
        return 0;
}
function comprobar3Premio(numero,numeroGanador){
    if(numero.substring(0,4)==numeroGanador.substring(0,4)||numero.substring(1,5)==numeroGanador.substring(1,5)){
        return 1;
    }else
        return 0;
}
function comprobar4Premio(numero,numeroGanador){

    if(numero.substring(0,3)==numeroGanador.substring(0,3)||numero.substring(2,5)==numeroGanador.substring(2,5)){
        return 1;
    }else
        return 0;
}
function comprobar5Premio(numero,numeroGanador){

    if(numero.substring(0,2)==numeroGanador.substring(0,2)||numero.substring(3,5)==numeroGanador.substring(3,5)){
        return 1;
    }else
        return 0;
}
function comprobar6Premio(numero,numeroGanador){
    if(numero.substring(0,1)==numeroGanador.substring(0,1)||numero.substring(4,5)==numeroGanador.substring(4,5)){
        return 1;
    }else
        return 0;
}




function generar5Numeros(){
    let numero = Math.floor((Math.random()*99999))+'';
    
    for(i = numero.length;i<5;i++){
        numero = '0'+numero;
    }
    return numero;
}
function generar3Numeros(){
    let numero = Math.floor((Math.random()*999))+'';
    
    for(i = numero.length;i<3;i++){
        numero = '0'+numero;
    }
    return numero;
}


function pedirVecesParaJugar(){
    let salida;
    let valido = false;
    let mensaje ='Dime cuantas veces va a jugar con numeros (ejemplo \'1100\'). Piensa que cada vez que juegues le va a costar 3€';
    salida = prompt(mensaje, '');
        if(!isNaN(salida)){
            valido = true;
        }else{
            mensaje ='Valor no valido. '+mensaje;
        }
    while(!valido){
        salida = prompt(mensaje, '');
        if(!isNaN(salida)){
            valido = true;
        }
    }
    return salida;
}


function pedirNumero(){
    numeroyserie=[];
    if(serieOAleatorio()){
        numeroyserie[0]=devolverNumero(5);
        numeroyserie[1]=devolverNumero(3);
    }else{
        numeroyserie[0]=' ';
    }
    return numeroyserie;

    
}

function devolverNumero(cantidad){
    let salida;
    let valido = false;
    let mensaje =('Dime '+cantidad+' números del 0 al 9 cada uno'+((cantidad==3)?' para la serie':''));
    salida = prompt(mensaje, '');
    if(salida.length==cantidad&&!isNaN(salida)){
        valido = true;
    }else{
        mensaje ='Valor no valido. '+mensaje;
    }
    while(!valido){
        if(salida.length==cantidad&&!isNaN(salida)){
            valido = true;
        }  
    }
    return salida;
}

function serieOAleatorio(){
    let sioNo= devuelveUnSiOUnNo();
    if(sioNo=='si')
        return true;
    else
        return false;
}


function devuelveUnSiOUnNo(){
    let valido = false;
    let mensaje ='¿Quieres introducir un numero si o no?(Si pones no será números aleatorios)';
    let sioNo;
    do{
        sioNo = prompt(mensaje, '');
        if(sioNo =='si'||sioNo =='no'){
            valido = true;
        }else{
            mensaje = 'No es un si o un no,¿Quieres introducir un numero si o no?(Si pones no será números aleatorios)';
        }
    }while(!valido);
    console.clear();
    return sioNo;
}

function explicionPrograma(){
    console.log('COMO FUNCIONA EL PROGRAMA:');
    console.log('1º Se pedirá si quieres introducir un numero y que se compruebe varias veces o que se genere aleatoriamente un numero de veces que quieras');
    console.log('2º Se pedirá el numero de veces que quiere jugar');
    console.log('3º Se dará una solución aleatoria');
    console.log('______________________________________________________');
}