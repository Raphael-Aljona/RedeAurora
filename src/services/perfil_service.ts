import {api} from "./api";
import {Usuario} from "../@types/perfil";

export async function atualizarPerfil(usuario:Usuario, id:string){
    try{
       const response = await api.put(`/Usuario/${id}`, usuario)

        console.log(response.status);
    }catch(e){

    }
}