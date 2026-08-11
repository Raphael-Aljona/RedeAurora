import {View, Text, TextInput, StyleSheet} from "react-native";
import AuroraButton from "../../components/aurora_button/aurora_button";
import {navigate} from "expo-router/build/global-state/routing";
import {useRouter} from "expo-router";
import React from "react";

export default function Login(){

    const router = useRouter();

    function acessar() {
        router.push("/listagem_item")
    }

    return (
        <View>
            <View style={estilos.container}>
                <Text>Login</Text>
                <Text>Acesse sua conta para gerenciar ativos</Text>
                <Text>E-mail</Text>
                <TextInput>Digite seu e-mail</TextInput>
                <Text>Senha</Text>
                <TextInput>Digite sua Senha</TextInput>
            <AuroraButton text="Pressione" onPress={acessar} />
            </View>
        </View>
)
}
const estilos = StyleSheet.create({
    container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
    main: {
        width: "100%",
        height: "100%"
    }
})