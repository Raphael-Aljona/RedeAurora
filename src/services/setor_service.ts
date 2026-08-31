import { useEffect, useState } from "react";
import { setor } from "../@types/criarItem";
import { api } from "./api";

export const SetorService = {
    async listar(): Promise<setor[]> {
        const resposta = await api.get<setor[]>("Local");
        return resposta.data;
    }
}