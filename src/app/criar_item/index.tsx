import React, { useState } from "react";
import { Platform, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import { Colors, Fonts, Title, TitleLabel } from "../../constants/theme";
import DateTimePicker from "@react-native-community/datetimepicker";
import SelectDropdown from "react-native-select-dropdown";


export default function CriarItem() {

    // Adicionando constantes e condicionais para o uso do select dropdown
    const [condicao, setCondicao] = useState("");
    // Opções para o SelectDropdown
    const opcoesCondicao = [
        "Novo",
        "Necessita Reparo",
        "Quebrado",
    ];

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
                item.            </Text>

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
                                    styles.dropdownButtonTxtStyle,
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
                            <Text style={styles.dropdownItemTxtStyle}>{item}</Text>
                        </View>
                    )}
                    showsVerticalScrollIndicator={false}
                    dropdownStyle={styles.dropdownMenuStyle}
                />
                {/* Configuração do SelectDropdown finalizada */}
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


    },
    inputTexto: {
       
    },
    dropdownButtonStyle: {
        height: "9%",
        borderRadius: 10,
        borderWidth: 1.5,
        borderColor: Colors.inputBorder,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 15,
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
    dropdownButtonIconStyle: {
        fontSize: 28,
        marginRight: 8,
    },
    dropdownMenuStyle: {
        backgroundColor: '#E9ECEF',
        borderRadius: 8,
    },
    dropdownItemStyle: {
        width: '100%',
        flexDirection: 'row',
        paddingHorizontal: 12,
        justifyContent: 'center',
        alignItems: 'center',
        paddingVertical: 8,
    },
    dropdownItemTxtStyle: {
        flex: 1,
        fontSize: 18,
        fontWeight: '500',
        color: '#151E26',
    },
    dropdownItemIconStyle: {
        fontSize: 28,
        marginRight: 8,
    },
})
