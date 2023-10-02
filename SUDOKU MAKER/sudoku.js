main();

function main(){
    let sudoku = new Array(9);
    for(let i =0; i<9;i++){
        sudoku[i] = new Array(9);
    }
    sudoku = rellenar(sudoku);
    mostrar(sudoku);
}
function rellenar(sudoku){
    for(let x=0;x<9;x++){
        for(let j= 0; j<9;j++){
            sudoku[x][j] = j+1;
        }
    }
    return sudoku;
}

function mostrar(sudoku){
    let salida = ``;
    for(let i=0;i<sudoku.length;i++){
        for(let j = 0; j<sudoku[i].length;j++){
            if((j+1)%3==0){
                salida += `${sudoku[i][j]}   `;
            }else{
                salida += `${sudoku[i][j]} `;
            }
        }
        if((i+1)%3==0){
            salida += `\n\n`;
        }else{
            salida += `\n`;
        }
    }
    console.log(salida);
}