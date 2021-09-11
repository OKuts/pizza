export class Checkout {
    #orders;
    #checkoutTime;
    #restaurant;

    constructor(orders, checkoutTime, restaurant) {
        this.#orders = orders;
        this.#checkoutTime = checkoutTime;
        this.#restaurant = restaurant;
        this.isOrderFinished = () => (new Date() - new Date(this.#checkoutTime)) > 3600000 ;
    }

    getRestaurant(){
        return this.#restaurant;
    }

    getCheckoutTime(){
        return Math.ceil((new Date() - new Date(this.#checkoutTime))/60000);
    }

    getFormatedTime(){
        const options = { hour: '2-digit', minute: '2-digit' };
        const time = new Date(this.#checkoutTime).toLocaleTimeString('ru-RU', options);
        const m = Number(time.slice(0,2)) > 12 ? 'PM' : 'AM';
        return `${time} ${m}`;
    }

    getFormatedDate(){
        const options = { day: 'numeric',month: 'long', year: 'numeric' };
        const date = new Date(this.#checkoutTime).toLocaleDateString('ru-RU', options);
        return date.slice(0,-2);
    }

    getOrders() {
        return this.#orders;
    }

    getCheckoutTimePercent() {
        return (new Date() - new Date(this.#checkoutTime)) > 3600000
            ? 0
            : `${100 - (new Date() - new Date(this.#checkoutTime))/ 36000}%`;
    }
}
