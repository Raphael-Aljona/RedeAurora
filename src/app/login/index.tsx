import { Image, Pressable, StyleSheet, Text, TextInput, TouchableOpacity, useWindowDimensions, View } from "react-native";
import { Button, ButtonText, Colors, Title, TitleLabel } from "../../constants/theme";
import { useRouter } from "expo-router";
import React from "react";


const router = useRouter();

function acessar(){
    router.push("/lista")
}

export default function Login(){
    return (
        <View>
            <View style={estilos.container}>
                <Text>Login</Text>
                <Text>Acesse sua conta para gerenciar ativos</Text>
                <Text>E-mail</Text>
                <TextInput>Digite seu e-mail</TextInput>
                <Text>Senha</Text>
                <TextInput>Digite sua Senha</TextInput>
                <TouchableOpacity onPress={acessar}>
          <Text>Acessar o sistema</Text>
        </TouchableOpacity>
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