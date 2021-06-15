export class Invoice {

    constructor(
        readonly client: string,
        private details: string,
        public amount: number
    ) { }

    format() {
        return `${this.client} deve ${this.amount} de ${this.details}`
    }

}