import React, { useState } from "react";
import { Platform, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import { Colors, Fonts, TextoInput, Title, TitleLabel } from "../../../constants/theme";
import DateTimePicker from "@react-native-community/datetimepicker";
import SelectDropdown from "react-native-select-dropdown";
import AuroraButton from "../../../components/aurora_button/aurora_button";


export default function CriarItem() {

    // Adicionando constantes para o uso do select dropdown
    const [condicao, setCondicao] = useState("");
    // Opções para o SelectDropdown
    const opcoesCondicao = [
        "Novo",
        "Necessita Reparo",
        "Quebrado",
    ];
    const [tipo, setTipo] = useState("");
    // Opções para o SelectDropdown
    const opcoesTipo = [
        "Eletrônico",
        "Móvel",
        "Ferramenta",
        "Material de construção"
    ];
    const [setor, setSetor] = useState("");
    // Opções para o SelectDropdown
    const opcoesSetor = [
        "Eletrônico",
        "Móvel",
        "Ferramenta",
        "Material de construção"
    ];
    const [usuario, setUsuario] = useState("");
    //Opções para o SelectDropdown
    const opcoesUsuario = [
        "Raphael",
        "Vitor",
        "João",
        "Diego",
        "Guilherme"
    ];

    // Fim das opções do SelectDropdown

    // Constante e condicionais para o uso do DateTimePicker
    const [dataEntrada, setDataEntrada] = useState(new Date());
    const [mostrarDatePicker, setMostrarDatePicker] = useState(false);

    const onChangeData = (event: any, dataSelecionada?: Date) => {
        if (Platform.OS === "android") {
            setMostrarDatePicker(false);
        }
        if (dataSelecionada) {
            setDataEntrada(dataSelecionada);
        }
    };
    // Fim das condicionais do DateTimePicker




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

                {/* DateTimePicker configurado */}
                <TouchableOpacity style={styles.input} onPress={() => setMostrarDatePicker(true)}>
                    <Text style={styles.inputTexto}>Data de entrada: {dataEntrada.toLocaleDateString("pt-br")}

                    </Text>
                </TouchableOpacity>
                {mostrarDatePicker && (

                    <DateTimePicker
                        value={dataEntrada}
                        mode="date"
                        display={Platform.OS === "ios" ? "inline" : "default"}
                        onChange={onChangeData} />
                )}
                {/* Configuração do DateTimePicker finalizada */}

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
                    data={opcoesTipo}
                    onSelect={(selectedItem) => setTipo(selectedItem)}
                    renderButton={(selectedItem, isOpened) => (
                        <View style={styles.dropdownButtonStyle}>
                            <Text
                                style={[
                                    styles.inputTexto,
                                    !selectedItem && { color: "#9E9E9E" },
                                ]}
                            >
                                {selectedItem || "Tipo do item *"}
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
                    data={opcoesSetor}
                    onSelect={(selectedItem) => setSetor(selectedItem)}
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
                <SelectDropdown
                    data={opcoesUsuario}
                    onSelect={(selectedItem) => setUsuario(selectedItem)}
                    renderButton={(selectedItem, isOpened) => (
                        <View style={styles.dropdownButtonStyle}>
                            <Text
                                style={[
                                    styles.inputTexto,
                                    !selectedItem && { color: "#9E9E9E" },
                                ]}
                            >
                                {selectedItem || "Usuário responsável *"}
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
