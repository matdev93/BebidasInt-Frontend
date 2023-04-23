import axios from 'axios'

const axiosClient = axios.create({
    baseURL: "https://bebidasint-backend.onrender.com"
})

export default axiosClient;