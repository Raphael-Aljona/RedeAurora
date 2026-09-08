import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";

const apiLocal = "http://26.225.29.30:5263/api"

export const api = axios.create({
    baseURL: apiLocal,
})


api.interceptors.request.use(async (config) => {
    const token = await AsyncStorage.getItem(process.env.EXPO_PUBLIC_TOKEN_KEY);

    if (token) {
        //configura o baerer se o token existir
        config.headers.Authorization = "Bearer " + token;
    }
    return config;
})