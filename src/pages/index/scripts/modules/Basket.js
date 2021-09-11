export class Basket {
    #order = {};

    getOrder(nomination) {
        return this.#order[nomination] ? this.#order[nomination] : 0;
    }

    addToOrder(nomination) {
        this.#order[nomination] = this.getOrder(nomination) + 1;

    }

    decreaseOrder(nomination) {
        if (this.#order[nomination]) this.#order[nomination] = this.getOrder(nomination) - 1;
        if (this.getOrder(nomination) === 0) delete this.#order[nomination];
    }

    getOrderNames() {
        // console.log(Object.getOwnPropertyNames(this.#order).length);
        return Object.getOwnPropertyNames(this.#order) ? Object.getOwnPropertyNames(this.#order) : [];
    }

    getNumberOfOrders(){
        return this.getOrderNames().length ? this.getOrderNames().length : 0;
    }

    deleteFromOrder(nomination){
        delete this.#order[nomination];
    }
    cleanBasket(){
        this.#order = {};
    }
};
