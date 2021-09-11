import {Checkout} from "./";
import {storage} from "../../../../modules/Storage";
import {isValid} from "../../../../modules/isValid";

export const openSavedOrders = () => {
    const storageData = storage.getOrders('orders');
    const validData = storageData.filter(item => isValid(item));

    return validData.map(item => new Checkout(item.orders, item.checkout, item.restaurant));
};
