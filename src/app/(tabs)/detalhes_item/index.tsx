import { View, Text, StyleSheet, Image } from "react-native";
import { Fonts } from "../../../constants/theme";
import { ScrollView } from "react-native";

export default function DetalhesItem() {
    return (

        <View style={estilos.Tela}>
            <ScrollView>
                <View style={estilos.Header}>
                    <Image source={require('../../../../assets/seta.png')} style={estilos.seta} />
                    <Text style={estilos.Titulo}>Detalhes do patrimônio</Text>
                </View>
                <View style={estilos.Main}>
                    <Text style={estilos.NomePatrimonio}>Cadeira Ergonômica Office</Text>
                    <Text style={estilos.texto}>#PA-2024-01</Text>
                    <View style={estilos.Descricao}>
                        <View style={estilos.Header}>
                            <Image source={require('../../../../assets/descricao.png')} />
                            <Text style={estilos.Titulo}>Descrição completa</Text>
                        </View>
                        <Text style={estilos.texto}>
                            Cadeira ergonômica de alto padrão,
                            modelo Executive Mesh, com ajuste
                            de altura a gás, apoio de braços
                            ajustável em 3D, encosto reclinável
                            com trava em 4 posições e apoio
                            lombar dinâmico. Base em alumínio
                            polido com rodízios em PU anti-
                            risco. Adquirida para renovação do
                            setor administrativo.
                        </Text>
                    </View>
                    <View style={estilos.Classificacao}>
                        <Text style={estilos.Titulo}>Classificação</Text>
                        <View style={estilos.tipoClassificacao}>
                            <Image source={require('../../../../assets/icon_classificacao.png')} style={estilos.iconeClassificacao} />
                            <Text style={estilos.texto}> tipo: </Text>
                            <Text style={estilos.texto}>mobiliário</Text>
                        </View>
                        <View style={estilos.tipoClassificacao}>
                            <Image source={require('../../../../assets/icone_unidade.png')} style={estilos.iconeClassificacao} />
                            <Text style={estilos.texto}> unidade: </Text>
                            <Text style={estilos.texto}>sede</Text>
                        </View>
                    </View>
                    <View style={estilos.Atribuicao}>
                        <Text style={estilos.Titulo}>Atribuição</Text>
                        <View style={estilos.tipoAtribuicao}>
                            <Image source={require('../../../../assets/icon_atribuicao.png')} style={estilos.iconeAtribuicao} />
                            <Text style={estilos.texto}> tipo: </Text>
                            <Text style={estilos.texto}>mobiliário</Text>
                        </View>
                        <View style={estilos.tipoAtribuicao}>
                            <Image source={require('../../../../assets/icon_responsavel.png')} style={estilos.iconeAtribuicao} />
                            <Text style={estilos.texto}> unidade: </Text>
                            <Text style={estilos.texto}>sede</Text>
                        </View>
                        <View style={estilos.Data}>
                            <Image source={require('../../../../assets/icon_data.png')} style={estilos.iconesData}/>
                            <View style={estilos.dataRegistro}>
                                <Text>Data de registro</Text>
                                <Text>12/05/2024</Text>
                            </View>
                            <View style={estilos.dataAlteracao}>
                                <Text>Data de registro</Text>
                                <Text>12/05/2024</Text>
                            </View>
                            <Image source={require('../../../../assets/icon_relogio.png')} style={estilos.iconesData}/>
                        </View>
                    </View>
                </View>
            </ScrollView>
        </View>

    )
}

const estilos = StyleSheet.create({
    Titulo: {
        color: "#A33F00",
        fontFamily: Fonts.bold,
        fontSize: 30,
    },
    Header: {
        marginBottom: "2%",
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        gap: "5%",
        marginLeft: "2%",
        width: "100%",
    },
    seta: {
        height: 25,
        width: 25,
    },
    NomePatrimonio: {
        fontFamily: Fonts.bold,
        fontSize: 25,
    },
    Main: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
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
        height: "30%",
        borderColor: "#A33F00",
        alignItems: "flex-start",
        justifyContent: "center",
        marginTop: "10%",
        padding: "5%"
    },
    texto: {
        fontSize: 20,
        fontFamily: Fonts.regular,
    },
    Classificacao: {
        borderWidth: 0.7,
        width: "90%",
        height: "25%",
        borderColor: "#A33F00",
        alignItems: "flex-start",
        justifyContent: "center",
        marginTop: "10%",
        padding: "5%",
    },
    tipoClassificacao: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        marginTop: "8%",
    },
    iconeClassificacao: {
        height: 25,
        width: 25
    },
    Atribuicao: {
        borderWidth: 0.7,
        width: "90%",
        height: "20%",
        borderColor: "#A33F00",
        justifyContent: "center",
        alignItems: "flex-start",
        marginTop: "10%",
        padding: "5%",
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
        height: "25%",
        borderColor: "#A33F00",
        alignItems: "flex-start",
        justifyContent: "center",
        marginTop: "10%",
        padding: "5%",
    },
    dataRegistro: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        marginTop: "8%",
    },
    dataAlteracao: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        marginTop: "8%",
    },
    iconesData: {
        height: 25,
        width: 25
    },
})