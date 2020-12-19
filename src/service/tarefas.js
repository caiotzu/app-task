import axios from 'axios'
import user from './user'

const basePath = "http://18.188.122.22:8001/tasks"

export function loadTasks() {
    return axios.get(`${basePath}/${user.id}`)
}

export function addTask(task) {
    return axios.post(basePath, {...task, userId: user.id })
}

export function removeTask(userId, taskId) {
    return axios.post(`${basePath}/${userId}/${taskId}`, {})
}
