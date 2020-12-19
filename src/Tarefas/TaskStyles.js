import { StyleSheet } from "react-native"

const styles = StyleSheet.create({
    separator: {
        borderBottomWidth: 1,
        borderColor: '#dedede'
    },
    item: {
        padding: 10
    },
    itemTextHeader: {
        fontWeight: 'bold',
        color: '#065F46'
    },
    itemTextHeaderDone: {
        color: '#9CA3AF',
    },
    itemDescription: {
        color: '#4B5563'
    },
    itemDescriptionDone: {
        textDecorationLine: 'line-through',
        color: '#9CA3AF'
    },
    btnAdd: {
        borderRadius: 25,
        marginRight: 10,
        padding: 10,
        textAlign: 'center',
        backgroundColor: '#fee'
    },
    btnAddText: {
        fontSize: 12,
        fontWeight: 'bold',
        color: '#065F46'
    },
    btnRemove: {
        backgroundColor: 'red',
        paddingTop: 10,
        paddingBottom: 10
    },
    btnRemoveText: {
        color: '#fff',
        fontSize: 12,
        padding: 10
    }
})

export default styles
