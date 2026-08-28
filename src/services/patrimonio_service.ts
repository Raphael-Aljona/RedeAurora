import { Patrimonio } from "../../@types/patrimonio";
import {api} from "./api";

export const patrimonioService = {

 async listar(): Promise<Patrimonio[]> {
        //requisicao:
        //Obs. se estamos trabalhando com lista não esqueça do [] array
        const resposta = await api.get<Patrimonio[]>("Patrimonio");

        return resposta.data;
    },

 async buscarPorId(id: number | string): Promise<Patrimonio> {
        const resposta = await api.get<Patrimonio>(`Patrimonio/${id}`);
        return resposta.data;
    },

 async  exportarPatrimonio(arquivo: File) {
    try {
        const formData = new FormData();

        formData.append("arquivoCsv", arquivo);

        await api.post("Patrimonio/importar-csv", formData,{
            headers: {
                "Content-Type": "multipart/form-data"
            }
        });
    } catch (err: any) {
        throw new Error(err.message);
    }
}
}