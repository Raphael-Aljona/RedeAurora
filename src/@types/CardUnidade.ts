export interface item{
    id: number
    nome: string
    codigoPatriminio: string
    descricao: string
    idSetor: number
    condicao: string
    data: string
    idUsuario: string
}

export interface Setor{
    setorId: number
    nome: string
    unidadeId: number
}

export interface Unidade{
    idUnidade: number
    nome: string
}