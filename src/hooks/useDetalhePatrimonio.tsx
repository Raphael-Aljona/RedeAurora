import { useState, useEffect} from "react";
import { Patrimonio } from "../@types/patrimonio";
import { patrimonioService } from "../services/patrimonio_service";


export function useDetalhePatrimonio(id: string) {
    const [patrimonios, setPatrimonios] = useState<Patrimonio | null>(null);

    async function carregarPatrimonio() {
        try {
            const dados = await patrimonioService.buscarPorId(id);
            setPatrimonios(dados)
        } catch (error) {
            console.log(error)
        }
        
    }
    useEffect(() => {
        carregarPatrimonio();
    }, [])

    const formatarData = (dataStr?: string) => {
        if (!dataStr) return '';
        try {
            const data = new Date(dataStr);
            return isNaN(data.getTime()) ? dataStr : data.toLocaleString('pt-BR');
        } catch {
            return dataStr;
        }
    };

    return {
        patrimonios,
        formatarData
    }
    
}