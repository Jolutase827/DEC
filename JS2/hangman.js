main();

/*
Esta funcion es la que inicie el juego hasta que el usuario diga que no quiere jugar más
*/
function main(){
    let jugar = true;
    let partidas = [];
    let palabras =[[],[],[]];
    do{
        jugar = quequiereshacer(partidas,palabras);
    }while(jugar);
}
/*
Abre un menu que explica que quiere hacer el usuario
*/
function quequiereshacer(partidas,palabras){
    let salida= prompt("-------BIENVENIDO AL AHORCADO--------- \n Que quieres hacer? \n 1-Escribe 1 para jugar una partida. \n 2-Escribe 2 para mostrar los resultados de las partidas \n 3-Escribe 3 para introducir palabras \n 4- Escribe 4 para dejar de jugar.");
    while(salida!='3'&&salida!='1'&&salida!='2'&&salida!='4'){
        salida = prompt("NO HAS ESCRITO NI 1 NI 2 NI 3 NI 4 \n Que quieres hacer? \n 1-Escribe 1 para jugar una partida. \n 2-Escribe 2 para mostrar los resultados de las partidas \n 3-Escribe 3 para introducir palabras \n 4- Escribe 4 para dejar de jugar.");
    }
    if(salida=='1'){
        jugarPartida(palabras,partidas);
        return true;
    }else if(salida=='2'){
        mostrarPartidas(partidas);
        return true;
    }else if(salida =='3'){
        introducirpalabras(palabras);
        return true;
    }else{
        console.log('ADIOOOOSSSSSS');
        return false;
    }
}
/*
Es una funcion para que mueste la partida
*/
function mostrarPartidas(partidas){
    let count =1;
    partidas.forEach(element => {
        console.log('Partida '+count+'[Nombre: '+element[0]+'| Dificultad:'+element[1]+' | Palabra: '+element[2]+'| Resultado: '+element[3]+'| Letras usadas: '+element[4]+'| Resultado: '+element[6]+'| Vidas: '+element[5]+'| Tiempo: '+element[7][0]+':'+element[7][1]+' ]')
        count++;
    });
    prompt('Mira la consola y observa las partidas una vez las hayas visto pulsa aceptar para ir a menú');
    
    
}

/*
Funcion que empieza el juego
    La función toma cuatro parámetros: nombreDelJugador (el nombre del jugador), palabraAJugar (la palabra que se debe adivinar), dificultad y partidas (un arreglo para almacenar información sobre las partidas).
    Se inicializan varias variables que se utilizarán en el juego, como letrasUsadas (letras ya usadas), letrasAcertadas (estado actual de las letras adivinadas), vidas (número de vidas restantes), entrada (la letra que el jugador ingresa), valido (para verificar si la entrada es válida) y mensaje (un mensaje que se mostrará al jugador).
    Se inicia un bucle que continúa mientras aún hay letras sin adivinar (letrasAcertadas contiene guiones bajos) y el jugador tiene vidas restantes (vidas es mayor que 0).
    Dentro del bucle, se muestra un mensaje que incluye información sobre las vidas restantes, la palabra a adivinar, las letras usadas y una representación visual del ahorcado basada en las vidas restantes.
    Luego, se solicita al jugador que ingrese una letra y se valida que la entrada sea válida (solo una letra y no una que ya haya sido usada).
    Se actualizan las letras usadas y se verifica si la letra ingresada está en la palabra a adivinar. Se actualiza letrasAcertadas en consecuencia o se reduce el número de vidas si la letra no está en la palabra.
    Una vez que el juego ha terminado (ya sea porque se adivinaron todas las letras o se agotaron las vidas), se muestra un mensaje indicando si el jugador ganó o perdió y se actualiza el registro de partidas (partidas).
    Finalmente, se muestra un mensaje al jugador para informar sobre el resultado del juego y dar la opción de volver al menú.
*/
function empezarJuego(nombreDelJugador,palabraAJugar,dificultad,partidas){
    let letrasUsadas='';
    let letrasAcertadas='';
    let vidas=6;
    let entrada;
    let valido;
    let mensaje;
    let aux;
    let timeFirst = new Date();
    let timer =[0,0];
    timeFirst = [timeFirst.getSeconds(),timeFirst.getMinutes()];
    for(let x = 0; x < palabraAJugar.length;x++)
        letrasAcertadas+='_'
    while(letrasAcertadas.includes('_')&&vidas>0){
        mensaje='Vidas: '+vidas+'           Palabra: '+ letrasAcertadas+'     Letras usadas: '+ letrasUsadas +'\nTimer: '+timer[0]+':'+timer[1]+' \n'+((vidas==6)?' __\n|   | \n| \n-':(vidas==5)?' __ \n|   | \n|  o\n| \n -':(vidas==4)?' __ \n|   | \n|  o\n|   |\n -':(vidas==3)?' __ \n|   | \n|  o\n|  /|\n -':(vidas==2)?' __ \n|   | \n|  o\n|  /|\\\n -':(vidas==1)?' __ \n|   | \n|  o\n|  /|\\\n - /':' __ \n|   | \n|  o\n|  /|\\\n - /\\')+ '                                 \n--------------ESCRIBE UNA LETRA---------------  ';
        do{
            valido=true;
            entrada = prompt(mensaje);
            if(entrada.length!=1){
                mensaje = "Escribe por favor solo una letra";
                valido = false;
            }
            if(letrasUsadas.includes(entrada)&&valido){
                mensaje = "Esa letra ya esta escrita";
                valido = false;
            }
        }while(!valido);
        letrasUsadas+=entrada+' ';
        if(palabraAJugar.includes(entrada)){
            aux = letrasAcertadas;
            letrasAcertadas ='';
            for(let j =0;j<palabraAJugar.length;j++){
                if(palabraAJugar.charAt(j)==entrada){
                    letrasAcertadas+=entrada;
                }else if(aux.charAt(j)!='_'){
                    letrasAcertadas+=aux.charAt(j);
                }else{
                    letrasAcertadas+='_ ';
                }
            }
        }else{
            vidas--;
        }
        timer = new Date();

        timer = [(timeFirst[1]-timer.getMinutes())*-1,((timeFirst[0]-timer.getSeconds())*-1)];
    }
    if(vidas>0){
        partidas[partidas.length] = [nombreDelJugador,dificultad,palabraAJugar,letrasAcertadas,letrasUsadas,vidas,'VICTORIA',timer];
        prompt('Has adivinado la palabra '+palabraAJugar+' en '+timer[0]+':'+timer[1]+', '+nombreDelJugador+' eres el mejor pulsa aceptar para ir a menú');
    }else{
        partidas[partidas.length] = [nombreDelJugador,dificultad,palabraAJugar,letrasAcertadas,letrasUsadas,vidas,'DERROTAS',timer];
        prompt('No has adivinado la palabra '+palabraAJugar+' en '+timer[0]+':'+timer[1]+', '+nombreDelJugador+' prueba otra vez dale a aceptar para ir a menú \n  __ \n|   | \n|  o\n|  /|\\\n - /\\');
    }
    
}

/*
Esta función, llamada empezarJuego, es una implementación de un juego de ahorcado en JavaScript. Toma cuatro parámetros: nombreDelJugador (el nombre del jugador), palabraAJugar (la palabra a adivinar), dificultad y partidas (un arreglo para almacenar información sobre las partidas). Durante la ejecución, inicializa y utiliza variables como letrasUsadas, letrasAcertadas, vidas, entrada, valido y mensaje. Un bucle se inicia y continúa mientras aún hay letras por adivinar y el jugador tiene vidas restantes. Dentro del bucle, se muestra un mensaje que proporciona información crucial para el jugador, incluyendo las vidas restantes, la palabra a adivinar, las letras usadas y una representación visual del ahorcado basada en las vidas restantes. Luego, solicita al jugador que ingrese una letra y valida que la entrada sea válida antes de actualizar las letras usadas y verificar si la letra está en la palabra a adivinar. Dependiendo del resultado, se actualiza letrasAcertadas o se reduce el número de vidas. Al finalizar el juego (por adivinanza exitosa o pérdida de vidas), muestra un mensaje indicando el resultado y actualiza el registro de partidas. Por último, ofrece al jugador la opción de volver al menú. La función proporciona una implementación completa y bien estructurada del juego de ahorcado, pudiendo beneficiarse de algunos comentarios para mejorar la comprensión y legibilidad del código. 
*/
function preguntarNombreDejugador(palabraAJugar,dificultad,partidas){
    let nombreDelJugador= prompt('Escribe tu nick name');
    while(devuelvesiono('Seguro que quieres que tu nick name sea '+nombreDelJugador+' escribe "si" o "no"')!='si'){
        nombreDelJugador= prompt('Escribe tu nick name');
    }
    empezarJuego(nombreDelJugador,palabraAJugar,dificultad,partidas);
}

/*
La función "jugarPartida" toma dos parámetros: "palabras" y "partidas". Comienza evaluando si las palabras en las posiciones 0, 1 y 2 de "palabras" tienen una longitud de cero. Si es así, solicita al usuario confirmar si desea insertar más palabras. Si la respuesta es "sí", llama a la función "introducirpalabras" para agregar nuevas palabras y luego vuelve a llamar a "jugarPartida" con las palabras actualizadas y las partidas. Si la respuesta es "no" o si las palabras ya tienen contenido, solicita al usuario elegir la dificultad del juego entre fácil, intermedia o difícil. Luego, llama a la función "buscarPalabra" con la dificultad seleccionada, las palabras y las partidas como argumentos. En resumen, esta función gestiona el flujo del juego, permitiendo al usuario ingresar palabras o elegir la dificultad para buscar una palabra específica en función de la opción seleccionada.
*/
function jugarPartida(palabras,partidas){
    if(palabras[0].length==0&&palabras[1].length==0&&palabras[2].length==0){
        let confirmacion = prompt('No se puede jugar porque no hay palabras quieres insertar más'+'(ESCRIBE "si" O "no" en casa de no te mandará al menu)');
        while(confirmacion!='si'&&confirmacion!='no'){
            confirmacion = prompt('Te lo diré otra vez porque no has introducido "si" o "no" \n No se puede jugar porque no hay palabras quieres insertar más'+'(ESCRIBE "si" O "no" en casa de no te mandará al menu)")');
        }
        if(confirmacion=='si'){
            introducirpalabras(palabras);
            jugarPartida(palabras,partidas);
        }
    }else{
        let dificultad = prompt('Que dificultad quieres? \n 1-Escrtiba 1 para jugar modo fácil (4 letras o menos) \n 2-Escriba 2 para jugar dificultad intermedia (5 letras o 7) \n 3-Escriba 3 para jugar modo dificil (8 letras o más)');
        while(dificultad!='3'&&dificultad!='1'&&dificultad!='2'&&dificultad!='4'){
            dificultad = prompt("NO HAS ESCRITO NI 1 NI 2 NI 3 \n Que dificultad quieres? \n 1-Escrtiba 1 para jugar modo fácil (4 letras o menos) \n 2-Escriba 2 para jugar dificultad intermedia (5 letras o 7) \n 3-Escriba 3 para jugar modo dificil (8 letras o más)");
        }
        buscarPalabra(dificultad,palabras,partidas);

    }
}
/*
La función "buscarPalabra" toma tres parámetros: "dificultad", "palabras" y "partidas". Comienza determinando la dificultad elegida y verifica si hay palabras disponibles para esa dificultad en el arreglo "palabras". Si no hay palabras, solicita al usuario si desea insertar más. Si el usuario confirma, se llama a la función "introducirpalabras" para agregar nuevas palabras y se vuelve a llamar a "buscarPalabra" con los parámetros actualizados. Si hay palabras disponibles para la dificultad seleccionada, elige una palabra aleatoria y la pasa a la función "preguntarNombreDejugador" junto con la dificultad y las partidas. En resumen, esta función se encarga de gestionar la selección aleatoria de una palabra de la dificultad elegida y la interacción con el usuario para jugar el juego de adivinar palabras.
*/
function buscarPalabra(dificultad,palabras,partidas){
    let siOno;
    let palabraAJugar;
    if(dificultad==1){
        if(palabras[0].length==0){
            siOno = devuelvesiono('No se puede jugar en esta dificultad porque no hay palabras quieres insertar más(ESCRIBE "si" O "no" en casa de no te mandará al menu)');
            if(siOno=='si'){
                introducirpalabras(palabras);
                buscarPalabra(dificultad,palabras,partidas);
            }
        }else{
            palabraAJugar = palabras[0][Math.floor(Math.random()*(palabras[0].length))];
            preguntarNombreDejugador(palabraAJugar,dificultad,partidas);
        }
    }else if(dificultad==2){
        if(palabras[1].length==0){
            siOno = devuelvesiono('No se puede jugar en esta dificultad porque no hay palabras quieres insertar más(ESCRIBE "si" O "no" en casa de no te mandará al menu)');
            if(siOno=='si'){
                introducirpalabras(palabras);
                buscarPalabra(dificultad,palabras,partidas);
            }
        }else{
            palabraAJugar = palabras[1][Math.floor(Math.random()*(palabras[1].length))];
            preguntarNombreDejugador(palabraAJugar,dificultad,partidas);
        }
    }else{
        if(palabras[2].length==0){
            siOno = devuelvesiono('No se puede jugar en esta dificultad porque no hay palabras quieres insertar más(ESCRIBE "si" O "no" en casa de no te mandará al menu)');
            if(siOno=='si'){
                introducirpalabras(palabras);
                buscarPalabra(dificultad,palabras,partidas);
            }
        }else{
            palabraAJugar = palabras[2][Math.floor(Math.random()*(palabras[2].length))];
            preguntarNombreDejugador(palabraAJugar,dificultad,partidas);
        }
    }
    
}
/*
La función "devuelvesiono" toma un mensaje como argumento y utiliza un bucle para solicitar al usuario que confirme con "si" o "no". Inicia mostrando el mensaje dado en un cuadro de diálogo. Si la confirmación no es "si" o "no", repite la solicitud de confirmación junto con el mensaje original hasta que el usuario responde correctamente. Finalmente, devuelve la confirmación ("si" o "no"). En resumen, esta función proporciona una forma de asegurar que el usuario responda de manera válida con "si" o "no" antes de continuar, garantizando una entrada adecuada para el flujo del programa.
*/
function devuelvesiono(mensaje){
    let confirmacion = prompt(mensaje);
    while(confirmacion!='si'&&confirmacion!='no'){
        confirmacion = prompt('Te lo diré otra vez porque no has introducido "si" o "no" \n'+mensaje);
    }
    return confirmacion;
}
/*
La función "introducirpalabras" toma un arreglo de palabras llamado "palabras" y realiza varias acciones para permitir al usuario introducir nuevas palabras. Primero, convierte las palabras en una cadena para mostrarlas de manera legible. Luego, verifica si ya hay palabras introducidas y las muestra o indica que no hay palabras si están vacías. A continuación, inicia un proceso iterativo donde el usuario puede ingresar nuevas palabras y especificar si desea agregarlas. Si el usuario confirma, determina en qué categoría de longitud debe colocarse la palabra y la añade al arreglo correspondiente. Después de cada iteración, muestra la lista actualizada de palabras introducidas. El proceso se repite hasta que el usuario deja el campo de entrada en blanco. En resumen, esta función brinda una forma interactiva de introducir palabras en diferentes categorías de longitud y actualizar la lista de palabras existente.
*/
function introducirpalabras(palabras){
    let palabrasString=''
    palabras.forEach(element => {
        element.forEach(element1 => {
            palabrasString += element1+' ';
        });
    });
    console.log((palabras[0].length==0&&palabras[1].length==0&&palabras[2].length==0)?'No hay plabras introducidas':'Palabras introducidas: '+palabrasString);
    let palabraAAnyaadir = prompt('Escriba que palabra quieres añadir o dejalo en blanco cuando quieras parar de añadir palabras. \n Las palabras que hay guardadas se mostraran en la consola');
    let confirmacion;
    while(palabraAAnyaadir!=""){
        confirmacion = prompt('Seguro que quieres introducir la palabra '+palabraAAnyaadir+'(ESCRIBE "si" O "no")');
        while(confirmacion!='si'&&confirmacion!='no'){
            confirmacion = prompt('Te lo diré otra vez porque no has introducido "si" o "no" \n Seguro que quieres introducir la palabra '+palabraAAnyaadir+'(ESCRIBE "si" O "no")');
        }
        if(confirmacion=='si'){
            if(palabraAAnyaadir.length<=4){
                palabras[0].push(palabraAAnyaadir);
            }else if(palabraAAnyaadir.length>=8){
                palabras[2].push(palabraAAnyaadir);
            }else{
                palabras[1].push(palabraAAnyaadir);
            }
            palabrasString += palabraAAnyaadir+'.';
        }
        console.log('Palabras introducidas: '+palabrasString);
        palabraAAnyaadir = prompt('Escriba que palabra quieres añadir o dejalo en blanco cuando quieras parar de añadir palabras. \n Las palabras que hay guardadas se mostraran en la consola');
    }
}