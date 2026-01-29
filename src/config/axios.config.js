import axios from "axios"


console.log("Backend base url : ",import.meta.env.VITE_BACKEND_BASE_URL)
const axiosInstance = axios.create({
    baseURL : import.meta.env.VITE_BACKEND_BASE_URL,
})

export default axiosInstance;