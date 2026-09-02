import { View, Text, StyleSheet, FlatList, ScrollView } from "react-native";
import { Colors, Title, TitleLabel } from "../../../constants/theme";
import CardUnidade from "../../../components/card_unidade/card_unidade";
import { Ionicons } from "@expo/vector-icons";
import AuroraButton from "../../../components/aurora_button/aurora_button";
import { useEffect, useRef, useState } from "react";
import { getAllUnidades, getQtdItens } from "../../../services/unidades_service";
import { Unidade } from "../../../@types/setor";
import { useDashboard } from "../../../hooks/useDashboard";

export default function Dashboard() {

    const { unidades, getTodasUnidades } = useDashboard();

    const flatListRef = useRef(null);

    const TotalItens = unidades.reduce(
        (total, unidade) => total + unidade.quantidade_itens,
        0
    );

    return (
        <View style={styles.container}>
            <View style={styles.cima}>
                <View>
                    <Text style={styles.titulo}>Bem-vindo João</Text>
                    <Text style={styles.subtitle}>Acompanhe a distribuição e valor dos seus
                        patrimônios entre as unidades</Text>
                </View>

                <View style={styles.card}>
                    <View>
                        <Text style={styles.unidade_card}>Total Unidades</Text>

                    </View>
                    <View style={styles.total_itens_box}>
                        <Ionicons name="cube" color={Colors.branco} size={20}></Ionicons>
                        <Text style={styles.itens_card}>{TotalItens} itens</Text>
                    </View>
                </View>
                <View>
                    <Text style={styles.section_text}>Nossas Unidades</Text>

                    <FlatList
                        style={styles.lista}
                        ref={flatListRef}
                        scrollEnabled={true} data={unidades}
                        keyExtractor={(item) => item.id_setor.toString()}
                        renderItem={(item) =>
                            <CardUnidade name={item.item.nome_setor} color={Colors.laranja_btn}
                                icon={'construct'} qtd={item.item.quantidade_itens}
                                id={item.item.id_setor}></CardUnidade>} />
                </View>


            </View>
            <AuroraButton onPress={() => {
            }} text="Adicionar nova unidade"></AuroraButton>
        </View>
    );
}

const styles = StyleSheet.create(
    {
        container: {
            padding: 20,
            backgroundColor: Colors.backgroundColor,
            display: "flex",
            justifyContent: "space-between",
            height: "100%",
        },

        titulo: {
            ...Title,
        },

        cima: {
            display: "flex",
            gap: 20
        },

        subtitle: {
            ...TitleLabel,
            color: Colors.cinza,
        },

        titulo_card: {
            ...Title,
            fontSize: 20,
            color: Colors.branco,
        },

        unidade_card: {
            ...Title,
            color: Colors.branco,
        },

        itens_card: {
            ...TitleLabel,
            color: Colors.branco
        },

        total_itens_box: {
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            flexWrap: "wrap",
            justifyContent: "center",
            width: "60%",
            gap: 10,
            borderRadius: 12,
            backgroundColor: "rgba(255, 255, 255, 0.10)",
            padding: 5,
            borderColor: "rgba(255, 255, 255, 0.20)",
            borderWidth: 1,
        },

        card: {
            backgroundColor: Colors.laranja_btn,
            borderRadius: 8,
            padding: 20,
            gap: 5
        },

        section_text: {
            ...Title,
        },

        lista: {
            height: 340,
        }
    }
)