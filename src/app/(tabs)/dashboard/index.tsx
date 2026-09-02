import {View, Text, StyleSheet, FlatList} from "react-native";
import {Colors, Title, TitleLabel} from "../../../constants/theme";
import CardUnidade from "../../../components/card_unidade/card_unidade";
import {Ionicons} from "@expo/vector-icons";
import AuroraButton from "../../../components/aurora_button/aurora_button";
import {useEffect, useState} from "react";
import { useCardUnidade } from "../../../hooks/useCardUnidade";


export default function Dashboard() {

        const {BuscarItem, BuscarSetor, BuscarItemUnidade} = useCardUnidade()
    
        const Item = BuscarItem
        const Setor = BuscarSetor
        const Unidade = BuscarItemUnidade
    
        const dadosSetor = Setor.map
        (setor => {
            const quantosItemNoSetor = Item.filter(item => item.idSetor == setor.setorId).length
            return {
                UnidadeSetor: setor.unidadeId,
                Quantidade: quantosItemNoSetor
            }
        })
    
        const dadosDashboard = Unidade.map
        (unidade => {
            const ItemNaUnidade = dadosSetor.filter(d => d.UnidadeSetor === unidade.idUnidade)
            return{
                id: unidade.idUnidade,
                nome: unidade.nome,
                quatidadeItem: ItemNaUnidade.reduce(
                (total, i) => total + i.Quantidade,
                0)
            }
        })

    return (
        <View style={styles.container}>

            <View style={styles.cima}>

                <View>
                    <Text style={styles.titulo}>
                        Bem-vindo João
                    </Text>

                    <Text style={styles.subtitle}>
                        Acompanhe a distribuição e valor dos seus
                        patrimônios entre as unidades
                    </Text>
                </View>


                <View style={styles.card}>

                    <View>
                        <Text style={styles.unidade_card}>
                            Total Unidades
                        </Text>
                    </View>

                    <View style={styles.total_itens_box}>

                        <Ionicons
                            name="cube"
                            color={Colors.branco}
                            size={20}
                        />

                        <Text style={styles.itens_card}>
                            itens
                        </Text>

                    </View>

                </View>


                <View>

                    <Text style={styles.section_text}>
                        Nossas Unidades
                    </Text>
                    {dadosDashboard.map((unidade)=> (
                    <CardUnidade
                        id={unidade.id}
                        nome={unidade.nome}
                        quantidade={unidade.quatidadeItem}
                        color={Colors.laranja_btn}
                        icon="construct"
                    />
                        ))}
                </View>

            </View>


            <AuroraButton
                onPress={() => {}}
                text="Adicionar nova unidade"
            />

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

        }
    }
)