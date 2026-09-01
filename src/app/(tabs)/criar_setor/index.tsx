import React, { useState } from "react";
import { Platform, StyleSheet, Text, TextInput, TouchableOpacity, View, Alert, Keyboard } from "react-native";
import { Colors, Fonts, TextoInput, Title, TitleLabel } from "../../../constants/theme";
import AuroraButton from "../../../components/aurora_button/aurora_button";
import { api } from "../../../services/api";

export default function CriarSetor() {
    const [nomeSetor, setNomeSetor] = useState("");
    const [carregando, setCarregando] = useState(false);

    const handleSalvar = async () => {
        if (!nomeSetor || nomeSetor.trim().length === 0) {
            Alert.alert("Atenção", "Por favor, preencha o nome do setor.");
            return;
        }

        setCarregando(true);

        try {
            
            await api.post('/Setor', { nome: nomeSetor });

            Alert.alert("Sucesso", `Setor "${nomeSetor}" criado com sucesso!`, [
                { text: "OK", onPress: () => {
                    setNomeSetor("");
                }}
            ]);

        } catch (error) {
            Alert.alert("Erro", "Não foi possível cadastrar o setor. Tente novamente.");
            console.error(error);
        } finally {
            setCarregando(false);
        }
    };

    return (
        <View style={{ flex: 1, backgroundColor: "#FFF8F6" }}>
            <Text style={styles.titulo}>Cadastro de Setor</Text>
            <View style={styles.main}>
                <TextInput 
                    style={styles.input} 
                    placeholder="Nome do Setor *" 
                    placeholderTextColor={Colors.corTextoSecundario}
                    value={nomeSetor}
                    onChangeText={setNomeSetor}
                />

                <AuroraButton 
                    onPress={handleSalvar}
                    text={carregando ? "Salvando..." : "Salvar setor"}
                />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    titulo: {
        ...Title,
        marginTop: "5%",
        marginLeft: "14%",
    },
    input: {
        borderWidth: 1.5,
        borderColor: Colors.inputBorder,
        borderRadius: 10,
        padding: 15,
        height: "40%",
        ...TextoInput,
    }, 
    main: {
        justifyContent: "space-between",
        height: "30%",
        width: "85%",
        marginTop: "10%",
        marginLeft: "7.5%",
        marginRight: "7.5%",
        backgroundColor: 'white',
        borderWidth: 2,
        borderColor: 'gray',
        borderRadius: 15,
        padding: 20,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 3
    },
});