import axios from "axios";

const apiLocal = "http://172.16.24.37:5263/api"

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