export const updateShowBasket = (basketOfGoods, element) => {
    element.textContent = basketOfGoods.getNumberOfOrders();
};
