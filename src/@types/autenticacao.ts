import { Usuario, UsuarioToken } from "./Usuario";

export interface dados{
    email: string
    senha: string
}

export interface respostaLogin{
    token: string
}

export interface UsuarioPayload{
    "http://schemas.xmlsoap.org/ws/2005/05/identity/claims/nameidentifier": string,
    "http://schemas.xmlsoap.org/ws/2005/05/identity/claims/name": string,
    "http://schemas.xmlsoap.org/ws/2005/05/identity/claims/emailaddress": string,
    "exp": number,
    "iss": string,
    "aud": string
}

//contrato da nossa context
export interface AuthContextData{
    usuario: UsuarioToken | null; // O usuário logado ou null se estiver deslogado
    token: string | null;    // O token JWT ou null
    loading: boolean;        // Se ainda está carregando o token do armazenamento
    login: (dados: dados) => Promise<void>; // Função para logar
    logout: () => Promise<void>;            // Função para deslogar
}