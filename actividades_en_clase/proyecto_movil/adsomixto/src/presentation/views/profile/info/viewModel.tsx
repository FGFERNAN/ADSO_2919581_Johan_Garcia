import React from 'react'
import { useState, useEffect } from 'react';
import { getProduct, createProduct, updateProduct, deleteProduct, getProductById } from '../../../../data/source/remote/api/ApiDelivery';
import { RemoveUserLocalUseCase } from "../../../../domain/useCases/userLocal/removeUserLocal";

interface Product {
    id: number;
    name: string;
    price: number;
}

const ProfileInfoViewModel = () => {
    const [products, setProducts] = useState<Product[]>([]);
    const [name, setName] = useState('');
    const [price, setPrice] = useState('');
    const [searchId, setSearchId] = useState('')
    const [selectedProductId, setSelectedProductId] = useState<number | null>(null);
    const [isModalVisible, setModalVisible] = useState(false);
    const [searchedProduct, setSearchedProduct] = useState<Product | null>(null);

    useEffect(() => {
        fetchProducts();;
    }, []);

    const fetchProducts = async () => {
        const data = await getProduct();
        setProducts(data);
    };

    const handleAddProduct = async () => {
        const newProduct = await createProduct({ name, price });
        setProducts([...products, newProduct]);
        setName('');
        setPrice('');
    };

    const handleUpdateProduct = async () => {
        if (selectedProductId !== null) {
            const updatedProduct = await updateProduct(selectedProductId, { name, price });
            setProducts(products.map(product => product.id === selectedProductId ? updatedProduct : product));
            setSelectedProductId(null);
            setName('');
            setPrice('');
        }
    };
    

    const handleDeleteProduct = async (id: number) => {
        await deleteProduct(id);
        setProducts(products.filter(product => product.id !== id));
    };

    const handleSearchProduct = async () => {
        const product = await getProductById(parseInt(searchId));
        setSearchedProduct(product);
    };

    const toggleModal = () => {
        setModalVisible(!isModalVisible);
    };
    
    const removeSession = async () => {
        await RemoveUserLocalUseCase();
    }
    return {
        products,
        name,
        price,
        searchId,
        selectedProductId,
        isModalVisible,
        searchedProduct,
        setName,
        setPrice,
        setSearchId,
        setSelectedProductId,
        toggleModal,
        handleAddProduct,
        handleUpdateProduct,
        handleDeleteProduct,
        handleSearchProduct,
        removeSession
    }
}


export default ProfileInfoViewModel;
