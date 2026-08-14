import axios from "axios";

const apiLocal = "https://localhost:7128/api"

export const api = axios.create({
    baseURL: apiLocal,
})

// api.interceptors.request.use((config)=> {
//     const token = secureLocalStorage.getItem("token")
//
//     if(token){
//         config.headers.Authorization = `Bearer ${token}`
//     }
//
//     return config;
// })