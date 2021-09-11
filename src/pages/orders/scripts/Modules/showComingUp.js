export const showComingUp = (orders) => {
    let out = '';
    orders.forEach(item => {
        if (item.getCheckoutTime() < 60)
            out += `
                <div class="coming-up__item coming-up-item">
                  <div class="coming-up-item__header">
                    <h4 class="h4">${item.getRestaurant()}</h4>
                    <div class="badge badge--orange">Доставка</div>
                  </div>
        
                  <div class="coming-up-info">
                    <img src="img/icons/clock.svg" alt="">
                    <div class="coming-up-info__content">
                      <div>Заказ будет доставлен через</div>
                      <div class="coming-up-info__title">${60 - item.getCheckoutTime()} мин</div>
                    </div>
                  </div>
        
                  <div class="progress-bar">
                    <div class="progress-bar__line" style="width: ${item.getCheckoutTimePercent()}"></div>
                    <div class="progress-bar__overlay">
                      <div class="progress-bar__item progress-bar__item--first"></div>
                      <div class="progress-bar__item progress-bar__item--sec"></div>
                      <div class="progress-bar__item progress-bar__item--third"></div>
                    </div>
                  </div>
                </div>
            `;
    });
    return out;
};

