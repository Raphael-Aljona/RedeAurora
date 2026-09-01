import { criarItem } from "../@types/criarItem";
import { api } from "./api";

export const criarItemService = {

    async cadastrar(dados: criarItem): Promise<criarItem> {

        console.log("dados recebidos no service: ", dados);

        const resposta = await api.post("/Item", {
            nome: dados.nome,
            codigo_patrimonio: dados.codigo_patrimonio,
            descricao: dados.descricao,
            id_setor: dados.id_setor,
            condicao: dados.condicao
        },);

        console.log("resposta do service: ", resposta.data);
        console.log("resposta do service: ", resposta.status);

        return resposta.data;
    }
}