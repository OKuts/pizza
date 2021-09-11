const orderToHtml = (orders) => {
    let out = '';
    orders.forEach(item => {
        out += `
            <li class="previous-item-dishes__item">
                <span class="previous-item-dishes__quantity">
                    ${item.count}
                </span>
                ${item.title}
            </li>
        `;
    });
    return out;
};

export const showPrevious = (orders) => {
    let out = '';
    orders.forEach(item => {
        if (item.getCheckoutTime() >= 60)
            out += `
            <div class="previous__item previous-item">
              <div class="previous-item__header">
                <h4 class="h4">${item.getRestaurant()}</h4>
                <div class="badge badge--green">Выполнен</div>
              </div>
    
              <div class="previous-item-info">
                <div class="previous-item-info__date">${item.getFormatedDate()}</div>
                <div class="previous-item-info__time">${item.getFormatedTime()}</div>
              </div>
    
              <ul class="previous-item-dishes">${orderToHtml(item.getOrders())}</ul>
            </div>
            `;
    });
    return out;
};
