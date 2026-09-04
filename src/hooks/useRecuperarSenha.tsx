import { useEffect, useState } from "react";
import { Usuario } from "../@types/Usuario";
import { BuscandoUsuarios } from "../services/Recuperar_senha";


export function useRecuperarSenha() {
  const [usuarios, setUsuarios] = useState<Usuario[]>([]);

  async function getUsuario() {
    const dados = await BuscandoUsuarios();
    setUsuarios(dados);
    useEffect(() => {
      getUsuario();
    }, []);
  }
  return { usuarios, getUsuario };
}
