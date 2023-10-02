main();



function main(){
    explicionPrograma();
    darSolucion(pedirNumero(),parseInt(pedirVecesParaJugar()));
}


function darSolucion(numeroyserie, vecesAjugar){
    let dineroGastado = vecesAjugar;
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
    console.log(premios[0]+' 1º Premios:'+(premios[0]*3000000));
    console.log(premios[1]+' 2º Premios:'+(premios[1]*1000000));
    console.log(premios[2]+' 3º Premios:'+(premios[2]*50000));
    console.log(premios[3]+' 4º Premios:'+(premios[3]*1500));
    console.log(premios[4]+' 5º Premios:'+(premios[4]*50));
    console.log(premios[5]+' 6º Premios:'+(premios[5]*8));
    console.log(premios[6]+' 7º Premios:'+(premios[6]));
}

function ganado(premios){
    return ((premios[0]*3000000)+(premios[1]*1000000)+(premios[2]*50000)+(premios[3]*1500)+(premios[4]*50)+(premios[5]*8)+(premios[6]));
}

function numerosAleatorios(vecesAjugar){
    let premios = [];
    premios[0] = 0;
    premios[1] = 0;
    premios[2] = 0;
    premios[3] = 0;
    premios[4] = 0;
    premios[5] = 0;
    premios[6]= 0;
    let numero;
    let numeroGanador;
    for(let i = 0;i<vecesAjugar;i++){
        numero = generarBolasAleatorio();
        numeroGanador = generarBolasAleatorio();
        premios[0] += comprobar1Premio(numero,numeroGanador);
        premios[1] += comprobar2Premio(numero,numeroGanador);
        premios[2] += comprobar3Premio(numero,numeroGanador);
        premios[3] += comprobar4Premio(numero,numeroGanador);
        premios[4] += comprobar5Premio(numero,numeroGanador);
        premios[5] += comprobar6Premio(numero,numeroGanador);
        premios[6] += comprobar7Premio(numero,numeroGanador);
    }
    return premios;
}

function mismoNumero(numeroyserie,vecesAjugar){
    let premios =[];
    let numero =numeroyserie;
    premios[0] = 0;
    premios[1]= 0;
    premios[2]= 0;
    premios[3]= 0;
    premios[4]= 0;
    premios[5]= 0;
    premios[6]= 0;
    let numeroGanador;
    for(let i = 0;i<vecesAjugar;i++){
        numeroGanador = generarBolasAleatorio();
        premios[0] += comprobar1Premio(numero,numeroGanador);
        premios[1] += comprobar2Premio(numero,numeroGanador);
        premios[2] += comprobar3Premio(numero,numeroGanador);
        premios[3] += comprobar4Premio(numero,numeroGanador);
        premios[4] += comprobar5Premio(numero,numeroGanador);
        premios[5] += comprobar6Premio(numero,numeroGanador);
        premios[6] += comprobar7Premio(numero,numeroGanador);
    }
    return premios;
}

function comprobar1Premio(numero,numeroGanador){
    let verdad=1;
    let cont = 0;
    let soloNumeros= solo6(numeroGanador);
    do{
        if(!soloNumeros.includes(numero[cont]))
            verdad--;
        cont++;
    }while(verdad==1&&cont<6);
    if(verdad==1&&numero[7]!=numeroGanador[7])
        verdad--;
    return verdad;
}


function comprobar2Premio(numero,numeroGanador){
    let verdad=1;
    let cont = 0;
    let soloNumeros= solo6(numeroGanador);
    do{
        if(!soloNumeros.includes(numero[cont]))
            verdad--;
        cont++;
    }while(verdad==1&&cont<6);
    if(verdad==1&&numero[7]==numeroGanador[7])
        verdad--;
    return verdad;
}
function comprobar3Premio(numero,numeroGanador){
    let contador=6;
    let cont = 0;
    let soloNumeros= solo6(numeroGanador);
    do{
        if(!soloNumeros.includes(numero[cont]))
            contador--;
        cont++;
    }while(cont<6);
    
    return (contador==5&&numero[6]==numeroGanador[6])?1:0;
}
function comprobar4Premio(numero,numeroGanador){
    let contador=6;
    let cont = 0;
    let soloNumeros= solo6(numeroGanador);
    do{
        if(!soloNumeros.includes(numero[cont]))
            contador--;
        cont++;
    }while(cont<6);
    
    return (contador==5&&numero[6]!=numeroGanador[6])?1:0;
   
}
function comprobar5Premio(numero,numeroGanador){
    let contador=6;
    let cont = 0;
    let soloNumeros= solo6(numeroGanador);
    do{
        if(!soloNumeros.includes(numero[cont]))
            contador--;
        cont++;
    }while(cont<6);
    
    return (contador==4)?1:0;
}
function comprobar6Premio(numero,numeroGanador){
    let contador=6;
    let cont = 0;
    let soloNumeros= solo6(numeroGanador);
    do{
        if(!soloNumeros.includes(numero[cont]))
            contador--;
        cont++;
    }while(cont<6);
    
    return (contador==3)?1:0;
}
function comprobar7Premio(numero,numeroGanador){
    let contador=6;
    let cont = 0;
    let soloNumeros= solo6(numeroGanador);
    do{
        if(!soloNumeros.includes(numero[cont]))
            contador--;
        cont++;
    }while(cont<6);
    return (contador<3&&numero[7]==numeroGanador[7])?1:0;
}
function solo6(numeros){
    let salida = [];
    for(let i=0;i<6;i++){
        salida[i]=numeros[i];
    }
    return salida;

}

function generarBolasAleatorio(){
    let numeros =[];
    for(let i = 0;i<7;i++){
        numeros[i]=generarNumeroDel1al49(numeros);
    }
    numeros[7]=devolverReintegro();
    return numeros;
}

function generarNumeroDel1al49(numeros){
    let salida;
    let valido = false;
    do{
        salida = parseInt((Math.random()*49)+1);
        if(salida>0&&salida<=49)
            if(!numeros.includes(salida))
                valido = true;
    }while(!valido);
    return salida;
}
function devolverReintegro(){
    return parseInt((Math.random()*9)+1);
}


function pedirVecesParaJugar(){
    let salida;
    let valido = false;
    let mensaje ='Dime cuantas veces va a jugar con numeros (ejemplo \'1100\'). Piensa que cada vez que juegues le va a costar 1€';
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
    let numeros=[];
    if(serieOAleatorio()){
        numeros[0]=devolverNumero(1,numeros);
        numeros[1]=devolverNumero(2,numeros);
        numeros[2]=devolverNumero(3,numeros);
        numeros[3]=devolverNumero(4,numeros);
        numeros[4]=devolverNumero(5,numeros);
        numeros[5]=devolverNumero(6,numeros);
        numeros[6]=devolverNumero(7,numeros);
        numeros[7]=devolverReintegro();
    }else{
        numeros[0]=' ';
    }
    return numeros;
    
}


function devolverNumero(numero,numeros){
    let salida;
    let valido = false;
    let mensaje =('Dime el '+((numero!=7)?'dime el numero '+numero+'de 6 ':'numero complementario ')+'del 1 al 49');
    salida = prompt(mensaje);
    if(!isNaN(salida)){
        salida = parseInt(salida);
        if(salida>0&&salida<=49)
            if(!numeros.includes(salida))
                valido = true;
                else
                    mensaje ='Valor no valido. '+mensaje;
        else
            mensaje ='Valor no valido. '+mensaje;
    }else{
        mensaje ='Valor no valido. '+mensaje;
    }
    while(!valido){
        salida = prompt(mensaje, '');
        if(!isNaN(salida)){
            salida = parseInt(salida); 
            if(salida>0&&salida<=49)
                if(!numeros.includes(salida))
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
    console.log('1º Se pedirá si quieres introducir tu los numeros o que se genere aleatoriamente un numero');
    console.log('2º Se pedirá el numero de veces que quiere jugar');
    console.log('3º Se dará una solución');
    console.log('______________________________________________________');
}