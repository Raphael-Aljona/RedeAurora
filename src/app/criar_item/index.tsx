import React, { useState } from "react";
import { Platform, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import { Colors, Fonts, Title, TitleLabel } from "../../constants/theme";
import DateTimePicker from "@react-native-community/datetimepicker";

export default function CriarItem() {
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
                <TouchableOpacity style={styles.input} onPress={() => setMostrarDatePicker(true)}>
                    <Text style={styles.subTitulo}>Data de entrada: {dataEntrada.toLocaleDateString("pt-br")}

                    </Text>
                </TouchableOpacity>

                <DateTimePicker
                    value={dataEntrada}
                    mode="date"
                    display={Platform.OS === "ios" ? "inline" : "default"}
                    onChange={onChangeData} />
            </View>
        </View>
    )
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


    }
})