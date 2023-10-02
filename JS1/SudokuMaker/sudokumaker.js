main();



function main(){
    mostrarSudoku(creadorsudoku());
}

function mostrarSudoku(sudoku){
    let salida = '| ';
    for(let x = 0; x<9;x++){
        for(let j = 0; j<9;j++)
            salida += sudoku[x][j]+' | ';
        console.log(salida);
        salida = '| ';
    }
    
}

function creadorsudoku(){
    let sudoku = new Array(9);
    for(let i =0; i<9;i++){
        sudoku[i] = new Array(9);
    }
    sudoku = sudokuValido(sudoku);
    return sudoku;
}
function sudokuValido(sudoku){
    sudoku = sudokuAleatorio(sudoku);
    editarColumnas(sudoku);
    //editarCuadrados(sudoku);
    return sudoku;
}

function editarColumnas(sudoku){
    for(let x=0;x<sudoku;x++){
        for(let j = 0;  j<9;j++){
            if(sudoku[x].includes(sudoku[x][j])){
                cambiarnumeroPorUnoBueno(sudoku,x,j,sudoku[x][j]);
            }
                
        }
    }
}

function cambiarnumeroPorUnoBueno(sudoku,fila,columna,numero){
    let aux=0;
    for(let x=0;x<9;x++){
        if(fila!=x)
            if(!sudoku[x].includes(numero)&&!sudoku[fila].includes(sudoku[x][columna])){
                aux = sudoku[x][columna];
                sudoku[x][columna]=numero;
                sudoku[fila][columna]=aux;
                break;  
            }   
    }
}

function sudokuAleatorio(sudoku){
    for(let x = 0; x<9;x++)
        for(let j = 0; j<9;j++){
            sudoku[x][j] = sacarNumeroValido(sudoku,x,j);
        }
    return sudoku;
}

function sacarNumeroValido(sudoku,fila,columna){
    let salida;
    let valido;
    let x;
    do{
        valido =true;
        salida = Math.floor(Math.random()*9)+1;
        x=0;
        while(x<fila&&valido){
            valido = (salida!=sudoku[x][columna]);
            x++;
        }
    }while(!valido);
    return salida;
}
