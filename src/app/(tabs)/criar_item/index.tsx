import React, { useState } from "react";
import { Alert, StyleSheet, Text, TextInput, View } from "react-native";
import SelectDropdown from "react-native-select-dropdown";
import { criarItem } from "../../../@types/criarItem";
import AuroraButton from "../../../components/aurora_button/aurora_button";
import { Colors, TextoInput, Title, TitleLabel } from "../../../constants/theme";
import { useCriarItem } from "../../../hooks/useCriarItem";
import { useSetor } from "../../../hooks/useSetor";

export default function CriarItem() {
    const setor = useSetor();
    const { criarItem } = useCriarItem();

    const opcoesCondicao = ["Bom", "Danificado"];

    const [codigo, setCodigo] = useState("");
    const [nomeItem, setNomeItem] = useState("");
    const [descricao, setDescricao] = useState("");
    const [condicao, setCondicao] = useState("");
    const [setorSelecionado, setSetorSelecionado] = useState<number | string>("");

    async function handleSalvar() {
        if (
            !nomeItem.trim() ||
            !descricao.trim() ||
            !codigo.trim() ||
            !condicao.trim()
        ) {
            Alert.alert("⚠ Atenção", "Preencha todos os campos obrigatórios (*).");
            return;
        }

        const novoItem: criarItem = {
            nome: nomeItem,
            id_setor: Number(setorSelecionado),
            descricao: descricao,
            condicao: condicao,
            codigo_patrimonio: codigo,
        };

        const sucesso = await criarItem(novoItem);

        if (sucesso) {
            setNomeItem("");
            setSetorSelecionado("");
            setDescricao("");
            setCondicao("");
            setCodigo("");

            Alert.alert("Sucesso", "Novo item adicionado com sucesso!");
        }
    }

    return (
        <View style={{ flex: 1, backgroundColor: "#FFF8F6" }}>
            <Text style={styles.titulo}>Cadastro de Patrimônio</Text>
            <Text style={styles.subTitulo}>
                Preencha os dados abaixo para registrar um novo item.
            </Text>

            <View style={styles.main}>
                <TextInput
                    style={styles.input}
                    placeholder="Código do Patrimônio *"
                    value={codigo}
                    onChangeText={setCodigo}
                />
                <TextInput
                    style={styles.input}
                    placeholder="Nome do Item *"
                    value={nomeItem}
                    onChangeText={setNomeItem}
                />
                <TextInput
                    style={styles.input}
                    placeholder="Descrição do Patrimônio *"
                    value={descricao}
                    onChangeText={setDescricao}
                />

                {/* SelectDropdown de Condição Ajustado */}
                <SelectDropdown
                    data={opcoesCondicao}
                    onSelect={(selectedItem: string) => setCondicao(selectedItem)}
                    renderButton={(selectedItem) => (
                        <View style={styles.dropdownButtonStyle}>
                            <Text
                                style={[
                                    styles.inputTexto,
                                    !selectedItem && { color: "#9E9E9E" },
                                ]}
                            >
                                {selectedItem || "Condição do item *"}
                            </Text>
                        </View>
                    )}
                    renderItem={(item, index, isSelected) => (
                        <View
                            style={[
                                styles.dropdownItemStyle,
                                isSelected && { backgroundColor: "#E0E0E0" },
                            ]}
                        >
                            <Text style={styles.inputTexto}>{item}</Text>
                        </View>
                    )}
                    showsVerticalScrollIndicator={false}
                    dropdownStyle={styles.dropdownMenuStyle}
                />

                {/* SelectDropdown de Setores */}
                <SelectDropdown
                    data={setor}
                    onSelect={(selectedItem) => {
                        setSetorSelecionado(selectedItem.setorId)
                    }}
                    renderButton={(selectedItem) => (
                        <View style={styles.dropdownButtonStyle}>
                            <Text
                                style={[
                                    styles.inputTexto,
                                    !selectedItem && { color: "#9E9E9E" },
                                ]}
                            >
                                {selectedItem ? selectedItem.nome : "Setor *"}
                            </Text>
                        </View>
                    )}
                    renderItem={(item, index, isSelected) => (
                        <View
                            style={[
                                styles.dropdownItemStyle,
                                isSelected && { backgroundColor: "#E0E0E0" },
                            ]}
                        >
                            <Text style={styles.inputTexto}>{item.nome || item.descricao}</Text>
                        </View>
                    )}
                    showsVerticalScrollIndicator={false}
                    dropdownStyle={styles.dropdownMenuStyle}
                />

                <AuroraButton onPress={handleSalvar} text="Salvar patrimônio" />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    titulo: {
        ...Title,
        marginTop: "5%",
        marginLeft: "3%",
    },
    subTitulo: {
        ...TitleLabel,
        marginLeft: "3%",
    },
    main: {
        justifyContent: "space-between",
        height: "80%",
        width: "94%",
        marginTop: "5%",
        marginLeft: "3%",
        marginRight: "3%",
        backgroundColor: 'white',
        borderWidth: 2,
        borderColor: 'gray',
        borderRadius: 15,
        padding: 20
    },
    input: {
        borderWidth: 1.5,
        borderColor: Colors.inputBorder,
        borderRadius: 10,
        padding: 15,
        height: "9%",
        ...TextoInput,
    },
    inputTexto: {
        ...TextoInput,
        flex: 1,
    },
    dropdownButtonStyle: {
        height: "9%",
        borderRadius: 10,
        padding: 15,
        borderWidth: 1.5,
        borderColor: Colors.inputBorder,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    dropdownButtonTxtStyle: {
        flex: 1,
        fontSize: 18,
        fontWeight: '500',
        color: '#151E26',
    },
    dropdownButtonArrowStyle: {
        fontSize: 28,
    },
    dropdownMenuStyle: {
        backgroundColor: '#E9ECEF',
        borderRadius: 10,
    },
    dropdownItemStyle: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 15,
    },
    dropdownItemTxtStyle: {
        flex: 1,
        fontSize: 18,
        fontWeight: '500',
        color: '#151E26',
    },
});