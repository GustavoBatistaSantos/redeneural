function sigmoid(x){
    return 1/(1+Math.exp(-x)) 
}

class RedeNeural{
    constructor(i_nodes, h_nodes, o_nodes){
        this.i_nodes = i_nodes;
        this.h_nodes = h_nodes;
        this.o_nodes = o_nodes;

        this.bias_ih = new Matrix(this.h_nodes,1)
        this.bias_ih.ramdomize()
        this.bias_ho = new Matrix(this.o_nodes,1)
        this.bias_ho.ramdomize()

        this.weights_ih = new Matrix(this.h_nodes, this.i_nodes)
        this.weights_ih.ramdomize()

        this.weights_ho = new Matrix(this.o_nodes, this.h_nodes)
        this.weights_ho.ramdomize()

        this.weights_ho.print()
        this.weights_ih.print()
    }

    feedfoward(input){
        let input= Matrix.arrayToMatrix(input)
        let hidden = Matrix.mutiply(this.weights_ih,input)
        hidden= Matrix.add(hidden,this.bias_ih)

        hidden.map(sigmoid)

        let output = Matrix.mutiply(this.weights_ho,hidden)
        output= Matrix.add(output,this.bias_ho)
        output.map(sigmoid)

        output.print()
    }
}