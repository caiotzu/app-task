import React, { useState } from 'react'
import { StyleSheet, View, Text, TextInput, TouchableOpacity, Alert } from 'react-native'
import { GlobalStyles } from './styles/GlobalStyles'
import service from './service/register';

export default function Registrar({ navigation }) {
    const [data, setData] = useState({ name: '', email: '', password: '', confirmPassword: '' })

    const field = (field) => {
        return (value) => setData({...data, [field]: value })
    }

    const registerUser = async () => {
        if(data.name == '' || data.email == '' || data.password == '' || data.confirmPassword == '')
            return Alert.alert('Erro', 'Todos os campos devem ser preenchidos para o cadastro de usuário')   
            
        if(data.password != data.confirmPassword)
            return Alert.alert('Erro', 'A senha e a confirmação da senha são divergentes')   

        
        let result = await service.create(data)

        if (result === 'OK') {
            setData({ name: '', email: '', password: '', confirmPassword: '' })
            Alert.alert('Sucesso', 'Usuário cadastrado com sucesso')
            navigation.navigate('Login')
        } else {
            Alert.alert('Erro', 'Não foi possível cadastrar o usuário')
        }
    }

    return (
        <React.Fragment>
            <View style={GlobalStyles.container}>
                {/* <Text style={styles.tituloText}>Registre-se</Text> */}

                <TextInput placeholder="Nome" 
                    style={GlobalStyles.input}
                    onChangeText={field('name')} />

                <TextInput placeholder="E-mail"
                    style={GlobalStyles.input} keyboardType="email-address"
                    onChangeText={field('email')} />

                <TextInput placeholder="Senha" 
                    style={GlobalStyles.input} secureTextEntry={true} 
                    onChangeText={field('password')}/>

                <TextInput placeholder="Confirmar senha"
                    style={GlobalStyles.input} secureTextEntry={true}
                    onChangeText={field('confirmPassword')} />

                <TouchableOpacity style={styles.btnRegistrar} onPress={registerUser}>
                    <Text style={styles.btnRegistrarText}>Registrar</Text>
                </TouchableOpacity>

                {/* <View style={styles.buttons}>
                    <TouchableOpacity style={styles.btnCancelar} onPress={() => navigation.goBack()}>
                        <Text style={styles.btnCancelarText}>Cancelar</Text>
                    </TouchableOpacity>
                </View> */}
            </View>
        </React.Fragment>
    )
}

const styles = StyleSheet.create({
    tituloText: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#fff',
        padding: 20
    },
    // buttons: {
    //     marginTop: 15
    // },
    btnRegistrar: {
        backgroundColor: '#059669',
        width: '90%',
        alignItems: 'center',
        padding: 10,
        marginTop: 20,
        borderRadius: 5
    },
    btnRegistrarText: {
        fontSize: 14,
        fontWeight: '500',
        color: '#D1FAE5'
    },
    // btnCancelar: {
    //     backgroundColor: '#059669',
    //     width: '40%',
    //     alignItems: 'center',
    //     padding: 10,
    //     marginTop: 10,
    //     borderRadius: 5
    // },
    // btnCancelarText: {
    //     fontSize: 14,
    //     fontWeight: '500',
    //     color: '#D1FAE5'
    // }
})
