        
        let linea1Jugador='';
        let linea2Jugador = '';
        let linea3Jugador ='';
        let linea1Ordenador = '';
        let linea2Ordenador = '';
        let linea3Ordenador = '';
        let cuentaDeNumeros ='';
        let numeroAleatorio2= 0;
        let numeroAleatorio =0;
        let seRepite;
        let ganoJugador, ganoMaquina = false;
        for(let x = 0; x<3;x++){ 
            for(let i = 0; i<5;i++){
                do{
                    seRepite = true;
                    numeroAleatorio = Math.floor((Math.random()*90)+1);
                    numeroAleatorio2 =Math.floor((Math.random()*90)+1);
                    if(linea1Jugador.includes(numeroAleatorio+' ')
                        ||linea2Jugador.includes(numeroAleatorio+' ')
                        ||linea3Jugador.includes(numeroAleatorio+' ')
                        ||linea1Ordenador.includes(numeroAleatorio2+' ')
                        ||linea2Ordenador.includes(numeroAleatorio2+' ')
                        ||linea3Ordenador.includes(numeroAleatorio2+' ')){
                            seRepite = false;
                    }else{
                        if(x==0){
                            linea1Jugador =linea1Jugador+numeroAleatorio+' ';
                            if(numeroAleatorio<10){
                                linea1Jugador+=' ';
                            }
                            linea1Ordenador =linea1Ordenador+numeroAleatorio2+' ';
                            if(numeroAleatorio2<10){
                                linea1Ordenador+=' ';
                            }
                        }else if(x==1){
                            linea2Jugador =linea2Jugador+numeroAleatorio+' ';
                            if(numeroAleatorio<10){
                                linea2Jugador+=' ';
                            }
                            linea2Ordenador =linea2Ordenador+numeroAleatorio+' ';
                            if(numeroAleatorio<10){
                                linea2Ordenador+=' ';
                            }                
                        }else{
                            linea3Jugador =linea3Jugador+numeroAleatorio+' ';
                            if(numeroAleatorio<10){
                                linea3Jugador+=' ';
                            }
                            linea3Ordenador =linea3Ordenador+numeroAleatorio2+' ';
                            if(numeroAleatorio2<10){
                                linea3Ordenador+=' ';
                            }
                        }   
                    }           
                }while(!seRepite);
            }
        }
       
        console.log('Presiona espacio');  
        let cont=0;
        let linea1J,linea2J,linea3j,linea,linea1o,linea2o,linea3o=true;
        document.addEventListener('keydown', function(event) {
            if (event.key == ' '&&(!ganoJugador&&!ganoMaquina&&cont<90)) {
            
            
            do{
                numeroAleatorio = Math.floor((Math.random()*90)+1);
            }while(cuentaDeNumeros.includes(numeroAleatorio+' '));
            
            
                
            cont++;
            cuentaDeNumeros += numeroAleatorio+' ';
            console.log('Numeros['+cuentaDeNumeros+']');
            console.log('--------------');
            
            
            if(linea1Jugador.includes(numeroAleatorio+' ')){
                linea1Jugador = linea1Jugador.replace(numeroAleatorio+' ',numeroAleatorio+'/');
            }
            if(!linea1Jugador.includes(' ')){
                if(!linea){
                    console.log('Linea jugador');
                    linea = true;
                }
                linea1J = true;
            }
            if(linea2Jugador.includes(numeroAleatorio+' ')){
                linea2Jugador = linea2Jugador.replace(numeroAleatorio+' ',numeroAleatorio+'/');
            }
            if(!linea2Jugador.includes(' ')){
                if(!linea){
                    console.log('Linea jugador');
                    linea = true;
                }
                linea2J = true;
            }
            if(linea3Jugador.includes(numeroAleatorio+' ')){
                linea3Jugador = linea3Jugador.replace(numeroAleatorio+' ',numeroAleatorio+'/');
            }
            if(!linea3Jugador.includes(' ')){
                if(!linea){
                    console.log('Linea jugador');
                    linea = true;
                }
                linea3j = true;
            }
            if(linea1Ordenador.includes(numeroAleatorio+' ')){
                linea1Ordenador = linea1Ordenador.replace(numeroAleatorio+' ',numeroAleatorio+'/');
            }
            if(!linea1Ordenador.includes(' ')){
                if(!linea){
                    console.log('Linea ordenador');
                    linea = true;
                }
                linea1o = true;
            }
            if(linea2Ordenador.includes(numeroAleatorio+' ')){
                linea2Ordenador = linea2Ordenador.replace(numeroAleatorio+' ',numeroAleatorio+'/');
            }
            if(!linea2Ordenador.includes(' ')){
                if(!linea){
                    console.log('Linea ordenador');
                    linea = true;
                }
                linea2o = true;
            }
            if(linea3Ordenador.includes(numeroAleatorio+' ')){
                linea3Ordenador = linea3Ordenador.replace(numeroAleatorio+' ',numeroAleatorio+'/');
            }
            if(!linea3Ordenador.includes(' ')){
                if(!linea){
                    console.log('Linea ordenador');
                    linea = true;
                }
                linea3o = true;
            }
            if(linea1J&&linea2J&&linea3j)
                ganoJugador=true;
            if(linea1o&&linea2o&&linea3o)
                ganoMaquina=true;

                console.log('Tu');
                console.log(linea1Jugador);
                console.log(linea2Jugador);
                console.log(linea3Jugador);
                console.log('-----------------');
                console.log('El ordenador');
                console.log(linea1Ordenador);
                console.log(linea2Ordenador);
                console.log(linea3Ordenador);
                console.log('-----------------');
                if(ganoMaquina&&ganoJugador){
                    console.log('Han empatado');
                }else if(ganoJugador){
                    console.log('Ha ganado jugador');
                }else if(ganoMaquina)
                    console.log('Ha ganado maquina');
                console.log();
                console.log();
                console.log();
         }
        });
        
        