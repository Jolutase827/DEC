function generarSudoku() {
    let sudoku = Array.from({ length: 9 }, () => Array(9).fill(0));

    // Llenar diagonal principal con números aleatorios
    for (let i = 0; i < 9; i += 3) {
        llenarBloque(sudoku, i, i);
    }

    // Resolver el sudoku
    resolverSudoku(sudoku);

    return sudoku;
}

function llenarBloque(sudoku, filaInicio, columnaInicio) {
    let numerosDisponibles = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    for (let i = filaInicio; i < filaInicio + 3; i++) {
        for (let j = columnaInicio; j < columnaInicio + 3; j++) {
            let numero = numerosDisponibles.splice(Math.floor(Math.random() * numerosDisponibles.length), 1)[0];
            sudoku[i][j] = numero;
        }
    }
}

function resolverSudoku(sudoku) {
    resolverSudokuRecursivo(sudoku, 0, 0);
}

function resolverSudokuRecursivo(sudoku, fila, columna) {
    if (fila === 9) {
        // Hemos resuelto el sudoku
        return true;
    }

    if (sudoku[fila][columna] !== 0) {
        // La celda ya está llena, pasar a la siguiente
        return resolverSudokuRecursivo(sudoku, columna === 8 ? fila + 1 : fila, (columna + 1) % 9);
    }

    for (let num = 1; num <= 9; num++) {
        if (esNumeroValido(sudoku, fila, columna, num)) {
            sudoku[fila][columna] = num;

            if (resolverSudokuRecursivo(sudoku, columna === 8 ? fila + 1 : fila, (columna + 1) % 9)) {
                return true;
            }

            sudoku[fila][columna] = 0; // No es la solución, deshacer y probar con otro número
        }
    }

    return false; // No se puede resolver con ningún número, retroceder
}

function esNumeroValido(sudoku, fila, columna, num) {
    // Verificar si num está en la fila o columna
    for (let i = 0; i < 9; i++) {
        if (sudoku[fila][i] === num || sudoku[i][columna] === num) {
            return false;
        }
    }

    // Verificar si num está en el bloque 3x3
    let filaInicio = Math.floor(fila / 3) * 3;
    let columnaInicio = Math.floor(columna / 3) * 3;
    for (let i = filaInicio; i < filaInicio + 3; i++) {
        for (let j = columnaInicio; j < columnaInicio + 3; j++) {
            if (sudoku[i][j] === num) {
                return false;
            }
        }
    }

    return true;
}

function mostrar(sudoku) {
    let salida = '';
    for (let i = 0; i < 9; i++) {
        for (let j = 0; j < 9; j++) {
            salida += `${sudoku[i][j]} `;
            if ((j + 1) % 3 === 0) {
                salida += '  ';
            }
        }
        salida += '\n';
        if ((i + 1) % 3 === 0) {
            salida += '\n';
        }
    }
    console.log(salida);
}

// Generar un sudoku
let sudokuGenerado = generarSudoku();
mostrar(sudokuGenerado);