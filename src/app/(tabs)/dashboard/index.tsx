import {View, Text, StyleSheet, FlatList} from "react-native";
import {Colors, Title, TitleLabel} from "../../../constants/theme";
import CardUnidade from "../../../components/card_unidade/card_unidade";

export default function Dashboard() {

    // const ordens = [
    //     {
    //         id: "1",
    //         numero: "OS-001",
    //         status: "Aberta",
    //         titulo: "Vazamento hidráulico no Bloco B",
    //         descricao:
    //             "Há um vazamento constante de água por baixo da pia do banheiro masculino do segundo andar...",
    //     },
    //     {
    //         id: "2",
    //         numero: "OS-002",
    //         status: "Em Andamento",
    //         titulo: "Computador sem internet",
    //         descricao:
    //             "O computador do laboratório 4 não está conseguindo acessar a internet.",
    //     },
    //     {
    //         id: "3",
    //         numero: "OS-003",
    //         status: "Concluída",
    //         titulo: "Projetor queimado",
    //         descricao:
    //             "Foi realizada a troca da lâmpada do projetor.",
    //     },
    //     {
    //         id: "4",
    //         numero: "OS-003",
    //         status: "Concluída",
    //         titulo: "Projetor queimado",
    //         descricao:
    //             "Foi realizada a troca da lâmpada do projetor.",
    //     },
    //     {
    //         id: "5",
    //         numero: "OS-003",
    //         status: "Concluída",
    //         titulo: "Projetor queimado",
    //         descricao:
    //             "Foi realizada a troca da lâmpada do projetor.",
    //     },
    //     {
    //         id: "6",
    //         numero: "OS-003",
    //         status: "Concluída",
    //         titulo: "Projetor queimado",
    //         descricao:
    //             "Foi realizada a troca da lâmpada do projetor.",
    //     },
    //     {
    //         id: "7",
    //         numero: "OS-003",
    //         status: "Concluída",
    //         titulo: "Projetor queimado",
    //         descricao:
    //             "Foi realizada a troca da lâmpada do projetor.",
    //     },
    //     {
    //         id: "8",
    //         numero: "OS-003",
    //         status: "Concluída",
    //         titulo: "Projetor queimado",
    //         descricao:
    //             "Foi realizada a troca da lâmpada do projetor.",
    //     },
    // ];

    return (

        <View style={styles.container}>
            {/*<View>*/}
            {/*    <Text style={styles.titulo}>Bem-vindo João</Text>*/}
            {/*    <Text style={styles.subtitle}>Acompanhe a distribuição e valor dos seus*/}
            {/*        patrimônios entre as unidades</Text>*/}
            {/*</View>*/}
            {/*<View style={styles.card}>*/}
            {/*    <Text style={styles.titulo_card}>Unidade com mais patrimônios:</Text>*/}
            {/*    <Text style={styles.unidade_card}>Unidade Central</Text>*/}
            {/*    <Text style={styles.itens_card}>154 itens</Text>*/}
            {/*</View>*/}
            {/*<View>*/}
            {/*    <Text>Nossas Unidades</Text>*/}
            {/*    <CardUnidade></CardUnidade>*/}
            {/*    <FlatList data={ordens} renderItem={() => CardUnidade()} />*/}
            {/*</View>*/}
        </View>
    );
}

const styles = StyleSheet.create(
    {
        container: {
            padding: 20
        },

        titulo: {
            ...Title,
        },

        subtitle: {
            ...TitleLabel,
            color: Colors.marrom_claro,
        },

        titulo_card: {
            ...Title,
            fontSize: 25,
            color: Colors.marrom_escuro,
        },

        unidade_card: {
            ...Title,
            color: Colors.marrom_escuro,
        },

        itens_card: {
            ...TitleLabel,
        },

        card: {
            backgroundColor: Colors.laranja_btn,
            borderRadius: 8,
            padding: 20,
        }
    }
)