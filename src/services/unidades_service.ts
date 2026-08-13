import {api} from "./api";

export async function getAllUnidades() {
    try {
        const response = await api.get('Unidade');

        return response.data;
    } catch (error) {
        console.error(error);
    }
}