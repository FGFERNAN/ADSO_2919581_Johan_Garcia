import { StackScreenProps } from "@react-navigation/stack";
import React from "react";
import { View, Text, FlatList, Button, TextInput, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { RootStackParamList } from "../../../../../App";
import useViewModel from './viewModel';
import Modal from 'react-native-modal';
import styles from "./styles";

interface Props extends StackScreenProps<RootStackParamList, 'ProfileInfoScreen'> { };

export const ProfileInfoScreen = ({ navigation, route }: Props) => {
    const {
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
    } = useViewModel();
    return (
        <View style={styles.container}>
            <View style={styles.buttonContainer}>
                <TouchableOpacity style={styles.buttonClose}
                    onPress={() => {
                        removeSession();
                        navigation.navigate('HomeScreen');
                    }}>
                    <Text style={styles.buttonText}>Cerrar Sesión</Text>
                </TouchableOpacity>
            </View>
                <Text style={styles.title}>Productos</Text>
                <FlatList
                    data={products}
                    keyExtractor={(item) => item.id.toString()}
                    renderItem={({ item }) => (
                        <View style={styles.productContainer}>
                            <Text style={styles.productText}>{item.name} - ${item.price}</Text>
                            <View style={styles.buttonContainer}>
                                <TouchableOpacity style={styles.button} onPress={() => {
                                    setName(item.name);
                                    setPrice(item.price.toString());
                                    setSelectedProductId(item.id);
                                }}>
                                    <Text style={styles.buttonText}>Modificar</Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={styles.buttonDelete} onPress={() => handleDeleteProduct(item.id)}>
                                    <Text style={styles.buttonText}>Eliminar</Text>
                                </TouchableOpacity>

                            </View>
                        </View>
                    )}
                />
            <TextInput
                style={styles.input}
                placeholder="Nombre"
                value={name}
                onChangeText={setName}
            />
            <TextInput
                style={styles.input}
                placeholder="Precio"
                value={price}
                onChangeText={setPrice}
                keyboardType="numeric"
            />
            <TouchableOpacity style={styles.addButton} onPress={selectedProductId ? handleUpdateProduct : handleAddProduct}>
                <Text style={styles.addButtonText}>{selectedProductId ? "Modificar Producto" : "Crear Producto"}</Text>
            </TouchableOpacity>
            <TextInput
                style={styles.input}
                placeholder="Numero de ID"
                value={searchId}
                onChangeText={setSearchId}
                keyboardType="numeric"
            />
            <TouchableOpacity style={styles.searchButton} onPress={handleSearchProduct}>
                <Text style={styles.searchButtonText}>Buscar Producto</Text>
            </TouchableOpacity>
            {searchedProduct && (
                <View style={styles.productContainer}>
                    <Text style={styles.productText}> Producto Buscado: {searchedProduct.name} - ${searchedProduct.price}</Text>
                </View>
            )}
            <TouchableOpacity style={styles.reportButton} onPress={toggleModal}>
                <Text style={styles.reportButtonText}>Generar Reporte</Text>
            </TouchableOpacity>
            <Modal isVisible={isModalVisible}>
                <View style={styles.modalContent}>
                    <Text style={styles.modalTitle}>Reporte de Productos</Text>
                    {products.map(product => (
                        <Text key={product.id} style={styles.modalText}>{product.name} - ${product.price}</Text>
                    ))}
                    <TouchableOpacity onPress={toggleModal} style={styles.closeButton}>
                        <Text style={styles.closeButtonText}>Cerrar</Text>
                    </TouchableOpacity>
                </View>
            </Modal>
        </View>
    )
};
export default ProfileInfoScreen;