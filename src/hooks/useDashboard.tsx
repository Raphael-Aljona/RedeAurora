import {Text} from "react-native";
import {Setor} from "../@types/setor";
import {useEffect, useState} from "react";
import {getAllSetores} from "../services/setor_service";

export function useDashboard () {
    const [setores, setSetores] = useState<Setor[]>([]);
    
    async function getTodosSetores() {
        try {
            const dados = await getAllSetores();
            setSetores(dados);
        } catch (error) {
            console.error(error)
        }
    }

    useEffect(() => {
        getTodosSetores();
    }, [])

    return {
        setores,
        getTodosSetores,
    }
}