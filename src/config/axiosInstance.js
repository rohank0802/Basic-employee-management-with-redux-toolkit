import axios from 'axios'
const api=axios.create({
    baseURL:'https://695242c93b3c518fca11fd10.mockapi.io/',
    timeout:5000,
    headers:{
        'content-type':'application/json'
    }
})
export default api