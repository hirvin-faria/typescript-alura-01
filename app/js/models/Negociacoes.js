class Negociacoes {
    constructor() {
        // private _negociacoes: Array<Negociacao> = [];
        this._negociacoes = [];
    }
    adiciona(negociacao) {
        this._negociacoes.push(negociacao);
    }
    paraArray() {
        // Retorna uma cópia do array, ao inves de uma referencia para o objetos
        // Isso impede que o array possa ser alterado fora da classe Negociacoes
        return [].concat(this._negociacoes);
    }
}
