import { useEffect, useState } from "react";
import { setor } from "../@types/criarItem";
import { SetorService } from "../services/setor_service";

export function useSetor() {
    const [setor, setSetor] = useState<setor[]>([]);
    async function carregarSetores() {
        try {
            const dados = await SetorService.listar();
            setSetor(dados);
        } catch (error) {
            console.error('erro para carregar setores: ', error);
        }
    }

    useEffect(() => {
        carregarSetores();
    }, [])
    return setor;
}