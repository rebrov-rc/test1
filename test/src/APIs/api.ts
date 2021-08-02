import axios from 'axios'
import { orderObject } from '../Types/types';

const getOrders = 'https://u38027.netangels.ru/api/orders.php';

export const getOrderAPI  = async()  => {
    try {
        return await axios.get<orderObject[]>(getOrders)
                .then(responce => responce.data)
                .catch(err => console.log(err));
    } catch (err) {
        console.log(err);
        
    }
}