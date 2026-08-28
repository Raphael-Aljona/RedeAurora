import { useState, useEffect} from "react";
import { Patrimonio } from "../../@types/patrimonio";
import { patrimonioService } from "../services/patrimonio_service";


export function useDetalhePatrimonio() {
    const [patrimonios, setPatrimonios] = useState<Patrimonio[]>([]);

    async function carregarPatrimonio() {
        try {
            const dados = await patrimonioService.getPatrimonioPorId(11);
            setPatrimonios(dados)
        } catch (error) {
            console.log("Não foi possível carregar os detalhes do patrimônio.")
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