import {api} from "./api";

interface Usuario{
    "nome": string,
    "email": string,
    "senha": string
}

export async function atualizarPerfil(usuario:Usuario, id:string){
    try{
       const response = await api.put(`/Usuario/${id}`, usuario)

        console.log(response.status);
    }catch(e){

    }
}