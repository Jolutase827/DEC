main();

/*
    Esta funcion inicializa los vectores que se van a ordenar y los manda a ordenarse en otras funciones para comprobar el tiempo que tarda cada uno
*/
function main(){
    let vector10 = [];
    let vector100=[];
    let vector1000 = [];
    let vector100000 =[];
    rellenarVectores(vector10,10);
    rellenarVectores(vector100,100);
    rellenarVectores(vector1000,1000);
    rellenarVectores(vector100000,100000);
    console.log('_______________________BUBLEEEE_______________________________________');
    comprobarBuble(vector10,vector100,vector1000,vector100000);
    console.log('______________________________________________________________________');
    console.log('___________________________SORT_______________________________________');
    comprobarSort(vector10,vector100,vector1000,vector100000);
    console.log('______________________________________________________________________');
    console.log('___________________________SELECTION__________________________________');
    comprobarSelection(vector10,vector100,vector1000,vector100000);
    console.log('______________________________________________________________________');
    console.log('___________________________INSERTION__________________________________');
    comprobarInsertion(vector10,vector100,vector1000,vector100000);
    console.log('______________________________________________________________________');

}

/*
    Esta función  manda a ordenar a todos los vectores por separados con el metodo insertion
*/
function comprobarInsertion(vector10,vector100,vector1000,vector100000){
    console.log('El insercion tarda en ordenar vector de 10 espacios');
    ordenarYdecirconInsertion(vector10);
    console.log('El insercion tarda en ordenar vector de 100 espacios');
    ordenarYdecirconInsertion(vector100);
    console.log('El insercion tarda en ordenar vector de 1000 espacios');
    ordenarYdecirconInsertion(vector1000);
    console.log('El insercion tarda en ordenar vector de 100000 espacios');
    ordenarYdecirconInsertion(vector100000);
}
//Esta funcion crea un clon del vector desordenado para ordenarlo con el metodo insertion
function ordenarYdecirconInsertion(vectorIntroducido){
    let aux;
    let aux2;
    let j;
    let time = new Date();
    let vector = structuredClone(vectorIntroducido);
    //Doble bucle el cual el primero recorre  en la posición uno y va seleccionando los numeros de delante y encontrandoles la posicíon comparandolo con los numeros que ya hemos pasado con el bucle.
    for(let x =1; x<vector.length;x++){
        aux = vector[x];
        j=x-1;
        while(j>=0&&vector[j]>aux){
            aux2 = vector[j+1];
            vector[j+1]=vector[j];
            vector[j] =aux2;
            j--;
        }
        vector[j+1]=aux;
    }
    let timeNow = new Date();
    console.log(`${(timeNow.getSeconds()>=time.getSeconds())?timeNow.getSeconds()-time.getSeconds():60+(timeNow.getSeconds()-time.getSeconds())}:${(timeNow.getMilliseconds()>=time.getMilliseconds())?timeNow.getMilliseconds()-time.getMilliseconds():1000+(timeNow.getMilliseconds()-time.getMilliseconds())}`);
    console.log(vector);
}

/*
    Esta función  manda a ordenar a todos los vectores por separados con el metodo selection
*/
function comprobarSelection(vector10,vector100,vector1000,vector100000){
    console.log('El selection tarda en ordenar vector de 10 espacios');
    ordenarYdecirconSelection(vector10);
    console.log('El selection tarda en ordenar vector de 100 espacios');
    ordenarYdecirconSelection(vector100);
    console.log('El selection tarda en ordenar vector de 1000 espacios');
    ordenarYdecirconSelection(vector1000);
    console.log('El selection tarda en ordenar vector de 100000 espacios');
    ordenarYdecirconSelection(vector100000);
}
//Esta funcion crea un clon del vector desordenado para ordenarlo con el metodo selection
function ordenarYdecirconSelection(vectorIntroducido){
    let aux;
    let aux2;
    let time = new Date();
    let vector = structuredClone(vectorIntroducido);
    //Consiste en un doble bucle el cual va detectando el nmero más bajo y lo coloca al principio
    for(let x =0; x<vector.length;x++){
        aux = x;
        for(let j=x; j<vector.length-1;j++){
            if(vector[aux]>vector[j]){
                aux = j;
            }
        }
        aux2 = vector[aux];
        vector[aux]=vector[x];
        vector[x] = aux2;
    }
    let timeNow = new Date();
    console.log(`${(timeNow.getSeconds()>=time.getSeconds())?timeNow.getSeconds()-time.getSeconds():60+(timeNow.getSeconds()-time.getSeconds())}:${(timeNow.getMilliseconds()>=time.getMilliseconds())?timeNow.getMilliseconds()-time.getMilliseconds():1000+(timeNow.getMilliseconds()-time.getMilliseconds())}`);
    console.log(vector);
}

/*
    Esta función  manda a ordenar a todos los vectores por separados con el metodo sort
*/
function comprobarSort(vector10,vector100,vector1000,vector100000){
    console.log('El sort tarda en ordenar vector de 10 espacios');
    ordenarYdecirconSort(vector10);
    console.log('El sort tarda en ordenar vector de 100 espacios');
    ordenarYdecirconSort(vector100);
    console.log('El sort tarda en ordenar vector de 1000 espacios');
    ordenarYdecirconSort(vector1000);
    console.log('El sort tarda en ordenar vector de 100000 espacios');
    ordenarYdecirconSort(vector100000);
}
//Esta funcion crea un clon del vector desordenado para ordenarlo con el metodo sort
function ordenarYdecirconSort(vectorIntroducido){
    let time = new Date();
    let vector = structuredClone(vectorIntroducido);
    //a la funcion sort le añado un landa para que se comparen restandose el primero con el segundo y así el más bajo se ponga primero
    vector.sort((a,b)=>a-b);
    let timeNow = new Date();
    console.log(`${(timeNow.getSeconds()>=time.getSeconds())?timeNow.getSeconds()-time.getSeconds():60+(timeNow.getSeconds()-time.getSeconds())}:${(timeNow.getMilliseconds()>=time.getMilliseconds())?timeNow.getMilliseconds()-time.getMilliseconds():1000+(timeNow.getMilliseconds()-time.getMilliseconds())}`);
    console.log(vector);
}
/*
    Esta función  manda a ordenar a todos los vectores por separados con el metodo bubble
*/
function comprobarBuble(vector10,vector100,vector1000,vector100000){
    console.log('El buble tarda en ordenar vector de 10 espacios');
    ordenarYdecirconBuble(vector10);
    console.log('El buble tarda en ordenar vector de 100 espacios');
    ordenarYdecirconBuble(vector100);
    console.log('El buble tarda en ordenar vector de 1000 espacios');
    ordenarYdecirconBuble(vector1000);
    console.log('El buble tarda en ordenar vector de 100000 espacios');
    ordenarYdecirconBuble(vector100000);
}
//Esta funcion crea un clon del vector desordenado para ordenarlo con el metodo bubble
function ordenarYdecirconBuble(vectorIntroducido){
    let aux;
    let time = new Date();
    let vector = structuredClone(vectorIntroducido);
    //Consiste de dos bucles que recorren el vector y cuando se encuentra un numero más alto en la posición siguiente se intercambia por la posición marcada
    for(let x =0; x<vector.length;x++){
        for(let j=0; j<vector.length-1;j++){
            if(vector[j]>vector[j+1]){
                aux = vector[j];
                vector[j] = vector[j+1];
                vector[j+1]= aux;
            }
        }
    }
    let timeNow = new Date();
    console.log(`${(timeNow.getSeconds()>=time.getSeconds())?timeNow.getSeconds()-time.getSeconds():60+(timeNow.getSeconds()-time.getSeconds())}:${(timeNow.getMilliseconds()>=time.getMilliseconds())?timeNow.getMilliseconds()-time.getMilliseconds():1000+(timeNow.getMilliseconds()-time.getMilliseconds())}`);
    console.log(vector);
}

function rellenarVectores(vector,size){
    let aux;
    for(let x = 0; x<size; x++){
        do{
            aux = Math.floor((Math.random()*size)+1);
        }while(vector.includes(aux));
        vector[x]=aux;
    }
}
