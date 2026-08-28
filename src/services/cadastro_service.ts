import { api } from "./api";

// get para os selects
export async function listarSetor() {
    try {
        const response = await api.get("Setor");
        return response;
    } catch (error: any) {
        throw new Error(error.response.data);
    }
}


type ItemForm = {
    codigo_patrimonio: string,
    nome: string;
    descricao: string;
    id_setor: number[];
    condicao: string;
}

export async function cadastrarItem(dados: ItemForm) {
    try {
        const formData = new FormData();
        formData.append("codigo", dados.codigo_patrimonio);
        formData.append("descricao", dados.descricao);
        formData.append("condicao", dados.condicao);
        dados.id_setor.forEach((id) => formData.append("setorID", id.toString()));
    }
    catch (error: any) {
        throw new Error(error.response.data);
    }
}