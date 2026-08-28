import { View, Text, StyleSheet, Image, Pressable, TouchableOpacity } from "react-native";
import { Fonts } from "../../constants/theme";
import { ScrollView } from "react-native";
import { patrimonioService } from "../../services/patrimonio_service";
import { useEffect, useState } from "react";
import { useLocalSearchParams, useRouter } from "expo-router";
import { useDetalhePatrimonio } from "../../hooks/useDetalhePatrimonio";
import { Ionicons } from "@expo/vector-icons";
import { Patrimonio } from "../../../@types/patrimonio";

const { id } = useLocalSearchParams<{ id: string }>();
const { patrimonios, formatarData } = useDetalhePatrimonio(id);
const router = useRouter();

function editar() {
    router.push("/(tabs)/criar_item")
}

export default function DetalhesItem() {

    const [patrimonios, setPatrimonios] = useState<Patrimonio>();

    async function getPorId() {
        try {
            const dados = await patrimonioService.buscarPorId(id);
            setPatrimonios(dados);
        } catch (error) {
            console.error(error);
        }
    }

    useEffect(() => {
        getPorId();
    }, [])

    return (

        <View style={estilos.Tela}>
            <ScrollView>
                <View style={estilos.Header}>
                    <TouchableOpacity onPress={() => router.back()}>
                        <Ionicons name="arrow-back" size={24} color="#1a1a1a" />
                    </TouchableOpacity>
                    <Text style={estilos.Titulo}>Detalhes do patrimônio</Text>
                </View>
                <View style={estilos.Main}>
                    <Text style={estilos.NomePatrimonio}>{patrimonios?.nome}</Text>
                    <Text style={estilos.texto}>{patrimonios?.codigo_patrimonio}</Text>
                    <Text style={estilos.condicao}>{patrimonios?.condicao}</Text>
                    <View style={estilos.Descricao}>
                        <View style={estilos.Header}>
                            <Image source={require('../../../assets/imgs/descricao.png')} />
                            <Text style={estilos.Titulo}> Descrição completa</Text>
                        </View>
                        <Text style={estilos.texto}>
                            {patrimonios?.descricao}
                        </Text>
                    </View>
                    <View style={estilos.Atribuicao}>
                        <Text style={estilos.Titulo}>Atribuição</Text>
                        <View style={estilos.tipoAtribuicao}>
                            <Image source={require('../../../assets/imgs/icon_atribuicao.png')} style={estilos.iconeAtribuicao} />
                            <Text style={estilos.texto}> Setor: </Text>
                            <Text style={estilos.texto}>{patrimonios?.id_setor}</Text>
                        </View>
                        <View style={estilos.tipoAtribuicao}>
                            <Image source={require('../../../assets/imgs/icon_responsavel.png')} style={estilos.iconeAtribuicao} />
                            <Text style={estilos.texto}> Responsável: </Text>
                            <Text style={estilos.texto}>{patrimonios?.id_usuario}</Text>
                        </View>
                    </View>
                    <View style={estilos.Data}>
                        <Image source={require('../../../assets/imgs/icon_data.png')} style={estilos.iconesData} />
                        <View style={estilos.dataRegistro}>
                            <Text style={estilos.textoData}>Data de registro</Text>
                            <Text style={estilos.textoData}>{formatarData(patrimonios?.data_hora)}</Text>
                        </View>
                        <View style={estilos.dataAlteracao}>
                            <Text style={estilos.textoData}>Última auditoria</Text>
                            <Text style={estilos.textoData}>{formatarData(patrimonios?.data_hora)}</Text>
                        </View>
                        <Image source={require('../../../assets/imgs/icon_relogio.png')} style={estilos.iconesData} />
                    </View>
                    <Pressable style={estilos.botao}>
                        <Text style={estilos.textoBotao} onPress={editar}>Editar patrimônio</Text>
                    </Pressable>
                    <Pressable style={estilos.botao}>
                        <Text style={estilos.textoBotao}>Baixar relatório em tabela / PDF</Text>
                    </Pressable>
                </View>
            </ScrollView>
        </View>

    )
}

const estilos = StyleSheet.create({
    Titulo: {
        color: "#A33F00",
        fontFamily: Fonts.bold,
        fontSize: 25,
    },
    condicao: {
        color: "#A33F00",
        fontFamily: Fonts.regular,
        fontSize: 15,
        borderWidth: 0.8,
        borderColor: "#A33F00",
        borderRadius: 45,
        padding: "1%",
    },
    Header: {
        marginBottom: "2%",
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        gap: "1%",
        marginLeft: "1%",
        width: "100%",
    },
    seta: {
        height: 25,
        width: 25,
    },
    NomePatrimonio: {
        fontFamily: Fonts.bold,
        fontSize: 25,
        marginTop: '5%'
    },
    Main: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "auto"
    },
    Tela: {
        flex: 1,
        gap: "2%",
        display: "flex",
        justifyContent: "center"
    },
    Descricao: {
        borderWidth: 0.7,
        width: "90%",
        height: "35%",
        borderColor: "#A33F00",
        alignItems: "flex-start",
        justifyContent: "center",
        marginTop: "5%",
        padding: "5%",
        borderRadius: 10
    },
    texto: {
        fontSize: 20,
        fontFamily: Fonts.regular,
    },
    Atribuicao: {
        borderWidth: 0.7,
        width: "90%",
        height: "20%",
        borderColor: "#A33F00",
        justifyContent: "center",
        alignItems: "flex-start",
        marginTop: "5%",
        padding: "5%",
        borderRadius: 10
    },
    tipoAtribuicao: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        marginTop: "8%",
    },
    iconeAtribuicao: {
        height: 25,
        width: 25
    },
    Data: {
        borderWidth: 0.7,
        width: "90%",
        height: "10%",
        borderColor: "#A33F00",
        justifyContent: "center",
        alignItems: "center",
        marginTop: "5%",
        marginBottom: "5%",
        padding: "5%",
        gap: "5%",
        backgroundColor: "#FFF1EC",
        flexDirection: "row",
        borderRadius: 10
    },
    dataRegistro: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        marginTop: "8%",
    },
    dataAlteracao: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        marginTop: "8%",
    },
    iconesData: {
        height: 20,
        width: 20
    },
    textoData: {
        fontFamily: Fonts.regular,
        fontSize: 16
    },
    botao: {
        borderWidth: 0.8,
        alignItems: 'center',
        justifyContent: 'center',
        padding: '5%',
        borderRadius: 45,
        height: '6%',
        width: "80%",
        marginBottom: "2%"
    },
    textoBotao: {
        fontFamily: Fonts.bold,
        fontSize: 14
    }
})