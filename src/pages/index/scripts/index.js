import '../../../styles/index.scss';
import restaurants from './data/restaurants.json';
import {
    Basket, setSelectRestaurant, showCarts, changeBasketOfGoods, updateShowBasket, checkoutOrder, showRestaurants
} from './modules';

import {cartsContent, orderCount, orderBasket, featured} from "./elements";

const initPage = () => {
    featured.innerHTML = showRestaurants(restaurants);
    const restaurantItems = document.querySelectorAll('.featured-item');
    const basketOfGoods = new Basket();
    let orders = setSelectRestaurant(0, restaurantItems);
    let selectedRestaurant = 0;
    showCarts(orders, cartsContent);

    restaurantItems.forEach(function (item, index) {
        item.dataset.num = index.toString();
        item.addEventListener('click', function(event) {
            const newSelectedRestaurant = Number(this.dataset.num);
            if (selectedRestaurant !== newSelectedRestaurant) {
                orders = setSelectRestaurant(Number(this.dataset.num), restaurantItems);
                basketOfGoods.cleanBasket();
                showCarts(orders, cartsContent);
                selectedRestaurant = newSelectedRestaurant;
                basketOfGoods.cleanBasket();
                updateShowBasket(basketOfGoods, orderCount);
            }

        });
    });

    cartsContent.addEventListener('click', function(event) {
        changeBasketOfGoods(event.target, orders, basketOfGoods);
        updateShowBasket(basketOfGoods, orderCount);
    });

    orderBasket.addEventListener('click', function(event)  {
        if (basketOfGoods.getNumberOfOrders()) checkoutOrder(basketOfGoods, orders, selectedRestaurant, restaurants );
    });

};

initPage();

