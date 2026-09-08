export interface UsuarioToken{
    id: string
    nome: string,
    email: string,
}

export interface Usuario{
    id_usuario: string,
    nome: string,
    email: string,
    senha: string
}

export interface UsuarioAtualizar{
    nome: string,
    email: string,
    senha: string
}