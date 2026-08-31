import axios from "axios";

const apiLocal = "http://172.16.24.27:5263/api"

export const api = axios.create({
    baseURL: apiLocal,
})
