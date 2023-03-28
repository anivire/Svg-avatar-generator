export class Matrix {
    public static generateMatrix(matrixSize: number): number[][] {
        let matrixValue = 0;
        let matrix: number[][] = [];

        do {
            matrixValue = 0;
            matrix = [];

            for (let i = 0; i < matrixSize; i++) {
                matrix.push([]);
                for (let j = 0; j < matrixSize; j++) {
                    matrix[i].push(Math.round(Math.random()) as number);
                }
            }

            
            for (let i = 0; i < matrix.length; i++) {
                for (let j = 0; j < matrix[i].length; j++) {
                    if (matrix[i][j] == 1) {
                        matrixValue++;
                    }
                }
            }
        } while (matrixValue <= 10);
        

        return matrix;
    }

    public static mirrorMatrix(matrix: number[][], mirrorDirection: string): number[][] {
        const numRows = matrix.length;
        const numCols = matrix[0].length;
        const middleRow = Math.floor(numRows / 2);
        const middleCol = Math.floor(numCols / 2);

        // Iterate through the rows of the matrix
        for (let i = 0; i < numRows; i++) {
            if (mirrorDirection == 'x') {
                // Flip the left half of the row to the right half
                for (let j = 0; j < middleCol; j++) {
                    matrix[i][numCols - 1 - j] = matrix[i][j];
                }
            }
            else {
                // Flip the top half of the column to the bottom half
                for (let j = 0; j < middleRow; j++) {
                    matrix[numRows - 1 - j][i] = matrix[j][i];
                }
            }
        }

        return matrix;
    }
}