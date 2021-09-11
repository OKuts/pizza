import {isValid} from "./isValid";

class Storage {
    getOrders(key){
        const data = localStorage.getItem(key);

        return data ? JSON.parse(data) : [];
    }

    saveOrder(key, value){
        if (typeof key === 'string' && key.length && isValid(value)){
            localStorage.setItem('orders', JSON.stringify([...this.getOrders(key), value]));
        };
    };
};

export const storage = new Storage();
