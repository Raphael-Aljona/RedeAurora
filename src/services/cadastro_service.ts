import { criarItem } from "../@types/criarItem";
import { api } from "./api";

export const criarItemService = {
 
    async cadastrar(dados: criarItem): Promise<criarItem> {
        const formData = new FormData();
        formData.append('CodigoPatrimonio', dados.codigo_patrimonio);
        formData.append('NomeItem', dados.nome);
        formData.append('Descricao', dados.descricao);
        formData.append('SetorId', String(dados.id_setor));
        formData.append('Condicao', dados.condicao);


        const resposta = await api.post<criarItem>("criarItem", formData, {
            headers: {
                'Content-Type': 'multipart/form-data',
            },
        }); 

        return resposta.data;
    }
}