import { Usuario } from "../@types/Usuario";
import { api } from "./api";


  export async function  BuscandoUsuarioEmail(email : string): Promise<Usuario>{
    const response = await api.get<Usuario>(`/Usuario/email/${email}`);
    return response.data;
  }
