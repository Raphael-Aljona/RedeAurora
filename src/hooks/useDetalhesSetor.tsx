import {useEffect, useState} from "react";
import {ItemSetor} from "../@types/setor";
import {getQntPorSetor} from "../services/unidades_service";

export default function useDetalhesSetor() {

    const [itensSetor, setitensSetor] = useState<ItemSetor[]>([]);

    async function getItensPorSetor(id: string){
        try{
            const data = await getQntPorSetor(id);
            setitensSetor(data);
            // console.log(data);
        } catch(error){
            console.error(error);
        }
    }

    useEffect(() => {
        getItensPorSetor("2");
    }, [])

    return {
        itensSetor,
    }
}