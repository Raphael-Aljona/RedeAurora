import { api } from "./api";

export async function BuscarItem()
    {
            const buscarItem = await api.get('Item')
            return buscarItem.data
    }