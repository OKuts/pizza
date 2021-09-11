import {drawer, orderCount} from "../elements";
import {showOrderItem} from "./showOrderItem";
import {updateShowBasket} from "./updateShowBasket";
import {storage} from "../../../../modules/Storage";

const outRedactor = (num) => {
    if (!num) return '';
    let out = `(${num} наименовани`;
    if (num === 1 ) return out + 'е)';
    if (num > 4 ) return out + 'й)';
    return out + 'я)';
};

export const checkoutOrder = (basketOfGoods, orders, selectedRestaurant, restaurants ) => {
    let cost = 0;
    const delivery = Number(restaurants[selectedRestaurant].delivery);

    const showData = () => {
        drawer.querySelector('#subtitle').textContent = outRedactor(basketOfGoods.getNumberOfOrders());
        drawer.querySelector('#restaurant-name').textContent = restaurants[selectedRestaurant].name;
        cost = showOrderItem(basketOfGoods, orders, drawer.querySelector('.order'));
        drawer.querySelector('#delivery').lastChild.textContent =
            delivery ? delivery + ' грн' : 'Бесплатная доставка';
    };


    drawer.classList.add('visible');
    drawer.querySelectorAll('.close-order').forEach((item) => {
        item.addEventListener('click', () => {
            drawer.classList.remove('visible');
        });
    });

    showData();

    drawer.querySelector('.button__label').nextSibling.textContent = `(${cost + delivery} грн)`;

    drawer.querySelector('.order').addEventListener('click', function(event) {
            if (event.target.classList.contains('deleteFood')) {
                basketOfGoods.deleteFromOrder(event.target.dataset.id);
                showData();
                updateShowBasket(basketOfGoods, orderCount);
            }
    });

    drawer.querySelector('#checkout').addEventListener('click', () => {
        console.log(basketOfGoods.getOrderNames());
        storage.saveOrder('orders', {
            restaurant: restaurants[selectedRestaurant].name,
            checkout: new Date(),
            orders: basketOfGoods.getOrderNames().map((item) => {
                const arr = orders.filter(el => el.id == item);
                return {
                    id: Number(item),
                    price: arr[0].price,
                    title: arr[0].title,
                    count: basketOfGoods.getOrder(item),
                };
            }),
        });
        drawer.classList.remove('visible');
        basketOfGoods.cleanBasket();
        updateShowBasket(basketOfGoods, orderCount);
        document.location.href = './orders.html';
    });
};
