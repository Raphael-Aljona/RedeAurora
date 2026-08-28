import {useEffect, useState} from "react";
import {atualizarPerfil} from "../services/perfil_service";
import {Usuario} from "../@types/perfil";

export function usePerfil() {
    const [usuario, setUsuario] = useState<Usuario>({
        nome: "",
        senha: "",
        email: "",
    });

    async function atualizarUsuario(usuario:Usuario, id:string) {
        if (usuario == null) return;

        await atualizarPerfil(usuario, id);
    }

    useEffect(() => {
        atualizarUsuario;
    }, []);

    return {
        usuario,
        atualizarUsuario,
    }
}