import { View, Text, StyleSheet, Image, Pressable, TouchableOpacity, ScrollView } from "react-native";
import { Fonts } from "../../constants/theme";
import { patrimonioService } from "../../services/patrimonio_service";
import { useEffect, useState } from "react";
import { useLocalSearchParams, useRouter } from "expo-router";
import { useDetalhePatrimonio } from "../../hooks/useDetalhePatrimonio";
import { Ionicons } from "@expo/vector-icons";
import { Patrimonio } from "../../@types/patrimonio";
import AuroraButton from '../../components/aurora_button/aurora_button';


export default function DetalhesItem() {

    const { id } = useLocalSearchParams<{ id: string }>();
    const { patrimonios: patrimonioHook, formatarData } = useDetalhePatrimonio(id);
    const router = useRouter();

    const [patrimonios, setPatrimonios] = useState<Patrimonio>();

    function editar() {
        router.push("/(tabs)/criar_item");
    }
    function baixarRelatorio(){
        
    }

    async function getPorId() {
        try {
            // Usa o ID vindo da rota se existir, ou o fallback "11"
            const idBusca = id || "11";
            const dados = await patrimonioService.buscarPorId(idBusca);
            setPatrimonios(dados);
        } catch (error) {
            console.error(error);
        }
    }

    useEffect(() => {
        getPorId();
    }, [id]);

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
                    <Text style={estilos.NomePatrimonio}>{patrimonios?.nome}</Text> /
                    <Text style={estilos.texto}>{patrimonios?.codigo_patrimonio}</Text>
                    <Text style={estilos.condicao}>{patrimonios?.condicao}</Text>

                    <View style={estilos.Descricao}>
                        <View style={estilos.Header}>
                            <Image source={require('../../../assets/imgs/descricao.png')} />
                            <Text style={estilos.Titulo}> Descrição completa </Text>
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
                            <Text style={estilos.texto}>{patrimonios?.nome}</Text>
                        </View>
                    </View>
                    <AuroraButton text="Editar patrimônio" onPress={editar} />
                    <AuroraButton text="Baixar relatório em tabela / PDF" onPress={baixarRelatorio} /> 

                    

                </View>
            </ScrollView>
        </View>
    );
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
        borderColor: "#A33F00",
        alignItems: "flex-start",
        justifyContent: "center",
        marginTop: "5%",
        padding: "5%",
        borderRadius: 10
    },
    texto: {
        fontSize: 15,
        fontFamily: Fonts.regular,
        
    },
    Atribuicao: {
        borderWidth: 0.7,
        width: "90%",
        borderColor: "#A33F00",
        justifyContent: "center",
        alignItems: "flex-start",
        marginTop: "5%",
        padding: "5%",
        borderRadius: 10,
        marginBottom: "5%"
    },
    tipoAtribuicao: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        marginTop: "8%",
        flexWrap: "wrap",
    },
    iconeAtribuicao: {
        height: 25,
        width: 25
    },
    

    //Container
    botao: {
        borderWidth: 0.8,
        alignItems: 'center',
        justifyContent: 'center',
        padding: '5%',
        borderRadius: 45,
        width: "80%",
        marginBottom: "2%"
    },
    textoBotao: {
        fontFamily: Fonts.bold,
        fontSize: 14
    }
});