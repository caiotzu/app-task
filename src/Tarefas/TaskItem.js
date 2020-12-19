import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import Swipeable from 'react-native-gesture-handler/Swipeable'
import styles from './TaskStyles'

function DelButton({ onDelete }) {
    return (
        <TouchableOpacity style={styles.btnRemove} onPress={onDelete}>
            <Text style={styles.btnRemoveText}>Remover</Text>
        </TouchableOpacity>
    )
}

export default function TaskItem({ data, delAction }) {
    const doneHStyle = data.done ? styles.itemTextHeaderDone : styles.itemTextHeader
    const doneStyle = data.done ? styles.itemDescriptionDone : styles.itemDescription
    return (
        <Swipeable renderRightActions={() => (<DelButton onDelete={delAction} />) }>
            <View style={styles.item}>
                <Text style={doneHStyle}>{data.title}</Text>
                <Text style={doneStyle}>{data.description}</Text>
            </View>
        </Swipeable>
    )
}
