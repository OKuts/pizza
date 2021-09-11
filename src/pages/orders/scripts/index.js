import '../../../styles/index.scss';
import { Storage} from "../../../modules/Storage";
import {openSavedOrders, showComingUp, showPrevious} from './Modules';




const initOrdersPage = () => {
    const comingUp = document.querySelector('.coming-up');
    const previous = document.querySelector('.previous');

    const orders = openSavedOrders();
    comingUp.innerHTML = showComingUp(orders);
    previous.innerHTML = showPrevious(orders);
};

initOrdersPage();
