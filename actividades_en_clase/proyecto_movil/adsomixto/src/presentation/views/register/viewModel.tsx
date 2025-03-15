import React, { useState } from 'react'
import { ApiDelivery } from '../../../data/source/remote/api/ApiDelivery';
import { RegisterAuthUseCase } from '../../../domain/useCases/auth/RegisterAuth';

const RegisterViewModel = () => {
  const [errorMessage, setErrorMessage] = useState('');
    const [values, setValues] = useState({
        name: '',
        lastname: '',
        phone: '',
        email: '',
        password: '',
        confirmPassword: '',
    });
    const onChange = (property: string, value: any) => {
        setValues({...values, [property]:(value)});
    }
    const register = async () => {
       try{
        if(!isValidForm()){
        const  response  = await RegisterAuthUseCase(values);
        console.log('Result ' + JSON.stringify(response));
        }
       
       } catch (error){
        console.log('Error ' + error);
       }
    }
    const isValidForm = () : boolean => {
      if(values.name === ''){
        setErrorMessage('El nombre es requerido');
        return false;
      }

      if(values.lastname === ''){
        setErrorMessage('El apellido es requerido');
        return false;
      }
      if(values.email === ''){
        setErrorMessage('El email es requerido');
        return false;
      }
      if(values.phone === ''){
        setErrorMessage('El numero de telefono es requerido');
        return false;
      }
      if(values.password === ''){
        setErrorMessage('La contraseña es requerida');
        return false;
      }
      if(values.confirmPassword === ''){
        setErrorMessage('La confirmación de contraseña es requerida');
        return false;
      }
      if(values.password !== values.confirmPassword){
        setErrorMessage('La contraseñas no coinciden');
        return false;
      }
      return true;
    }
  return {
    ...values,
    onChange,
    register,
    errorMessage
  }

}

export default RegisterViewModel;