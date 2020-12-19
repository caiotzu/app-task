import axios from 'axios'

const basePath = "http://18.188.122.22:8001/users"

const register = {
    create: (data) => {
        console.log('irá chamra a API', data);
        const user = {
            name: data.name,
            email: data.email,
            password: data.password
        }

        return axios.post(basePath, user).then(response => {
            return 'OK'
        }).catch(err => {
            return 'error'
        })
    }
}

export default register
