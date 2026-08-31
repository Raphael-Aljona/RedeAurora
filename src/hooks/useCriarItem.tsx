import { useEffect, useState } from "react";
import { criarItem } from "../@types/criarItem";
import { criarItemService } from "../services/cadastro_service";
import { Alert } from "react-native";

export function useCriarItem() {
    const [item, setItem] = useState<criarItem[]>([]);


    async function criarItem(dados: criarItem) {
        try {
            const novoItem = await criarItemService.cadastrar(dados);

            // os nova + as os antigas
            setItem((antigo) => [novoItem, ...antigo])
            return novoItem;

        } catch (error) {
            Alert.alert("Erro!", "Problema ao cadastrar a OS!")
        }
    }

    return {
        item,
        criarItem,
    };
}