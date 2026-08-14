import {api} from "./api";

export async function getAllPatrimonios() {
    try {
        const response = await api.get('Patrimônio');

        return response.data;
    } catch (error) {
        console.error(error);
    }
}