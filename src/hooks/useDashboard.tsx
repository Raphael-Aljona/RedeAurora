import {Text} from "react-native";
import {Unidade} from "../@types/setor";
import {useEffect, useState} from "react";
import {getAllUnidades} from "../services/unidades_service";

export function useDashboard () {
    const [unidades, setUnidades] = useState<Unidade[]>([]);

    async function getTodasUnidades() {
        try {
            const dados = await getAllUnidades();
            setUnidades(dados);
        } catch (error) {
            console.error(error)
        }
    }

    useEffect(() => {
        getTodasUnidades();
    }, [])

    return {
        unidades,
        getTodasUnidades,
    }
}