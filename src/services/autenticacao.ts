import { api } from "./api";

export async function auth(email:string, senha:string){
    try{
        const response = await api.post("/Autenticacao/login", {
            "email": email,
            "senha": senha
        })

        console.log(response.status)
    }catch(e){

    }
}