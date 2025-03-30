import axios from "axios";

const ApiDelivery = axios.create({
    baseURL: 'http://192.168.80.15:3000/api',
    headers: {
        'Content-Type': 'application/json'
    }
});

export const getProduct = async () => {
    const response = await ApiDelivery.get('/products');
    return response.data;
};

export const getProductById = async (id) => {
    const response = await ApiDelivery.get(`/products/${id}`);
    return response.data;
};

export const createProduct = async (product) => {
    const response = await ApiDelivery.post('/products/create', product);
    return response.data;
};

export const updateProduct = async (id, product) => {
    const response = await ApiDelivery.put(`/products/update/${id}`, product);
    return response.data;
};

export const deleteProduct = async (id) => {
    const response = await ApiDelivery.delete(`/products/${id}`);
    return response.data;
};
export {ApiDelivery};