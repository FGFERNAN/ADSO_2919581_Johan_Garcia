import React, { useState } from 'react'
import { StyleSheet, Text, View, Image, TextInput, Button, ToastAndroid, Touchable, TouchableOpacity } from 'react-native';
import { RoundedButton } from '../../components/RoundedButton';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../../../../App';
import { useNavigation } from '@react-navigation/native';
import useViewModel from './viewModel';
import { CustomTextInput } from '../../components/CusatomTextInput';
import styles from './styles';

export const HomeScreen = () => {
    const { email, password, onChange } = useViewModel();

    const navigation =
        useNavigation<StackNavigationProp<RootStackParamList>>();
    return (
        <View style={styles.container}>
            <Image
                source={require('../../../../assets/chef.jpg')}
                style={styles.ImageBackground}
            />
            <View style={styles.logoContainer}>
                <Image
                    source={require('../../../../assets/logo.png')}
                    style={styles.logoImage}
                />
                <Text style={styles.logoText}>FOOD Nikole</Text>
            </View>

            <View style={styles.form}>
                <Text style={styles.formText}>Ingresar</Text>
                <CustomTextInput
                    image={require('../../../../assets/email.png')}
                    placeholder='Correo Electronico'
                    keyboardType='email-address'
                    property='email'
                    onChangeText={onChange}
                    value={email}
                />

                <CustomTextInput
                    image={require('../../../../assets/password.png')}
                    placeholder='Contraseña'
                    keyboardType='default'
                    property='password'
                    onChangeText={onChange}
                    value={password}
                    secureTextEntry={true}
                />

                <View style={{ marginTop: 30 }}>
                    <RoundedButton text='Entrar' onPress={() => {
                        console.log('Email: ' + email);
                        console.log('Password: ' + password);
                    }}>
                    </RoundedButton>
                </View>
                <View style={styles.formRegister}>
                    <Text>¿No tienes cuenta ?</Text>
                    <TouchableOpacity onPress={() => navigation.navigate('RegisterScreen')}>
                        <Text style={styles.formRegisterText}>Registrate</Text>
                        <Text style={styles.formRegisterText}></Text>
                    </TouchableOpacity>
                </View>
            </View >
        </View>

    );
}

