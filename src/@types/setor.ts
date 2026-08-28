export interface Unidade {
    id_unidade: number,
    nome_unidade: string,
    quantidade_itens: number,
}

export interface Item {
    "id_item": number,
    "nome": string | null,
    "codigo_patrimonio": string | null,
    "descricao": string | null,
    "id_setor": number,
    "condicao": string | null,
    "data": string | null,
    "id_usuario": string | null
}