import axios from 'axios'
import user from './user'

const basePath = 'http://18.188.122.22:8001/users/auth'

const login = {

    authenticate: (credential) => {
        return axios.post(basePath, credential).then(response => {
            const result = response.data
            user.id = result.id
            user.name = result.name
            return 'OK'
        }).catch(err => {
            return 'Credenciais inválidas, verifique por favor.'
        })
    },

    logout: () => {
        user.id = ''
        user.name = ''
    }

}

export default login
