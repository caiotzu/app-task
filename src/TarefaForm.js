import React, { useState } from 'react'
import { StyleSheet, View, Text, TextInput, TouchableOpacity, KeyboardAvoidingView, Dimensions } from 'react-native'
import CheckBox from '@react-native-community/checkbox'
import { GlobalStyles } from './styles/GlobalStyles'

export default function TarefaForm({ navigation }) {
    const [data, setData] = useState({ title: '', description: '', done: false })

    const field = (field) => {
        return (value) => setData({...data, [field]: value })
    }

    const addTask = () => {
        if (data.title == '' || data.description == '') {
            return
        }

        navigation.navigate('Tarefas', { data, action: 'CREATE' })
        setData({ id: '', title: '', description: '', done: false })
    }

    return (
        <React.Fragment>
            <KeyboardAvoidingView style={styles.container}
                enabled={false}
                behavior="padding">
                <TextInput placeholder="tarefa" 
                    style={GlobalStyles.input} 
                    onChangeText={field('title')}
                    value={data.title} />

                <TextInput placeholder="descricao" 
                    style={GlobalStyles.input} 
                    multiline={true} numberOfLines={2}
                    maxLength={200}
                    onChangeText={field('description')}
                    value={data.description} />

                <View style={styles.checkBox}>
                    <CheckBox value={data.done} style={styles.checkbox}
                        onValueChange={field('done')} />
                    <Text style={styles.label}>Finalizada ?</Text>
                </View>

                <TouchableOpacity style={[ GlobalStyles.btnDefault, styles.button ]}
                    onPress={addTask}>
                    <Text style={GlobalStyles.btnDefaultText}>Salvar</Text>
                </TouchableOpacity>
            </KeyboardAvoidingView>
        </React.Fragment>
    )
}

const height = Dimensions.get("window").height

const styles = StyleSheet.create({
    container: {
        height: height,
        paddingTop: 10,
        paddingLeft: 15,
        backgroundColor: '#34D399'
    },
    checkBox: {
        flexDirection: 'row',
        marginTop: 15
    },
    button: {
        width: '95%'
    },
    checkbox: {
       alignSelf: 'center'
    },
    label: {
        margin: 8
    }
})