import { useEffect, useState } from "react";
import { setor } from "../@types/criarItem";
import { getAllSetores } from "../services/setor_service";
import { Setor } from "../@types/setor";

export function useSetor() {
    const [setor, setSetor] = useState<Setor[]>([]);
    async function carregarSetores() {
        try {
            const dados = await getAllSetores();
            console.log('dados recebidos no hook: ', dados);
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