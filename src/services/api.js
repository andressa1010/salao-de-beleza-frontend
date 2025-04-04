import axios from "axios"


const api = axios.create({
    baseURL:"https://salao-de-beleza-api.onrender.com"
})

export default api