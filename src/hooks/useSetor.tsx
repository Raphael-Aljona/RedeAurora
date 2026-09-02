import { useEffect, useState } from "react";
import { setor } from "../@types/criarItem";
import { getAllSetores } from "../services/setor_service";

export function useSetor() {
    const [setor, setSetor] = useState<setor[]>([]);
    async function carregarSetores() {
        try {
            const dados = await getAllSetores();
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