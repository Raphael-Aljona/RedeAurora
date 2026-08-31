import React, { useState } from "react";
import { Alert, Platform, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import { Colors, Fonts, TextoInput, Title, TitleLabel } from "../../../constants/theme";
import SelectDropdown from "react-native-select-dropdown";
import AuroraButton from "../../../components/aurora_button/aurora_button";
import { useSetor } from "../../../hooks/useSetor";
import { useCriarItem } from "../../../hooks/useCriarItem";
import { criarItem } from "../../../@types/criarItem";


export default function CriarItem() {
    const setor = useSetor();
    const { criarItem } = useCriarItem();
    const opcoesCondicao = [
        { nome: "Bom" },
        { nome: "Danificado" },
        { nome: "Inutilizável" }
    ];
    const [codigo, setCodigo] = useState("");
    const [nomeItem, setNomeItem] = useState("");
    const [descricao, setDescricao] = useState("");
    const [setorSelecionado, setSetorSelecionado] = useState<string>("");
    const [condicao, setCondicao] = useState("");

    async function handleSalvar() {
        if (!nomeItem.trim() || !descricao.trim() || !codigo.trim() || !condicao.trim() || !setorSelecionado) {
            Alert.alert("⚠ Atenção", "Preencha todos os campos obrigatórios (*).");
            return;
        }

        // Monta o objeto final para mandar pro hook
        const novoItem: criarItem = {
            nome: nomeItem,
            id_setor: Number(setorSelecionado),
            descricao: descricao,
            condicao: condicao,
            codigo_patrimonio: codigo,
        };

        console.log(novoItem);

        const sucesso = await criarItem(novoItem);

        // Limpa os campos se deu certo
        if (sucesso) {
            setNomeItem("");
            setSetorSelecionado("");
            setDescricao("");
            setCondicao("");
            setCodigo("");

            Alert.alert("Novo item adicionado");
        }
    }


    return (
        <View style={{ flex: 1, backgroundColor: "#FFF8F6" }}>
            <Text style={styles.titulo}>
                Cadastro de Patrimônio
            </Text>
            <Text style={styles.subTitulo}>
                Preencha os dados abaixo para registrar um novo
                item.
            </Text>

            <View style={styles.main}>
                <TextInput style={styles.input} placeholder="Código do Patrimônio *" />
                <TextInput style={styles.input} placeholder="Descrição do Patrimônio *" />


                {/* Inserindo o SelectDropdown para a escolha da condição do item  */}
                <SelectDropdown
                    data={opcoesCondicao}
                    onSelect={(selectedItem) => setCondicao(selectedItem)}
                    renderButton={(selectedItem, isOpened) => (
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
                                styles.inputTexto,
                                isSelected && { backgroundColor: "#E0E0E0" },
                            ]}
                        >
                            <Text style={styles.inputTexto && { padding: 10 }}>{item}</Text>
                        </View>
                    )}
                    showsVerticalScrollIndicator={false}
                    dropdownStyle={styles.dropdownMenuStyle}
                />

                <SelectDropdown
                    data={setor}
                    onSelect={(selectedItem) => setSetorSelecionado(selectedItem)}
                    renderButton={(selectedItem, isOpened) => (
                        <View style={styles.dropdownButtonStyle}>
                            <Text
                                style={[
                                    styles.inputTexto,
                                    !selectedItem && { color: "#9E9E9E" },
                                ]}
                            >
                                {selectedItem || "Setor *"}
                            </Text>
                        </View>
                    )}

                    renderItem={(item, index, isSelected) => (
                        <View
                            style={[
                                styles.inputTexto,
                                isSelected && { backgroundColor: "#E0E0E0" },
                            ]}
                        >
                            <Text style={styles.inputTexto && { padding: 10 }}>{item}</Text>
                        </View>
                    )}
                    showsVerticalScrollIndicator={false}
                    dropdownStyle={styles.dropdownMenuStyle}
                />
                {/* Configuração do SelectDropdown finalizada */}
                <AuroraButton onPress={() => {
                }}
                    text="Salvar patrimônio"></AuroraButton>
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
})