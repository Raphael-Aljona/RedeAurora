import {api} from "./api";

export async function getAllSetores() {
    try {
        const response = await api.get('Item/Quantidade-por-Setor');
        return response.data;
    } catch (error) {
        console.error(error);
    }
}

export async function getQtdItens() {
    try {
        const response = await api.get('Item');
        return response.data;
    }
    catch (error) {
        console.error(error);
    }
}

export async function getQntPorSetor(id: string) {
    try {
        const response = await api.get(`Item/Itens-por-setor/${id}`);
        return response.data;
    }
    catch (error) {
        console.error(error);
    }
}