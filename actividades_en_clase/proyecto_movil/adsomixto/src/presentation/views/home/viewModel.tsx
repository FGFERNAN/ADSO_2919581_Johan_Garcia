import React, { useState } from "react";
import { loginAuthCase } from "../../../domain/useCases/auth/Login.Auth";


const HomeViewModel = () => {
    const [errorMessage, setErrorMessage] = useState('');
    const [values, setValues] = useState({
        email: '',
        password: '',
    });

    const onChange = (property: string, value: any) => {
        setValues({...values,[property]: value});
    }
    const login = async () => {
        if(isValidForm()){
            const response = await loginAuthCase(values.email, values.password);
            console.log('Respuesta: ' + JSON.stringify(response));
            if(!response.success){
                setErrorMessage(response.message);
            }
        }
    };

    const isValidForm = () => {
        if(values.email === ''){
            setErrorMessage('El email es requerido');
            return false;
        }

        if(values.password === ''){
            setErrorMessage('La constraseña es requerida');
            return false;
        }
        return true;
    }

    return {
        ...values,
        onChange,
        login,
        errorMessage
    }
}

export default HomeViewModel;