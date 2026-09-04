import { Usuario } from "../@types/Usuario";
import { api } from "./api";


  export async function  BuscandoUsuarios(){
    const response = await api.get<Usuario[]>("");
    return response.data;
  }
