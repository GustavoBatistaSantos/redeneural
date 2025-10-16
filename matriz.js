class Matrix{
        constructor(rows,cols){
            this.rows = rows;
            this.cols = cols;

            this.data = [];
            for(let i=0; i<rows; i++){
                let arr = []
                for(let j=0; j<cols; j++){
                    arr.push(0)//gera numero randomico e o floor arredonda um  número pra baixo
                }
                this.data.push(arr);
            }
        }

         static arrayToMatrix(arr){
            let matrix = new Matrix(arr.length,1)
            matrix.map((elem,i,j)=>{
                return arr[i]
            })

        }
        print(){
            console.table(this.data)
        }
        ramdomize(){
            this.map((elem,i,j)=>{
                return Math.random()*2-1
            })
        }

        static map(A,func){
            let matrix = new Matrix(A.rows, B.rows)
            matrix.data = matrix.data.map((arr, i)=>{
                return arr.map((num,j)=>{
                    return func(num,i,j)
                })
            })

            return matrix
        }

        map(func){
            this.data = this.data.map((arr, i)=>{
                return arr.map((num,j)=>{
                    return func(num,i,j)
                })
            })

            return this
        }

        static add(A,B){
            var matrix = new Matrix(A.rows,B.cols);//cria a matriz
            matrix.map((num,i,j)=>{
                return A.data[i][j] + B.data[i][j];
            });
            
            return matrix;
        }

        static mutiply(A,B){
            var matrix = new Matrix(A.rows,B.cols)
            matrix.map((num,i,j)=>{
                let sum = 0;
                for (let k=0; k<A.cols; k++){
                    let elm1 = A.data[i][k];
                    let elm2 = B.data[k][j];
                    sum += elm1 * elm2;
                }
                return sum
            })
            return matrix
        }
}