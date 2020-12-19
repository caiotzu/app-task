import { StyleSheet } from 'react-native'

export const LoginStyles = StyleSheet.create({
    titulo: {
        flex: 1,
        justifyContent: 'center'
    },
    tituloText: {
        fontSize: 25,
        fontWeight: 'bold',
        color: '#fff'
    },
    content: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        width: '90%',
        paddingBottom: 40
    },
    btnAcessar: {
        backgroundColor: '#047857',
        width: '95%',
        alignItems: 'center',
        padding: 10,
        marginTop: 10,
        borderRadius: 5
    },
    btnAcessarText: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#D1FAE5'
    },
    btnRegistrar: {
        marginTop: 5,
        width: '95%',
        alignItems: 'center',
    },
    btnRegistrarText: {
        fontSize: 14,
        fontWeight: '300',
        color: '#fff'
    }
})
