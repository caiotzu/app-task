import React, { useState, useEffect } from 'react'
import { View, Text, TouchableOpacity, FlatList } from 'react-native'
import styles from './TaskStyles'
import TaskItem from './TaskItem'
import { loadTasks, addTask, removeTask } from '../service/tarefas'
import user from '../service/user'

const SeparatorItem = () => (<View style={styles.separator}></View>)

const EmptyList = () => (
    <View>
        <Text>Você não possui tarefas no momento.</Text>
    </View>
)

export default function TaskList({ navigation, route }) {
    const [state, setState] = useState({ tasks:[], error: '' })
    const [removed, setRemoved] = useState(0)
    
    const params = route.params
    if (params) {
        route.params = null
        if (params.action == 'CREATE') {
            addTask(params.data).then(resp => {
                const newTask = {...params.data, id: resp.data }
                const _tasks = [...state.tasks, newTask]
                setState({ ...state, tasks: _tasks })
            }).catch(err => console.log(err.message))
        }
    }

    useEffect(() => {
        loadTasks()
            .then(resp => setState({ tasks: resp.data, error: '' }))
            .catch(err => setState({ tasks:[], error: err.message }))
    }, [removed])

    // remove item da lista e notifica mudanca na lista
    const delAction = (id) => {
        return () => {
            removeTask(user.id, id).then(resp => setRemoved(removed + 1))
                .catch(err => console.log('Error:', err.message))
        }
    }

    const child = (state.tasks < 1) ? <EmptyList /> : <FlatList 
        data={state.tasks}
        keyExtractor={item => item.id}
        renderItem={ ({ item }) => <TaskItem data={item} delAction={delAction(item.id)} />}
        ItemSeparatorComponent={() => <SeparatorItem />}
        />

    return child
}
