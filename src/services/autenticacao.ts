import { api } from "./api";

export async function auth(email:string, senha:string){
    try{
        await api.post("/Autenticacao/login", {
            "email": email,
            "senha": senha
        })
    }catch(e){

    }
}