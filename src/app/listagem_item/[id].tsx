import React, {useState} from "react";
import {FlatList, Image, Pressable, StyleSheet, Text, TextInput, View} from "react-native";
import Card from "../../components/card/card";
import useDetalhesSetor from "../../hooks/useDetalhesSetor";
import CardUnidade from "../../components/card_unidade/card_unidade";
import {Colors} from "../../constants/theme";
import * as XLSX from "xlsx";
import {File, Paths} from "expo-file-system";
import * as Sharing from "expo-sharing";
import {ItemSetor} from "../../@types/setor";
import {Ionicons} from "@expo/vector-icons";
import { Picker } from "@react-native-picker/picker";

export default function ListagemItem() {

    const {itensSetor} = useDetalhesSetor();
    const [itensFiltrados, setItensFiltrados] = useState<ItemSetor[]>([])

    function fetchItensFiltrados(busca?: string) {
        const data = itensSetor.filter(value => value.nome_item.toString().includes(busca ?? ""));

        setItensFiltrados(data);
    }

    async function exportarExcel(lista: any) {
        try {
            const worksheet = XLSX.utils.json_to_sheet(lista);

            const workbook = XLSX.utils.book_new();

            XLSX.utils.book_append_sheet(workbook, worksheet, "Patrimônios");

            const base64 = XLSX.write(workbook, {
                type: "base64",
                bookType: "xlsx",
            });

            const file = new File(Paths.cache, "patrimônios.xlsx");

            file.create({
                overwrite: true,
            });

            file.write(base64, {
                encoding: "base64",
            });

            if (await Sharing.isAvailableAsync()) {
                await Sharing.shareAsync(file.uri, {
                    mimeType:
                        "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
                    dialogTitle: "Exportar patrimônios",
                    UTI:
                        "com.microsoft.excel.xlsx",
                });
            }
        } catch (error) {
            console.error("Erro ao exportar Excel:", error);
        }
    }


    return (
        <View style={estilos.Pagina}>
            <Text style={estilos.Titulo}>Lista de Patrimonio</Text>
            <Text style={estilos.Subtitulo}>Gerencie e visualize todos os ativos da empresa.</Text>
            <View style={estilos.ViewCaixaTexto}>
                <Image style={estilos.ImagemCaixaTexto} source={require('../../../assets/imgs/lupa.png')}/>
                <TextInput placeholder="Buscar ativos..." style={estilos.CaixaDeTexto} onChangeText={text => {
                    fetchItensFiltrados(text)
                    console.log(text)
                    console.log(itensFiltrados)
                    console.log("Filtrar");
                }}/>
            </View>
            <Pressable style={estilos.BotaoFiltrar} onPress={}>
                <Image style={estilos.ImagemFiltrar} source={require('../../../assets/imgs/filtro.png')}/>
                <Text style={estilos.TextoFiltrar}>Filtros</Text>
            </Pressable>
            <Pressable style={estilos.BotaoExportar} onPress={event => {
                exportarExcel(itensSetor);
            }}>
                <Image style={estilos.ImagemExportar} source={require('../../../assets/imgs/exportar.png')}/>
                <Text style={estilos.TextoExportar}>Exportar Lista</Text>
            </Pressable>
            {itensFiltrados.length > 0 ? <FlatList data={itensFiltrados}
                                                   keyExtractor={(item) => item.id_item.toString()}
                                                   renderItem={(item) =>
                                                       <Card item={item.item}></Card>}/> :
                <View style={estilos.filterError}>
                    <View style={estilos.backgroundIcon}>
                        <Ionicons name={"close"} size={50} color={Colors.marrom_escuro}></Ionicons>
                    </View>
                    <View style={estilos.divider}/>
                    <Text style={estilos.textError}>Nenhum item encontrado</Text>
                </View>}
            {itensFiltrados.length > 0 && <View>

                <View style={estilos.NavegacaoPagina}>
                    <Pressable style={estilos.BotaoEsquerda}><Image style={estilos.ImagemDireita}
                                                                    source={require('../../../assets/imgs/setaEsquerda.png')}/></Pressable>
                    <Text style={estilos.TextoPagina}>Pagina 1 de 12</Text>
                    <Pressable style={estilos.BotaoDireito}><Image style={estilos.ImagemDireita}
                                                                   source={require('../../../assets/imgs/setaDireita.png')}/></Pressable>
                </View>
                <Pressable style={estilos.BotaoAdicionar}><Image style={estilos.ImagemDireita}
                                                                 source={require('../../../assets/imgs/adicionar.png')}/></Pressable>
            </View>}


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

    backgroundIcon: {
        height: 70,
        width: 70,
        borderRadius: 1000,
        backgroundColor: Colors.backgroundColor,
        elevation: 1,
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
    },

    filterError: {
        width: 350,
        height: 210,
        padding: 24,
        backgroundColor: "white",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 12,
        marginBottom: 24,
        elevation: 1,
        gap: 10
    },

    textError: {
        textAlign: "center",
        fontSize: 20,
        fontWeight: "bold",
    },

    divider: {
        height: 1,
        backgroundColor: '#E0E0E0',
        width: '100%'
    }
})