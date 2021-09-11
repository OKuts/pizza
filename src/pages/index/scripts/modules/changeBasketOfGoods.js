export const changeBasketOfGoods = ( element, orders, basketOfGoods) => {
    const order = Number(element.dataset.id);
    const orderCount = basketOfGoods.getOrder(order);
    const parent = element.parentElement;
    const increaseButton = parent.querySelector('.counter__button--decrease');
    const counterSpan = parent.querySelector('.counter__number');

    if (element.classList.contains('counter__button--increase')) {
        basketOfGoods.addToOrder(order);
        counterSpan.textContent = String(orderCount + 1);
        increaseButton.style.display = 'inherit';
    } else if (element.classList.contains('counter__button--decrease')) {
        if (orderCount) {
            basketOfGoods.decreaseOrder(order);
            counterSpan.textContent = String(orderCount - 1);
            if (!basketOfGoods.getOrder(order)) element.style.display = 'none';
        }
    }
};
