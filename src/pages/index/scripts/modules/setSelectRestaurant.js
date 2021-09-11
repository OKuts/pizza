import {cartsContent} from '../elements';
import dominosArray from '../data/dominos.json';
import kfcArray from '../data/kfc.json';
import macArray from '../data/mac.json';
import {Dish} from "./Dish";


export const setSelectRestaurant = (selectedRestaurant, restaurantItems) => {
    restaurantItems.forEach((item, index) =>
        index === selectedRestaurant
            ? item.classList.add('active')
            : item.classList.contains('active') && item.classList.remove('active'));
    let actualMenu = [];

    switch (selectedRestaurant) {
        case 0: actualMenu = [...dominosArray];
            break;
        case 1: actualMenu = [...macArray];
            break;
        case 2: actualMenu = [...kfcArray];
            break;
    }

    return actualMenu.map((item)=> new Dish(item));
};
