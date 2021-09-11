import {addElement} from "./index";

export const showCarts = (carts, parent) => {
    let cartsHTML = '';
    carts.forEach((item, index) => {
        const {price, title, img} = item;
        cartsHTML += `
            <div class="dish">
                <img class="dish__image" src=${img} alt=""/>
                    <div class="dish__title">${title}</div>
                    <div class="dish__info">
                        <div class="dish__price">${price}</div>
                        <div class="counter">
                            <button style="display: none;" data-id=${index + 1} class="counter__button counter__button--decrease"></button>
                            <span class="counter__number">0</span>
                            <button data-id=${index + 1} class="counter__button counter__button--increase"></button>
                        </div>
                    </div>
            </div>`;
    });
    parent.innerHTML = cartsHTML;
};
