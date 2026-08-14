import React from "react";
import {Image, Pressable, StyleSheet, Text, TextInput, View} from "react-native";
import Card from "../../../components/card/card";

export default function ListagemItem() {
    return (
        <View style={estilos.Pagina}>
            <Text style={estilos.Titulo}>Lista de Patrimonio</Text>
            <Text style={estilos.Subtitulo}>Gerencie e visualize todos os ativos da empresa.</Text>
            <View style={estilos.ViewCaixaTexto}>
                <Image style={estilos.ImagemCaixaTexto} source={require('../../../../assets/imgs/lupa.png')} />
                <TextInput placeholder="Buscar ativos..." style={estilos.CaixaDeTexto}/>
            </View>
            <Pressable style={estilos.BotaoFiltrar}>
                <Image style={estilos.ImagemFiltrar} source={require('../../../../assets/imgs/filtro.png')} />
                <Text style={estilos.TextoFiltrar}>Filtros</Text>
            </Pressable>
            <Pressable style={estilos.BotaoExportar}>
                <Image style={estilos.ImagemExportar} source={require('../../../../assets/imgs/exportar.png')}/>
                <Text style={estilos.TextoExportar}>Exportar Lista</Text>
            </Pressable>
            <Card></Card>
            <View style={estilos.NavegacaoPagina}>
                <Pressable style={estilos.BotaoEsquerda}><Image style={estilos.ImagemEsquerda}
                                                                source={require('../../../../assets/imgs/setaEsquerda.png')}/></Pressable>
                <Text style={estilos.TextoPagina}>Pagina 1 de 12</Text>
                <Pressable style={estilos.BotaoDireito}><Image style={estilos.ImagemDireita}
                                                               source={require('../../../../assets/imgs/setaDireita.png')}/></Pressable>
            </View>
            <Pressable style={estilos.BotaoAdicionar}><Image style={estilos.ImagemAdicionar}
                                                             source={require('../../../../assets/imgs/adicionar.png')}/></Pressable>
        </View>
    )
}

const estilos = StyleSheet.create({

    Pagina: {
        flex: 1,
        flexDirection: "column",
        backgroundColor: "rgba(255, 248, 246, 1)",
        justifyContent: "flex-start",
        alignItems: "flex-start",
        paddingLeft: 20,
        paddingRight: 20,
        paddingTop: 24
    },

    Titulo: {
        fontSize: 28,
        fontWeight: "semibold",
        color: "rgba(37, 25, 19, 1)",
        marginBottom: 5
    },

    Subtitulo: {
        fontSize: 14,
        color: "rgba(88, 66, 56, 1)"
    },

    ViewCaixaTexto: {
        width: 358,
        height: 38,
        borderWidth: 1,
        borderColor: "black",
        borderRadius: 8,
        flexDirection: "row",
        alignItems: "center",
        paddingLeft: 10,
        backgroundColor: "white",
        marginBottom: 12,
        marginTop: 5

    },

    CaixaDeTexto: {
        color: "rgba(107, 114, 128, 1)",
        borderRadius: 8
    },

    ImagemCaixaTexto: {
        width: 18,
        marginRight: 5
    },

    BotaoFiltrar: {
        borderWidth: 1,
        borderColor: "black",
        borderRadius: 8,
        backgroundColor: "transparent",
        justifyContent: "center",
        alignItems: "center",
        width: 358,
        height: 38,
        flexDirection: "row",
        marginBottom: 12
    },

    ImagemFiltrar: {
        width: 18,
        height: 12,
        marginRight: 4
    },

    TextoFiltrar: {
        fontSize: 14,
        color: "black"
    },

    BotaoExportar: {
        borderRadius: 8,
        backgroundColor: "rgba(163, 63, 0, 1)",
        justifyContent: "center",
        alignItems: "center",
        width: 358,
        height: 38,
        flexDirection: "row",
        marginBottom: 24
    },

    ImagemExportar: {
        width: 16,
        height: 16,
        marginRight: 4
    },

    TextoExportar: {
        fontSize: 14,
        color: "white"
    },

    NavegacaoPagina: {
        width: 358,
        height: 40,
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "row"
    },

    BotaoEsquerda: {
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "rgba(255, 233, 225, 1)",
        borderRadius: "50%",
        width: 40,
        height: 40,
        marginRight: 16
    },

    ImagemEsquerda: {},

    TextoPagina: {
        fontSize: 14,
        color: "black"
    },

    BotaoDireito: {
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "rgba(255, 233, 225, 1)",
        borderRadius: "50%",
        width: 40,
        height: 40,
        marginLeft: 16
    },

    ImagemDireita: {},

    BotaoAdicionar: {
        position: "absolute",
        borderRadius: "50%",
        width: 56,
        height: 56,
        backgroundColor: "rgba(163, 63, 0, 1)",
        alignItems: "center",
        justifyContent: "center",
        top: 710,
        left: 335

    },

    ImagemAdicionar: {}
})