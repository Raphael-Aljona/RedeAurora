import AsyncStorage from "@react-native-async-storage/async-storage";
import { api } from "./api";
import { dados, respostaLogin } from "../@types/autenticacao";

export async function auth(dados: dados) : Promise<respostaLogin>{
        const response = await api.post<respostaLogin>("/Autenticacao/login", dados)

        const Token = response.data.token

        if(Token)
        {
            await AsyncStorage.setItem(process.env.EXPO_PUBLIC_TOKEN_KEY, Token)
        }
        return response.data        
}