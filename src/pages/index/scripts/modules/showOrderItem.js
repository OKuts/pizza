export const showOrderItem = (basketOfGoods, orders, parent) => {
    let out = '';
    let cost = 0;
    for (const key of basketOfGoods.getOrderNames()) {
        const { price, title, img } = orders[key-1];
        const count = basketOfGoods.getOrder(key);
        cost += count * price;
        out += `
            <div class="order__item order-item">
                <img class="order-item__image" src=${img} alt=""/>
                <span class="order-item__quantity">${count} X</span>
                <div class="order-item__info">
                    <h3 class="order-item__title h3">${title}</h3>
                    <div class="order-item__price">${price} грн</div>
                </div>
                <button class="deleteFood icon-button icon-button--red" data-id=${key}>
                    <img class="deleteFood" data-id=${key} src="img/icons/delete.svg" alt="">
                </button>
            </div>`;
    };
    parent.innerHTML = out;
    return cost;
};
