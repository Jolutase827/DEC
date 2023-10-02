main();

function main(){
    let sudoku = [[[[],[],[]],[[],[],[]],[[],[],[]]],[[[],[],[]],[[],[],[]],[[],[],[]]],[[[],[],[]],[[],[],[]],[[],[],[]]]];
    
    rellenar(sudoku);
    mostrar(sudoku);
    console.log(sudoku);
}

function rellenar(sudoku){
    let numeros;
    let numero;
    for(let k =0; k<3;k++)
        for(let i =0;i<3;i++)
            for(let j = 0; j<3; j++)
                for(let x = 0; x<3;x++){
                    do{
                        numero = Math.floor((Math.random()*9)+1); 
                    }while(!numeroValido(sudoku,k,i,j,x,numero));
                    sudoku[k][i][j][x] = numero;
                }
}

function numeroValido(sudoku,filabloque,columnaBloque,fila,columna,numero){
    let valido = true;
    valido = comprobarfila(sudoku,filabloque,columnaBloque,fila,columna,numero);
    if(valido){
        valido= comprobarbloque(sudoku,filabloque,columnaBloque,fila,columna,numero);
    }
    if(valido){
        valido = comprobarcolumna(sudoku,filabloque,columnaBloque,fila,columna,numero);
    }
    return valido;
}

function comprobarfila(sudoku,filabloque,columnaBloque,fila,columna,numero){
    for(let j = 0 ; j < sudoku[filabloque][columnaBloque].length ;j++)
        for(let x = 0; x < sudoku[filabloque][columnaBloque][j].length ;x++){
            if(sudoku[filabloque][columnaBloque][j][x]===undefined)
                    return true;    
            if(sudoku[filabloque][columnaBloque][j][x]===numero)
                    return false;
                
        }
    
    return true;
}

function comprobarcolumna(sudoku,filabloque,columnaBloque,fila,columna,numero){
    for(let j = 0 ; j < sudoku.length ;j++)
        for(let x = 0; x < sudoku[j].length ;x++){
            if(sudoku[j][x][fila][columna]===undefined)
                return true;
            if(sudoku[j][x][fila][columna]===numero)
                return false;
        }
            
    
    return true;
}

function comprobarbloque(sudoku,filabloque,columnaBloque,fila,columna,numero){
    for(let j = 0 ; j < sudoku[filabloque].length ;j++)
        for(let x = 0; x < sudoku[filabloque][j][fila].length ;x++){
                if(sudoku[filabloque][j][fila][x]===undefined)
                return true;
                if(sudoku[filabloque][j][fila][x]===numero)
                    return false;
        }
                
        
    
    return true;
}
function mostrar(sudoku){
    let salida = ``;
    for(let k =0; k<3;k++){
        for(let i =0;i<3;i++){
            for(let j = 0; j<3; j++){
                for(let x = 0; x<3;x++){
                    salida += `${sudoku[k][i][j][x]} `;
                }
                salida += `   `;
            }
            salida += `\n`;
        }
        salida+=`\n\n`;
    }
    console.log(salida);
}