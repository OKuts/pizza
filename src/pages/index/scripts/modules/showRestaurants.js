export const showRestaurants = (restaurants) => {
    let out = '';
    restaurants.forEach(item => {
        out += `
          <a href="#" class="featured__item featured-item">
            <img class="featured-item__img" src=${item.src} alt="Domino’s Pizza">
            <div class="featured-item__info">
              <h4 class="h4">${item.name}</h4>

              <div class="featured-info__block">
                <span class="featured-info__icon-item featured-info__icon-item--rate">
                  <span class="featured-info__average">${item.star}</span>(${item.vote})
                </span>
                <span class=" featured-info__icon-item featured-info__icon-item--category">${item.menu}</span>
                <span class="featured-info__icon-item featured-info__icon-item--money">$</span>
              </div>

              <div class="featured-info__block">
                <span class="badge badge--orange">
                    ${+item.delivery ? item.delivery + ' грн' : 'Бесплатная доставка'}
                </span>
                <span class="featured-info__icon-item featured-info__icon-item--distance">${item.distance} км</span>
              </div>
            </div>
          </a>
        `;
    });
    return out;
};
