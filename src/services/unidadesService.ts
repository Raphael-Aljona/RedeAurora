import { item, Setor, Unidade } from "../@types/CardUnidade";
import {api} from "./api";

        export async function getItem() : Promise<item[]> {
        const response = await api.get<item[]>('Item');
        return response.data;
        }

         export async function getSetor() : Promise<Setor[]> {
        const response = await api.get<Setor[]>('Unidade');
        return response.data;
        }


        export async function getUnidade() : Promise<Unidade[]> {
        const response = await api.get<Unidade[]>('Unidade');
        return response.data;
        }