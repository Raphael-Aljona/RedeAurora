import {Image, Pressable, StyleSheet, Text, TextInput, View} from "react-native";
import {Ionicons} from "@expo/vector-icons";
import React, {useEffect, useState} from "react";
import {atualizarPerfil} from "../../../services/perfil_service";
import {Colors} from "../../../constants/theme";

type Usuario = {
    "nome": string,
    "email": string,
    "senha": string
}

export default function Perfil() {

    const [usuario, setUsuario] = useState<Usuario>({
        nome: "",
        senha: "",
        email: "",
    });

    async function atualizarUsuario() {
        console.log('Usuario pode ser nulo')
        if (usuario == null) return;
        console.log('Enviando para a API')

        atualizarPerfil(usuario, "");
    }

    return (
        <View style={estilos.PaginaPerfil}>
            <Text style={estilos.TituloPerfil}>João Silva</Text>
            <View style={estilos.ViewSubtitulo}><Text style={estilos.Subtitulo}>ATIVA</Text></View>
            <View style={estilos.ViewInput}>
                <View style={estilos.ViewTextoInput}>
                    <Image style={estilos.ImagemInput} source={require('')}/>
                    <Text style={estilos.TextoInput}>Usuario</Text>
                </View>
                <TextInput style={estilos.Input} placeholder="joao.silva"></TextInput>
            </View>
            <View style={estilos.ViewInput}>
                <View style={estilos.ViewTextoInput}>
                    <Image style={estilos.ImagemInput} source={require('')}/>
                    <Text style={estilos.TextoInput}>E-mail</Text>
                </View>
                <TextInput style={estilos.Input} placeholder="joao.silva@redeaurora.com.br"></TextInput>
            </View>
            <View style={estilos.ViewInput}>
                <View style={estilos.ViewTextoInput}>
                    <Image style={estilos.ImagemInput} source={require('')}/>
                    <Text style={estilos.TextoInput}>Senha</Text>
                </View>
                <TextInput style={estilos.Input} placeholder="*******"></TextInput>
            </View>
            <Pressable style={estilos.BotaoEditar}>
                <Image style={estilos.ImagemBotaoEditar} source={require('')}/>
                <Text style={estilos.TextoBotaoEditar}>Editar Perfil</Text>
            </Pressable>
            <Pressable style={estilos.BotaoSair}>
                <Image style={estilos.ImagemBotaoSair} source={require('')}/>
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
        color: "rgba(59, 44, 36, 1)"
    },
    ViewSubtitulo:{
        backgroundColor: "rgba(255, 235, 227, 1)",
        borderRadius: 9999,
        width: 69,
        height: 28,
        alignItems: "center",
        justifyContent: "center"
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
        padding: 16
    },
    ViewTextoInput:{
        flexDirection: "row",
        justifyContent: "flex-start",
        alignItems: "center",
        width: 316,
        height: 20
    },
    ImagemInput:{
        width: 20,
        height: 18,
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
        height: 56
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
        height: 52

    },
    ImagemBotaoSair:{

    },
    TextoBotaoSair:{

    }
})