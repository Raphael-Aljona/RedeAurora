import {View, Text, StyleSheet} from "react-native";
import {Icon, IconProps} from "expo-router/build/native-tabs";
import {Colors, Title, TitleLabel} from "../../constants/theme";
import {Ionicons} from "@expo/vector-icons";
import React from "react";

type CardProps = {
    onPress?: () => void;
    color: string;
    icon: keyof typeof Ionicons.glyphMap;
}

export default function CardUnidade ({icon, color, onPress}:CardProps) {
    return (
        <View style={styles.card}>
            <View style={styles.card_direita}>

                <View style={styles.icon}>
                    <Ionicons
                        name={icon}
                        color={color}
                        size={25}
                    />
                </View>
                <View>
                    <Text style={styles.title_card}>
                        Unidade Norte
                    </Text>
                    <Text style={styles.subtitle_card}>42 itens</Text>
                </View>
            </View>
            <Ionicons
                name='chevron-forward'
                size={25}
                color={Colors.laranja_btn}
            />
        </View>
    );
}

const styles = StyleSheet.create(
    {
        card:{
            width: "100%",
            borderWidth: 1,
            borderColor: "#FFF7ED",
            borderRadius: 10,
            backgroundColor: Colors.branco,
            padding: 20,

            boxShadow: "0 4px 20px -2px rgba(232, 101, 26, 0.08), 0 0 3px 0 rgba(0, 0, 0, 0.02)",

            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
        },

        title_card: {
            ...Title,
            fontSize: 20,
        },

        subtitle_card: {
          ...TitleLabel,
            fontSize: 14,
            color: Colors.cinza,
        },

        icon: {
            backgroundColor: "#FFF7ED",
            padding: 10,
            borderRadius: 1000,
            height: 50,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
        },

        card_direita: {
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            gap: 20
        }
    }
)