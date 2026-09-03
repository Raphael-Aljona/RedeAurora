import {Image, Pressable, StyleSheet, Text, TextInput, View} from "react-native";
import {atualizarPerfil} from "../../../services/perfil_service";

import { auth } from "../../../services/autenticacao";
import { dados } from "../../../@types/autenticacao";
import { api } from "../../../services/api";
import { Usuario, UsuarioAtualizar } from "../../../@types/Usuario";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useState } from "react";
import { useAuth } from "../../../contexts/AuthContext";

export default function Perfil() {

    const [Nome, setNome] = useState<string>("")
    const [Senha, setSenha] = useState<string>("")
    const[Email, setEmail] = useState<string>("")

    const {usuario, logout} = useAuth();

    async function atualizarUsuario() {


        if (!Nome || !Senha || !Email ) 
            {
                console.log("Não tem todos os dados preenchidos")
                return
            }
        console.log('Enviando para a API')


       
        const AtualizarUsuario : UsuarioAtualizar = {
            nome: Nome,
            email: Email,
            senha: Senha
        }

        try{
            await api.put(`/Usuario/${usuario?.id}`, AtualizarUsuario)
            
            alert("Usuario alterado com sucesso")

            logout()
        }catch{
            alert("Não foi possivel atualizar o usuario")

            setNome("")
            setSenha("")
            setEmail("")
            
        }
         

         
    }

    return (
        <View style={estilos.PaginaPerfil}>
            <Text style={estilos.TituloPerfil}>{usuario?.nome}</Text>
            <View style={estilos.ViewSubtitulo}><Text style={estilos.Subtitulo}>ATIVA</Text></View>
            <View style={estilos.ViewInput}>
                <View style={estilos.ViewTextoInput}>
                    <Image style={estilos.ImagemInput} source={require('../../../../assets/imgs/user.png')}/>
                    <Text style={estilos.TextoInput}>Usuario</Text>
                </View>
                <TextInput style={estilos.Input} placeholder="joao.silva" onChangeText={setNome} value={Nome}></TextInput>
            </View>
            <View style={estilos.ViewInput}>
                <View style={estilos.ViewTextoInput}>
                    <Image style={estilos.ImagemInput} source={require('../../../../assets/imgs/email.png')}/>
                    <Text style={estilos.TextoInput}>E-mail</Text>
                </View>
                <TextInput style={estilos.Input} placeholder="joao.silva@redeaurora.com.br" onChangeText={setEmail} value={Email}></TextInput>
            </View>
            <View style={estilos.ViewInput}>
                <View style={estilos.ViewTextoInput}>
                    <Image style={estilos.ImagemInput} source={require('../../../../assets/imgs/senha.png')}/>
                    <Text style={estilos.TextoInput}>Senha</Text>
                </View>
                <TextInput style={estilos.Input} placeholder="*******" onChangeText={setSenha} value={Senha}></TextInput>
            </View>
            <Pressable style={estilos.BotaoEditar} onPress={atualizarUsuario}>
                <Image style={estilos.ImagemBotaoEditar} source={require('../../../../assets/imgs/editar.png')}/>
                <Text style={estilos.TextoBotaoEditar}>Editar Perfil</Text>
            </Pressable>
            <Pressable style={estilos.BotaoSair} onPress={logout}>
                <Image style={estilos.ImagemBotaoSair} source={require('../../../../assets/imgs/sair.png')}/>
                <Text style={estilos.TextoBotaoSair}>Sair / Logout</Text>
            </Pressable>
        </View>
    )}

const estilos = StyleSheet.create({
    PaginaPerfil:{
        flex: 1,
        flexDirection:"column",
        justifyContent: "flex-start",
        alignItems: "center",
        backgroundColor: "rgba(252, 248, 246, 1)"
    },
    TituloPerfil:{
        fontFamily: "Montserrat_700Bold",
        fontSize: 30,
        color: "rgba(59, 44, 36, 1)",
        marginTop: 48
    },
    ViewSubtitulo:{
        backgroundColor: "rgba(255, 235, 227, 1)",
        borderRadius: 9999,
        width: 69,
        height: 28,
        alignItems: "center",
        justifyContent: "center",
        marginTop: 12,
        marginBottom: 32 
    },
    Subtitulo:{
        color: "rgba(163, 107, 86, 1)",
        fontFamily: "Montserrat_700Bold",
        fontSize: 12
    },
    ViewInput:{
        backgroundColor: "white",
        width: 350,
        height:99,
        flexDirection: "column",
        justifyContent: "flex-start",
        alignItems: "center",
        padding: 16,
        marginBottom: 16,
        borderRadius: 16
    },
    ViewTextoInput:{
        flexDirection: "row",
        justifyContent: "flex-start",
        alignItems: "center",
        width: 316,
        height: 20
    },
    ImagemInput:{
        marginRight: 12
    },
    TextoInput:{
        fontFamily: "Montserrat_400Regular",
        fontSize: 14,
        color: "rgba(107, 114, 128, 1)"
    },
    Input:{
        borderBottomWidth: 1,
        width: 284,
        height: 41,
        flexDirection: "row",
        justifyContent: "flex-start",
        alignItems: "center",
        paddingLeft: 12
    },
    BotaoEditar:{
        backgroundColor: "white",
        borderRadius: 9999,
        borderWidth: 2,
        borderColor: "rgba(208, 180, 170, 1)",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        width: 350,
        height: 56,
        marginTop: 32
    },
    ImagemBotaoEditar:{
        width: 14,
        height: 14,
        marginRight: 8
    },
    TextoBotaoEditar:{
        fontFamily: "Montserrat_700Bold",
        fontSize: 16,
        color: "rgba(59, 44, 36, 1)"
    },
    BotaoSair:{
        backgroundColor: "rgba(193, 25, 32, 1)",
        borderRadius: 9999,
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        width: 350,
        height: 52,
        marginTop: 16 

    },
    ImagemBotaoSair:{
        width: 14,
        height: 14,
        marginRight: 8
    },
    TextoBotaoSair:{
        fontFamily: "Montserrat_700Bold",
        fontSize: 16,
        color: "white"
    }
})