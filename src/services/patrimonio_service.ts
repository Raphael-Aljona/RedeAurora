import {api} from "./api";


export async function getPatrimonio() {
    try {
        const response = await api.get("Patrimonio");

        return response.data;
    } catch (err: any) {
        throw new Error(err.message);
    }
}

export async function getPatrimonioPorId(id: string) {
    try {
        const response = await api.get(`Patrimonio/${id}`);

        return response.data;
    } catch (err: any) {
        throw new Error(err.message);
    }
}

export async function importarPatrimonio(arquivo: File) {
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