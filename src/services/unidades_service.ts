import {api} from "./api";

export async function getAllUnidades() {
    try {
        const response = await api.get('Item/quantidade-por-unidade');
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