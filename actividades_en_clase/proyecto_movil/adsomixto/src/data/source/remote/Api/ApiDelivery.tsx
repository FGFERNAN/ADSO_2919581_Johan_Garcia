import axios from "axios";

const ApiDelivery = axios.create({
    baseURL: 'http://10.1.193.163:3000/api',
    headers: {
        'Content-Type': 'application/json'
    }
});
export {ApiDelivery};