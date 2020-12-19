import React, { useState } from 'react'

import { View, Text, StatusBar, TextInput, TouchableOpacity, Alert, KeyboardAvoidingView } from 'react-native';
import { GlobalStyles } from './styles/GlobalStyles'
import { LoginStyles } from './LoginStyles'
import service from './service/login'

export default function Login({ navigation }) {
    const [credencial, setCredencial] = useState({ email:'', password: '' })
    const [access, setAccess] = useState(true)

    const field = (field) => {
        return (value) => {
            setCredencial({...credencial, [field]: value })
            let isEnable = (credencial.email != '' && credencial.password != '')
            setAccess(!isEnable)
        }
    }

    const doAuthenticate = async () => {
        let result = await service.authenticate(credencial)
        if (result === 'OK') {
            setCredencial({ email:'', password:'' })
            navigation.navigate('TaskList')
        } else {
            Alert.alert('Minhas Tarefas', result, [
                { text: 'OK' }
            ], { cancelable: true })
        }
    }

    return (
        <React.Fragment>
            <StatusBar barStyle="dark-content" />
            <View style={GlobalStyles.container}>
                <View style={LoginStyles.content}>
                    <KeyboardAvoidingView
                        style={LoginStyles.content}
                        enabled={false}
                        behavior="padding">
                        <TextInput placeholder="email" 
                            style={GlobalStyles.input}
                            value={credencial.email}
                            onChangeText={field('email')} />

                        <TextInput placeholder="senha" 
                            style={GlobalStyles.input}
                            secureTextEntry={true} 
                            value={credencial.password}
                            onChangeText={field('password')} />

                        <TouchableOpacity style={LoginStyles.btnAcessar}
                            disabled={access}
                            onPress={doAuthenticate}>
                            <Text style={LoginStyles.btnAcessarText}>Acessar</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={LoginStyles.btnRegistrar}
                            onPress={() => navigation.navigate('Registrar')}>
                            <Text style={LoginStyles.btnRegistrarText}>Registrar</Text>
                        </TouchableOpacity>
                    </KeyboardAvoidingView>
                </View>
            </View>
        </React.Fragment>
    )
}
