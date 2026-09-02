import { useEffect, useState } from "react";
import { item, Setor, Unidade } from "../@types/CardUnidade";
import { getItem, getSetor, getUnidade } from "../services/unidadesService";

export function useCardUnidade() {
    const [BuscarItem, setBuscarItem] = useState<item[]>([])
    const [BuscarSetor, setBuscarSetor] = useState<Setor[]>([])
    const [BuscarItemUnidade, setBuscarItemUnidade] = useState<Unidade[]>([])

    async function FuncaoDeBuscarItem() {
        const dados = await getItem()
        setBuscarItem(dados)//.map(item => item.idSetor)
    }

     async function FuncaoDeBuscarSetor() {
        const dados = await getSetor()
        setBuscarSetor(dados)//.map(setor => ({[setor.setorId]: setor.unidadeId}))
    }

     async function FuncaoDeBuscarUnidade() {
        const dados = await getUnidade()
        setBuscarItemUnidade(dados)//.map(unidade => ({[unidade.idUnidade]: unidade.nome}))
    }

    useEffect(() => {
        FuncaoDeBuscarItem()
        FuncaoDeBuscarSetor()
        FuncaoDeBuscarUnidade()
    }, [])

    return{
        BuscarItem,
        BuscarSetor,
        BuscarItemUnidade,
    }
    
}
