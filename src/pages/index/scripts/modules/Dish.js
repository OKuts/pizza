export class Dish {
    #count;

    constructor({id, price, title, img, count}) {

        this.id = id;
        this.price = price;
        this.title = title;
        this.img = img;
        this.#count = count;
    }

    setCount(count) {
        if (count < 0 || typeof count !== 'number') throw new Error();
        this.#count = count ;
    }

    getCount(count) {
        return this.#count;
    }
}
