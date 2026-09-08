import { jwtDecode } from "jwt-decode";

import { AuthContextData, dados, UsuarioPayload } from "../@types/autenticacao";
import { Usuario, UsuarioToken } from "../@types/Usuario";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { auth } from "../services/autenticacao";
import { router } from "expo-router";
import { createContext, useContext, useEffect, useState } from "react";

const AuthContext = createContext<AuthContextData>({} as AuthContextData)

export function decodificarToken(token: string) : UsuarioToken | null{
    try{
        const decoded = jwtDecode<UsuarioPayload>(token);
        console.log(decoded)
        return {
            id: decoded["http://schemas.xmlsoap.org/ws/2005/05/identity/claims/nameidentifier"],
            nome: decoded["http://schemas.xmlsoap.org/ws/2005/05/identity/claims/name"],
            email: decoded["http://schemas.xmlsoap.org/ws/2005/05/identity/claims/emailaddress"]
        }
    }catch{
        console.log("ferrou")
        return null
    }
    

}

export const AuthProvider: React.FC<{children: React.ReactNode}> = (({children}) => {
    const [usuario, setUsuario] = useState<UsuarioToken | null>(null)
    const [token, setToken] = useState<string | null>(null)
    const [loading, setLoading] = useState(true) // Indica se ainda está verificando o token ao abrir o app

    useEffect(() => {
        //then - então
        
        AsyncStorage.getItem(process.env.EXPO_PUBLIC_TOKEN_KEY).then((tokenSalvo)=> {
            if(tokenSalvo){
                setToken(tokenSalvo)
                setUsuario(decodificarToken(tokenSalvo))
            }
        })
        .finally(()=> setLoading(false))

    }, [])

    async function login(dado: dados){
        const resposta = await auth(dado);

        if(resposta.token){
            setToken(resposta.token)
            setUsuario(decodificarToken(resposta.token))
        }
    }

    async function logout(){
        //eu removo o token do asyncstorage
        await AsyncStorage.removeItem(process.env.EXPO_PUBLIC_TOKEN_KEY);
        //eu deixo null os estados atuais
        setToken(null);
        setUsuario(null);
        //eu volto para a tela login
        router.replace("/login");
    }

    return (
        <AuthContext.Provider value={{usuario, token, loading, login, logout}}>
            {children}
        </AuthContext.Provider>
    );

});

export function useAuth(){
    return useContext(AuthContext);
}