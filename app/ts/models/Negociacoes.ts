class Negociacoes {

    // private _negociacoes: Array<Negociacao> = [];
    private _negociacoes: Negociacao[] = [];

    adiciona(negociacao: Negociacao): void{
        
        this._negociacoes.push(negociacao);
    }

    paraArray(): Negociacao[] {
        // Retorna uma cópia do array, ao inves de uma referencia para o objetos
        // Isso impede que o array possa ser alterado fora da classe Negociacoes
        return [].concat(this._negociacoes);
    }
}